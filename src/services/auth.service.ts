import { createClient } from '@/lib/supabase/client'
import { LoginFormData, RegisterFormData } from '@/types'

export const authService = {
  async login(data: LoginFormData) {
    const supabase = createClient()
    const { error } = await supabase.auth.signInWithPassword({
      email: data.email,
      password: data.password,
    })

    if (error) {
      throw new Error(error.message)
    }
  },

  async register(data: RegisterFormData) {
    const supabase = createClient()
    const { error } = await supabase.auth.signUp({
      email: data.email,
      password: data.password,
      options: {
        data: {
          full_name: data.name,
        },
      },
    })

    if (error) {
      throw new Error(error.message)
    }
  },

  async logout() {
    const supabase = createClient()
    const { error } = await supabase.auth.signOut()
    if (error) {
      throw new Error(error.message)
    }
  },
}

