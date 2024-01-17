import { createContext } from "react";

export type AudioTypeContext = {
  allFiles: object[];
  setAllFiles: Function;
};

export const AudioContext = createContext({} as AudioTypeContext);
