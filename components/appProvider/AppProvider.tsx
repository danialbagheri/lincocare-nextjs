import * as React from "react";
import { NextPage } from "next";
import { SocialMediaIconsItemType } from "services/lincoServicesTypes";

export interface InitialStateTypes {
  socialMediaIcons: SocialMediaIconsItemType[];
}
type AppContextInterface = [
  appState?: InitialStateTypes | null,
  setAppState?: (value: any) => void
];

interface Props {
  children: React.ReactNode;
}

const AppContext = React.createContext<AppContextInterface>([]);

const AppProvider: NextPage<Props> = (props) => {
  const initialState = { socialMediaIcons: [] };
  const [appState, setAppState] =
    React.useState<InitialStateTypes>(initialState);

  return (
    <AppContext.Provider value={[appState, setAppState]}>
      {props.children}
    </AppContext.Provider>
  );
};

export { AppProvider, AppContext };
