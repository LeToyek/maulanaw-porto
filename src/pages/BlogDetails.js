import Markdown from "markdown-to-jsx";
import React, { useEffect, useState } from "react";
import Header from "../components/layouts/Header";

function BlogDetails(props) {
  const [content, setContent] = useState("");
  const blogFile = props.match.params.title;

  useEffect(() => {
    import(`../blogs/${blogFile}.md`)
      .then((res) => res.default)
      .then((res) => {
        fetch(res)
          .then((result) => result.text())
          .then((result) => setContent(result));
      });
  }, [content, blogFile]);


  const [toggleMenu, setToggleMenu] = useState(false);

  const headerToggler = (e) => {
    e.preventDefault();
    setToggleMenu(!toggleMenu);
  };

  document.addEventListener("click", function (e) {
    if (e.target.closest(".content")) {
    setToggleMenu(false);
    }
  });

  // document.body.classList.add("dark");
  //Uncomment the above line if you use dark version

  return (
    <>
      <Header
        logoSource="/images/logo.svg"
        toggleMenu={toggleMenu}
        headerToggler={headerToggler}
      />
      <main className={toggleMenu ? "content open" : "content"}>
        <div className="spacer" data-height="96"></div>
        <div className="blog-page-section">
          <div className="container">
            <div className="blog-single shadow-dark p-30">
              <Markdown>{content}</Markdown>
              {/* <div className="mi-blog-details-comments mt-30">
                <Disqus.DiscussionEmbed
                  shortname={disqusShortname}
                  config={disqusConfig}
                />
              </div> */}
            </div>
          </div>
        </div>
        <div className="spacer" data-height="96"></div>
      </main>
    </>
  );
}

export default BlogDetails;
