import * as C from "./styles";

interface IProps {
  product: {
    name: string;
    value: number;
    color: string;
    size: string;
    image: string;
  };
}
const Product = ({ product }: IProps) => {
  return (
    <C.ContainerItem>
      <C.ContainerImage>
        <img src={product.image} />
      </C.ContainerImage>
      <C.ContainerData>
        <C.ContainerPriceAndName>
          <C.Name>{product.name}</C.Name>
          <C.Price>${product.value}.00</C.Price>
        </C.ContainerPriceAndName>
        <C.ContanerSizeAndColor>
          <C.ContainerInfo>
            <C.Label>Tamanho:</C.Label>
            <C.ValueLabel>{product.size.toLocaleUpperCase()}</C.ValueLabel>
          </C.ContainerInfo>
          <C.ContainerInfo>
            <C.Label>Cor:</C.Label>
            <C.ValueLabel>{product.color}</C.ValueLabel>
          </C.ContainerInfo>
        </C.ContanerSizeAndColor>
      </C.ContainerData>
    </C.ContainerItem>
  );
};

export default Product;
