import { ShortcutIcons, useShortcutContext } from '../context/ShortcutContext';
import Description from './Description';
import VSCode from './VSCode';

const Main = () => {
  const { selected } = useShortcutContext();

  return (
    <div className="bg-gray-700 w-full">
      {selected === ShortcutIcons.HOME ? <Description /> : null}
      {selected === ShortcutIcons.VSCODE ? <VSCode /> : null}
    </div>
  );
};

export default Main;
