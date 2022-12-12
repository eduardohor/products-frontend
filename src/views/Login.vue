<template>
  <main class="form-signin w-100 m-auto">
    <form @submit.stop.prevent="submit">
      <h1 class="h3 mb-3 fw-normal">Faça o login</h1>

      <input
        v-model="email"
        type="email"
        class="form-control mb-2"
        placeholder="E-mail"
      />

      <input
        v-model="password"
        type="password"
        class="form-control mb-2"
        placeholder="Senha"
      />

      <button class="w-100 btn btn-lg btn-primary" type="submit">Entrar</button>
    </form>
  </main>
</template>

<script>
import Cookie from 'js-cookie'

export default {
  name: "Login",

  data() {
    return {
      email: "",
      password: "",
    };
  },

  // created(){
  //   Cookie.remove('_myapp_token')

  // },

  methods: {
    submit() {
      const payload = {
        email: this.email,
        password: this.password,
      };

      fetch(`http://127.0.0.1:8000/api/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Access": "application/json",
        },
        body: JSON.stringify(payload),
      })
        .then((response) => response.json())
        .then((res) => {
          Cookie.set('_myapp_token', res.access_token)
          this.$router.push({name: 'home'});
        });
        
      },
  },
};
</script>

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
