import React from 'react';
import './Blog.css';

// Sample blog post data
const blogs = Array.from({ length: 20 }).map((_, index) => ({
  id: index + 1,
  title: `Blog Post #${index + 1}`,
  excerpt: "This is a short preview of the blog post. Learn more about puppies, care tips, and more!",
  image: `https://source.unsplash.com/400x300/?puppy,dog&sig=${index}`
}));

const Blog = () => {
  return (
    <div className="blog-page">
      <h1 style={{
        color: 'white'
      }}>Our Blog</h1>
      <div className="blog-grid">
        {blogs.map((blog) => (
          <div key={blog.id} className="blog-card">
            <img src={blog.image} alt={blog.title} />
            <div className="blog-content">
              <h3>{blog.title}</h3>
              <p>{blog.excerpt}</p>
              <a href={`/blog/${blog.id}`}>Read More →</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
