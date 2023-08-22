import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { toast} from 'react-toastify'
import { BiSolidEdit } from 'react-icons/bi'

function UpdateOrder({ id , recallData}) {

  const [show, setShow] = useState(false);
  const [orderval, setOrderVal] = useState({})
  const [orderMeassage, setOrderMessage] = useState("")
  const [orderStatus, setOrderStatus] = useState("")

  const handleClose = () => setShow(false);
  const handleShow = () => {
    axios.get(`/api/track-order/${id}`)
      .then(json => {
        setOrderMessage(json.data.order.StatusMessage)
        setOrderStatus(json.data.order.status)
        setOrderVal(json.data.order)
        setShow(true)
      })
      .catch(err => console.log(err))

  };
  const UpdateOrderValue = (e) => {
    e.preventDefault()
    const payload = { _id: id, StatusMessage: orderMeassage, status: orderStatus }
    console.log({ payload })
    const config = {
      url: "/api/update-order", data: payload, method:"put"
    }
    axios(config)
    .then(json=>{
      recallData(json.data.orders)
      setShow(false)
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
    <>

      <button className="btn btn-dark mx-1" onClick={handleShow}><BiSolidEdit /></button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update Order Status</Modal.Title>
        </Modal.Header>
        <Modal.Body>


          <div>
            <form onSubmit={UpdateOrderValue}>
              <FloatingLabel controlId="floatingTextarea2" label="Message">
                <Form.Control value={orderMeassage} onChange={(e) => setOrderMessage(e.target.value)}
                  as="textarea"
                  placeholder="Leave a comment here"
                  style={{ height: '100px' }}
                />
              </FloatingLabel>
              <FloatingLabel controlId="floatingTextarea2" label="Status">
                <Form.Control value={orderStatus} onChange={(e) => setOrderStatus(e.target.value)}

                  placeholder="Leave a comment here"
                  style={{ height: '100px' }}
                />
              </FloatingLabel>
              <button className="btn bg-dark text-white mt-3">Submit</button>
            </form>

          </div>


        </Modal.Body>

      </Modal>
    </>
  );
}

export default UpdateOrder;