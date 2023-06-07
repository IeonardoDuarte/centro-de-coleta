export default function RadioInput({ label, value }) {
  return (
    <div className="radio_group">
      <input id={value} className="input" type="radio" name="coleta" value={value} />
      <label htmlFor={value} className="label">{label}</label>
    </div>
  )
}