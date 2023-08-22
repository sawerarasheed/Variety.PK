import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';
import Table from 'react-bootstrap/Table';

import { AiFillEye } from 'react-icons/ai'

function OrderDetails({ id }) {
  const [show, setShow] = useState(false);
  const [orderval, setOrderVal] = useState({})

  const handleClose = () => setShow(false);
  const handleShow = () => {
    axios.get(`/api//track-order/${id}`)
      .then(json => {
        setOrderVal(json.data.order)
        setShow(true)
      })
      .catch(err => console.log(err))

  };

  return (
    <>

      <button className="btn btn-dark mx-1" onClick={handleShow}><AiFillEye /></button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <div className="my-5">
            Customer Name : {orderval.customerName}
          </div>
          <div className="my-5">
            Customer Address : {orderval.customerAddress}
          </div>

          <div className="my-5">
            Customer Contact : {orderval.customerContact}
          </div>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Product Name</th>
                <th>Price</th>
                <th>Quantity</th>
              </tr>
            </thead>
            <tbody>
              {
            orderval?.order?.map((val, key) => <tr key={key}>
                  <td>{key+1}</td>
                  <td>{val.productName}</td>
                  <td>{val.price}</td>
                  <td>{val.quantity}</td>
                </tr>)
              }



              {/* {
                orderval?.order.map((val, key) => <tr key={key}>
                  <td>1</td>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>)
              } */}


            </tbody>
          </Table>


        </Modal.Body>

      </Modal>
    </>
  );
}

export default OrderDetails;