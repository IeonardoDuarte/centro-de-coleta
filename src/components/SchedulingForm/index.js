"use client";
import { getAuth } from "firebase/auth";
import Button from "../Button";
import Input from "../Input";
import RadioInput from "../RadioInput";
import RadioInputGroup from "../RadioInputGroup";
import "./styles.css";
import { db, initFirebase } from "../../../firebase";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { doc, getDoc } from "firebase/firestore";
import SelectInput from "../SelectInput";
import { citySelect, stateSelect } from "@/data/scheduling/formsData";
import DatePickerInput from "../DatePickerInput";

export default function SchedulingForm() {
  const [state, setState] = useState(0);
  const [city, setCity] = useState(null);

  const router = useRouter();
  initFirebase();
  const auth = getAuth();
  const [user , setUser] = useState(auth.currentUser);

  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        const docRef = doc(db, "users", user.uid);
        const docSnap = await getDoc(docRef);

        setUser(docSnap.data());
      } else {
        setUser(null);
        auth.signOut();
        router.push("/login");
      }
    });
  }, []);

  return (
    <>
      <button className="back_button" onClick={() => auth.signOut()}>Sair</button>
      <div className="scheduling_form">
        <h1 className="title">Agendamento de [{user ? user.name : "not logged"}]</h1>
        <form className="form">
          <SelectInput label="Estado:" options={stateSelect} onChange={(e) => setState(e.target.value)}/>
          <SelectInput label="Cidade:" options={citySelect[state]} onChange={(e) => setCity(e.target.value)}/>
          <RadioInputGroup />
          <Input label="CEP:" />
          <Input label="Endereço:" />
          <DatePickerInput label="Data: " />
          <p>Nosso carro da coleta passará em sua casa entre as 9h e 12h.</p>
          <br/>
          <Button label="Agendar" onClick={(e) => {e.preventDefault()}}/>
        </form>
      </div>
    </>
  )
}