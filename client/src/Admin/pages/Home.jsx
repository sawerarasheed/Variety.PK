import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import './Home.css'
import { BiSolidBadgeCheck } from 'react-icons/bi'
import { BiCategoryAlt } from 'react-icons/bi'
import {BsBook} from 'react-icons/bs'
import {MdProductionQuantityLimits} from 'react-icons/md'
import axios from 'axios';


const CustomCard = ({ Name, Quantity, Icon, Color }) => {
  const cardPercentage = {
    position: "absolute",
    top: 0,
    left: 0,
    backgroundColor: `${Color}`,
    width: `${Quantity}%`,
    height: "100%",
    borderRadius: "0.25rem"
  }
  return (
    <div className="customcard text-white" style={{ backgroundColor: `${Color}` }}>
      <div className="d-flex align-items-center justify-content-between ">
        <span>
          {Icon}
        </span>
        <span>
          {Name}
        </span>

        {/* <p className="percent">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1792 1792"
            fill="currentColor"
            height={20}
            width={20}
          >
            <path d="M1408 1216q0 26-19 45t-45 19h-896q-26 0-45-19t-19-45 19-45l448-448q19-19 45-19t45 19l448 448q19 19 19 45z"></path>
          </svg>{" "}
          20%
        </p> */}
      </div>
      <div className="data">
        <p className='text-white'>{Quantity}</p>
        <div className="range border border-white border-2">
          <div className="fill" style={cardPercentage}></div>
        </div>
      </div>
    </div>


  )

}
function Home() {
  const [brand, setBrand] = useState(0)
  const [category, setCategory] = useState(0)
  const [product, setProduct] = useState(0)
  const [order, setOrder] = useState(0)
  const [users,setUsers]=useState([])

  useEffect(() => {
    axios.get('/api/get-all-brands')
      .then((json) => {
        setBrand(json.data.Brand.length)
        axios.get('/api/get-all-categories')
          .then((json) => {
            setCategory(json.data.category.length)
            axios.get('/api/get-all-products')
              .then((json) => {
                setProduct(json.data.products.length)
                axios.get('/api/get-all-orders')
                  .then((json) => {
                    setOrder(json.data.orders.length)
                    axios.get('/api/getalluser')
                    .then(json=>setUsers(json.data.users))
                    .catch((err) => console.log(err))
                  })
                  .catch((err) => console.log(err))
              })
              .catch((err) => console.log(err))
          })
          .catch((err) => console.log(err))
      })
      .catch((err) => console.log(err))
  }, [])

  const data = [
    {
      Name: 'Brand',
      Quantity: brand,
      Icon: <BiSolidBadgeCheck />,
      Color: '#242726'
    },
    {
      Name: 'Category',
      Quantity: category,
      Icon: <BiCategoryAlt />,
      Color: '#2e3233'
    },
    {
      Name: 'Order',
      Quantity: order,
      Icon: <BsBook />,
      Color: '#263238'
    },
    {
      Name: 'Products',
      Quantity: product,
      Icon: <MdProductionQuantityLimits />,
      Color: '#26324a'
    }
  ]

  return (
    <div>


      <div className=" row my-5 ">

        {
          data.map((val, key) => <div key={key} className="col-md-3"><CustomCard Name={val.Name} Quantity={val.Quantity} Icon={val.Icon} Color={val.Color} /></div>)
        }


      </div>
      <div className="container">
        <div className="d-flex justify-content-between align-items-center bg-dark p-2 my-3 rounded">
          <span className='fs-4 fw-bold text-white'>Users</span>
        </div>

        <div className="container">
          <table className="table">
            <thead>
              <tr>
                <th scope="col"> ID</th>
                <th scope="col"> Name</th>
                <th scope="col"> Email</th>
                <th scope="col">Role</th>

              </tr>
            </thead>
            <tbody>
              {
                users.map((val, key) =>
                  <tr key={key}>
                    <th scope="row">{val._id}</th>
                    <td>{val.Name}</td>
                    <td>{val.Email}</td>
                    <td>{val.Role}</td>
                   
                  </tr>)
              }



            </tbody>
          </table>

        </div>
      </div>
    </div>
  )
}

export default Home