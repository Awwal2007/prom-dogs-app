import React, { useState } from 'react';
import './ManageBlog.css';

const AdminManageBlogs = () => {
  const [blogs, setBlogs] = useState([
    { id: 1, title: 'First Blog', image: 'https://via.placeholder.com/300', content: 'Hello world' },
    { id: 2, title: 'Second Blog', image: 'https://via.placeholder.com/300', content: 'Another blog post' }
  ]);

  const handleDelete = (id) => {
    const updatedBlogs = blogs.filter(blog => blog.id !== id);
    setBlogs(updatedBlogs);
  };

  return (
    <div className="manage-container">
      <h2>Manage Blogs</h2>
      <div className="blog-list">
        {blogs.map(blog => (
          <div key={blog.id} className="blog-card">
            <img src={blog.image} alt={blog.title} />
            <h3>{blog.title}</h3>
            <p>{blog.content}</p>
            <button onClick={() => handleDelete(blog.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminManageBlogs;
