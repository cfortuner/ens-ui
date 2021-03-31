import RadioButton from './RadioButton'


/**
 * For now, this component is just mapping the sort
 * options to radios buttons with the necessary props.
 *
 * Later, it might be better to allow the user to pass in the Radio buttons
 * using props.children and add the necessary props here. Doing this would
 * allow me to rename this to RadioButtonGroup.
 *
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