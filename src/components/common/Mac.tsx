import { finderAndSystem, general, logOut } from '../../data/mac/data';
import Table from './Table';

const Mac = () => {
  return (
    <div className="flex flex-col flex-wrap h-full max-w-4xl m-2">
      <div className="mx-2 my-1">
        <h2 className="text-gray-300">General</h2>
        <Table data={general} />
      </div>
      <div className="mx-2 my-1">
        <h2 className="text-gray-300">Log out</h2>
        <Table data={logOut} />
      </div>
      <div className="mx-2 my-1">
        <h2 className="text-gray-300">Finder and System</h2>
        <Table data={finderAndSystem} />
      </div>
    </div>
  );
};

export default Mac;
