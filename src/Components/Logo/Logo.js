import React from 'react';
import Tilt from 'react-tilt';
import Brain from './Brain.png';
import './Logo.css'

const Logo = () => {
    return (
        <div className='ma4 mt0'>
            <Tilt className="Tilt br shadow-1" options={{ max: 55 }} style={{ height: 150, width: 150 }} >
                <div className="icon Tilt-inner pa3"><img style={{paddingTop: '8px', paddingLeft: '6px'}} alt='logo' src={Brain}/> </div>
            </Tilt>
        </div>
    )
}

export default Logo
