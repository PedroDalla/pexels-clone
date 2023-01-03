import { StyledSearchBar } from './styles'
import { AiOutlineSearch } from 'react-icons/ai'

interface SearchBarProps {
  navSearchBar?: boolean,
  margin?: string,
  placeholder?: string,
  maxWidth?: number,
}

export const SearchBar: React.FC<SearchBarProps> = ({ navSearchBar, margin, placeholder, maxWidth, ...props }) => {
  return (
    <StyledSearchBar {...props} navSearchBar={navSearchBar} margin={margin} maxWidth={maxWidth}>
      <form>
        <input type="text" placeholder={placeholder || "Search for free photos"} />
        <button><AiOutlineSearch size='24px' color='#5e5e5e'></AiOutlineSearch></button>
      </form>
    </StyledSearchBar>
  );
} 
