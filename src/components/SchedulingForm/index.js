import Button from "../Button";
import Input from "../Input";
import "./styles.css";

export default function SchedulingForm() {
  return (
    <>
      <div className="scheduling_form">
        <h1 className="title">Agendamento</h1>
        <form className="form">
          <fieldset className="input_group">
            <legend className="label">Tipo de coleta:</legend>
            <div className="radio_group">
              <input id="reciclaveis" className="input" type="radio" name="coleta" value="reciclavel" />
              <label for="reciclaveis" className="label">Reciclável</label>
            </div>
            <div className="radio_group">
              <input id="organicos" className="input" type="radio" name="coleta" value="alimento" />
              <label for="organicos" className="label">Alimento</label>
            </div>
          </fieldset>
          <Input label="CEP:" />
          <Input label="Endereço:" />
          <div>
            <label className="label">Estado</label>
            <select className="input">
              <option value="0">Selecione um estado</option>
              <option value="1">São Paulo</option>
              <option value="2">Rio de Janeiro</option>
              <option value="3">Minas Gerais</option>
            </select>
          </div>
          <div>
            <label className="label">Cidade</label>
            <select className="input">
              <option value="0">Selecione uma cidade</option>
              <option value="1">São Paulo</option>
              <option value="2">Rio de Janeiro</option>
              <option value="3">Minas Gerais</option>
            </select>
          </div>
          <label for="pickupDate">Data da coleta:</label>
          <input type="date" id="pickupDate" name="pickupDate"></input>
          <Button label="Agendar" />
        </form>
      </div>
    </>
  )
}