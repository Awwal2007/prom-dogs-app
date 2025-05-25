import React, { useState } from 'react';
import './AddBlog.css';

const AdminAddBlog = () => {
  const [blog, setBlog] = useState({
    title: '',
    image: '',
    content: ''
  });

  const handleChange = (e) => {
    setBlog({ ...blog, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('New blog submitted:', blog);
    alert('Blog added successfully!');
    setBlog({ title: '', image: '', content: '' });
  };

  return (
    <div className="admin-form-container">
      <h2>Add New Blog Post</h2>
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input name="title" value={blog.title} onChange={handleChange} required />
        
        <label>Image URL</label>
        <input name="image" value={blog.image} onChange={handleChange} required />
        
        <label>Content</label>
        <textarea name="content" value={blog.content} onChange={handleChange} rows="5" required />

        <button type="submit">Submit Blog</button>
      </form>
    </div>
  );
};

export default AdminAddBlog;
