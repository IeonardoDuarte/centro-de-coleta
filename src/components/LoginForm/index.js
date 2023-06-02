import Button from "../Button";
import Input from "../Input";
import "./styles.css";

export default function LoginForm() {
  return (
    <>
      <div className="login_form">
        <h1 className="title">Login</h1>
        <form className="form">
          <Input label="E-mail:" type="email"/>
          <Input label="Senha:" type="password"/>
          <Button label="Login" />
          <a className="signup" href="/cadastro">Primeira vez por aqui? Cadastre-se</a>
        </form>
      </div>
    </>
  );
}

{/* <style jsx>{`
.signup_form {
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
  padding: 0 1rem;
}

.title {
  font-size: 2rem;
  text-align: center;
  margin-bottom: 1rem;
}

.form {
  display: flex;
  flex-direction: column;
}

.input_group {
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
}

.label {
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
}

.input {
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 0.5rem;
  font-size: 1rem;
}

.button {
  padding: 0.5rem;
  border: none;
  border-radius: 0.5rem;
  background-color: #34cb79;
  color: #fff;
  font-size: 1rem;
  cursor: pointer;
}
`}</style> */}