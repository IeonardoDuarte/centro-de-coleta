import './styles.css';

export default function DatePickerInput({ label, onChange}) {
  return (
    <div className="date_picker">
      <label htmlFor="pickupDate">{label}</label>
      <input type="date" id="pickupDate" name="pickupDate" onChange={onChange} defaultValue={new Date()} value={'2023-06-07'}></input>
    </div>
  )
}