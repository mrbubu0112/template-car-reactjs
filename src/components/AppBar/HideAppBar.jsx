
import Toolbar from '@mui/material/Toolbar'
import useScrollTrigger from '@mui/material/useScrollTrigger'
import Fab from '@mui/material/Fab'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import Zoom from '@mui/material/Zoom'


function ScrollHide() {


  function ScrollTop(props) {
    const trigger = useScrollTrigger({
      target: props.window ? window() : undefined,
      disableHysteresis: true,
      threshold: 1
    })

    const handleClick = (event) => {
      const anchor = (event.target.ownerDocument || document).querySelector(
        '#back-to-top-anchor'
      )

      if (anchor) {
        anchor.scrollIntoView({ behavior: 'smooth', block: 'center' })
      }
    }

    return (
      <Zoom in={trigger}>
        <div
          onClick={handleClick}
          role="presentation"
          style={{ position: 'fixed', bottom: 16, right: 16 }}
        >
          {props.children}
        </div>
      </Zoom>
    )
  }


  return (
    <div>

      <Toolbar id="back-to-top-anchor" sx={{ backgroundColor:'none' }} />
      <ScrollTop>
        <Fab color="secondary" size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>

    </div>
  )
}

export default ScrollHide