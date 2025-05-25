import React from 'react';
import { Link } from 'react-router-dom';
import './Admin.css';

const AdminDashboard = () => {
  return (
    <div className="admin-dashboard">
      <h1>Admin Dashboard</h1>
      <div className="admin-links">
        <Link to="/admin/add-blog" className="admin-link">➕ Add New Blog</Link>
        <Link to="/admin/manage-blogs" className="admin-link">🛠 Manage Blogs</Link>
      </div>
    </div>
  );
};

export default AdminDashboard;
