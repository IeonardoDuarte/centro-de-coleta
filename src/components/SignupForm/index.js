"use client";
import { useRouter } from "next/navigation";
import handleSignUp from "../../../util/handleSignUp";
import Button from "../Button";
import Input from "../Input";
import "./styles.css";
import { useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { signInWithGoogle } from "../../../util/loginWithGoogle";

export default function SignupForm() {
  const router = useRouter();
  const [uid, setUid] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [name, setName] = useState('');
  const [CPF, setCPF] = useState('');
  const [acceptedTermsAndConditions, setAcceptedTermsAndConditions] = useState(false);

  const [isSigningUpWithGoogle, setIsSigningUpWithGoogle] = useState(false);

  useEffect(() => {
    const uid = sessionStorage.getItem("uid");
    const email = sessionStorage.getItem("email");

    if (uid) {
      setUid(uid);
      sessionStorage.removeItem("uid");
    }

    if (email) {
      setEmail(email);
      sessionStorage.removeItem("email");
    }
  }, [isSigningUpWithGoogle]);

  function handleSubmit(e) {
    e.preventDefault();

    if (name && CPF && email && acceptedTermsAndConditions && (uid || (password && passwordConfirmation))) {
      if (uid) {
        handleSignUp(userInfo, router);
        return;
      } else if (password !== passwordConfirmation) {
        alert("As senhas não coincidem!");
        return;
      } else if (password.length < 6) {
        alert("A senha deve ter no mínimo 6 caracteres!");
        return;
      } else {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          userInfo.uid = user.uid;
          handleSignUp(userInfo, router);
        })
        .catch((error) => {
          const errorMessage = error.message;
          alert(errorMessage);
        });
      }
    } else alert("Preencha todos os campos!");
  }

  const userInfo = {
    uid,
    email,
    name,
    CPF,
    acceptedTermsAndConditions
  };

  return (
    <>
      <div className="signup_form">
        <h1 className="title">Cadastro</h1>
        <form className="form">
          <Input label="Nome" onChange={(e) => setName(e.target.value)} />
          <Input label="CPF" onChange={(e) => setCPF(e.target.value)} />
          <Input label="E-mail" type="email" value={email} onChange={(e) => setEmail(e.target.value)} readonly={uid ? true : false}/>
          {!uid && <Input label="Senha" type="password" onChange={(e) => setPassword(e.target.value)} />}
          {!uid && <Input label="Repita a senha" type="password" onChange={(e) => setPasswordConfirmation(e.target.value)} />}
          <div className="input_group checkbox">
            <input type="checkbox" onChange={(e) => setAcceptedTermsAndConditions(e.target.checked)} />
            <label className="label terms">Eu li e concordo com os <a href="/termos-condicoes">Termos de Uso</a> e <a href="/politica-privacidade">Política de Privacidade</a> </label>
          </div>
          {!uid && (
            <>
              <button className="btn" onClick={(e) => { e.preventDefault(); signInWithGoogle(router, () => setIsSigningUpWithGoogle(true))}}>
                <i className="fab fa-google"></i>
                Login com o Google
              </button>
              <br />
            </>
          )}
          <Button label="Cadastrar" onClick={handleSubmit} />
          <br /><br />
        </form>
      </div>
    </>
  );
}