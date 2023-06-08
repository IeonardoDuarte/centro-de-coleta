import "./styles.css";

export default function Input({ label, type = "text", onChange, value, readonly=false }) {
  return (
    <>
      <div className="input_group">
        <label htmlFor="input" className="label">{label}</label>
        <input id="input" className="input" type={type} onChange={onChange} value={value} readOnly={readonly} />
      </div>
    </>
  )
}