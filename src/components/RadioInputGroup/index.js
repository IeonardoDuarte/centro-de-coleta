import RadioInput from "../RadioInput";
import "./styles.css";

export default function RadioInputGroup({onChange}) {
  return (
    <fieldset className="input_group" onChange={onChange}>
      <legend className="label">Tipo de coleta:</legend>
      <RadioInput label="Reciclável" value="reciclavel" />
      <RadioInput label="Alimentos" value="alimentos" />
    </fieldset>
  )
}