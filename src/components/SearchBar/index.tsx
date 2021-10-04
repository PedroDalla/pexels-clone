import { StyledSearchBar } from './styles'
import { AiOutlineSearch } from 'react-icons/ai'

interface SearchBarProps {
  navSearchBar?: boolean,
  margin?: string,
  placeholder?: string,
}

export const SearchBar = ({navSearchBar, margin, placeholder}: SearchBarProps): JSX.Element => {
    return (
      <StyledSearchBar navSearchBar={navSearchBar} margin={margin}>
        <form>
            <input type="text" placeholder={placeholder || "Search for free photos"}/>
            <button><AiOutlineSearch size='24px' color='#5e5e5e'></AiOutlineSearch></button>
        </form>
      </StyledSearchBar>
    );  
} 
