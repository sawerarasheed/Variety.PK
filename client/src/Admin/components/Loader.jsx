import React from 'react'
import Spinner from 'react-bootstrap/Spinner';


export default function Loader() {
    return (
        <div style={{ display: 'flex', justifyContent:'center', alignItems:'center', position: 'absolute', top: '0', zIndex: '3', margin:'2%', height: '90%', width: '90%' }}>
               <Spinner animation="grow" />
               <div className='ms-3'>Loading</div>
        </div>
    )
}
