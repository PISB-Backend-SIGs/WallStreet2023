import React from "react";

const NewsCard = () => {
  return (
    <div className="container">
      <div className="d-flex">
        <div
          class="card m-3 border-0 shadow-lg "
          style={{ backgroundColor: "#3d3d4d", borderRadius: "10px" }}
        >
          <div class="card-body">
            <h5 class="card-title mb-4" style={{ color: "#5eb5f8" }}>
              News title
            </h5>
            <p class="card-text  mb-4" style={{ color: "#fefdff" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil in
              impedit earum quam labore odio consequatur, itaque porro aperiam
              illo inventore, a veniam beatae totam ea reiciendis, animi vero
              ullam ...
            </p>
            <a href="#" class="card-link text-muted">
              Read more
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
