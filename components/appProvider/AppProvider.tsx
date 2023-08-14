import * as React from "react";
import { NextPage } from "next";
import { BlogRes } from "services/lincoServicesTypes";

interface InitialStateTypes {
  news: BlogRes[];
}
interface AppContextInterface {
  appState: InitialStateTypes | null;
  setAppState: (value: any) => void;
}

interface Props {
  children: React.ReactNode;
}

const AppContext = React.createContext<AppContextInterface | null>(null);

const AppProvider: NextPage<Props> = (props) => {
  const [appState, setAppState] = React.useState(null);

  return (
    <AppContext.Provider value={{ appState, setAppState }}>
      {props.children}
    </AppContext.Provider>
  );
};

export { AppProvider, AppContext };
