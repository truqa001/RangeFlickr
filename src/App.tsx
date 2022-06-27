import React, { useCallback, useRef, useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Sidebar } from "./components/Sidebar/Sidebar";
import { SearchBar } from "./components/SearchBar/SearchBar";
import { FlickrResponse, Photo } from "./components/types";
import { Separator } from "./components/Separator/Separator";
import InfiniteScroll from "react-infinite-scroll-component";
import { Text } from "./components/Text/Text";
import styled from "styled-components";
import { Spinner } from "./components/Spinner/Spinner";
import { Logo } from "./components/Logo/Logo";
import { fetchData } from "./fetchData/fetchData";
import { CardsList } from "./components/Card/CardsList";

const App = () => {
  const startPage = useRef<number>(0);
  const [data, setData] = useState<FlickrResponse>();
  const [loading, setLoading] = useState<boolean>(false);
  const [errors, setErrors] = useState<any>("");
  const [selectedPhoto, setSelectedPhoto] = useState<Photo>();
  const [inputValue, setInputValue] =
    useState<React.ChangeEvent<HTMLInputElement>["target"]["value"]>("");
  const ERROR_MESSAGE = "Something went wrong. Please try again";

  const getPhotos = useCallback(
    ({
      inputValue,
      isInfiniteScroll,
    }: {
      inputValue: string;
      isInfiniteScroll?: boolean;
    }) => {
      const photosPerPage = 20;

      if (!inputValue) {
        return;
      }

      setLoading(true);

      fetchData({ inputValue, startPage: startPage.current, photosPerPage })
        .then((res) => {
          setLoading(false);

          if (res.status !== 200) {
            setErrors(ERROR_MESSAGE);
          }

          let newData = { ...res.data };
          if (isInfiniteScroll) {
            // expand current photos array if it's infinite scrolling
            const oldPhotos = data ? [...data.photos.photo] : [];
            newData = {
              ...res.data,
              photos: {
                ...res.data.photos,
                photo: [...oldPhotos, ...res.data.photos.photo],
              },
            };
          }

          setData(newData);
          startPage.current += photosPerPage;
        })
        .catch((e) => {
          setErrors(ERROR_MESSAGE);
        });
    },
    [data, startPage]
  );

  const onSidebarClose = useCallback(() => {
    setSelectedPhoto(undefined);
  }, []);

  const reset = useCallback(() => {
    startPage.current = 0;
    onSidebarClose();
    setData(undefined);
  }, [onSidebarClose]);

  let searchInputTimeout = useRef<any>();
  const onSearchChange = useCallback(
    ({ target }: React.ChangeEvent<HTMLInputElement>) => {
      const delayTime = 1000;

      clearTimeout(searchInputTimeout.current);

      // Delay input for 1sec before sending request
      searchInputTimeout.current = setTimeout(() => {
        reset();
        setInputValue(target.value);
        getPhotos({ inputValue: target.value });
      }, delayTime);
    },
    [getPhotos, reset]
  );

  const renderPhotos = () => {
    if (loading && !data) {
      return <Spinner />;
    }
    if (!data) {
      return <Text.Heading>Search your favourite photos</Text.Heading>;
    }

    const {
      photo: photosArray,
      page: currentPage,
      pages: totalPages,
    } = data.photos;

    if (photosArray.length === 0) {
      return (
        <Text.Heading>
          No photos found with keywords "{inputValue}". Please use another
          keywords
        </Text.Heading>
      );
    }
    if (errors) {
      return <Text.Heading>{ERROR_MESSAGE}</Text.Heading>;
    }

    return (
      <InfiniteScroll
        dataLength={photosArray.length || 0}
        next={() => getPhotos({ inputValue, isInfiniteScroll: true })}
        hasMore={currentPage < totalPages || false}
        loader={<Spinner />}
      >
        {photosArray && (
          <CardsList
            photos={photosArray}
            selectedPhoto={selectedPhoto}
            setSelectedPhoto={setSelectedPhoto}
          />
        )}
      </InfiniteScroll>
    );
  };

  return (
    <div className="App" style={{ width: "100%" }}>
      <Header>
        <Logo style={{ marginRight: 8 }} />
        <SearchBar onChange={onSearchChange} />
      </Header>

      <Separator style={{ margin: "35px 0" }} />

      {renderPhotos()}
      {selectedPhoto && (
        <Sidebar photoInfo={selectedPhoto} onClose={onSidebarClose} />
      )}
    </div>
  );
};

const Header = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding: 10px;
`;

export default App;
