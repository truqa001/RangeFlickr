import axios from "axios";
import { config } from "../config";

export const fetchData = ({
  inputValue,
  startPage,
  photosPerPage,
}: {
  inputValue: string;
  startPage: number;
  photosPerPage: number;
}) => {
  const method = "flickr.photos.search";
  const page = startPage;
  const format = "json";
  const extraFields = [
    "date_taken",
    "description",
    "tags",
    "owner_name",
    "url_m",
  ].join(",");

  return axios.get(
    [
      `https://api.flickr.com/services/rest/`,
      `?method=${method}`,
      `&api_key=${config.API_KEY}`,
      `&per_page=${photosPerPage}`,
      `&page=${page}`,
      `&format=${format}`,
      `&tags=${encodeURIComponent(inputValue)}`,
      `&extras=${extraFields}`,
      `&nojsoncallback=true`,
    ].join("")
  );
};
