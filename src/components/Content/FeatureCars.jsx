import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'
import data from '~/assets/data.json'


function FeatureCars() {

  return (

    <div id='featurecars'>


      <Box sx={{
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
        paddingRight: '15px',
        paddingLeft: '15px',
        marginRight: 'auto',
        marginLeft: 'auto'
      }}
      className='featureCars'
      >
        <div>

          <p style={{
            color: '#444a57',
            textTransform: 'capitalize',
            marginBottom: '10px',
            textAlign:'center'
          }}>
        checkout the featured cars
          </p>
          <h2 style={{
            fontSize: '36px',
            fontWeight: 500,
            paddingBottom: '35px',
            textTransform: 'capitalize',
            textAlign:'center'
          }}>
        featured cars
          </h2>

          <div

          >
            <Grid container spacing={2}>
              {data.featureCars.map((featureCar, index) => (
                <Grid
                  key={index}
                  item
                  xs={12}
                  md={6}
                  lg={3}
                  style={{
                    flexGrow: 1,

                    padding: '0 30px',
                    height: '100%',
                    marginBottom:'30px'

                  }}
                >
                  <div style={{ marginBottom: '10px', border: '1px solid #dadfe9' }}>

                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: '0 30px 0px 0px',
                        height: '220px',
                        width: '100%'
                      }}


                    >
                      <img src={featureCar.imgPath} alt={featureCar.caption} />
                    </div>

                    <Typography
                      variant="body1"
                      align="left"
                      style={{
                        color: '#444a57',
                        textTransform: 'capitalize',
                        margin: '10px 0',
                        borderTop: '1px solid #dadfe9'
                      }}
                    >
                      {featureCar.model}
                    </Typography>
                  </div>

                  <div
                    style={{
                      width:'100%',
                      marginTop:'20px'
                    }}
                  >
                    <Typography
                      variant="h3"
                      align="left"
                      sx={{
                        fontSize: '16px',
                        marginBottom: '15px',

                        textDecoration: 'none',
                        color: '#444a57',
                        fontWeight: '500',
                        textTransform: 'capitalize',
                        width:'100%'


                      }}
                    >
                      {featureCar.caption}
                    </Typography>
                    <Typography variant="body1" align="left"
                      sx={{
                        fontSize: '16px',
                        marginBottom: '15px',

                        textDecoration: 'none',
                        color: '#444a57',
                        fontWeight: '500',
                        textTransform: 'capitalize',
                        width:'100%'

                      }}
                    >
                      {featureCar.price}
                    </Typography>
                    <Typography
                      variant="body2"
                      align="left"
                      sx={{
                        margin: 0,
                        color: '#818998',
                        fontSize: '16px',
                        lineHeight: 1.8,
                        textTransform: 'initial',
                        width:'100%'

                      }}
                    >
                      {featureCar.description}
                    </Typography>
                  </div>
                </Grid>
              ))}
            </Grid>
          </div>
        </div>
      </Box>
    </div>
  )
}

export default FeatureCars