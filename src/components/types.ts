export type FlickrResponse = {
  photos: {
    page: number;
    pages: number;
    perpage: number;
    photo: Photo[];
    total: number;
  };
  stat: string;
};

export type Photo = {
  id: string;
  datetaken: string;
  description: {
    _content: string;
  };
  title: string;
  ownername: string;
  tags: string;
  url_m: string; // 240px
};
