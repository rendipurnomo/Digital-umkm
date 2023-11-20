import {zod} from 'zod'

export const RegisterSchema = zod.object({
  username: zod.string({required_error: 'Username is required'}).min(3, {message: 'Username is at least 3 characters'}),
  email: zod.string({required_error: 'Email is required'}).email({message: 'Email is invalid'}),
  password: zod.string({required_error: 'Password is required'}).min(4, {message: 'Password is at least 4 characters'}),
  confirmPassword: zod.string({required_error: 'Confirm Password is required'}).min(4, {message: 'Confirm Password is at least 4 characters'})
})

export const LoginSchema = zod.object({
  email: zod.string({required_error: 'Email is required'}).email({message: 'Email is invalid'}),
  password: zod.string({required_error: 'Password is required'}).min(4, {message: 'Password is at least 4 characters'})
})