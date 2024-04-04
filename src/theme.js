
import { experimental_extendTheme as extendTheme } from '@mui/material/styles'


// Create a theme instance.
const theme = extendTheme({

  colorSchemes: {
  //   light: {
  //     palette: {
  //       primary: teal,
  //       secondary: deepOrange
  //     }

    //   }
    // },
    // dark: {
    //   palette: {
    //     primary: cyan,
    //     secondary: orange
    //   }

  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body:{
          '*::-webkit-scrollbar': {
            width: '8px',
            height: '8px'
          },

          /* Handle */
          '*::-webkit-scrollbar-thumb': {
            backgroundColor:'#dcdde1',
            borderRadius:'8px'
          },

          /* Handle on hover */
          '*::-webkit-scrollbar-thumb:hover': {
            backgroundColor:'white'

          }
        }
      },
      MuiButton: {
        styleOverrides: {
          // Name of the slot
          root: {
            // Some CSS
            textTransform: 'none',
            borderWidth: '0.5px',
            '&:hover':{ borderWidth:'0.5px' }
          }
        }
      },
      MuiInputLabel: {
        styleOverrides: {
          // Name of the slot
          root: { fontSize: '0.875rem' }
        }
      },

      MuiTypography: {
        styleOverrides: {
          // Name of the slot
          root: { '&.MuiTypography-body1':{ fontSize: '0.875rem' } } }
      },


      MuiOutlinedInput: {
        styleOverrides: {
          root: ({ theme }) => ({
          // color: theme.palette.primary.main,
          // fontSize: '0.85rem',
          // '.MuiOutlinedInput-notchedOutline': {
          //   borderColor: theme.palette.primary.light
          // },
          // '&:hover': {
          //   '.MuiOutlinedInput-notchedOutline': {
          //     borderColor: yellow

            //   }
            // },
            '& fieldset': { borderWidth: '0,5px !important' },
            '&:hover fieldset ':{ borderWidth: '1px !important' },
            '&.Mui-focused fieldset ':{ borderWidth: '1px !important' }
          })

        } } }
  }
} // ...other properties
)

export default theme
