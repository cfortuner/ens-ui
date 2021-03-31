/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@theme-ui/core";
import { Flex, Input } from "theme-ui"



/**
 * TODO
 * - add different search icon sizes
 */
const SearchBar = ({ onChange, placeholder="Search for an ENS name" }) => (
  <Flex sx={{
    alignItems: 'center',
  }}>
    <img
      src='search-icon.png'
      alt="search-bar-icon"
      sx={{
        paddingLeft:20,
        position: 'absolute'
    }}/>
    <Input
      onChange={onChange}
      placeholder={placeholder}
      sx={{
        paddingLeft:[60, 70],
        maxWidth: [1000],
        fontSize: [3,4,5,6],
      }}
    />
  </Flex>
)

export default SearchBar