"use client";
import { useRouter } from "next/navigation";
import handleSignUp from "../../../util/handleSignUp";
import Button from "../Button";
import Input from "../Input";
import "./styles.css";
import { useEffect, useState } from 'react';
import { getAuth } from "firebase/auth";

export default function SignupForm() {
  const router = useRouter();
  const [uid, setUid] = useState('');
  const [renderPassword, setRenderPassword] = useState(true);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [CPF, setCPF] = useState('');
  const [acceptedTermsAndConditions, setAcceptedTermsAndConditions] = useState(false);

  useEffect(() => {
    const uid = sessionStorage.getItem("uid");
    const email = sessionStorage.getItem("email");

    if (uid){
      setUid(uid);
      sessionStorage.removeItem("uid");
    }

    if (email){
      setEmail(email);
      sessionStorage.removeItem("email");
    }

    setRenderPassword(!uid);
  }, []);

  function handleSubmit(e) {
    e.preventDefault();

    if (name && CPF && email && acceptedTermsAndConditions) handleSignUp(userInfo, router);
    else alert("Preencha todos os campos!");
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
          <Input label="Nome:" onChange={(e) => setName(e.target.value)}/>
          <Input label="CPF:" onChange={(e) => setCPF(e.target.value)}/>
          <Input label="E-mail:" type="email" value={email} onChange={() => {}}/>
          {renderPassword && <Input label="Senha:" type="password"/>}
          {renderPassword && <Input label="Repita a senha:" type="password"/>}
          <div className="input_group checkbox">
            <input className="input" type="checkbox" onChange={(e) => setAcceptedTermsAndConditions(e.target.checked)}/>
            <label className="label">Eu li e concordo com os termos de uso e política de privacidade.</label>
          </div>
          <Button label="Cadastrar" onClick={handleSubmit}/>
        </form>
      </div>
    </>
  );
}