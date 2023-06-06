export default function DatePickerInput({ label, onChange}) {
  return (
    <div className="date_picker">
      <label for="pickupDate">{label}</label>
      <input type="date" id="pickupDate" name="pickupDate" onChange={onChange}></input>
    </div>
  )
}