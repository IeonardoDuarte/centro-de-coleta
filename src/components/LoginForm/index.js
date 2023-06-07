'use client';
import { useState } from "react";
import Button from "../Button";
import Input from "../Input";
import "./styles.css";
import { signInWithGoogle } from "../../../util/loginWithGoogle";
import { useRouter } from 'next/navigation';

export default function LoginForm() {
  const router = useRouter();
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <>
      <div className="login_form">
        <h1 className="title">Login</h1>
        <form className="form" onSubmit={handleSubmit}>
          <Input label="E-mail:" type="email" onChange={(e) => setEmail(e.target.value) }/>
          <Input label="Senha:" type="password"/>
          <Button label="Login" />
          <br />
          {/* SIM EU USEI UM FUCKING BR PRA ABRIR ESPAÇO ASDLKJFASKFJSKLFJLSDÇ */}
          <Button label="Login com Google" onClick={(e) => {e.preventDefault(); signInWithGoogle(router)}} />
          <a className="signup" href="/cadastro">Primeira vez por aqui? Cadastre-se</a>
        </form>
      </div>
    </>
  );
}