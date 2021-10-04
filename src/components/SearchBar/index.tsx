import { StyledSearchBar } from './styles'
import { AiOutlineSearch } from 'react-icons/ai'

export function SearchBar() {
    return (
      <StyledSearchBar navSearchBar={false}>
        <form>
            <input type="text" placeholder="Search for free photos"/>
            <button><AiOutlineSearch size='24px' color='#5e5e5e'></AiOutlineSearch></button>
        </form>
      </StyledSearchBar>
    );  
} 
