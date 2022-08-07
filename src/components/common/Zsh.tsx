import { linuxGeneral } from '../../data/zsh/linux';
import { macGeneral } from '../../data/zsh/mac';
import { SystemIcons, useSystemContext } from '../context/SystemContext';
import Table from './Table';

const Zsh = () => {
  const { system } = useSystemContext();

  return (
    <>
      {system === SystemIcons.MAC ? (
        <div className="flex flex-col flex-wrap h-full max-w-4xl m-2">
          <div className="mx-2 my-1">
            <h2 className="text-gray-300">General</h2>
            <Table data={macGeneral} />
          </div>
        </div>
      ) : null}
      {system === SystemIcons.LINUX ? (
        <div className="flex flex-col flex-wrap h-full max-w-4xl m-2">
          <div className="mx-2 my-1">
            <h2 className="text-gray-300">General</h2>
            <Table data={linuxGeneral} />
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Zsh;
