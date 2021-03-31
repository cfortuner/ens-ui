  /** @jsxRuntime classic */
/**@jsx jsx */
import { jsx, Flex, Text} from 'theme-ui';

import Modal from "react-modal"
Modal.setAppElement("#root");

/**
 * A hacky modal. This should be cleaned up later.
 * TODO:
 * - Add icon pack and replace the x here in the modal
 * - Move the x to the right side of the modal
 *
 * @param {*} param0
 * @returns
 */
const ENSDomainInfoModal = ({isOpen, toggleModal}) => (
  <Modal
  isOpen={isOpen}
  onRequestClose={toggleModal}
  contentLabel="Domain Name Info"
  className="modal"
  overlayClassName="overlay"
    sx={{
      display: 'flex',
      flexDirection: 'column',
      flexGrow:1
  }}
>
  <a
    aria-label="Close Modal Box"
    onClick={toggleModal}
    sx={{
      position: 'fixed',
      '&:hover, &:focus': {
        cursor: 'pointer'
      },
      fontSize: 30,
    }}
  >×</a>
  <Flex
    sx={{
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
      flexGrow: 1
    }}
  >
    <Text sx={{ fontWeight: 'bold' }}>
          You clicked a name!
    </Text>
  </Flex>
</Modal>
)

export default ENSDomainInfoModal