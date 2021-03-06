import React from "react";

export default function CartItem({ item, value }) {
  const { id, title, img, price, total, count } = item;
  const { incremet, decrement, removeItem } = value;

  return (
    <div className="row my-2 tetx-capitalize text-center">
      <div className="col-10 mx-auto col-lg-2">
        <img
          className="img-fluid"
          src={img}
          alt={title}
          style={{ width: "5rem", height: "5rem" }}
        />
      </div>

      <div className="col-10 mx-auto col-lg-2">
        <span className="d-lg-none">Product: </span>
        {title}
      </div>
      <div className="col-10 mx-auto col-lg-2">
        <span className="d-lg-none">Price: </span>$ {price}
      </div>

      <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
        <div className="d-flex justify-content-center">
          <div>
            <samp
              className="btn btn-black mx-1"
              onClick={() => {
                decrement(id);
              }}
            >
              -
            </samp>

            <span className="btn btn-black mx-1">{count}</span>
            <span
              className="btn btn-black mx-1"
              onClick={() => {
                incremet(id);
              }}
            >
              +
            </span>
          </div>
        </div>
      </div>
      {/*  */}

      <div className="col-10 mx-auto col-lg-2">
        <div
          className="cart-icon"
          onClick={() => {
            removeItem(id);
          }}
        >
          <i className="fas fa-trash"></i>
        </div>
      </div>

      <div className="col-10 mx-auto col-lg-2">
        <strong>Total: $ {total}</strong>
      </div>
    </div>
  );
}
