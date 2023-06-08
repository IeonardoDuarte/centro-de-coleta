'use client';
import { useState } from "react";
import Button from "../Button";
import Input from "../Input";
import "./styles.css";
import { signInWithGoogle } from "../../../util/loginWithGoogle";
import { useRouter } from 'next/navigation';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export default function LoginForm() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // login with email and password in firebase
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;

        // coisa de pleno:
        if (user.email == "admin@centrodecoleta.com.br") {
          router.push('/dashboard');
        } else {
          router.push('/agendamento');
        }
      })
  }

  return (
    <>
      <div className="login_form">
        <h1 className="title">Login</h1>
        <form className="form" onSubmit={handleSubmit}>
          <Input label="E-mail:" type="email" onChange={(e) => setEmail(e.target.value)} />
          <Input label="Senha:" type="password" onChange={(e) => setPassword(e.target.value)} />
          <Button label="Login" onClick={handleSubmit} />
          <br />
          {/* SIM EU USEI UM FUCKING BR PRA ABRIR ESPAÇO ASDLKJFASKFJSKLFJLSDÇ */}
          <button className="btn" onClick={(e) => { e.preventDefault(); signInWithGoogle(router) }}>
            <i className="fab fa-google"></i>
            Login com o Google
          </button>
          <a className="signup" href="/cadastro">Primeira vez por aqui? Cadastre-se</a>
        </form>
      </div>
    </>
  );
}