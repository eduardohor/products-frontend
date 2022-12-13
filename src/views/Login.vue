<script setup>
import http from '../services/http';
import Cookie from 'js-cookie';
import { reactive } from 'vue';
import { useRouter } from 'vue-router';

const user = reactive({
  email: '',
  password: '',
});

const validate = reactive({});

const router = useRouter();

async function create() {
  try {
    const { data } = await http.post('/login', user);
    Cookie.set('_myapp_token', data.access_token);
    router.push({ name: 'home' });
  } catch (error) {
    Object.assign(validate, error.response.data);
  }

}

</script>

<template>
  <main class="form-signin w-100 m-auto">
    <form @submit.prevent="create">
      <h1 class="h3 mb-3 fw-normal">
        Faça o login
      </h1>

      <input v-model="user.email" type="email" class="form-control mb-2" placeholder="E-mail">
      <input v-model="user.password" type="password" class="form-control mb-2" placeholder="Senha">
      <template v-if="validate.error">
        {{ validate.error }}
      </template>

      <button class="w-100 btn btn-lg btn-primary" type="submit">
        Entrar
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
