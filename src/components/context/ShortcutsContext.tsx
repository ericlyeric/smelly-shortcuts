import * as React from 'react';

export enum ShortcutIcons {
  HOME = 'HOME',
  VSCODE = 'VSCODE',
  ZSH = 'ZSH',
  MAC = 'MAC',
  UBUNTU = 'UBUNTU',
}

interface ShortcutsContextProps {
  shortcut: ShortcutIcons;
  setShortcut: React.Dispatch<React.SetStateAction<ShortcutIcons>>;
}

const initialState = ShortcutIcons.HOME;

const ShortcutsContext = React.createContext<ShortcutsContextProps>({
  shortcut: initialState,
  setShortcut: () => {},
});

interface ShortcutsProviderProps {
  children: React.ReactNode;
}

export const ShortcutsProvider = ({ children }: ShortcutsProviderProps) => {
  const [shortcut, setShortcut] = React.useState(initialState);

  return (
    <ShortcutsContext.Provider value={{ shortcut, setShortcut }}>
      {children}
    </ShortcutsContext.Provider>
  );
};

export const useShortcutsContext = () => {
  const context = React.useContext(ShortcutsContext);
  if (!context) {
    throw new Error('useShortcutsContext must be used within an ShortcutsProvider');
  }
  return context;
};
