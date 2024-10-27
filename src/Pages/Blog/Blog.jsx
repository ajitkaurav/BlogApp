// src/components/CardComponent.js
import React, { useState } from "react";
import ViewBlog from "./ViewBlog";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";

function Blog({ keyName, title, text }) {
  const [showModal, setShowModal] = useState(false);
  const handleClose = () => setShowModal(false);
  const handleSubmit = () => setShowModal;
  const handleShow = () => setShowModal(true);
  console.log("Key keyName", keyName);

  return (
    <div className="col-md-4 mt-2" key={keyName}>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{text}</p>
          <Button
            variant="primary"
            className="btn btn-primary"
            onClick={handleShow}
          >
            View Detail
          </Button>
          <ViewBlog
            show={showModal}
            handleClose={handleClose}
            title={title}
            text={text}
          />
        </div>
      </div>
    </div>
  );
}
export default Blog;
