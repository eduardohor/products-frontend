<template>
  <main class="container">
    <form @submit.stop.prevent="submit" class="">
      <h1>Adicionar Produto</h1>
      <div class="form-group d-flex flex-column w-50">
        <div class="d-flex">

          <div class="container">
            <label>Categoria</label>
            <select v-model="category_id" class="form-select">
              <option v-for="category of categories" :key="category.id" :value="category.id">{{category.name}}</option>
            </select>
          </div>
          <div class="container">
            <label>Nome</label>
            <input v-model="name" type="text" class="form-control" placeholder="Nome" />
          </div>

        </div>

        <div class="d-flex">
          <div div class="container">
            <label>Valor</label>
            <input v-model="amount" type="text" class="form-control" placeholder="Valor" />
          </div>
          <div class="container">
            <label>Quantidade</label>
            <input v-model="quantity" type="number" class="form-control" placeholder="Quantidade" />
          </div>
        </div>
      </div>

      <button type="submit" class="btn btn-primary mt-3">Cadastrar</button>
    </form>
  </main>
</template>

<script>
import Cookie from "js-cookie";

export default {
  name: "Produto",

  data() {
    return {
      category_id: "",
      name: "",
      amount: "",
      quantity: "",

      categories: []
    };
  },

  mounted(){
    const token = Cookie.get('_myapp_token');
   
    fetch(`http://127.0.0.1:8000/api/categories`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Access": "application/json",
          "Authorization": `bearer ${token}`
        }
      }).then((response) => response.json())
        .then((res) => {
          console.log(res)
          this.categories = res
        })

  },

  methods: {
    submit() {
      const payload = {
        category_id: this.category_id,
        name: this.name,
        amount: this.amount,
        quantity: this.quantity,
      };

      const token = Cookie.get("_myapp_token");

      fetch(`http://127.0.0.1:8000/api/products`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Access: "application/json",
          Authorization: `bearer ${token}`,
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
