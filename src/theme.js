
/**
 * Theme-ui theme settings.
 */
export default {
  fontSizes: [12, 14, 16, 20, 24, 32, 48],
  colors: {
    primary: '#000000',
    secondary: '#d4d4d4',
  },
  forms: {
    input: {
      '&:focus': {
        borderColor: 'primary',
      },
      '::placeholder': {
        color: '#ebebeb'
      },
      outline: 'none',
      borderColor: 'secondary',
      borderWidth: 2,
      borderRadius: 5,
      boxShadow: '0 5px 20px rgba(0, 0, 0, 0.125)',
    }
  },
  space: [0, 4, 8, 16, 32, 48],
  breakpoints: ['40em', '64em', '80em'],
};