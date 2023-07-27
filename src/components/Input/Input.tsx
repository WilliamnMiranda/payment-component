import React, { ChangeEvent } from "react";
import * as C from "./styles";

interface IProps {
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  label: string;
  placeholder: string;
}

const Input = ({ value, onChange, label, placeholder }: IProps) => {
  return (
    <C.ContainerInput>
      <label> {label} </label>
      <C.InputText
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </C.ContainerInput>
  );
};

export default Input;
