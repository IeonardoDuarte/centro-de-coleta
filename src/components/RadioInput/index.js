export default function RadioInput({ label, value }) {
  return (
    <div className="radio_group">
      <input id={value} className="radio_input" type="radio" name="coleta" value={value} />
      <label htmlFor={value} className="radio_label">{label}</label>
    </div>
  )
}