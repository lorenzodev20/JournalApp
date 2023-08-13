<template>
  <div class="spinner-center">
    <img
      v-if="authStatus === 'authenticating'"
      class="img-center"
      src="@/assets/spinners/spinner360px.svg"
      alt="authenticating"
    />
  </div>
  <router-view />
</template>
<script>
import useAuth from './modules/auth/composables/useAuth'

export default {
  setup () {
    const { authStatus, checkAuthStatus } = useAuth()

    checkAuthStatus()

    return {
      authStatus
    }
  }
}
</script>
