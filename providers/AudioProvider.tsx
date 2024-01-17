import React from "react";
import { AudioTypeContext, AudioContext } from "../contexts/AudioContext";

type AudioProviderProps = {
  children: JSX.Element | JSX.Element[];
};

function AudioProvider(props: AudioProviderProps) {
  const { children } = props;

  const [allFiles, setAllFiles] = React.useState([]);

  const defaultValue: AudioTypeContext = {
    allFiles,
    setAllFiles,
  };

  return (
    <AudioContext.Provider value={defaultValue}>
      {children}
    </AudioContext.Provider>
  );
}

export default AudioProvider;
