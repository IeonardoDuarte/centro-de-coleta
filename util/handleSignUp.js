import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "../firebase";
import { getAuth } from "firebase/auth";

export default async function handleSignUp(userInfo, router) {
  const docRef = doc(db, "users", userInfo.uid);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    await setDoc(docRef, {
      ...userInfo,
    })
    .then(() => {
      console.log("Document successfully written!");
      router.push("/agendamento");
    })
    .catch((error) => {
      console.error("Error writing document: ", error);
    });
  } else {
    console.log("Document doesn't exist");
  }
}