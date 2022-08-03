import React from 'react';
import { SiVisualstudiocode, SiWindowsterminal, SiApple, SiUbuntu } from 'react-icons/si';
import { FaKeyboard, FaDesktop } from 'react-icons/fa';
import { AiFillMacCommand, AiFillWindows } from 'react-icons/ai';
import { FcLinux } from 'react-icons/fc';
import { useShortcutsContext, ShortcutIcons } from '../context/ShortcutsContext';
import { KeyboardIcons, SystemIcons, useSettingsContext } from '../context/SettingsContext';

const Sidebar = () => {
  return (
    <>
      <div className="flex flex-col justify-between bg-gray-800 w-16">
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
        <div className="flex flex-col flex-end">
          <ul className="flex flex-row">
            <li className="peer p-[17px] py-2 text-gray-300 text-3xl hover:bg-gray-900">
              <FaDesktop />
            </li>
            <ul className="hidden peer-hover:flex hover:flex">
              <SidebarSetting
                name={SystemIcons.MAC}
                icon={
                  <AiFillMacCommand className="text-gray-300 text-3xl" title={SystemIcons.MAC} />
                }
                type="system"
              />
              <SidebarSetting
                name={SystemIcons.LINUX}
                icon={<FcLinux className="text-3xl" title={SystemIcons.LINUX} />}
                type="system"
              />
              <SidebarSetting
                name={SystemIcons.WINDOWS}
                icon={
                  <AiFillWindows className="text-sky-700 text-3xl" title={SystemIcons.WINDOWS} />
                }
                type="system"
              />
            </ul>
          </ul>
          <ul className="flex flex-row">
            <li className="peer p-[17px] py-2 text-gray-300 text-3xl hover:bg-gray-900">
              <FaKeyboard />
            </li>
            <ul className="hidden peer-hover:flex hover:flex">
              <SidebarSetting
                name={SystemIcons.WINDOWS}
                icon={
                  <AiFillWindows className="text-sky-700 text-3xl" title={SystemIcons.WINDOWS} />
                }
                type="keyboard"
              />
              <SidebarSetting
                name={SystemIcons.MAC}
                icon={
                  <AiFillMacCommand className="text-gray-300 text-3xl" title={SystemIcons.MAC} />
                }
                type="keyboard"
              />
            </ul>
          </ul>
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
  const { shortcut, setShortcut } = useShortcutsContext();

  return (
    <li
      className={`flex justify-center py-3 cursor-pointer ${
        shortcut === name ? 'bg-gray-900 ' : ''
      } hover:bg-gray-900`}
      onClick={() => setShortcut(name)}
      title={name}
    >
      {icon}
    </li>
  );
};

interface SidebarSettingProps {
  name: SystemIcons | KeyboardIcons;
  icon: React.ReactNode;
  type: 'system' | 'keyboard';
}

const SidebarSetting = ({ name, icon, type }: SidebarSettingProps) => {
  const { settings, setSettings } = useSettingsContext();

  return (
    <li
      className={`flex flex-col z-10 px-[17px] py-2 cursor-pointer ${
        settings[type] === name ? 'bg-gray-600' : 'bg-gray-500'
      }  hover:bg-gray-600`}
      onClick={() => setSettings({ ...settings, [type]: name })}
    >
      {icon}
    </li>
  );
};
