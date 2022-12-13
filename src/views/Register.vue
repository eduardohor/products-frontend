<script setup>
import http from '../services/http'
import { reactive } from 'vue';
import { useRouter } from 'vue-router'

const user = reactive({
  name: "",
  email: "",
  password: "",
})

const validate = reactive({})

const router = useRouter()

async function create() {
  try {
    const { data } = await http.post('/register', user)
    router.push({ name: 'login' })
    console.log(data)
  } catch (error) {
    Object.assign(validate, error.response.data['errors'])
  }

};
</script>


<template>
  <main class="form-signin w-100 m-auto">
    <form @submit.prevent="create">
      <h1 class="h3 mb-3 fw-normal">Por favor, cadastre-se</h1>

      <input v-model="user.name" type="text" class="form-control mb-2" placeholder="Nome" />
      <template v-if="validate.name" class=".text-danger">{{ validate.name[0] }}</template>

      <input v-model="user.email" type="email" class="form-control mb-2" placeholder="E-mail" />
      <template v-if="validate.email" class=".text-danger">{{ validate.email[0] }}</template>

      <input v-model="user.password" type="password" class="form-control mb-2" placeholder="Senha" />
      <template v-if="validate.password" class=".text-danger">{{ validate.password[0] }}</template>

      <button class="w-100 btn btn-lg btn-primary" type="submit">
        Cadastrar
      </button>
    </form>
  </main>
</template>


<style>
.form-signin {
  max-width: 330px;
  padding: 15px;
}

.form-signin .form-floating:focus-within {
  z-index: 2;
}

.form-signin input[type="email"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.form-signin input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
</style>
