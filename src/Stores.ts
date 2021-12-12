import { appleLogo, spotifyLogo, youtubeLogo } from "./assets";

enum STORES {
  ITUNES = "iTunes",
  SPOTIFY = "Spotify",
  YOUTUBE = "YouTube",
}

export const ITUNES = STORES.ITUNES;
export const SPOTIFY = STORES.SPOTIFY;
export const YOUTUBE = STORES.YOUTUBE;

export const storeIcon = (store: STORES) => {
  switch (store) {
    case STORES.ITUNES:
      return appleLogo;
    case STORES.SPOTIFY:
      return spotifyLogo;
    case STORES.YOUTUBE:
      return youtubeLogo;
  }
};
