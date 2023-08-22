import React, { useEffect, useState } from 'react'
import UserCards from '../Components/userCards'
import axios from 'axios'
export default function Category() {
    const [category,setCategory]=useState([])
    useEffect(() => {
        axios.get('/api/get-all-categories')
            .then(json => setCategory(json.data.category))
            .catch(err => alert(err.message))

    }, [])

    return (
        <div className="container my-5">
            <div className="text-center">
                <h2>Category</h2>
                <small className="text-secondary">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum delectus magnam doloribus voluptatibus possimus corrupti aliquid itaque harum debitis ipsa!</small>
            </div>

            <div className="row my-5">
                {
                    category.map((val, key) => <UserCards key={key} image={val.CategoryImage} name={val.CategoryName} url={`/category/${val.CategoryName}`} />)
                }

            </div>
        </div>
    )
}