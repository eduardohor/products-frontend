<template>
  <main class="container">

    <router-link to="/category" class="btn btn-primary m-2">Adicionar Categoria</router-link>
    <router-link to="/product" class="btn btn-primary">Adicionar Produto</router-link>


    <table class="table mt-3">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Categoria</th>
          <th scope="col">Nome</th>
          <th scope="col">Preço</th>
          <th scope="col">Quantidade</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product of products" :key="product.id">
          <th scope="row">{{ product.id }}</th>
          <td>{{ product.category.name }}</td>
          <td>{{ product.name }}</td>
          <td>{{ product.amount }}</td>
          <td>{{ product.quantity }}</td>
        </tr>
      </tbody>
    </table>
  </main>
</template>

<script>
import Cookie from 'js-cookie'

export default {
  name: 'HomeView',

  data() {
    return {
      products: []
    }
  },

  mounted() {
    const token = Cookie.get('_myapp_token');

    fetch(`http://127.0.0.1:8000/api/products`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Authorization": `bearer ${token}`
      }
    }).then((response) => response.json())
      .then((res) => {
        console.log(res)
        this.products = res
      })

  }
}
</script>
