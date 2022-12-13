<template>
  <main class="container">
    <div class="">
      <h1>Atualizar Produto</h1>
      <router-link :to="{name: 'product-show', params: {id: product.id}}" class="btn btn-info mb-5 mt-2">Voltar</router-link>
    </div>

    <form @submit.stop.prevent="submit">
      <div class="form-group d-flex flex-column w-50">
        <div class="d-flex">

          <div class="container">
            <label>Nome</label>
            <input type="text" class="form-control" placeholder="Nome" v-model="product.name" />
          </div>

        </div>

        <div class="d-flex">
          <div div class="container">
            <label>Valor</label>
            <input type="text" class="form-control" placeholder="Valor" v-model="product.amount" />
          </div>
          <div class="container">
            <label>Quantidade</label>
            <input type="number" class="form-control" placeholder="Quantidade" v-model="product.quantity" />
          </div>
        </div>
      </div>

      <button type="submit" class="btn btn-primary mt-3">Atualizar</button>
    </form>
  </main>
</template>

<style>
h1{
  margin-left: 10px;
}
</style>

<script>
import Cookie from "js-cookie";

export default {
  name: "ProductEdit",

  data() {
    return {
      product: []
    };
  },

  created() {
    const token = Cookie.get('_myapp_token');
    const id = this.$route.params.id

    fetch(`${import.meta.env.VITE_API_URL_BASE}/products/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Access": "application/json",
        "Authorization": `bearer ${token}`
      }
    }).then((response) => response.json())
      .then((res) => {
        console.log(res)
        this.product = res
      })

  },

  methods: {
    submit() {
      const payload = {
        category_id: this.product.category_id, 
        name: this.product.name,
        amount: this.product.amount,
        quantity: this.product.quantity,
      };

    const token = Cookie.get('_myapp_token');
     const id = this.$route.params.id


      fetch(`${import.meta.env.VITE_API_URL_BASE}/products/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
          "Authorization": `bearer ${token}`,
        },
        body: JSON.stringify(payload),
      })
        .then((response) => response.json())
        .then((res) => {
          console.log(res);
         this.$router.push({name: 'product-show', params: {id: this.product.id}});
        });
    },
  },
};
</script>
