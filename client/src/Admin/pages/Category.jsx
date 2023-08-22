import React, { useEffect, useState } from 'react'
import CategoryModal from '../components/CategoryModal'
import axios from 'axios'
import { BiSolidEdit } from 'react-icons/bi'
import { MdDelete } from 'react-icons/md'

export default function Category() {

    const [category, setCategory] = useState([])

    useEffect(() => {
        axios.get('/api/get-all-categories')
            .then((json) => setCategory(json.data.category))
            .catch((err) => console.log(err))

    }, [])

    const DeleteProduct = (_id) => {
        console.log(_id)
        axios.delete('/api/delete-category', { data: { _id } })
            .then(json => {
                setCategory(json.data.category)
            })
            .catch(err => console.log(err))
    }


    return (
        <div className="container">
            <div className="d-flex justify-content-between align-items-center bg-dark p-2 my-3 rounded">
                <span className='fs-4 fw-bold text-white'>Categories</span>
                <CategoryModal recallData={setCategory} />
            </div>

            <div className="container">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Category Name</th>
                            <th scope="col">Category Image</th>
                            <th scope="col">Actions</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            category.map((val, key) =>
                                <tr key={key}>
                                    <th scope="row">{val._id}</th>
                                    <td>{val.CategoryName}</td>
                                    <td><img src={val.CategoryImage} className='img-fluid' style={{ height: "5vh", objectFit: "contain" }} alt="" /></td>
                                    <td>
                                        <button className="btn btn-dark mx-1"><BiSolidEdit /></button>
                                        <button className="btn btn-dark mx-1" onClick={() => DeleteProduct(val._id)}><MdDelete /></button>
                                    </td>
                                </tr>)
                        }



                    </tbody>
                </table>

            </div>
        </div>
    )
}