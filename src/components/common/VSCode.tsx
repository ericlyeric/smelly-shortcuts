import { SystemIcons, useSettingsContext } from '../context/SettingsContext';
import { general, basicEditing, navigation, searchAndReplace } from '../../data/VSCode/windows';

const VSCode = () => {
  const {
    settings: { system },
  } = useSettingsContext();

  return (
    <>
      {system === SystemIcons.WINDOWS ? (
        <>
          <h2 className="text-gray-300">General</h2>
          <Table data={general} />

          <h2 className="text-gray-300">Basic Editing</h2>
          <Table data={basicEditing} />

          <h2 className="text-gray-300">Navigation</h2>
          <Table data={navigation} />

          <h2 className="text-gray-300">Search and Replace</h2>
          <Table data={searchAndReplace} />
        </>
      ) : null}
    </>
  );
};

export default VSCode;

interface ShortcutProp {
  keys: Array<string>;
  action: string;
}
interface TableProps {
  data: Array<ShortcutProp>;
}

const Table = ({ data }: TableProps) => {
  return (
    <table className="border-collapse border border-slate-500">
      <tbody className="text-xs text-gray-300">
        {data.map((datum) => {
          return (
            <tr>
              <td>{datum.keys.join('+')}</td>
              <td>{datum.action}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
