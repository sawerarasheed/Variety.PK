import React, { useEffect, useState } from 'react'
import UserCards from '../Components/userCards'
import axios from 'axios'
import { useParams } from 'react-router-dom'

export default function ProductsByCategory() {
  const { CategoryName } = useParams()
  const [products, setProducts] = useState([])
  useEffect(() => {
    axios.get(`/api/get-product-by-category/${CategoryName}`)
      .then(json => setProducts(json.data.products))
      .catch(err => console.log(err))
  }, [])

  return (
    <div className="container my-5">
      <div className="text-center">
        <h2>Products-{CategoryName}</h2>
        <small className="text-secondary">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum delectus magnam doloribus voluptatibus possimus corrupti aliquid itaque harum debitis ipsa!</small>
      </div>
      {
        products.length > 0 && (<div className="row my-5">
          {
            products.map((val, key) => <UserCards key={key} image={val.thumbnail} name={val.productName} url={`/products/${val._id}`} />)
          }

        </div>)
      }
{products.length==0 && (
  <div className='d-flex justify-content-center align-items-center'><img className='img-fluid ' src="https://www.amreeya.com/img/no-product-found.png" alt="" /></div>
)}
    </div>
  )
}
