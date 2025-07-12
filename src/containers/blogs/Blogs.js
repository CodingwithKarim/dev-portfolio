import React, { useState, useEffect, useContext } from "react";
import "./Blog.scss";
import { blogSection } from "../../portfolio";
import { Fade } from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function Blogs({ username }) {
  const { isDark } = useContext(StyleContext);
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    fetch(`https://postoblog.duckdns.org/profile/${username}?page=${page}&limit=3`, {
      headers: { "Accept": "application/json" },
      credentials: "include",
    })
      .then((res) => {
        if (!res.ok) throw new Error(res.statusText);
        return res.json();
      })
      .then((data) => {
        const previews = data.posts.map((p) => ({
          url: `https://postoblog.duckdns.org/blogpost/${p.id}`,
          title: p.title,
          description: p.content,
        }));

        setPosts((prev) => [...prev, ...previews]);
        if (previews.length < 3) setHasMore(false);
      })
      .catch((err) => {
        console.error("Failed to load blog previews:", err);
        if (page === 1) setPosts(blogSection.blogs);
        setHasMore(false);
      });
  }, [username, page]);

  if (!blogSection.display || posts.length === 0) return null;

  return (
    <Fade bottom duration={1000} distance="20px">
      <section className="blog-wrapper" id="blogs" data-theme={isDark ? "dark" : "light"}>
        <div className="blog-header">
          <h1 className="blog-title">{blogSection.title}</h1>
          <p className="blog-subtitle">{blogSection.subtitle}</p>
        </div>

        <div className="blog-grid">
          {posts.map((blog, i) => (
            <div key={i} className="blog-card">
              <div className="blog-content">
                <h3>{blog.title}</h3>
                <p className="blog-desc">{blog.description}</p>
              </div>
              <a
                href={blog.url}
                target="_blank"
                rel="noopener noreferrer"
                className="read-more"
              >
                Read More →
              </a>
            </div>
          ))}
        </div>

        {hasMore && (
          <div className="see-more-container">
            <button
              className={`see-more-button ${isDark ? "dark" : "light"}`}
              onClick={() => setPage((prev) => prev + 1)}
            >
              Load More
            </button>
          </div>
        )}
      </section>
    </Fade>
  );
}
