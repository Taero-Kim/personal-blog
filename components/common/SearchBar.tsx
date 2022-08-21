import { SearchBarProps } from "@type/common";

const SearchBar = ({
  keyword,
  setKeyword,
  handleInputChange,
}: SearchBarProps) => {
  return (
    <div className="px-4 py-4">
      <div className="mx-auto mb-4 flex w-full rounded-md border-[1px] border-[#D3D3D3] bg-white py-2 pl-4 pr-2 dark:border-darkInputBg dark:bg-darkInputBg md:max-w-[500px]">
        <img
          className="mr-4"
          src="/images/search/search-icon.svg"
          alt="search-icon"
        />
        <input
          placeholder="글 검색"
          onChange={handleInputChange}
          value={keyword}
          className="w-full justify-start text-gray-900 outline-none dark:bg-darkInputBg dark:text-darkText dark:placeholder:text-darkText"
          type="text"
        />
        {keyword.length ? (
          <img
            onClick={() => setKeyword("")}
            className="cursor-pointer"
            src="/images/search/remove-keyword-icon.svg"
            alt="remove-all-keyword"
          />
        ) : null}
      </div>
    </div>
  );
};

export default SearchBar;
