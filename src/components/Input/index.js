import "./styles.css";

export default function Input({ label, type="text" }) {
  return (
    <>
      <div className="input_group">
        <label className="label">{label}</label>
        <input className="input" type={type} />
      </div>
    </>
  )
}