
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { useState } from 'react'
import data from '~/assets/data.json'


function Service() {


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


    <div className="row"
    >

      <div className="col-xs-12 col-sm-12 col-md-4 service"
        id='service'
        style={{

          paddingRight: '15px',
          paddingLeft: '15px',
          marginRight: 'auto',
          marginLeft: 'auto',
          marginTop: '180px',
          width:'1170px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}


      >
        {/* {data.images.map((image, index)
data.images.map((image, index */}

        {/* // {images.map((image, index) => ( */}
        {data.images.map((image, index) => (
          <div key={index}


            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width:'100%',
              paddingRight: '15px',
              paddingLeft: '15px'


            }}
          >
            <div
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave(index)}
              style={{
                marginBottom: '10px',
                border: '2px solid #dadfe9',
                padding: '0 30px 0px 30px',
                minHeight: '1px',

                boxSizing: 'border-box',
                marginLeft: '10px',
                marginRight: '10px',
                backgroundColor: hoveredItems[index] ? '#4e4ffa' : 'transparent',
                boxShadow: '0 12px 30px 0 rgba(0,1,193,.2)' }}>
              <div
                style={{
                  marginBottom: '50px',

                  minHeight: '1px',
                  paddingRight: '15px',
                  paddingLeft: '15px',
                  boxSizing: 'border-box',
                  width: '100%' }}
              >
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: '180px'

                }}>
                  <Stack direction="row" spacing={2}

                  >
                    <img alt={image.caption} src={image.imgPath} style={{ width: 64, height: 64,
                      display: hoveredItems[index] ? 'none' : 'block'
                    }}></img>
                    <img alt={image.caption} src={image.imgPath2} style={{ width: 64, height: 64, marginRight:'10px',
                      display: hoveredItems[index] ? 'block' : 'none'
                    }}></img>

                  </Stack>
                </div>
                <Typography variant="body2" align="center" sx={{
                  fontSize: '16px',
                  marginBottom: '15px',
                  textDecoration: 'none',

                  fontWeight: '500',
                  textTransform: 'capitalize',
                  color: hoveredItems[index] ? 'white' : '#5e6778'
                }}>
                  {image.title}
                </Typography>
                <Typography variant="body2" align="center" sx={{
                  marginBottom: '30px',

                  fontSize: '16px',
                  lineHeight: 1.8,
                  textTransform: 'initial',
                  color: hoveredItems[index] ? 'white' : '#5e6778'
                }}>
                  {image.comment}
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

      </div>
    </div>
  )
}

export default Service