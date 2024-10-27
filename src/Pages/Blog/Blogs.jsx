import React, { useState, useEffect } from "react";
import { database } from "../../Config/Appwrite";
import CardComponent from "./Blog";
import { useNavigate } from "react-router-dom";

const Blogs = () => {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await database.listDocuments(
        "67138d53001d3d4ce7dc",
        "67138d5c002319552c39"
      );
      setPosts(response.documents);
    } catch (error) {
      console.error(error);
    }
  };
  const CreateBlog = () => {
    navigate("/Create");
  };

  return (
    <div className="row mt-5">
      <div className=""></div>
      <div className="row">
        <div className="col-11 text-start">
          <h2>Blog Posts</h2>
        </div>
        <div className="col-1 text-right">
          <button className="btn btn-primary" onClick={CreateBlog}>
            Create
          </button>
        </div>
      </div>
      <hr></hr>
      <div className="row mb-2">
        {posts.map((card) => (
          <CardComponent
            keyName={card.$id}
            title={card.title}
            text={card.content}
          />
        ))}
      </div>
    </div>
  );
};

export default Blogs;
