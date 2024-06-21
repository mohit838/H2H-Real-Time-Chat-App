const SearchBar = () => {
  return (
    <form className="flex items-center gap-2 mb-5">
      <input
        type="text"
        placeholder="search..."
        className="input input-bordered rounded-full"
      />
      <button type="submit" className="btn btn-circle bg-gray-700">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
          />
        </svg>
      </button>
    </form>
  );
};

export default SearchBar;
