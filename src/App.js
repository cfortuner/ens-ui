/** @jsxRuntime classic */
/**@jsx jsx */
import { jsx,ThemeProvider} from 'theme-ui';
import theme from './theme';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import ENSDomainSearch from './components/ENSDomainSearch';


/**
 *
 * TODO:
 * - Test with all major browsers / mobile devices & add cross platform css attributes
 * - Add aria tags for accessibility
 * - add icon packs
 */

const client = new ApolloClient({
  uri: 'https://api.thegraph.com/subgraphs/name/ensdomains/ens',
  cache: new InMemoryCache()
})

/**
 * A simple app to fetch the 10 most recently registered
 * ENS Domain names and search and sort them.
 */
function App() {
  return (
    <ThemeProvider theme={theme}>
      <ApolloProvider client={client}>
        <ENSDomainSearch />
      </ApolloProvider>
    </ThemeProvider>
  );
}

export default App;