import "./styles.css";

export default function Button({ label, onClick }) {

  return <div class="container"> <button className="btn" onClick={onClick}>{label}</button></div>
}