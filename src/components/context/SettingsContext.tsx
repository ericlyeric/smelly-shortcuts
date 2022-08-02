import * as React from 'react';

export enum SystemIcons {
  MAC = 'MAC',
  LINUX = 'LINUX',
  WINDOWS = 'WINDOWS',
}

export enum KeyboardIcons {
  MAC = 'MAC',
  WINDOWS = 'WINDOWS',
}

interface SettingsProps {
  system: SystemIcons;
  keyboard: KeyboardIcons;
}

interface SettingsContextProps {
  settings: SettingsProps;
  setSettings: React.Dispatch<React.SetStateAction<SettingsProps>>;
}

const initialState = {
  system: SystemIcons.MAC,
  keyboard: KeyboardIcons.WINDOWS,
};

const SettingsContext = React.createContext<SettingsContextProps>({
  settings: initialState,
  setSettings: () => {},
});

interface SettingsProviderProps {
  children: React.ReactNode;
}

export const SettingsProvider = ({ children }: SettingsProviderProps) => {
  const [settings, setSettings] = React.useState(initialState);

  return (
    <SettingsContext.Provider value={{ settings, setSettings }}>
      {children}
    </SettingsContext.Provider>
  );
};

export const useSettingsContext = () => {
  const context = React.useContext(SettingsContext);
  if (!context) {
    throw new Error('useSettingsContext must be used within a SettingsProvider');
  }
  return context;
};
