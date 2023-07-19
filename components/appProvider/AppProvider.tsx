import * as React from "react";
import { NextPage } from "next";

const AppContext = React.createContext({});

interface Props {
  children: React.ReactNode;
}

const AppProvider: NextPage<Props> = (props) => {
  const initState = {};

  const [appState, setAppState] = React.useState(initState);

  const value = [appState, setAppState];

  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};

export { AppProvider, AppContext };
