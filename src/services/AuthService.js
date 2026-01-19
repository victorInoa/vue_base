import { ref } from 'vue'
import axios from 'axios'
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
      const response = await axios.post('from=service', {
        user_email: email,
        password: password,
        action: 'login',
      })

      if (response.statusText !== 'OK') {
        throw new Error('Error in login')
      }

      if (response.data.status === 'error') {
        await alertBase(response.data.message, 'error', 'Error', 'Footer')
      }
      if (response.data.status === 'warning') {
        await alertBase(
          response.data.message +
            '\n Datos pasados: <strong>Email:</strong> ' +
            response.data.data.userEmail +
            ' <strong>Password:</strong> ' +
            response.data.data.password,
          'warning',
          'Advertencia',
          '<strong>Email:</strong> victorinoa16@gmail.com, <strong>Password:</strong> password',
        )
      }
      if (response.data.status === 'ok') {
        await alertBase(response.data.message, 'success', 'Exito', 'Footer').then(() => {
          this.authStore.setUserInfo(
            response.data.data.id,
            response.data.data.email,
            response.data.data.role,
            response.data.data.fullName,
          )

          this.token = response.data.data.token

          console.log(this.authStore.UserInfo)

          router.push({ name: 'dashboard' })
        })
      }

      //throw new Error('Unknow error status code')
    } catch (error) {
      throw error
    }
  }
  logOut() {}

  getToken() {
    return this.token
  }
}
