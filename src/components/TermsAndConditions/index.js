export default function TermsAndConditions({ onAccept }) {
  const [isChecked, setChecked] = useState(false);

  return (
    <div>
      <h2>Termos e Condições</h2>
      <p>Seus termos e condições vão aqui...</p>
      <input type="checkbox" checked={isChecked} onChange={() => setChecked(!isChecked)} />
      <label>Eu aceito os termos e condições</label>
      <button disabled={!isChecked} onClick={onAccept}>Aceitar e continuar</button>
    </div>
  );
}