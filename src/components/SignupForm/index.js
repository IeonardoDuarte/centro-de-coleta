import Button from "../Button";
import Input from "../Input";
import "./styles.css";

export default function SignupForm() {
  return (
    <>
      <div className="signup_form">
        <h1 className="title">Cadastro</h1>
        <form className="form">
          <Input label="Nome:" />
          <Input label="CPF:" />
          <Input label="E-mail:" type="email"/>
          <Input label="Senha:" type="password"/>
          <Input label="Repita a senha:" type="password"/>
          <div className="input_group checkbox">
            <input className="input" type="checkbox" />
            <label className="label">Eu li e concordo com os termos de uso e política de privacidade.</label>
          </div>
          <Button label="Cadastrar" />
        </form>
      </div>
    </>
  );
}