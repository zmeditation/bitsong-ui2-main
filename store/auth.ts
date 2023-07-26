import { defineStore, acceptHMRUpdate } from "pinia"
import { AuthState, SessionType } from "@/types"
import useKeplrStore from "@/store/keplr"

const initialState: AuthState = {
  loading: false,
  session: undefined,
  token: undefined,
}

export const useAuthStore = defineStore("auth", {
  state: (): AuthState => (initialState),
  actions: {
    async autoLogin() {
      if (this.isLoggedIn) {
        await this.signIn()
      }
    },
    async signIn(sessionType: SessionType = SessionType.KEPLR) {
      const keplrStore = useKeplrStore()
      try {
        this.loading = true

        if (sessionType === SessionType.KEPLR) {
          this.session = SessionType.KEPLR
          
          await keplrStore.logIn()
          await this.generateToken()
        }
      } catch (error) {
        console.error(error)
        throw error
      } finally {
        
      }
    },
    async generateToken() {
      try {
        //this.loading = true
        
        if (this.session === undefined) {
          throw new Error("Session not found")
        }
  
        if (this.session !== SessionType.KEPLR) {
          throw new Error("Session type not supported")
        }
  
        switch (this.session) {
          case SessionType.KEPLR:
            const token = await useKeplrStore().generateToken()
            this.token = token
            break
          default:
            throw new Error("Session type not supported")
        }
      } catch (error) {
        console.error(error)
        throw error
      }
    },
    disconnect() {
      switch (this.session) {
        case SessionType.KEPLR:
          useKeplrStore().logOut()
          break
        default:
          break
      }

      this.session = undefined
      this.token = undefined
    },
  },
  getters: {
    getAddress: () => useKeplrStore().getAddress,
    getName: () => useKeplrStore().getName,
    isLoggedIn: () => useKeplrStore().isLoggedIn,
  },
  persist: true
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useAuthStore, import.meta.hot))
}

export default useAuthStore

window.addEventListener("keplr_keystorechange", () => {
  const { autoLogin } = useAuthStore()
  autoLogin()
})