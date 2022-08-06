import { captureScreen, desktop } from '../../data/ubuntu/data';
import Table from './Table';

const Ubuntu = () => {
  return (
    <div className="flex flex-col flex-wrap h-full max-w-4xl m-2">
      <div className="mx-2 my-1">
        <h2 className="text-gray-300">General</h2>
        <Table data={desktop} />
      </div>
      <div className="mx-2 my-1">
        <h2 className="text-gray-300">Basic editing</h2>
        <Table data={captureScreen} />
      </div>
    </div>
  );
};

export default Ubuntu;
