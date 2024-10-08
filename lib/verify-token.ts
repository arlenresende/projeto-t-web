export default async function verifyToken(token: string): Promise<boolean> {
  if (!token) return false
  try {
    return true
  } catch (error: unknown) {
    console.error(error)
    return false
  }
}
