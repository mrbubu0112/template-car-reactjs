import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import React from 'react';


function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isTogglerActive, setIsTogglerActive] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      if (scrollTop > 0) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const handleNavbarToggle = () => {
    setIsTogglerActive(!isTogglerActive)
  }

  return (


    <nav
    data-testid="navbar"
      className="navbar navbar-expand-lg fixed-top"
      style={{
        color: 'white',
        backgroundColor: isScrolled ? 'black' : 'transparent',
        transition: 'background-color 1s ease, height 1s ease, borderBottom 1s ease',
        height: isScrolled ? '80px' : '150px'
      }}
    >
      <div className="container" >
        <button
          id="navbar-toggle"
          data-testid="navbar-toggle" 
          className="navbar-toggler btn-logo"
          onClick={handleNavbarToggle}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded={isTogglerActive ? 'true' : 'false'}
          aria-label="Toggle navigation"
        >

          <FontAwesomeIcon
            icon={faBars}
            style={{ display: isTogglerActive ? 'none' : 'block', color:'blue' }}
            className={isTogglerActive ? 'active' : ''}
          />
          <FontAwesomeIcon
            icon={faTimes}
            style={{ display: isTogglerActive ? 'block' : 'none', color:'blue' }}
            className={isTogglerActive ? 'active' : ''}
          />

        </button>
        <a className="navbar-brand logo" href="#"
          style={{
            color:'white'
          }}
        >
          CARVILLA
        </a>
        <div className={`collapse navbar-collapse show-toggler ${isTogglerActive ? 'active' : ''}`}
          id="navbarTogglerDemo01"
          data-testid="navbar-collapse"
          style={{ display: isTogglerActive ? 'block' : 'none', color: 'blue' }}

        >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0"
            style={{ paddingLeft: isScrolled ? '10px' : '100px',
              transition: ' padding-left 1s ease'

            }}
          >
            <li className="nav-item"
              style={{ marginRight: isScrolled ? '15px' : '10px',
                transition: ' margin-Right 1s ease' }}
            >
              <a className="nav-link" aria-current="page" href="#" >
                Home
              </a>
            </li>
            <li className="nav-item"
              style={{ marginRight: isScrolled ? '15px' : '10px',
                transition: ' margin-Right 1s ease' }}
            >
              <a className="nav-link" href="#service">
                Service
              </a>
            </li>
            <li className="nav-item"
              style={{ marginRight: isScrolled ? '15px' : '10px',
                transition: ' margin-Right 1s ease' }}
            >
              <a className="nav-link" href="#featurecars">
                Feature Cars
              </a>
            </li>
            <li className="nav-item"
              style={{ marginRight: isScrolled ? '15px' : '10px',
                transition: ' margin-Right 1s ease' }}
            >
              <a className="nav-link" href="#newcars">
                New Cars
              </a>
            </li>
            <li className="nav-item"

              style={{ marginRight: isScrolled ? '15px' : '10px',
                transition: ' margin-Right 1s ease' }}>
              <a className="nav-link" href="#brands">
                Brands
              </a>
            </li>
            <li className="nav-item"

              style={{ marginRight: isScrolled ? '15px' : '10px',
                transition: ' margin-Right 1s ease' }}>
              <a className="nav-link" href="#contact">
                Contact
              </a>
            </li>

          </ul>
        </div>
      </div>
    </nav>


  )
}

export default Navbar