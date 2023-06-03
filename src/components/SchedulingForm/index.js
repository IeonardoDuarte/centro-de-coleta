import Button from "../Button";
import Input from "../Input";
import RadioInput from "../RadioInput";
import RadioInputGroup from "../RadioInputGroup";
import "./styles.css";

export default function SchedulingForm() {
  return (
    <>
      <div className="scheduling_form">
        <h1 className="title">Agendamento</h1>
        <form className="form">
          <RadioInputGroup />
          <Input label="CEP:" />
          <Input label="Endereço:" />
          <div className="select">
            <label className="label">Estado</label>
            <select className="input">
              <option value="0">Selecione um estado</option>
              <option value="1">São Paulo</option>
              <option value="2">Rio de Janeiro</option>
              <option value="3">Minas Gerais</option>
            </select>
          </div>
          <div className="select">
            <label className="label">Cidade</label>
            <select className="input">
              <option value="0">Selecione uma cidade</option>
              <option value="1">São Paulo</option>
              <option value="2">Rio de Janeiro</option>
              <option value="3">Minas Gerais</option>
            </select>
          </div>
          <div className="date_picker">
            <label for="pickupDate">Data da coleta:</label>
            <input type="date" id="pickupDate" name="pickupDate"></input>
          </div>
          <Button label="Agendar" />
        </form>
      </div>
    </>
  )
}