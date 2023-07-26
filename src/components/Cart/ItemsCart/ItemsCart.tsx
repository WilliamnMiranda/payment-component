import React from "react";
import * as C from "./styles";
import { data } from "../../../data/data";
import Product from "../Product/Product";
import IconDiscount from "../../../assets/ticket-discount.svg";
const ItemsCarts = () => {
  return (
    <C.ContainerItems>
      <C.ListProducts>
        {data.map((product) => (
          <Product product={product} />
        ))}
      </C.ListProducts>
      <C.InfosCart>
        <C.ContainerDiscount>
          <C.DiscountTittle> codigo de desconto </C.DiscountTittle>
          <C.ContainerInputDiscountCode>
            <C.IconDiscountCode src={IconDiscount} />
            <C.InputDiscountCode />
            <C.ButtonApply onClick={() => console.log("click")}>
              Aplicar
            </C.ButtonApply>
          </C.ContainerInputDiscountCode>
        </C.ContainerDiscount>

        <C.ContainerInfosTotal>
          <C.ContainerInfoTotal>
            <C.Label> SubTotal </C.Label>
            <C.Value> $56.00 </C.Value>
          </C.ContainerInfoTotal>
          <C.ContainerInfoTotal>
            <C.Label> Frete </C.Label>
            <C.Value> $8.00 </C.Value>
          </C.ContainerInfoTotal>
          <C.ContainerInfoTotal>
            <C.Label> Discount </C.Label>
            <C.Value> -$13.00 </C.Value>
          </C.ContainerInfoTotal>
        </C.ContainerInfosTotal>

        <C.Total>
          <C.Label> Total </C.Label>
          <C.Value> $56.00 </C.Value>
        </C.Total>
      </C.InfosCart>
    </C.ContainerItems>
  );
};

export default ItemsCarts;
