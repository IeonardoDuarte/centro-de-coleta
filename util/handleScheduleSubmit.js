import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore";

export default async function handleScheduleSubmit(scheduleData , setSuccess) {
  const { uid, state, city, collectType, cep, address, pickupDate } = scheduleData;
  if (!uid || !state || !city || !collectType || !cep || !address || !pickupDate) {
    alert("Preencha todos os campos!");
    return;
  }
  const db = getFirestore();
  const docRef = doc(db, "schedules", uid);

  const userDocRef = doc(db, "users", uid);
  const userDocSnap = await getDoc(userDocRef);
  const userData = userDocSnap.data();
  const { name, CPF } = userData;


  try {
    userDocSnap.exists() ?
      await setDoc(docRef, {
        name,
        CPF,
        state,
        city,
        collectType,
        cep,
        address,
        pickupDate,
      })
      .then(() => {
        console.log("Document successfully written!");

        setSuccess();
      })
      .catch((error) => {
        console.error("Error writing document: ", error);
      })
    : alert("Usuário não encontrado!");
  } catch (error) {
    console.log(error);
  }
}