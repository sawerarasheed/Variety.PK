import React, { useContext, useState } from 'react'
import { GlobalContext } from '../../Context/context'
import Cookies from 'js-cookie'
import axios from 'axios'
import { Link,useNavigate } from 'react-router-dom'
import { toast} from 'react-toastify'

export default function SignUp() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate();

    const loginUser = (e) => {
        e.preventDefault();
        const payload = {
            Name: name,
            Email: email,
            Password: password
        }
        console.log(payload)
        axios.post('/api/signup', payload)
            .then((json) => {
                navigate("/login");
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
                            <label htmlFor="uname" className="form-label">
                                User Name
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="uname"
                                value={name}
                                onChange={(e) => setName(e.target.value)}

                            />
                        </div>
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

                        <button type="submit" className="btn btn-dark">
                            Sign Up
                        </button>
                        <p className="text-center text-white mt-2 mb-0">Already have an account?
                            <Link className='ms-2 text-white' to='/login'>Login</Link>
                        </p>

                    </form>
                </div>


            </div>
        </div>
    )

}

