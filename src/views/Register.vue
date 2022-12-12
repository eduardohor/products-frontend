<template>
  <main class="form-signin w-100 m-auto">
    <form @submit.stop.prevent="submit">
      <h1 class="h3 mb-3 fw-normal">Por favor, cadastre-se</h1>

      <input
        v-model="name"
        type="text"
        class="form-control mb-2"
        placeholder="Nome"
      />

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

      <button class="w-100 btn btn-lg btn-primary" type="submit">
        Cadastrar
      </button>
    </form>
  </main>
</template>

<script>
export default {
  name: "Register",

  data() {
    return {
      name: "",
      email: "",
      password: "",
    };
  },

  methods: {
    submit() {
      const payload = {
        name: this.name,
        email: this.email,
        password: this.password,
        
      };

      fetch(`http://127.0.0.1:8000/api/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Access": "application/json",
        },
        body: JSON.stringify(payload),
      })
        .then((response) => response.json())
        .then((res) => {
          console.log(res)
        });
        this.$router.push({name: 'login'});
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
