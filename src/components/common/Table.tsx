interface ShortcutProp {
  keys: Array<string>;
  action: string;
}
interface TableProps {
  data: Array<ShortcutProp>;
}

const Table = ({ data }: TableProps) => {
  return (
    <table className="border-t border-collapse border-slate-500 w-auto">
      <tbody className="text-xs text-gray-300">
        {data.map((datum, index) => {
          return (
            <tr key={index}>
              <td className="w-28">{datum.keys.join('+')}</td>
              <td className="w-40">{datum.action}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
