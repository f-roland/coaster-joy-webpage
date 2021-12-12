declare enum STORES {
  ITUNES = "iTunes",
  SPOTIFY = "Spotify",
  YOUTUBE = "YouTube",
}

declare enum SONGS {
  LifeInABox = "Life In A Box",
  Further = "Further",
}

declare type SongLink = {
  store: STORE;
  url: string;
};

declare interface Song {
  cover: string;
  title: Songs;
  links: SongLink[];
}
