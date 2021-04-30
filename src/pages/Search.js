const Search = () => {
  const globalStor = JSON.parse(localStorage.getItem('category'));
  return <>{globalStor}</>
}

export default Search;
