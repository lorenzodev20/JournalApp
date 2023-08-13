<template>
    <nav class="navbar bg-primary padding-left">
        <a class="navbar-brand text-white">
            <img src="@/assets/logo.png" alt="Vue Logo" class="d-inline-block aling-text-top mx-7" height="24">
            Daybook
        </a>
        <div class="d-flex">
            <button @click="onLogout"  class="btn btn-outline-info mx-2">
                {{ userName }}
                <i class="fa fa-sign-out-alt"></i>
            </button>
        </div>
    </nav>
</template>
<script>
import useAuth from '@/modules/auth/composables/useAuth'
import { useRouter } from 'vue-router'
export default {
    setup() {
        const router = useRouter()
        const { userName, logout } = useAuth()
        return{
            userName,
            onLogout: () => {
                router.push({ name:'login'})
                logout()
            }
        }
    },
}
</script>
<style scoped>
.padding-left{
    padding-left: 10px;
}
</style>