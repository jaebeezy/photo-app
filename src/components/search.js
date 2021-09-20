import styled from "styled-components";

const SearchBar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 20px;

  input {
    margin: 5px;
    border-radius: 5px;
    font-family: inherit;
    font-size: 1em;
    outline: none;
  }
`;

const Search = ({ search, setSearch, onFormSubmit }) => {
  return (
    <SearchBar>
      <form onSubmit={onFormSubmit}>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          size="50"
        />
        <button type="submit" disabled={!search}>
          Search
        </button>
      </form>
    </SearchBar>
  );
};

export default Search;
