import {InputBase, Box, styled} from "@mui/material"
import SearchIcon from "@mui/icons-material/Search"

const SearchContainer = styled(Box)`
    background:#fff;
    width:38%;
    border-radius:2px;
    margin-left:20px;
    display:flex;
`

const InputSearchBase = styled(InputBase)`
    width:100%;
    padding-left:20px;
    font-size:unset;
`

const SearchInputWrapper = styled(Box)`
    color:#2874f0;
    padding:5px;
`

const Search = () => {
  return (
    <SearchContainer>
        <InputSearchBase
            placeholder="Search for products, brands and more"
        />
        <SearchInputWrapper>
            <SearchIcon/>
        </SearchInputWrapper>
    </SearchContainer>
  )
}

export default Search