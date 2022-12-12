<template>
  <main class="container">
    <form @submit.stop.prevent="submit">
      <div class="form-group">
        <h1>Adicionar Categoria</h1>
        <label>Nome da categoria</label>
        <input  v-model="name" type="text" class="form-control mt-1 w-25" placeholder="Nome" />
      </div>
      <button type="submit" class="btn btn-primary mt-3">Cadastrar</button>
    </form>
  </main>
</template>

<script>
import Cookie from 'js-cookie'

export default {
  name: "Category",

  data() {
    return {
      name: "",
    };
  },

  methods: {
    submit() {
      const payload = {
        name: this.name,
      };

    const token = Cookie.get('_myapp_token');


      fetch(`http://127.0.0.1:8000/api/categories`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Access": "application/json",
          "Authorization": `bearer ${token}`
        },
        body: JSON.stringify(payload),
      })
        .then((response) => response.json())
        .then((res) => {
          console.log(res);
        });
    },
  },
};
</script>
