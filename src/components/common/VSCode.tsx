import { SystemIcons, useSystemContext } from '../context/SystemContext';
import Table from './Table';
import {
  windowsGeneral,
  windowsBasicEditing,
  windowsNavigation,
  windowsSearchAndReplace,
  windowsMultiCursorAndSelection,
  windowsRichLanguagesEditing,
  windowsEditorManagement,
  windowsFileManagement,
  windowsDisplay,
  windowsDebug,
  windowsIntegratedTerminal,
} from '../../data/vsCode/windows';
import {
  macBasicEditing,
  macDebug,
  macDisplay,
  macEditorManagement,
  macFileManagement,
  macGeneral,
  macIntegratedTerminal,
  macMultiCursorAndSelection,
  macNavigation,
  macRichLanguageEditing,
  macSearchAndReplace,
} from '../../data/vsCode/mac';
import {
  linuxBasicEditing,
  linuxDebug,
  linuxDisplay,
  linuxEditorManagement,
  linuxFileManagement,
  linuxGeneral,
  linuxIntegratedTerminal,
  linuxMultiCursorAndSelection,
  linuxNavigation,
  linuxRichLanguageEditing,
  linuxSearchAndReplace,
} from '../../data/vsCode/linux';

const VSCode = () => {
  const { system } = useSystemContext();

  return (
    <>
      {system === SystemIcons.WINDOWS ? (
        <div className="flex flex-col flex-wrap h-full max-w-4xl m-2">
          <div className="mx-2 my-1">
            <h2 className="text-gray-300">General</h2>
            <Table data={windowsGeneral} />
          </div>
          <div className="mx-2 my-1">
            <h2 className="text-gray-300">Basic editing</h2>
            <Table data={windowsBasicEditing} />
          </div>
          <div className="mx-2 my-1">
            <h2 className="text-gray-300">Navigation</h2>
            <Table data={windowsNavigation} />
          </div>
          <div className="mx-2 my-1">
            <h2 className="text-gray-300">Search and replace</h2>
            <Table data={windowsSearchAndReplace} />
          </div>
          <div className="mx-2 my-1">
            <h2 className="text-gray-300">Multi-cursor and selection</h2>
            <Table data={windowsMultiCursorAndSelection} />
          </div>
          <div className="mx-2 my-1">
            <h2 className="text-gray-300">Rich languages editing</h2>
            <Table data={windowsRichLanguagesEditing} />
          </div>
          <div className="mx-2 my-1">
            <h2 className="text-gray-300">Editor management</h2>
            <Table data={windowsEditorManagement} />
          </div>
          <div className="mx-2 my-1">
            <h2 className="text-gray-300">File management</h2>
            <Table data={windowsFileManagement} />
          </div>
          <div className="mx-2 my-1">
            <h2 className="text-gray-300">Display</h2>
            <Table data={windowsDisplay} />
          </div>
          <div className="mx-2 my-1">
            <h2 className="text-gray-300">Debug</h2>
            <Table data={windowsDebug} />
          </div>
          <div className="mx-2 my-1">
            <h2 className="text-gray-300">Integrated terminal</h2>
            <Table data={windowsIntegratedTerminal} />
          </div>
        </div>
      ) : null}
      {system === SystemIcons.MAC ? (
        <div className="flex flex-col flex-wrap h-full max-w-4xl m-2">
          <div className="mx-2 my-1">
            <h2 className="text-gray-300">General</h2>
            <Table data={macGeneral} />
          </div>
          <div className="mx-2 my-1">
            <h2 className="text-gray-300">Basic editing</h2>
            <Table data={macBasicEditing} />
          </div>
          <div className="mx-2 my-1">
            <h2 className="text-gray-300">Navigation</h2>
            <Table data={macNavigation} />
          </div>
          <div className="mx-2 my-1">
            <h2 className="text-gray-300">Search and replace</h2>
            <Table data={macSearchAndReplace} />
          </div>
          <div className="mx-2 my-1">
            <h2 className="text-gray-300">Multi-cursor and selection</h2>
            <Table data={macMultiCursorAndSelection} />
          </div>
          <div className="mx-2 my-1">
            <h2 className="text-gray-300">Rich languages editing</h2>
            <Table data={macRichLanguageEditing} />
          </div>
          <div className="mx-2 my-1">
            <h2 className="text-gray-300">Editor management</h2>
            <Table data={macEditorManagement} />
          </div>
          <div className="mx-2 my-1">
            <h2 className="text-gray-300">File management</h2>
            <Table data={macFileManagement} />
          </div>
          <div className="mx-2 my-1">
            <h2 className="text-gray-300">Display</h2>
            <Table data={macDisplay} />
          </div>
          <div className="mx-2 my-1">
            <h2 className="text-gray-300">Debug</h2>
            <Table data={macDebug} />
          </div>
          <div className="mx-2 my-1">
            <h2 className="text-gray-300">Integrated terminal</h2>
            <Table data={macIntegratedTerminal} />
          </div>
        </div>
      ) : null}
      {system === SystemIcons.LINUX ? (
        <div className="flex flex-col flex-wrap h-full max-w-4xl m-2">
          <div className="mx-2 my-1">
            <h2 className="text-gray-300">General</h2>
            <Table data={linuxGeneral} />
          </div>
          <div className="mx-2 my-1">
            <h2 className="text-gray-300">Basic editing</h2>
            <Table data={linuxBasicEditing} />
          </div>
          <div className="mx-2 my-1">
            <h2 className="text-gray-300">Navigation</h2>
            <Table data={linuxNavigation} />
          </div>
          <div className="mx-2 my-1">
            <h2 className="text-gray-300">Search and replace</h2>
            <Table data={linuxSearchAndReplace} />
          </div>
          <div className="mx-2 my-1">
            <h2 className="text-gray-300">Multi-cursor and selection</h2>
            <Table data={linuxMultiCursorAndSelection} />
          </div>
          <div className="mx-2 my-1">
            <h2 className="text-gray-300">Rich languages editing</h2>
            <Table data={linuxRichLanguageEditing} />
          </div>
          <div className="mx-2 my-1">
            <h2 className="text-gray-300">Editor management</h2>
            <Table data={linuxEditorManagement} />
          </div>
          <div className="mx-2 my-1">
            <h2 className="text-gray-300">File management</h2>
            <Table data={linuxFileManagement} />
          </div>
          <div className="mx-2 my-1">
            <h2 className="text-gray-300">Display</h2>
            <Table data={linuxDisplay} />
          </div>
          <div className="mx-2 my-1">
            <h2 className="text-gray-300">Debug</h2>
            <Table data={linuxDebug} />
          </div>
          <div className="mx-2 my-1">
            <h2 className="text-gray-300">Integrated terminal</h2>
            <Table data={linuxIntegratedTerminal} />
          </div>
        </div>
      ) : null}
    </>
  );
};

export default VSCode;
