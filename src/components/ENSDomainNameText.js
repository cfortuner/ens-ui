/** @jsxRuntime classic */
/**@jsx jsx */
import { jsx, Text } from 'theme-ui';

/**
 *
 * @param name - text name "einst.eth"
 * @param onClick - handler for onClick event
 */
const ENSDomainNameText = ({name, onClick}) => (
  <Text
    onClick={onClick}
    sx={{
      py: 2,
      fontSize: [25, 40, 50, 80],
      fontWeight: 'bold',
      textTransform: 'lowercase',

      // long domains
      wordWrap: 'break-word',
      maxWidth: [300, 1000],

      // gradient
      width: 'fit-content',
      backgroundImage: 'linear-gradient(90deg, rgba(82,255,100,1) 0%, rgba(255,255,0,1) 15%, rgba(255,198,32,1) 34%, rgba(255,112,28,1) 51%, rgba(255,25,249,1) 74%, rgba(0,212,255,1) 100%)',
      'WebkitBackgroundClip': 'text',
      'WebkitTextFillColor': 'transparent',

      // disable highlight
      'WebkitUserSelect': 'none',
      'WebkitTapHighlightColor': 'transparent',

      // cursor to pointer
      '&:hover, &:focus': {
        cursor: 'pointer'
      },
    }}>
    {name}
  </Text>
)

export default ENSDomainNameText