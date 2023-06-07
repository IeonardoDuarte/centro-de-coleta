import { getFirestore, doc, setDoc } from "firebase/firestore";

export default async function handleScheduleSubmit(scheduleData , setSuccess) {
  const { uid, state, city, collectType, cep, address, pickupDate } = scheduleData;
  const db = getFirestore();
  const docRef = doc(db, "schedules", uid);

  if (!uid || !state || !city || !collectType || !cep || !address || !pickupDate) {
    alert("Preencha todos os campos!");
    return;
  }

  try {
    await setDoc(docRef, {
      uid,
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
    });
  } catch (error) {
    console.log(error);
  }
}