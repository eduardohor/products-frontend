<script>
import { axiosInstanceToken } from '../services/http';

export default {
  name: 'HomeView',

  data() {
    return {
      products: []
    }
  },

  async created() {
    try {
      const { data } = await axiosInstanceToken.get('/products');
      this.products = data
    } catch (error) {
    }

  }
}
</script>

<template>
  <main class="container">

    <router-link to="/category" class="btn btn-primary m-2">Adicionar Categoria</router-link>
    <router-link to="/product" class="btn btn-primary">Adicionar Produto</router-link>


    <table class="table mt-3 w-75 m-auto">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Nome</th>
          <th scope="col">Preço</th>
          <th scope="col">Quantidade</th>
          <th scope="col" class="text-center">Ações</th>

        </tr>
      </thead>
      <tbody>
        <tr v-for="product of products" :key="product.id">
          <th scope="row">{{ product.id }}</th>
          <td>{{ product.name }}</td>
          <td>{{ product.amount }}</td>
          <td>{{ product.quantity }}</td>
          <td class="d-flex justify-content-center">
            <router-link :to="{ name: 'product-show', params: { id: product.id } }"
              class="btn btn btn-info ">Detalhes</router-link>
          </td>

        </tr>
      </tbody>
    </table>
  </main>
</template>

<style>
.editar {
  margin-right: 5px;
}
</style>




