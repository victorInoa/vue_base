import { ref } from 'vue'
import Api from '@/services/Api.js'
import { alertBase } from '@/composables/SweetAlerts.js'
import { useAuthStore } from '@/stores/auth.js'
import router from '@/router/index.js'

export default class AuthService {
  constructor() {
    this.token = ref(null)
    this.return = null
    this.authStore = useAuthStore()
  }

  async login(email, password) {
    try {
      const response = await Api.post('?from=service', {
        user_email: email,
        password: password,
        action: 'login',
      })

      if (response.statusText !== 'OK') {
        throw new Error('Error in login')
      }

      if (response.data.status === 'error') {
        throw new Error(response.data.message)
        //await alertBase(response.data.message, 'error', 'Error', 'Footer')
        //return false
      }
      if (response.data.status === 'warning') {
        throw new Error(
          response.data.message +
            '\n Datos pasados: <strong>Email:</strong> ' +
            response.data.data.userEmail +
            ' <strong>Password:</strong> ' +
            response.data.data.password,
        )

        //await alertBase(
        //  response.data.message +
        //    '\n Datos pasados: <strong>Email:</strong> ' +
        //    response.data.data.userEmail +
        //    ' <strong>Password:</strong> ' +
        //    response.data.data.password,
        //  'warning',
        //  'Advertencia',
        //  '<strong>Email:</strong> victorinoa16@gmail.com, <strong>Password:</strong> password',
        //)
        //return false
      }
      if (response.data.status === 'ok') {
        this.authStore.setUserInfo(
          response.data.data.id,
          response.data.data.email,
          response.data.data.role,
          response.data.data.fullName,
          response.data.data.photo,
          response.data.token_type + ' ' + response.data.token,
        )
        return true
      }
      throw new Error('Unknow error status code')
    } catch (error) {
      throw error
    }
  }
  logOut() {
    this.authStore.clearUserInfo()
    this.token.value = null
    return true
  }

  getToken() {
    return this.token
  }
}
