
import { collection, getDocs, query } from "firebase/firestore";
import { db } from "../firebase";

export default async function getSchedulingData() {
  const q = query(collection(db, "schedules"));
  const querySnapshot = await getDocs(q);

  return querySnapshot.docs
}