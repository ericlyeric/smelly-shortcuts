import { useState } from 'react';
import { SiVisualstudiocode, SiWindowsterminal, SiApple, SiUbuntu } from 'react-icons/si';

const Sidebar = () => {
  const [selected, setSelected] = useState<boolean>(false);

  return (
    <div className="flex-col bg-gray-800 max-w-xs w-16">
      <div className="flex justify-center py-2">
        <span className="text-5xl">👃</span>
      </div>
      <ul className="mt-3">
        <li
          className={`flex justify-center py-3 ${selected ? 'bg-gray-900' : ''} hover:bg-gray-900`}
        >
          <button onClick={() => setSelected(true)}>
            <SiVisualstudiocode className="text-3xl text-sky-600" />
          </button>
        </li>
        <li className="flex justify-center py-3 hover:bg-gray-900">
          <button>
            <SiWindowsterminal className="text-3xl text-lime-500" />
          </button>
        </li>
        <li className="flex justify-center py-3 hover:bg-gray-900">
          <button>
            <SiApple className="text-3xl text-gray-300" />
          </button>
        </li>
        <li className="flex justify-center py-3 hover:bg-gray-900">
          <button>
            <SiUbuntu className="text-3xl text-orange-600" />
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
