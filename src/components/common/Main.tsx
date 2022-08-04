import { ShortcutIcons, useShortcutsContext } from '../context/ShortcutsContext';
import Description from './Description';
import Mac from './Mac';
import Ubuntu from './Ubuntu';
import VSCode from './VSCode';
import Zsh from './Zsh';

const Main = () => {
  const { shortcut } = useShortcutsContext();

  return (
    <div className="flex flex-wrap bg-gray-700 h-full w-full">
      {shortcut === ShortcutIcons.HOME ? <Description /> : null}
      {shortcut === ShortcutIcons.VSCODE ? <VSCode /> : null}
      {shortcut === ShortcutIcons.ZSH ? <Zsh /> : null}
      {shortcut === ShortcutIcons.MAC ? <Mac /> : null}
      {shortcut === ShortcutIcons.UBUNTU ? <Ubuntu /> : null}
    </div>
  );
};

export default Main;
