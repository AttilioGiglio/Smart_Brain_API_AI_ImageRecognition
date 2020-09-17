import React from 'react'

const ImageLinkForm = ({onInputChange, onButtonChange}) => {
    return (
        <div className='center'>
        <div className='text'>
          <p className='f3'>
            {'This Magic Brain will detect faces in your pictures. Give it a try.'}
          </p>
          <div className='mt4'>
            <div className='form center pa4 br3 shadow-5'>
              <input className='f4 pa2 w-70 center' name='input' type='text' onChange={onInputChange}/>
              <button
                className='w-30 grow f4 link ph3 pv2 dib white bg-light-purple'
                onClick={onButtonChange}
              >Detect</button>
            </div>
          </div>
        </div>
        </div>
      );
    }

export default ImageLinkForm
