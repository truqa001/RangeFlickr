import axios from "axios";
import { config } from "../config";
import { fetchData } from "./fetchData";

jest.mock("axios");

describe("#fetchData", () => {
  it("should call to api with correct params", async () => {
    const mockInputValue = "landscape";
    const startPage = 0;
    const photosPerPage = 20;
    const method = "flickr.photos.search";
    const page = startPage;
    const format = "json";
    const extraFields = [
      "date_taken",
      "description",
      "tags",
      "owner_name",
      "url_m",
      "url_n",
      "url_w",
      "url_z",
      "url_c",
      "url_b",
    ].join(",");

    await fetchData({
      inputValue: mockInputValue,
      startPage,
      photosPerPage,
    });

    expect(axios.get).toBeCalledWith(
      `https://api.flickr.com/services/rest/?method=${method}&api_key=${config.API_KEY}&per_page=${photosPerPage}&page=${page}&format=${format}&tags=${mockInputValue}&extras=${extraFields}&nojsoncallback=true`
    );
  });
});
