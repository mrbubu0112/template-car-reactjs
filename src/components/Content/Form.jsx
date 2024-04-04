
function Form() {
  return (
    <div
      className='row form'
      style={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        position: 'absolute',

        left: '50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: 'white',
        boxShadow: '0 10px 40px 0 rgba(38, 40, 64, .2)',
        padding: '40px 0px',
        justifyContent: 'space-around',
        alignItems: 'center',
        margin: '0 auto',
        width: '1170px'
        // margin: '0px 20px 0px -20px',
      }}>


      <div className='col-xs-12 col-sm-12 col-md-3 form-table'


        style={{
          marginBottom: '20px',
          textTransform: 'capitalize'


        }}
      >
        <div>
          <h2 style={{
            fontSize: '16px',
            fontWeight: 400,
            textTransform: 'capitalize'

          }}
          >select year</h2>
          <div>
            <select style={{
              fontSize: '16px',
              color: '#888f9d',
              textTransform: 'capitalize',
              outline: '0 !important',
              boxShadow: 'none',
              border: '1px solid #f8f8f8',
              background: '#f8f8f8',
              height: '60px',
              width:'85%'
            }}>
              <option value="default">year</option>
              <option value="2018">2018</option>
              <option value="2017">2017</option>
              <option value="2016">2016</option>
            </select>
          </div>
        </div>
        <div>
          <h2 style={{
            fontSize: '16px',
            fontWeight: 400,
            textTransform: 'capitalize',
            marginBottom: '20px'
          }}
          >body style</h2>
          <div>
            <select style={{
              fontSize: '16px',
              color: '#888f9d',
              textTransform: 'capitalize',
              outline: '0 !important',
              boxShadow: 'none',
              border: '1px solid #f8f8f8',
              background: '#f8f8f8',
              height: '60px',
              width:'85%'
            }}>
              <option value="default">style</option>
              <option value="sedan">sedan</option>
              <option value="van">van</option>
              <option value="roadster">roadster</option>
            </select>
          </div>
        </div>
      </div>

      <div className='col-xs-12 col-sm-12 col-md-3 form-table'


        style={{
          marginBottom: '20px',
          textTransform: 'capitalize'


        }}
      >
        <div>
          <h2 style={{
            fontSize: '16px',
            fontWeight: 400,
            textTransform: 'capitalize'

          }}
          >select year</h2>
          <div>
            <select style={{
              fontSize: '16px',
              color: '#888f9d',
              textTransform: 'capitalize',
              outline: '0 !important',
              boxShadow: 'none',
              border: '1px solid #f8f8f8',
              background: '#f8f8f8',
              height: '60px',
              width:'85%'
            }}>
              <option value="default">year</option>
              <option value="2018">2018</option>
              <option value="2017">2017</option>
              <option value="2016">2016</option>
            </select>
          </div>
        </div>
        <div>
          <h2 style={{
            fontSize: '16px',
            fontWeight: 400,
            textTransform: 'capitalize',
            marginBottom: '20px'
          }}
          >body style</h2>
          <div>
            <select style={{
              fontSize: '16px',
              color: '#888f9d',
              textTransform: 'capitalize',
              outline: '0 !important',
              boxShadow: 'none',
              border: '1px solid #f8f8f8',
              background: '#f8f8f8',
              height: '60px',
              width:'85%'
            }}>
              <option value="default">style</option>
              <option value="sedan">sedan</option>
              <option value="van">van</option>
              <option value="roadster">roadster</option>
            </select>
          </div>
        </div>
      </div>
      <div className='col-xs-12 col-sm-12 col-md-3 form-table'


        style={{
          marginBottom: '20px',
          textTransform: 'capitalize'


        }}
      >
        <div>
          <h2 style={{
            fontSize: '16px',
            fontWeight: 400,
            textTransform: 'capitalize'

          }}
          >select year</h2>
          <div>
            <select style={{
              fontSize: '16px',
              color: '#888f9d',
              textTransform: 'capitalize',
              outline: '0 !important',
              boxShadow: 'none',
              border: '1px solid #f8f8f8',
              background: '#f8f8f8',
              height: '60px',
              width:'85%'
            }}>
              <option value="default">year</option>
              <option value="2018">2018</option>
              <option value="2017">2017</option>
              <option value="2016">2016</option>
            </select>
          </div>
        </div>
        <div>
          <h2 style={{
            fontSize: '16px',
            fontWeight: 400,
            textTransform: 'capitalize',
            marginBottom: '20px'
          }}
          >body style</h2>
          <div>
            <select style={{
              fontSize: '16px',
              color: '#888f9d',
              textTransform: 'capitalize',
              outline: '0 !important',
              boxShadow: 'none',
              border: '1px solid #f8f8f8',
              background: '#f8f8f8',
              height: '60px',
              width:'85%'
            }}>
              <option value="default">style</option>
              <option value="sedan">sedan</option>
              <option value="van">van</option>
              <option value="roadster">roadster</option>
            </select>
          </div>
        </div>
      </div>


      <div className='col-xs-12 col-sm-12 col-md-3 form-table'

        style={{

          textTransform: 'capitalize',
          display:'flex',
          justifyContent:'center',
          alignContent:'center',
          marginTop:'auto',
          marginBottom:'auto',
          marginLeft:'-30px'

        }}>
        <div style={{
          textAlign:'center'
        }}>
          <button onClick={() => window.location.href = '#'}
            style={{
              display: 'inline-block',
              width: '160px',
              height: '60px',
              background: '#4e4ffa',
              color: '#fff',
              borderRadius: '3px',
              border: '0',
              fontSize: '16px',
              textTransform: 'capitalize'
            }}>search</button>
        </div>


      </div>


    </div>

  //     </div>
  // </div>
  )
}

export default Form

