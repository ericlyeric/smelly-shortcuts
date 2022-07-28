const Sidebar = () => {
  return (
    <div className="flex-col bg-gray-500 max-w-xs w-32">
      <div className="flex justify-center py-2">
        <span className="text-4xl">👃</span>
      </div>
      <ul className="p-3">
        <li>VSCode</li>
        <li>Bash/ZSH</li>
        <li>Mac</li>
        <li>Linux</li>
      </ul>
    </div>
  );
};

export default Sidebar;
