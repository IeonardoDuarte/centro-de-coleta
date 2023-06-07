import "./styles.css";

export default function SelectInput({ label, options, onChange }) {
  return (
    <div className="select">
      <label className="label">{label}</label>
      <select className="input" onChange={onChange} defaultValue="-1">
        <option disabled value="-1">Selecione uma opção</option>
        {options.map((option, index) => (
          <option key={`${index} - ${option.value}`} value={option.value}>{option.label}</option>
        ))}
      </select>
    </div>
  )
}