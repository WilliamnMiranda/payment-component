import { useState } from "react";
import * as C from "./styles";
import ArrowUp from "../../assets/arrow-up.svg";
import ArrowDown from "../../assets/arrow-down.svg";
import ItemsCart from "./ItemsCart/ItemsCart";
function Cart() {
  const [open, setOpen] = useState(true);
  console.log(setOpen);
  return (
    <div>
      <C.HeaderWeb> Web </C.HeaderWeb>
      <C.HeaderMobile>
        <C.TextHeader>
          {open ? "Esconder" : "Mostrar"}
          resumo do pedido
          {open ? <img src={ArrowUp} /> : <img src={ArrowDown} />}
        </C.TextHeader>
        <C.ValueTotalCart>$51.00</C.ValueTotalCart>
      </C.HeaderMobile>
      {open && <ItemsCart />}
    </div>
  );
}

export default Cart;
