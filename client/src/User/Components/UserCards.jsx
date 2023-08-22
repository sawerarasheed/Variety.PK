import React from 'react'
import { Link } from 'react-router-dom'
import './UserCard.css'


export default function UserCards({ name, image, url }) {
    return (
        <div className="col-md-4 p-0 m-0 active-card mt-3">
            <Link to={url} className='text-decoration-none '>
                <div className="card border-0   ">
                    <img src={image} className="card-img-top img-fluid" alt={name} style={{ height: '20vh', objectFit: 'contain' }} />
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                    </div>
                </div>
            </Link>
        </div>
    )
}