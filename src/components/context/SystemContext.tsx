import * as React from 'react';

export enum SystemIcons {
  MAC = 'MAC',
  LINUX = 'LINUX',
  WINDOWS = 'WINDOWS',
}

interface SystemContextProps {
  system: SystemIcons;
  setSystem: React.Dispatch<React.SetStateAction<SystemIcons>>;
}

const initialState = SystemIcons.MAC;

const SystemContext = React.createContext<SystemContextProps>({
  system: initialState,
  setSystem: () => {},
});

interface SystemProviderProps {
  children: React.ReactNode;
}

export const SystemProvider = ({ children }: SystemProviderProps) => {
  const [system, setSystem] = React.useState(initialState);

  return <SystemContext.Provider value={{ system, setSystem }}>{children}</SystemContext.Provider>;
};

export const useSystemContext = () => {
  const context = React.useContext(SystemContext);
  if (!context) {
    throw new Error('useSystemContext must be used within a SystemProvider');
  }
  return context;
};
