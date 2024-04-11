/*Products Shopping Page */

import useState from "react";
import "./Shop.css";
import Product from "./Product";
import { PRODUCTS } from "../../products";

export function Shop() {
  return (
    <div className="shop">
      <div className="shopTitle">
        <h1>Synth Shop</h1>
      </div>

      <div className="products">
        {PRODUCTS.map((product) => (
          <Product key={product.id} data={product} />
        ))}
      </div>
    </div>
  );
}
