import React, { Component } from "react";
import "./ProductItem.css";

export default class ProductItem extends Component {
  render() {
    let { item } = this.props;
    return (
      <>
        <div className="product-card">
          <div className="product-card__image-box">
            <img
              src={item.image}
              alt="shoes"
              className="product-card__image img-fluid"
            />
          </div>
          <div className="product-card__info">
            <h2 className="product-card__title">{item.name}</h2>
            <p className="product-card__subtitle">Men's Shoes</p>
            <p className="product-card__short-desc">{item.description}</p>
            <p className="product-card__price">{`$${item.price}`}</p>
            <a
              href="#"
              className="product-card__btn btn btn-sm btn-outline-dark"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
              onClick={() => {
                this.props.onSaveProductDetail(item)
              }}
            >
              <i className="fa fa-eye" /> Quick View
            </a>
          </div>
        </div>
      </>
    );
  }
}
