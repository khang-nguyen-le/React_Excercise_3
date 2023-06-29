import React, { Component } from "react";
import "./ProductModal.css";

export default class ProductModal extends Component {
  render() {
    let {content} = this.props
    console.log(content)
    return (
      <>
        <div
          class="modal fade"
          id="exampleModal"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-xl">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel">
                  Product - Quick view
                </h1>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">
                <div className="row">
                  <div className="col-5">
                    <div className="modal-img">
                      <img
                        src={content.image}
                        alt="Product Image"
                        className="img-fluid"
                      />
                    </div>
                  </div>
                  <div className="col-7">
                    <div className="modal-text">
                      <h3 className="modal-text__product-name">
                        {content.name}
                      </h3>
                      <p className="modal-text__product-category">
                        Men's Shoes
                      </p>
                      <div className="modal-text__price">${content.price}</div>
                      <div className="modal-text__product-desc row">
                        <div className="modal-text__label col-2">Description: </div>
                        <div className="col-10">
                        {content.description}
                        </div>
                      </div>
                      <div className="modal-text__status row">
                        <div className="modal-text__label col-2">Status:</div>
                        <div className="col-10">Available ({content.quantity})</div>
                      </div>
                      <div className="modal-text__sizes row">
                        <span className="modal-text__label col-2">Size:</span>
                        <div className="modal-text__sizes-box col-10">
                          <div className="row mx-0">
                            <div className="col-2 ps-0">
                              <input
                                type="radio"
                                id="size37"
                                className="btn-check"
                                name="size"
                                checked
                              />
                              <label
                                htmlFor="size37"
                                className="btn btn-outline-dark modal-text__sizes-label"
                              >
                                EU 37
                              </label>
                            </div>
                            <div className="col-2 ps-0">
                              <input
                                type="radio"
                                id="size38"
                                className="btn-check"
                                name="size"
                                autoComplete="off"
                              />
                              <label
                                htmlFor="size38"
                                className="btn btn-outline-dark modal-text__sizes-label"
                              >
                                EU 38
                              </label>
                            </div>
                            <div className="col-2 ps-0">
                              <input
                                type="radio"
                                id="size39"
                                className="btn-check"
                                name="size"
                                autoComplete="off"
                              />
                              <label
                                htmlFor="size39"
                                className="btn btn-outline-dark modal-text__sizes-label"
                              >
                                EU 39
                              </label>
                            </div>
                            <div className="col-2 ps-0">
                              <input
                                type="radio"
                                id="size40"
                                className="btn-check"
                                name="size"
                                autoComplete="off"
                              />
                              <label
                                htmlFor="size40"
                                className="btn btn-outline-dark modal-text__sizes-label"
                              >
                                EU 40
                              </label>
                            </div>
                            <div className="col-2 ps-0">
                              <input
                                type="radio"
                                id="size41"
                                className="btn-check"
                                name="size"
                                autoComplete="off"
                              />
                              <label
                                htmlFor="size41"
                                className="btn btn-outline-dark modal-text__sizes-label"
                              >
                                EU 41
                              </label>
                            </div>
                            <div className="col-2 ps-0">
                              <input
                                type="radio"
                                id="size42"
                                className="btn-check"
                                name="size"
                                autoComplete="off"
                              />
                              <label
                                htmlFor="size42"
                                className="btn btn-outline-dark modal-text__sizes-label"
                              >
                                EU 42
                              </label>
                            </div>
                            <div className="col-2 ps-0">
                              <input
                                type="radio"
                                id="size43"
                                className="btn-check"
                                name="size"
                                autoComplete="off"
                              />
                              <label
                                htmlFor="size43"
                                className="btn btn-outline-dark modal-text__sizes-label"
                              >
                                EU 43
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-outline-dark">
                  More Detail
                </button>
                <button type="button" class="btn btn-dark">
                  Add To Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
