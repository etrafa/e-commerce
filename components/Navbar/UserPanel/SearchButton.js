const SearchButton = () => {
  return (
    <div className="flex items-center group cursor-pointer relative">
      {/* searchbar */}
      <div className="hidden group-hover:block absolute  right-0">
        <input
          className="w-60 h-10 border border-searchBar  rounded-lg"
          type="text"
        />
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 z-50"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
    </div>
  );
};

export default SearchButton;
