export default function SelectInput({ label, options, onChange }) {
  return (
    <div className="select">
      <label className="label">{label}</label>
      <select className="input" onChange={onChange}>
        {options.map((option) => (
          <option value={option.value}>{option.label}</option>
        ))}
      </select>
    </div>
  )
}