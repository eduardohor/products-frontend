<script>
import { axiosInstanceToken } from '../services/http';

export default {
  name: "ProductShow",

  data() {
    return {
      product: [],
      category: []
    };
  },
  async created() {
    const id = this.$route.params.id
    try {
      const { data } = await axiosInstanceToken.get(`/products/${id}`);
      console.log(data)
      this.product = data
    } catch (error) {
    }

  },

  methods: {
    async submit() {
      const id = this.$route.params.id
      try {
        const { data } = await axiosInstanceToken.delete(`/products/${id}`);
        console.log(data)
        this.product = data
      } catch (error) {
      }
    }

  }


};
</script>


<template>
  <main class="container">
    <h1>Detalhes - {{ product.name }}</h1>
    <router-link to="/" class="btn btn-info">Voltar</router-link>
    <table class="table mt-3 w-75 m-auto">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Categoria</th>
          <th scope="col">Nome</th>
          <th scope="col">Preço</th>
          <th scope="col">Quantidade</th>
          <th scope="col" class="text-center">Ações</th>

        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">{{ product.id }}</th>
          <td>{{ category.name }}</td>
          <td>{{ product.name }}</td>
          <td>{{ product.amount }}</td>
          <td>{{ product.quantity }}</td>
          <td class="d-flex justify-content-center">
            <router-link :to="{ name: 'product-edit', params: { id: product.id } }" class="btn btn btn-warning "
              href="">Editar</router-link>
            <form @submit.stop.prevent="submit">
              <button type="submit" class="btn btn-danger">Excluir</button>
            </form>
          </td>

        </tr>
      </tbody>
    </table>
  </main>
</template>

<style>
.btn-info {
  margin-left: 10px;
}

.btn-warning {
  margin-right: 10px;
}
</style>


