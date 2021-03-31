/** @jsxRuntime classic */
/**@jsx jsx */
import { jsx, Box, Container, Flex, Spinner } from 'theme-ui';
import { useState } from 'react'
import SearchBar from './SearchBar'
import SortOptionRadioButtonGroup from './SortOptionRadioButtonGroup';
import ENSDomainSearchResult from './ENSDomainSearchResults'
import { gql, useQuery } from '@apollo/client'

/**
 *
 * TODO:
 * - Test with all major browsers / mobile devices & add cross platform css attributes
 */

// Sorting options.
const domainSortOptions = [
  {
    name: 'Sort A-Z',
    fn: (ensDomains) => ensDomains.sort((a,b) => a.name < b.name ? -1 : 1)
  },
  {
    name: 'Sort Z-A',
    fn: (ensDomains) => ensDomains.sort((a,b) => a.name < b.name ? 1 : -1)
  },
  {
    name: 'Newest to Oldest',
    fn: (ensDomains) => ensDomains.sort((a,b) => a.time < b.time ? 1 : -1)
  },
  {
    name: 'Oldest to Newest',
    fn: (ensDomains) => ensDomains.sort((a,b) => a.time < b.time ? -1 : 1)
  }
]

const getRegistrationsQuery = gql`
  query MostRecentDomainRegistrations {
      registrations(first: 10, orderBy: registrationDate, orderDirection: desc) {
      id
      domain {
        id
        name
        owner {
          id
        }
      }
      registrationDate
    }
  }
`

/**
 * Top level component for the ENS Domain search.
 *
 * Handles Fetching from The Graph and stores the results of
 * - search
 * - sort radio buttons
 *
 * Some of these features could be refactored to be generic / composable
 * for new features. Depending on what changes we want to add next, we could
 * - refactor the sort radio button group to take in child components as props.children
 *  to enable any type of radio button group
 * - Refactor the search results to just be a list of child components as props.children
 * - separate generic components into their own folder.
 * - If we want to fetch more than 10 entries as once, I would
 * update the gql query to handle the sorting for us using the graphql query params (orderDirection)
 * - add paginataion to support fetching more than the 10 most recent registrations.
 */
const ENSDomainSearch = () => {
  // sort state
  const [activeSort, setActiveSort] = useState(undefined)
  const onSortChange = (sort) => {
    setActiveSort((prevSort) => {
      if (prevSort && prevSort.name === sort.name) {
        return undefined
      }
      return sort
    })
  }

  // search state
  const [searchString, setSearchString] = useState('')
  const onSearchChange = (e) => setSearchString(e.target.value)


  // fetch ens domains from ENS subgraph
  const { loading, error, data: query } = useQuery(getRegistrationsQuery)

  // Mapping the registration data to a simpler object
  const mostRecentRegistrations = !loading && !error && query && query.registrations.map((registration) => ({
    id: registration.domain.id,
    name: registration.domain.name,
    time: registration.registrationDate
  })) || []

  return (
      <Container sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        px: 4, py: 4,
      }}>
        <Box sx={{ my:3 }}>
          <SearchBar onChange={onSearchChange}/>
        </Box>
         <Flex sx={{ flexWrap: 'wrap' }}>
          <SortOptionRadioButtonGroup
            sortOptions={domainSortOptions}
            activeOption={activeSort}
            onChange={onSortChange}
          />
        </Flex>
        { loading
            ? <Spinner sx={{ my: 5 }} />
            : <ENSDomainSearchResult activeSort={activeSort} searchString={searchString} domainSearchResults={mostRecentRegistrations} />
          }
        </Container>
  );
}

export default ENSDomainSearch;