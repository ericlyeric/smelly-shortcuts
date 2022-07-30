import * as React from 'react';

export enum KeyboardIcons {
  WINDOWS = 'WINDOWS',
  MAC = 'MAC',
}

interface KeyboardContextProps {
  keyboard: KeyboardIcons;
  setKeyboard: React.Dispatch<React.SetStateAction<KeyboardIcons>>;
}

const KeyboardContext = React.createContext<KeyboardContextProps>({
  keyboard: KeyboardIcons.WINDOWS,
  setKeyboard: () => {},
});

interface KeyboardProviderProps {
  children: React.ReactNode;
}

export const KeyboardProvider = ({ children }: KeyboardProviderProps) => {
  const [keyboard, setKeyboard] = React.useState(KeyboardIcons.WINDOWS);

  return (
    <KeyboardContext.Provider value={{ keyboard, setKeyboard }}>
      {children}
    </KeyboardContext.Provider>
  );
};

export const useKeyboardContext = () => {
  const context = React.useContext(KeyboardContext);
  if (!context) {
    throw new Error('useKeyboardContext must be used within an KeyboardContextProvider');
  }
  return context;
};
