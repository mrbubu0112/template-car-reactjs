
import { useState } from 'react'


function Hover() {
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
  }

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        backgroundColor: isHovered ? 'red' : 'blue',
        width: '200px',
        height: '200px'
      }}
    >
      {isHovered ? 'Hovered' : 'Not hovered'}
    </div>
  )
}

export default Hover