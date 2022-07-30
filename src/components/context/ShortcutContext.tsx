import * as React from 'react';

export enum ShortcutIcons {
  HOME = 'HOME',
  VSCODE = 'VSCODE',
  ZSH = 'ZSH',
  MAC = 'MAC',
  UBUNTU = 'UBUNTU',
}

interface ShortcutContextProps {
  selected: ShortcutIcons;
  setSelected: React.Dispatch<React.SetStateAction<ShortcutIcons>>;
}

const ShortcutContext = React.createContext<ShortcutContextProps>({
  selected: ShortcutIcons.HOME,
  setSelected: () => {},
});

interface ShortcutProviderProps {
  children: React.ReactNode;
}

export const ShortcutProvider = ({ children }: ShortcutProviderProps) => {
  const [selected, setSelected] = React.useState(ShortcutIcons.HOME);

  return (
    <ShortcutContext.Provider value={{ selected, setSelected }}>
      {children}
    </ShortcutContext.Provider>
  );
};

export const useShortcutContext = () => {
  const context = React.useContext(ShortcutContext);
  if (!context) {
    throw new Error('useIconContext must be used within an IconContextProvider');
  }
  return context;
};
