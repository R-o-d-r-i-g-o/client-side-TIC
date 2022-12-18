import { Search, SearchTerm, SearchButton, Wrap } from './styles.d';

export const SearchBar = () => {
  return(
    <Wrap>
      <Search>
        <SearchTerm type="text" placeholder="Procurar ..."/>
        <SearchButton type="submit">
          <i className='bx bx-search-alt-2'></i>
        </SearchButton>
      </Search>
    </Wrap>
  );
};


