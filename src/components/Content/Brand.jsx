import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Box from '@mui/material/Box'


const images = [
  {
    imgPath: 'src/assets/img/brand/br1.png'
  },
  {
    imgPath: 'src/assets/img/brand/br2.png'
  },
  {
    imgPath: 'src/assets/img/brand/br3.png'
  },
  {
    imgPath: 'src/assets/img/brand/br4.png'
  },
  {
    imgPath: 'src/assets/img/brand/br5.png'
  },
  {
    imgPath: 'src/assets/img/brand/br6.png'
  }

]

function Brand() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 2
  }

  return (

    <Box id='brands'
      sx={{
        width: { xs: '100%', sx:'100%', md: '100%' },
        overflow:{ xs: 'hidden', sx:'hidden', md: 'none' }
      }}
    >


      <div style={{
        width:'1170px',
        paddingRight: '15px',
        paddingLeft: '15px',
        marginRight: 'auto',
        marginLeft: 'auto',
        paddingTop:'50px',
        paddingBottom:'50px'
      }}>
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index}>
              <img src={image.imgPath} alt={image.label} />
            </div>
          ))}
        </Slider>
      </div>
    </Box>

  )
}

export default Brand