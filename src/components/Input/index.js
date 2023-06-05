import "./styles.css";

export default function Input({ label, type="text", onChange, value, readonly=false }) {
  return (
    <>
      <div className="input_group">
        <label className="label">{label}</label>
        <input className="input" type={type} onChange={onChange} value={value} readOnly={readonly} />
      </div>
    </>
  )
}