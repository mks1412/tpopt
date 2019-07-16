import { FirestoreDocument } from '@/gateways/FirestoreGateway'

export interface UserProfileEntity {
  id: string
  email: string
  name: string
  photoURL: string
  gender: Gender
  age: number | null
  height: number | null
  weight: number | null
  preferences: number[]
}

export interface UserParams {
  id?: string
  email?: string
  name?: string
  photoURL?: string
  gender?: Gender
  age?: number | null
  height?: number | null
  weight?: number | null
  preferences?: number[]
}

export enum Gender {
  male,
  female,
  other
}

export interface UserDocument extends FirestoreDocument {
  email: string
  name: string
  photoURL: string
  gender: Gender
  age: number | null
  height: number | null
  weight: number | null
  preferences: number[]
}
