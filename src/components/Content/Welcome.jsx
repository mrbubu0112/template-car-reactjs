function Welcome() {
  return (


    <div
      style={{
        position: 'relative',
        background: 'url("./src/assets/img/car.jpg") no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        zIndex: 1,

        display:'flex',
        justifyItems:'center',
        alignContent:'center',
        height: '100%',
        width: '100%'


      }}id='home'
    >


      <div
        style={{
          color: '#ccc',
          textAlign: 'center',
          justifyContent: 'center',
          padding: '250px 0 250px',
          marginLeft: 'auto',
          marginRight: 'auto',
          animation: 'begin-home 1s 1'
        }}
      >
        <h2
          style={{

            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '42px',
            color: '#fff',
            fontWeight: 700,
            textTransform: 'uppercase',
            marginBottom: '45px',
            display: 'flex'
          }}
        >
    GET YOUR DESIRED CAR IN REASONABLE PRICE
        </h2>
        <p
          style={{
            fontSize: '18px',
            textTransform: 'initial',
            color: '#fff',
            fontWeight: 500,
            maxWidth: '735px',
            margin: '0 auto',
            lineHeight: 1.7
          }}
        >
    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>

      <div className='before-Welcome'
        style={{
          position: 'absolute',
          content: '',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex:2,
          background: 'rgba(42, 45, 84, 0.60)'
        }}
      ></div>


    </div>


  )
}

export default Welcome