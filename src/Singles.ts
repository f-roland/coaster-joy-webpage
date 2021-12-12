import { lifeInABoxCover, furtherCover } from "./assets";
import { ITUNES, SPOTIFY, YOUTUBE } from "./Stores";

export const getSong = (song: SONGS) => {
  return Singles.find((s) => s.title === song);
};

enum SONGS {
  LifeInABox = "Life In A Box",
  Further = "Further",
}

export const LifeInABox: Song = {
  cover: lifeInABoxCover,
  title: SONGS.LifeInABox,
  links: [
    {
      store: ITUNES,
      url: "https://music.apple.com/fr/album/life-in-a-box/1565811507?i=1565811512&l=en",
    },
    {
      store: SPOTIFY,
      url: "https://open.spotify.com/track/7lTdhm2DJw1ED0tDvHZDln?si=3Z8Ru6OuS4uBg-qJSh-TSg",
    },
    {
      store: YOUTUBE,
      url: "https://youtu.be/hCZyTEvJ_3I",
    },
  ],
};

export const Further: Song = {
  cover: furtherCover,
  title: SONGS.Further,
  links: [
    {
      store: ITUNES,
      url: "https://geo.music.apple.com/fr/album/_/1598983315?i=1598983317&mt=1&app=music&ls=1",
    },
    {
      store: SPOTIFY,
      url: "https://open.spotify.com/track/5fTjzG2ZQrzDJkP5QjqXc9",
    },
    { store: YOUTUBE, url: "https://www.youtube.com/watch?v=otZelqaoN8o" },
  ],
};

export const Singles: Song[] = [Further, LifeInABox];
