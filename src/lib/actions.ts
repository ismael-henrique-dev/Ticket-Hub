'use server'

import { cookies } from 'next/headers'

export async function userLogout() {
  const cookie = await cookies()
  cookie.delete('userId')

}
