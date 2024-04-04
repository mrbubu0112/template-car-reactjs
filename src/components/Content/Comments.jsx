import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'

import Avatar from '@mui/material/Avatar'
import Stack from '@mui/material/Stack'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { useState } from 'react'
import data from '~/assets/data.json'


function Comments() {


  const settings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 50000, // Tốc độ chuyển đổi giữa các slide (đơn vị: ms)
    arrows: true

  }

  const [hoveredItems, setHoveredItems] = useState([])

  const handleMouseEnter = (index) => {
    setHoveredItems((prevHoveredItems) => {
      const updatedItems = [...prevHoveredItems]
      updatedItems[index] = true
      return updatedItems
    })
  }

  const handleMouseLeave = (index) => {
    setHoveredItems((prevHoveredItems) => {
      const updatedItems = [...prevHoveredItems]
      updatedItems[index] = false
      return updatedItems
    })
  }


  return (

    <div id='comments'
    >
      <Box sx={{
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
        width: { xs: '100%', sx:'100%', md: '1170px' },
        paddingRight: '15px',
        paddingLeft: '15px',
        marginRight: 'auto',
        marginLeft: 'auto',

        overflow:{ xs: 'hidden', sx:'hidden', md: 'none' }
      }}
      className="comments-form"

      >

        <Grid container spacing={2}>

          <Grid

            item xs={12} md={6} lg={3}>
            <div
              style={{
                width: '1170px',
                marginRight: 'auto',
                marginLeft: 'auto',
                marginTop: '60px'
              }}
            >
              <h2 style={{
                fontSize: '36px',
                fontWeight: 500,
                paddingBottom: '35px',
                textTransform: 'capitalize',
                textAlign:'center'
              }}>
        what our clients say
              </h2>


              <Slider {...settings}>
                {data.comments.map((comment, index) => (
                  <div key={index}
                  >
                    <div
                      onMouseEnter={() => handleMouseEnter(index)}
                      onMouseLeave={() => handleMouseLeave(index)}
                      style={{
                        marginBottom: '10px',
                        border: '2px solid #dadfe9',
                        padding: '0 30px 0px 30px',
                        minHeight: '1px',
                        paddingRight: '15px',
                        paddingLeft: '15px',
                        boxSizing: 'border-box',
                        marginLeft: '30px',
                        marginRight: '30px',
                        backgroundColor: hoveredItems[index] ? '#4e4ffa' : 'transparent',
                        boxShadow: '0 12px 30px 0 rgba(0,1,193,.2)'
                      }}
                    >

                      <div
                        style={{
                          marginBottom: '50px',
                          padding: '0 10px 0px 10px',
                          minHeight: '1px',
                          paddingRight: '15px',
                          paddingLeft: '15px',
                          boxSizing: 'border-box'


                        }}
                      >


                        <div style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          height: '180px',
                          width: '100%'
                        }}>
                          <Stack direction="row" spacing={2}>
                            <Avatar alt={comment.caption} src={comment.imgPath} sx={{ width: 81, height: 81 }} />
                          </Stack>
                        </div>
                        <Typography variant="body2" align="center"
                          sx={{
                            margin: 0,
                            color: hoveredItems[index] ? 'white' : '#5e6778;',
                            fontSize: '16px',
                            lineHeight: 1.8,
                            textTransform: 'initial',
                            marginBottom: '25px',
                            marginTop: '30px'


                          }}>
                          {comment.comment}
                        </Typography>
                        <Typography variant="body2" align="center" sx={{
                          fontSize: '16px',
                          marginBottom: '15px',
                          textDecoration: 'none',
                          fontWeight: '600',
                          textTransform: 'capitalize',

                          color: hoveredItems[index] ? 'white' : '#5e6778'
                        }}>
                          {comment.name}
                        </Typography>
                        <Typography variant="body2" align="center" sx={{
                          fontSize: '16px',
                          marginBottom: '15px',
                          textDecoration: 'none',

                          fontWeight: '600',
                          textTransform: 'capitalize',
                          color: hoveredItems[index] ? 'white' : '#5e6778'

                        }}>
                          {comment.address}
                        </Typography>

                        <div
                          style={{
                            position: 'relative'
                          }}
                        >
                          <div
                            style={{
                              position: 'absolute',
                              content: '',
                              width: '20px',
                              height: '3px',
                              background: '#3030ea',
                              bottom: '0',
                              left: '50%',
                              marginLeft: '-10px'
                            }}
                          ></div>
                        </div>

                      </div>
                    </div>
                  </div>
                ))}
              </Slider>

            </div>
          </Grid>

        </Grid>
      </Box>
    </div>
  )
}

export default Comments