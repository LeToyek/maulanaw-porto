import React from "react";
import { Link } from "react-router-dom";
import * as additional from "../../utils/additional";
import Blog from "../elements/Blog";
import Pagetitle from "../elements/Pagetitle";

const allBlogs = additional.allBlogs.slice(0, 3);

function Blogs() {
  return (
    <section id="blog">
      <div className="container">
        <Pagetitle title="Recent Works" />
        <div className="row blog-wrapper">
          {allBlogs.map((blogItem) => (
            <div className="col-md-4" key={blogItem.id}>
              <Blog blogData={blogItem} />
            </div>
          ))}
        </div>
        <div className="text-center">
          <div className="spacer" data-height="30"></div>
          <Link to="/blogs" className="btn btn-default">
            Show all works
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Blogs;
