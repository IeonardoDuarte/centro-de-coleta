import { doc, getDoc, setDoc } from 'firebase/firestore';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { db, initFirebase } from '../firebase';

export const signInWithGoogle = async (router, signUpTrigger) => {
  initFirebase();
  const auth = getAuth();
  const provider = new GoogleAuthProvider();

  try {
    const res = await signInWithPopup(auth, provider);
    const uid = res.user.uid;

    const docRef = doc(db, "users", uid);
    const docSnap = await getDoc(docRef);

    if (!docSnap.exists() || !docSnap.data().acceptedTermsAndConditions) {
      await setDoc(docRef, {
        uid,
        acceptedTermsAndConditions: false,
      });

      sessionStorage.setItem("uid", uid);
      sessionStorage.setItem("email", res.user.email);

      signUpTrigger();
      router.push("/cadastro");
    } else {
      router.push("/agendamento");
    }
  } catch (error) {
    console.error(error);
  }
};
