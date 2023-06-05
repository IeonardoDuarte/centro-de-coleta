import { doc, getDoc, setDoc } from 'firebase/firestore';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';	
import { db, initFirebase } from '../firebase';

export const signInWithGoogle = async (router) => {
  initFirebase();
  const auth = getAuth();
  const provider = new GoogleAuthProvider();

  try {
    const res = await signInWithPopup(auth, provider);
    console.debug("res", res);
    const uid = res.user.uid;

    const docRef = doc(db, "users", uid);
    const docSnap = await getDoc(docRef);

    console.debug("docSnap", docSnap);

    if (!docSnap.exists() || !docSnap.data().acceptedTermsAndConditions) {
      await setDoc(docRef, {
        uid,
        acceptedTermsAndConditions: false,
      });

      // Puxar a página de cadastro com os dados do usuário
      // avisar que ele precisa terminar o cadastro.

      sessionStorage.setItem("uid", uid);
      sessionStorage.setItem("email", res.user.email);

      router.push("/cadastro");
    } else {
      console.debug("existing user");
    }
  } catch (error) {
    console.error(error);
  }
};
