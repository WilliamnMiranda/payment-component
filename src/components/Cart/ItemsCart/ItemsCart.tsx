import React from "react";
import * as C from "./styles";
import { data } from "../../../data/data";
import Product from "../Product/Product";
const ItemsCarts = () => {
  return (
    <C.ContainerItems>
      <C.ListProducts>
        {data.map((product) => (
          <Product product={product} />
        ))}
      </C.ListProducts>
      <C.InfosCart>
        <C.ContainerDiscount></C.ContainerDiscount>
      </C.InfosCart>
    </C.ContainerItems>
  );
};

export default ItemsCarts;
