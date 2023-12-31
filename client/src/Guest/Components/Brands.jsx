import React, { useEffect, useState } from 'react'
import GuestCards from './GuestCards'
import axios from 'axios'

export default function Brands() {
    const [brand,setBrand]=useState([])
    useEffect(() => {
        axios.get('/api/get-all-brands')
            .then(json => setBrand(json.data.Brand))
            .catch(err => alert(err.message))

    }, [])
    return (
        <div className="container my-5">
            <div className="text-center">
                <h2 className='text-theme'>Brands</h2>
                <small className="text-secondary">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum delectus magnam doloribus voluptatibus possimus corrupti aliquid itaque harum debitis ipsa!</small>
            </div>

            <div className="row my-5">
                {
                    brand.map((val, key) => <GuestCards key={key} image={val.BrandImage} name={val.BrandName} />)
                }

            </div>
        </div>
    )
}
