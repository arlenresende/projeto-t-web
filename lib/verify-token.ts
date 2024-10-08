import { jwtVerify } from 'jose'

export default async function verifyToken(token: string): Promise<boolean> {
  if (!token) return false
  try {
    // await jwtVerify(
    //   token,
    //   new TextEncoder().encode(process.env.NEXT_PUBLIC_JWT_SECRET),
    //   {
    //     algorithms: ['HS256'],
    //   },
    // )
    return true
  } catch (error: unknown) {
    console.error(error)
    return false
  }
}
