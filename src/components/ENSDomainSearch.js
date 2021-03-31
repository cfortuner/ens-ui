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

const ENSDomainSearch = () => {
  const [activeSort, setActiveSort] = useState(undefined)
  const onSortChange = (sort) => {
    setActiveSort((prevSort) => {
      if (prevSort && prevSort.name === sort.name) {
        return undefined
      }
      return sort
    })
  }

  const [searchString, setSearchString] = useState('')
  const onSearchChange = (e) => setSearchString(e.target.value)

  // todo: fetch the data

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