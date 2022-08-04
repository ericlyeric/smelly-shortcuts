import { SystemIcons, useSystemContext } from '../context/SystemContext';
import Table from './Table';
import {
  general,
  basicEditing,
  navigation,
  searchAndReplace,
  multiCursorAndSelection,
  richLanguagesEditing,
  editorManagement,
  fileManagement,
  display,
  debug,
  integratedTerminal,
} from '../../data/VSCode/windows';

const VSCode = () => {
  const { system } = useSystemContext();

  return (
    <>
      {system === SystemIcons.WINDOWS ? (
        <div className="flex flex-col flex-wrap h-full max-w-4xl">
          <div className="mx-2 my-1">
            <h2 className="text-gray-300">General</h2>
            <Table data={general} />
          </div>
          <div className="mx-2 my-1">
            <h2 className="text-gray-300">Basic editing</h2>
            <Table data={basicEditing} />
          </div>
          <div className="mx-2 my-1">
            <h2 className="text-gray-300">Navigation</h2>
            <Table data={navigation} />
          </div>
          <div className="mx-2 my-1">
            <h2 className="text-gray-300">Search and replace</h2>
            <Table data={searchAndReplace} />
          </div>
          <div className="mx-2 my-1">
            <h2 className="text-gray-300">Multi-cursor and selection</h2>
            <Table data={multiCursorAndSelection} />
          </div>
          <div className="mx-2 my-1">
            <h2 className="text-gray-300">Rich languages editing</h2>
            <Table data={richLanguagesEditing} />
          </div>
          <div className="mx-2 my-1">
            <h2 className="text-gray-300">Editor management</h2>
            <Table data={editorManagement} />
          </div>
          <div className="mx-2 my-1">
            <h2 className="text-gray-300">File management</h2>
            <Table data={fileManagement} />
          </div>
          <div className="mx-2 my-1">
            <h2 className="text-gray-300">Display</h2>
            <Table data={display} />
          </div>
          <div className="mx-2 my-1">
            <h2 className="text-gray-300">Debug</h2>
            <Table data={debug} />
          </div>
          <div className="mx-2 my-1">
            <h2 className="text-gray-300">Integrated terminal</h2>
            <Table data={integratedTerminal} />
          </div>
        </div>
      ) : null}
    </>
  );
};

export default VSCode;
