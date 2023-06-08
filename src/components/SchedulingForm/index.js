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
import handleScheduleSubmit from "../../../util/handleScheduleSubmit";

export default function SchedulingForm() {
  const router = useRouter();
  initFirebase();
  const auth = getAuth();
  const [user , setUser] = useState(null);
  const [uid, setUid] = useState(null);

  const [state, setState] = useState(null);
  const [city, setCity] = useState(null);
  const [collectType, setCollectType] = useState(null);
  const [cep, setCep] = useState(null);
  const [address, setAddress] = useState(null);
  const [pickupDate, setPickupDate] = useState(null);


  const [scheduleData, setScheduleData] = useState(null);
  const [scheduled, setScheduled] = useState(false);

  useEffect(() => {
    setScheduleData({
      uid,
      state,
      city,
      collectType,
      cep,
      address,
      pickupDate,
    });
  }, [state, city, collectType, cep, address, pickupDate, uid]);

  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        setUid(user.uid);
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

  return scheduled ? <h1>Agendamento realizado com sucesso!</h1> :
    (<>
      <button className="back_button" onClick={() => auth.signOut()}>Sair</button>
      <div className="scheduling_form">
        <h1 className="title">Agendamento de [{user ? user.name : "not logged"}]</h1>
        <form className="form">
          <SelectInput label="Estado:" options={stateSelect} onChange={(e) => setState(e.target.value)}/>
          <SelectInput label="Cidade:" options={state ? citySelect[state] : []} onChange={(e) => setCity(e.target.value)}/>
          <RadioInputGroup onChange={(e) => setCollectType(e.target.value)} />
          <Input label="CEP:" onChange={(e) => setCep(e.target.value)}/>
          <Input label="Endereço:" onChange={(e) => setAddress(e.target.value)}/>
          <DatePickerInput label="Data: " onChange={(e) => setPickupDate(e.target.value)}/>
          <p>Nosso carro da coleta passará em sua casa entre as 9h e 12h.</p>
          <br/>
          <Button label="Agendar" onClick={(e) => {e.preventDefault(); handleScheduleSubmit(scheduleData, () => {setScheduled(true)})}}/>
        </form>
      </div>
    </>)
}