import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { notifySuccess } from "../../Common/Notification";
import { database } from "../../Config/Appwrite";

function Create() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const nagivate = useNavigate();
  const createPost = async () => {
    try {
      await database.createDocument(
        "67138d53001d3d4ce7dc",
        "67138d5c002319552c39",
        "unique()",
        {
          title,
          content,
        }
      );
      setTitle("");
      setContent("");
      notifySuccess("Blog created Successfully");
    } catch (error) {
      notifyError(error);
    }
  };
  const GotoBlogs = () => {
    nagivate("/Blogs");
  };

  return (
    <div className="row justify-content-center">
      <div className="col-md-8 mt-3">
        <h3 className="text-start">Blog</h3>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Title</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Content</label>
          <textarea
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
        <div className="d-flex gap-2 mt-4">
          <button className="btn btn-primary" onClick={createPost}>
            Post
          </button>
          <button className="btn btn-secondary" onClick={GotoBlogs}>
            Back
          </button>
        </div>
      </div>
    </div>
  );
}

export default Create;
