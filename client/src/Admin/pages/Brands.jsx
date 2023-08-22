import React, { useEffect, useState } from 'react'
import BrandModal from '../components/BrandModal'
import axios from 'axios'
import { BiSolidEdit } from 'react-icons/bi'
import { MdDelete } from 'react-icons/md'

export default function Brand() {

    const [brand, setBrand] = useState([])

    useEffect(() => {
        axios.get('/api/get-all-brands')
            .then((json) => setBrand(json.data.Brand))
            .catch((err) => console.log(err))

    }, [])

    const DeleteBrand = (_id) => {
        console.log(_id)
        axios.delete(`/api/delete-brand/${_id}`)
            .then(json => {
                setBrand(json.data.Brands)
            })
            .catch(err => console.log(err))
    }
    const EditBrand = (_id) => {
        console.log(_id)
        axios.put(`/api/update-brand/${_id}`)
            .then(json => {
                setBrand(json.data.Brands)
            })
            .catch(err => console.log(err))
    }


    return (
        <div className="container">
            <div className="d-flex justify-content-between align-items-center bg-dark p-2 my-3 rounded">
                <span className='fs-4 fw-bold text-white'>Brands</span>
                <BrandModal recallData={setBrand} />
            </div>

            <div className="container">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Brand Name</th>
                            <th scope="col">Brand Image</th>
                            <th scope="col">Actions</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            brand.map((val, key) =>
                                <tr key={key}>
                                    <th scope="row">{val._id}</th>
                                    <td>{val.BrandName}</td>
                                    <td><img src={val.BrandImage} className='img-fluid' style={{ height: "5vh", objectFit: "contain" }} alt="" /></td>
                                    <td>
                                        <button className="btn btn-dark mx-1" onClick={EditBrand} ><BiSolidEdit /></button>
                                        <button className="btn btn-dark mx-1" onClick={() => DeleteBrand(val._id)}><MdDelete /></button>
                                    </td>
                                </tr>)
                        }



                    </tbody>
                </table>

            </div>
        </div>
    )
}