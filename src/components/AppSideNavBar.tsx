const AppSideNavBar = () => {
  return (
    <aside className="bg-gray-100 w-64 h-full">
      <div className="p-4">
        <h2 className="text-lg font-bold">Navigation</h2>
        <ul className="mt-2">
          <li>
            <a href="#" className="block py-2 px-4 hover:bg-gray-200">
              Dashboard
            </a>
          </li>
          <li>
            <a href="#" className="block py-2 px-4 hover:bg-gray-200">
              Settings
            </a>
          </li>
          <li>
            <a href="#" className="block py-2 px-4 hover:bg-gray-200">
              Profile
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default AppSideNavBar;
