import { useState } from "react";
import Input from "../Input/Input";
import * as C from "./styles";
import Visa from "../../assets/visa.svg";
import Paypal from "../../assets/paypal.svg";
const Payment = () => {
  const [value, setValue] = useState("");
  return (
    <C.ContainerForm>
      <Input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        label="Email"
        placeholder="teste"
      />
      <Input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        label="Telefone"
        placeholder="teste"
      />

      <C.ContainerSelectedCard>
        <C.Label>Metodo de pagamento</C.Label>
        <C.ContainerDualInput>
          <C.DualInputs>
            <C.ContainerInputCard>
              <C.ContainerRadioInputCard>
                <input type="radio" />
              </C.ContainerRadioInputCard>
              <C.ContainerInfoCard>
                <C.NumberCard>**** 8304</C.NumberCard>
                <C.NameTypeCard>Visa</C.NameTypeCard>
              </C.ContainerInfoCard>
              <C.ImageSvgCard>
                <img src={Visa} />
              </C.ImageSvgCard>
            </C.ContainerInputCard>
          </C.DualInputs>
          <C.DualInputs>
            <C.ContainerInputCard>
              <C.ContainerRadioInputCard>
                <input type="radio" />
              </C.ContainerRadioInputCard>
              <C.ContainerInfoCard>
                <C.NumberCard>**** 8304</C.NumberCard>
                <C.NameTypeCard>Visa</C.NameTypeCard>
              </C.ContainerInfoCard>
              <C.ImageSvgCard>
                <img src={Paypal} />
              </C.ImageSvgCard>
            </C.ContainerInputCard>
          </C.DualInputs>
        </C.ContainerDualInput>
      </C.ContainerSelectedCard>
      <Input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        label="Nome no cartao"
        placeholder="teste"
      />
      <Input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        label="Numero"
        placeholder="teste"
      />

      <C.ContainerDualInput>
        <C.DualInputs>
          <Input
            value={value}
            onChange={(e) => setValue(e.target.value)}
            label="Cep"
            placeholder="teste"
          />
        </C.DualInputs>
        <C.DualInputs>
          <Input
            value={value}
            onChange={(e) => setValue(e.target.value)}
            label="Cidade"
            placeholder="teste"
          />
        </C.DualInputs>
      </C.ContainerDualInput>

      <C.ContainerSubmitAndCheckBox>
        <C.ContainerCheckBox>
          <C.CheckBox />
          <label> O endereço de cobrança é o mesmo do envio </label>
        </C.ContainerCheckBox>
        <C.ButtonSubmit> Pagar $51.00</C.ButtonSubmit>
      </C.ContainerSubmitAndCheckBox>
    </C.ContainerForm>
  );
};

export default Payment;
