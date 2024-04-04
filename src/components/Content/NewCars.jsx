import * as React from 'react'
import { useTheme } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Radio from '@mui/material/Radio'
import SwipeableViews from 'react-swipeable-views'
import { autoPlay } from 'react-swipeable-views-utils'
import { RadioGroup, FormControlLabel, Button } from '@mui/material'
import data from '~/assets/data.json'
const AutoPlaySwipeableViews = autoPlay(SwipeableViews)


function NewCars() {
  const theme = useTheme()
  const [activeStep, setActiveStep] = React.useState(0)
  const maxSteps = data.newcars.length

  const handleStepChange = (step) => {
    if (step === maxSteps) {
      setActiveStep(0)
    } else {
      setActiveStep(step)
    }
  }

  const handleRadioChange = (event) => {
    setActiveStep(Number(event.target.value))
  }


  return (
    <div id='newcars'>
      <Box
        sx={{ maxWidth: '70%', flexGrow: 1, mr:'auto', ml:'auto', bgcolor: '#f8f9fb', my: 5 }}>
        <Box
          sx={{
            textAlign:'center',
            paddingBottom:'50px',
            paddingTop:'30px'
          }}
        >
          <Typography>Checkout the Latest Cars</Typography>
          <Typography variant="h4" >Newest Cars</Typography>

        </Box>
        <AutoPlaySwipeableViews

          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={activeStep}
          onChangeIndex={handleStepChange}
          enableMouseEvents
          resistance
          interval={5000}
        >
          {data.newcars.map((newcar, index) => (
            <div className='form-newcars'
              key={newcar.label}
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignContent:'center',
                paddingY:'20px'
              }}

            >
              {Math.abs(activeStep - index) <= 2 ? (
                <Box
                  component="img"
                  sx={{
                    height: '100%',
                    display: 'inline-block',
                    marginRight: '10px',
                    overflow: 'hidden',
                    width: '150%'

                  }}
                  src={newcar.imgPath}
                  alt={newcar.label}
                />


              ) : null}
              <Box>
                <Typography
                  sx={{
                    fontSize: '30px',
                    fontWeight: 500,
                    marginBottom: '26px',
                    display: 'inline-block',
                    textDecoration: 'none',
                    color: '#444a57',
                    padding: 0,
                    textTransform: 'capitalize'
                  }}
                >{data.newcars[activeStep].label}</Typography>
                <Typography
                  sx={{
                    color: '#818998',
                    fontSize: '16px',
                    lineHeight: 1.8,
                    textTransform: 'initial'
                  }}

                >{data.newcars[activeStep].label1}</Typography>
                <Typography
                  sx={{
                    color: '#818998',
                    fontSize: '16px',
                    lineHeight: 1.8,
                    textTransform: 'initial'
                  }}

                >{data.newcars[activeStep].label2}</Typography>

                <Button
                  sx={{
                    background: '#4e4ffa',
                    color: '#fff',
                    borderRadius: '3px',
                    display: 'inline-block',
                    height: '60px',
                    marginTop: '32px',
                    width: '176px',
                    textTransform: 'capitalize',
                    boxShadow: 'none',
                    border: 0
                  }}
                >
                  View Details
                </Button>
              </Box>

            </div>
          ))}
          <></>
        </AutoPlaySwipeableViews>


        <RadioGroup
          aria-label="car-images"
          name="car-images"
          value={activeStep.toString()}
          onChange={handleRadioChange}
          sx={{ flexDirection: 'row', justifyContent: 'center', mt: 2 }}
        >
          {data.newcars.map((newcar, index) => (
            <FormControlLabel
              key={newcar.label}
              value={index.toString()}
              control={<Radio />}
            // label={step.label}
            />
          ))}
        </RadioGroup>


      </Box>
    </div>
  )
}

export default NewCars