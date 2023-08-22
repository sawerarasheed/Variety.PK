import axios from 'axios'
import React, { useContext, useState } from 'react'
import { GlobalContext } from '../../Context/context'
import Cookies from 'js-cookie'
import { Link } from 'react-router-dom';
import { toast} from 'react-toastify'

export default function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const { state, dispatch } = useContext(GlobalContext)

  const loginUser = (e) => {
    e.preventDefault();
    const payload = {
      Email: email,
      Password: password
    }
    console.log(payload)
    axios.post('/api/login', payload)
      .then((json) => {

        Cookies.set('token', json.data.token)
        toast.success(json.data.message, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });
        // console.log(json.data)

        dispatch({
          type: "USER_LOGIN",
          token: json.data.token
          

        })

      })
      .catch(err => toast.error(err.message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        }))
  }

  return (
    <div className="container">
      <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh', width: '100%' }}>
        <div className='p-5 bg-dark rounded text-white'>
          <form onSubmit={loginUser}>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <div id="emailHelp" className="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                value={password}
                onChange={(e) => setPassword(e.target.value)}

              />
            </div>

            <button type="submit" className="btn btn-light">
              Login
            </button>
            <p className="text-center text-white mt-2 mb-0">Don't have an account?
             <Link className='ms-2 text-white' to='/signup'>Signup here</Link>
             </p>
           
          </form>
        </div>


      </div>
    </div>
  )

}
