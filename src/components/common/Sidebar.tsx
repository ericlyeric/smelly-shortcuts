import React from 'react';
import { SiVisualstudiocode, SiWindowsterminal, SiApple, SiUbuntu } from 'react-icons/si';
import { FaKeyboard } from 'react-icons/fa';
import { AiFillMacCommand, AiFillWindows } from 'react-icons/ai';
import { useShortcutContext, ShortcutIcons } from '../context/ShortcutContext';
import { KeyboardIcons, useKeyboardContext } from '../context/KeyboardContext';

const Sidebar = () => {
  return (
    <>
      <div className="flex flex-col justify-between bg-gray-800 max-w-xs w-16">
        <div className="flex flex-col">
          <ul>
            <li className="flex justify-center py-3 text-3xl">👃</li>
            <SidebarShortcut
              name={ShortcutIcons.VSCODE}
              icon={
                <SiVisualstudiocode
                  className="text-3xl text-sky-600"
                  title={ShortcutIcons.VSCODE}
                />
              }
            />
            <SidebarShortcut
              name={ShortcutIcons.ZSH}
              icon={
                <SiWindowsterminal className="text-3xl text-lime-500" title={ShortcutIcons.ZSH} />
              }
            />
            <SidebarShortcut
              name={ShortcutIcons.MAC}
              icon={<SiApple className="text-3xl text-gray-300" title={ShortcutIcons.MAC} />}
            />
            <SidebarShortcut
              name={ShortcutIcons.UBUNTU}
              icon={<SiUbuntu className="text-3xl text-orange-600" title={ShortcutIcons.UBUNTU} />}
            />
          </ul>
        </div>
        <div className="flex flex-col">
          <div className="flex justify-center p-3 text-gray-300 text-3xl">
            <FaKeyboard />
          </div>
          <SidebarKeyboard
            name={KeyboardIcons.WINDOWS}
            icon={<AiFillWindows className="text-3xl text-sky-600" title={KeyboardIcons.WINDOWS} />}
          />
          <SidebarKeyboard
            name={KeyboardIcons.MAC}
            icon={<AiFillMacCommand className="text-3xl text-gray-400" title={KeyboardIcons.MAC} />}
          />
        </div>
      </div>
    </>
  );
};

export default Sidebar;

interface SidebarShortcutProps {
  name: ShortcutIcons;
  icon: React.ReactNode;
}

const SidebarShortcut = ({ name, icon }: SidebarShortcutProps) => {
  const { selected, setSelected } = useShortcutContext();

  return (
    <li
      className={`flex justify-center py-3 cursor-pointer ${
        selected === name ? 'bg-gray-900' : ''
      } hover:bg-gray-900`}
      onClick={() => setSelected(name)}
      title={name}
    >
      {icon}
    </li>
  );
};

interface SidebarKeyboardProps {
  name: KeyboardIcons;
  icon: React.ReactNode;
}

const SidebarKeyboard = ({ name, icon }: SidebarKeyboardProps) => {
  const { keyboard, setKeyboard } = useKeyboardContext();

  return (
    <li
      className={`flex justify-center py-3 cursor-pointer ${
        keyboard === name ? 'bg-gray-900' : ''
      } hover:bg-gray-900`}
      onClick={() => setKeyboard(name)}
      title={name}
    >
      {icon}
    </li>
  );
};
