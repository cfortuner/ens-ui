import RadioButton from './RadioButton'


/**
 * For now, this component is just mapping the sort
 * options to radios buttons with the necessary props.
 *
 * Later, it might be better to allow the user to pass in the Radio buttons
 * using props.children and add the necessary props here. Doing this would
 * allow me to rename this to RadioButtonGroup.
 *
 * @param sortOptions - An array of objects that contains { name, fn }
 * @param activeOption - The current selected radio button option {name, fn}
 * @param onChange - Handler for a new selection
 */
const SortOptionRadioButtonGroup = ({ sortOptions, activeOption, onChange }) => {
  return (
    <>
    {sortOptions.map(option => {
      return <RadioButton
        key={option.name}
        active={activeOption && activeOption.name === option.name}
        onClick={() => onChange(option)}
        name={option.name}
      />
    })}
    </>
  )
}

export default SortOptionRadioButtonGroup