import Cart from "./components/Cart/Cart";
import Payment from "./components/Payment/Payment";
import * as C from "./styles";
import { createGlobalStyle } from "styled-components";
function App() {
  const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;
  return (
    <>
      <GlobalStyle />
      <C.ContainerMain>
        <C.ContainerCart>
          <Cart />
        </C.ContainerCart>
        <C.ContainerPayment>
          <Payment />
        </C.ContainerPayment>
      </C.ContainerMain>
    </>
  );
}

export default App;
