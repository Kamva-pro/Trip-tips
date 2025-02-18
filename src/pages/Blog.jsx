import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "../Blog.css"; 

const Blog = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const blogData = { title, description, location, image };
    console.log("Blog Post Data:", blogData);
    alert("Blog post submitted!");
  };

  return (
    <div className="blog-container">
      <h2>We love to hear your experience</h2>

      <form onSubmit={handleSubmit} className="blog-form">
        <input
          type="text"
          placeholder="Enter the title"
          className="blog-input"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

<input
          type="text"
          placeholder="Enter a location"
          className="blog-input"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />

        <ReactQuill
          value={description}
          onChange={setDescription}
          className="blog-editor"
          theme="snow"
          placeholder="Tell us what happened..."
        />

        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="blog-file-input"
        />

        {image && <img src={image} alt="Preview" className="blog-image-preview" />}

        <button type="submit" className="blog-submit-btn">
          Publish Blog Post
        </button>
      </form>
    </div>
  );
};

export default Blog;
