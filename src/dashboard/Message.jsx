import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Sidebar from './Sidebar';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const Message = () => {
    const [message, setMessage] = useState([]);
    const [selectedMessage, setSelectedMessage] = useState(null);

    const handleDelete = (id) => {
        if (window.confirm("Are you sure you want to delete this message?")) {
            axios.delete(`http://192.168.12.108:8001/real_estate/contact/${id}/`)
                .then((res) => {
                    console.log(res.data);
                    // Refresh the message list after deletion
                    setMessage(prevMessages => prevMessages.filter(msg => msg.id !== id));
                })
                .catch((err) => {
                    console.log(err);
                });
            console.log(`Delete message with id: ${id}`);
        }
    };

    useEffect(() => {
        axios.get('http://192.168.12.108:8001/real_estate/contact/')
            .then((res) => {
                console.log(res.data);
                setMessage(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    console.log(message);

    const handleView = (msg) => {
        setSelectedMessage(msg);
    };

    const handleCloseModal = () => {
        setSelectedMessage(null);
    };

    return (
        <>
            <div className='container-fluid mt-5' stye={{border:"2px solid red"}}>
                <div className='row'>
                    <div className='col-lg-3'>
                        <Sidebar />
                    </div>
                    <div className='col-lg-8'>
                        <h1>Messages</h1>
                        <table className='table table-bordered' style={{ fontSize: "15px" }}>
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Subject</th>
                                    <th>Message</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {message.map((msg, index) => (
                                    <tr key={index}>
                                        <td>{msg.id}</td>
                                        <td>{msg.first_name}</td>
                                        <td>{msg.email}</td>
                                        <td>{msg.subject}</td>
                                        <td>{msg.message}</td>
                                        <td>
                                            <button className="btn btn-sm btn-warning me-3 fs-5" onClick={() => handleView(msg)}>
                                                View
                                            </button>
                                            <button className="btn btn-sm btn-danger ml-2 fs-5" onClick={() => handleDelete(msg.id)}>
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            {/* Modal */}
            {selectedMessage && (
                <div className="modal show" tabIndex="-1" style={{ display: 'block' }}>
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header" style={{ backgroundColor: '#eef3f0' }}>
                                <h5 className="modal-title">Message Details</h5>
                                <button type="button" className="btn-close" aria-label="Close" onClick={handleCloseModal}></button>
                            </div>
                            <div className="modal-body">
                                <p><strong>ID:</strong> {selectedMessage.id}</p>
                                <p><strong>Name:</strong> {selectedMessage.first_name}</p>
                                <p><strong>Email:</strong> {selectedMessage.email}</p>
                                <p><strong>Subject:</strong> {selectedMessage.subject}</p>
                                <p><strong>Message:</strong> {selectedMessage.message}</p>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" onClick={handleCloseModal}>Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default Message;
