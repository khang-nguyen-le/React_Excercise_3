import React, { Component } from "react";
import ProductItem from "./ProductItem";

export default class ProductList extends Component {
  saveProductDetailHandler = (item) => {
    this.props.onChangeProductDetail(item)
  }

  render() {
    let { items } = this.props;

    return (
      <div className="product-list py-5">
        <div className="container">
          <div className="row">
            {items.map((item, index) => {
              return (
                <div className="col-4" key={index}>
                  <ProductItem item={item} onSaveProductDetail={this.saveProductDetailHandler}/>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}
