import { auth, db } from '@/config/firebase'
import {
  createUserWithEmailAndPassword,
  signOut as firebaseSignOut,
  signInWithEmailAndPassword,
  updateProfile,
} from 'firebase/auth'
import { doc, serverTimestamp, setDoc } from 'firebase/firestore'

export async function signInWithEmail(email: string, password: string) {
  try {
    const cred = await signInWithEmailAndPassword(auth, email, password)
    return { data: cred, error: null }
  } catch (e: any) {
    return { data: null, error: e }
  }
}

export async function signUpWithEmail(name: string, email: string, password: string, phone: string) {
  try {
    const cred = await createUserWithEmailAndPassword(auth, email, password)
    if (cred.user) {
      await updateProfile(cred.user, { displayName: name })
      const userRef = doc(db, 'users', cred.user.uid)
      await setDoc(userRef, {
        uid: cred.user.uid,
        displayName: name,
        email,
        phone,
        photoURL: cred.user.photoURL ?? null,
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp(),
      })
    }
    return { data: cred, error: null }
  } catch (e: any) {
    return { data: null, error: e }
  }
}

export async function signOut() {
  try {
    await firebaseSignOut(auth)
    return { data: true, error: null }
  } catch (e: any) {
    return { data: null, error: e }
  }
}
