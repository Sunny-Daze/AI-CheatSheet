import React from "react";
import "./Panel.css";

function Panel2(props) {
  return (
    <>
      <div
        className="card text-white mb-3 panel1"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        style={{
          "max-width": "18rem",
          backgroundColor: `${props.mode === "light" ? "#0d6efd" : "#011627"}`,
          borderColor: `${props.mode === "light" ? "#0d6efd" : "white"}`,
        }}
      >
        <div
          className="card-header"
          style={{
            borderBottomColor: `${
              props.mode === "light" ? "#0d6efd" : "white"
            }`,
          }}
        >
          Program 2
        </div>
        <div className="card-body">
          <h5 className="card-title">8 Puzzle using A* Search Algo</h5>
          <p className="card-text">
          </p>
        </div>
      </div>

      <div
        className="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Modal title
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
              enim ducimus ea voluptatem nulla. Quidem rerum aliquam eius
              repellendus cupiditate. Nesciunt iusto et repellendus nulla nihil
              cumque quibusdam? Ipsum fugit quis saepe doloribus iste voluptatum
              eaque modi dolore asperiores vero ratione optio quo esse,
              accusantium tempore inventore velit sed dignissimos, ducimus
              pariatur assumenda? Autem architecto labore dignissimos atque
              maiores? Sunt vero quo velit quis! Qui inventore blanditiis esse,
              modi perspiciatis odit quo accusamus sit, nam asperiores pariatur.
              Ea unde atque quo dignissimos aliquam, fugiat delectus vel quae
              dicta numquam officia natus, in quam hic. Consequatur ipsam
              suscipit aliquid animi eveniet? Lorem ipsum dolor sit, amet
              consectetur adipisicing elit. Dolorem, aliquid dignissimos et
              eveniet neque temporibus maxime officiis nihil dolorum modi minima
              obcaecati eligendi, velit iste cum voluptatem ducimus adipisci
              earum, ipsam accusamus suscipit. Doloribus error velit tempora.
              Repudiandae ab quis iusto! Inventore rem modi soluta autem fugit
              quae quibusdam, in excepturi quasi, nemo magni ut repellat
              consequatur illo blanditiis culpa accusamus totam velit fugiat
              eum. Similique maiores culpa officiis magnam natus, deserunt
              dicta, quidem amet voluptas omnis hic impedit. Doloribus adipisci
              omnis maiores fugiat, nobis itaque veritatis cum laborum fuga
              nostrum impedit natus, repudiandae ea nam enim amet deserunt
              laudantium.
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Panel2;
