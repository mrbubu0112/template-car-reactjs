//Boards details
import { Container } from '@mui/material'
import NewCars from '~/components/Content/NewCars'
import Brand from '~/components/Content/Brand'
import FeatureCars from '~/components/Content/FeatureCars'
import Comments from '~/components/Content/Comments'
import Footer from '~/components/Footer/Footer'
import Service from '~/components/Content/Service'


function Board() {
  return (
    <>
      <div data-bs-spy="scroll" data-bs-target=".navbar" data-bs-offset="0" tabIndex="0">
        <Container disableGutters maxWidth={false} sx={{ height:'100vh', width:'100%' }}>


          <Service id='service'/>
          <NewCars id='newcars'/>
          <FeatureCars id='featurecars'/>
          <Comments id='comments'/>
          <Brand id='brands' />
          <Footer id='contact'/>
        </Container>
      </div>
    </>
  )

}

export default Board
