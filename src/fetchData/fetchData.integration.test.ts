import { fetchData } from "./fetchData";

const startPage = 0;
const photosPerPage = 20;

describe("#fetchData integration", () => {
  describe.each`
    testCase                         | inputValue
    ${"when normal input"}           | ${"landscape"}
    ${"when having un-encoded char"} | ${"&ui123;"}
  `("$testCase", ({ inputValue }) => {
    it("should response with status ok", async () => {
      const result = await fetchData({
        inputValue,
        startPage,
        photosPerPage,
      });

      expect(result.data.stat).toEqual("ok");
    });
  });
});
