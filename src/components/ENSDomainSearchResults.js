/** @jsxRuntime classic */
/**@jsx jsx */
import { jsx, Flex, Box, Text} from 'theme-ui';
import ENSDomainNameText from './ENSDomainNameText';
import { useState } from 'react'
import ENSDomainInfoModal from './ENSDomainInfoModal';

/**
 * @param activeSort - Object containing the name and fn of the active sort to apply to the results
 * @param searchString - The value of the current search string
 *
 * This component is responsible for displaying domain search results and handling domain name click events
 */
const ENSDomainSearchResults = ({ activeSort, searchString, domainSearchResults }) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const toggleModal = () => {
    setIsModalOpen((prev) => !prev)
  }

  // Apply the search
  const filtered =
    domainSearchResults.filter(domain => domain.name
      .toLowerCase()
      .includes(searchString.toLowerCase()))


  // Apply the active sort
  const filteredAndSorted =
    !!activeSort
      ? activeSort.fn(filtered)
      : filtered

  return (
    <Box>
      <ENSDomainInfoModal isOpen={isModalOpen} toggleModal={toggleModal}/>
      {filteredAndSorted && filteredAndSorted.length
        ? (
          <Flex sx={{
            flexFlow: 'column',
            my: 4
          }}>
            {filteredAndSorted.map(d => <ENSDomainNameText key={d.id} name={d.name} onClick={toggleModal}/>)}
            </Flex>
          )
        : (
            <Box sx={{
              my: 4,
              display: 'flex',
              flexGrow: 1,
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <Text sx={{
                fontColor: '#000000',
                fontWeight: 'bold',
                fontSize: [4],
              }}>
                No results found for "{searchString}"
              </Text>
            </Box>
          )
        }
    </Box>
  )
}
export default ENSDomainSearchResults