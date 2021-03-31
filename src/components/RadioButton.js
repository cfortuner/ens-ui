/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@theme-ui/core";
import { Button } from "theme-ui";


/**
 * A component to create a Radio Button that looks like what we want.
 *
 * @param name - name of radio button
 * @param onClick - when button is selected
 * @param active - is this the active radio button
 */
const RadioButton = ({name, onClick, active}) => {
  return <Button
    onClick={onClick}
    sx={{
      my:1,
      mx:1,
      outline:'none',
      borderRadius: 30,
      fontColor: active ? 'secondary' : 'primary',
      backgroundColor: active ? 'primary' : 'secondary'
    }}
  >
    {name}
  </Button>
}

export default RadioButton