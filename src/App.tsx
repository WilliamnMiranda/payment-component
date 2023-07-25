import ItemsCarts from "./components/ItemsCarts";
import * as C from "./styles";
function App() {
  return (
    <C.ContainerMain>
      <C.ContainerCart>
        <C.Header> Logo </C.Header>
        <ItemsCarts />
      </C.ContainerCart>
      <C.ContainerPayment></C.ContainerPayment>
    </C.ContainerMain>
  );
}

export default App;
