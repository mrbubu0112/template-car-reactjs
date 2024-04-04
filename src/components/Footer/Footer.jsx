
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'


function Footer() {

  return (

    <div id='contact'
    >


      <Box sx={{
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
        paddingRight: '15px',
        paddingLeft: '15px',
        marginRight: 'auto',
        marginLeft: 'auto'
      }}
      >

        <div style={{


          padding: '112px 0 120px',
          color: 'white',
          display: 'flex',
          backgroundColor: '#2a2d54'

        }}>
          <div className='footer'
            style={{

              paddingRight: '30px',
              paddingLeft: '30px',
              marginRight: 'auto',
              marginLeft: 'auto',
              marginTop: '60px',
              backgroundColor: '#2a2d54',
              color: 'white'

            }}>
            <Grid container spacing={2}>
              <Grid item md={3} sm={12 }xs={12}>
                <div >
                  <h2>Carvilla</h2>
                  <p>Ased do eiusm tempor incidi ut labore et dolore magnaian aliqua. Ut enim ad minim veniam.</p>
                  <p>name@domain.com</p>
                  <p>+1 (222) 1234567890</p>
                </div>
              </Grid>
              <Grid item lg={3} md={6} xs={12}>
                <div>
                  <h2>About DEVLOON</h2>
                  <ul style={{ listStyleType: 'none', paddingInlineStart: '0' }}>
                    <li>About Us</li>
                    <li>Career</li>
                    <li>Terms of service</li>
                    <li>Terms of service</li>
                  </ul>
                </div>
              </Grid>
              <Grid item lg={3} md={6} xs={12}>
                <div>
                  <h2>TOP BRANDS</h2>

                  <div style={{ display: 'flex', color: 'white' }}>
                    <div>
                      <ul style={{ listStyleType: 'none', paddingInlineStart: '0', paddingRight:'10px' }} >
                        <li><a href="#" style={{ color: 'white', textDecoration: 'none', textTransform: 'capitalize' }}>BMW</a></li>
                        <li><a href="#" style={{ color: 'white', textDecoration: 'none', textTransform: 'capitalize' }}>lamborghini</a></li>
                        <li><a href="#" style={{ color: 'white', textDecoration: 'none', textTransform: 'capitalize' }}>camaro</a></li>
                        <li><a href="#" style={{ color: 'white', textDecoration: 'none', textTransform: 'capitalize' }}>audi</a></li>
                        <li><a href="#" style={{ color: 'white', textDecoration: 'none', textTransform: 'capitalize' }}>infiniti</a></li>
                        <li><a href="#" style={{ color: 'white', textDecoration: 'none', textTransform: 'capitalize' }}>nissan</a></li>
                      </ul>
                    </div>
                    <div>
                      <ul style={{ listStyleType: 'none', paddingInlineStart: '0' }}>
                        <li><a href="#" style={{ color: 'white', textDecoration: 'none', textTransform: 'capitalize' }}>ferrari</a></li>
                        <li><a href="#" style={{ color: 'white', textDecoration: 'none', textTransform: 'capitalize' }}>porsche</a></li>
                        <li><a href="#" style={{ color: 'white', textDecoration: 'none', textTransform: 'capitalize' }}>land rover</a></li>
                        <li><a href="#" style={{ color: 'white', textDecoration: 'none', textTransform: 'capitalize' }}>aston martin</a></li>
                        <li><a href="#" style={{ color: 'white', textDecoration: 'none', textTransform: 'capitalize' }}>mercedes</a></li>
                        <li><a href="#" style={{ color: 'white', textDecoration: 'none', textTransform: 'capitalize' }}>opel</a></li>
                      </ul>
                    </div>
                  </div>


                </div>
              </Grid>
              <Grid item lg={3} md={6} xs={12}>
                <div>
                  <h2>NEWS LETTER</h2>
                  <p>Subscribe to get the latest news updates and information.</p>
                  <input type="text" placeholder="Add email" name="email" />
                </div>
              </Grid>
            </Grid>
          </div>
        </div>
      </Box>
    </div>
  )
}


export default Footer