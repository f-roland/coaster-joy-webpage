import React, { createContext, useContext } from "react";
import { Further } from "./Singles";

type SelectedSongContextType = {
  selectedSong: Song;
  setSelectedSong: (song: Song) => void;
};

const SelectedSontContext = createContext<SelectedSongContextType>({
  selectedSong: Further,
  setSelectedSong: () => {},
});

export function SelectedSongProvider(props: { children: React.ReactNode }) {
  const [selectedSong, setSelectedSong] = React.useState<Song>(Further);

  return (
    <SelectedSontContext.Provider value={{ selectedSong, setSelectedSong }}>
      {props.children}
    </SelectedSontContext.Provider>
  );
}

export function useSelectedSong() {
  return useContext(SelectedSontContext);
}
