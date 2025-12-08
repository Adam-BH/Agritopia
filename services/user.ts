import { auth, db } from '@/config/firebase'
import { doc, getDoc, serverTimestamp, updateDoc, setDoc } from 'firebase/firestore'
import { updateProfile } from 'firebase/auth'

export type UserProfile = {
  uid: string
  displayName: string | null
  email: string | null
  phone: string | null
  photoURL: string | null
}

export async function getCurrentUserProfile(): Promise<UserProfile | null> {
  const user = auth.currentUser
  if (!user) return null
  const ref = doc(db, 'users', user.uid)
  const snap = await getDoc(ref)
  const data = snap.exists() ? snap.data() as any : {}
  return {
    uid: user.uid,
    displayName: user.displayName ?? data.displayName ?? null,
    email: user.email ?? data.email ?? null,
    phone: (data && data.phone) ?? null,
    photoURL: user.photoURL ?? data.photoURL ?? null,
  }
}

export async function updateCurrentUserProfile(params: { name: string; phone: string }) {
  const user = auth.currentUser
  if (!user) throw new Error('Not authenticated')
  if (params.name && params.name !== (user.displayName ?? '')) {
    await updateProfile(user, { displayName: params.name })
  }
  const ref = doc(db, 'users', user.uid)
  await setDoc(ref, {
    displayName: params.name,
    phone: params.phone,
    email: user.email ?? null,
    photoURL: user.photoURL ?? null,
    updatedAt: serverTimestamp(),
  }, { merge: true })
}
