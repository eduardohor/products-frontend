<script>
import Cookie from "js-cookie";
import { reactive } from "vue";
import { useRouter } from 'vue-router';
import { axiosInstanceToken } from '../services/http';

export default {
  name: "Produto",


  data() {
    return {
      category_id: "",
      name: "",
      amount: "",
      quantity: "",

      categories: [],

    };
  },

  mounted() {
    const token = Cookie.get('_myapp_token');

    fetch(`${import.meta.env.VITE_API_URL_BASE}/categories`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Access": "application/json",
        "Authorization": `bearer ${token}`
      }
    }).then((response) => response.json())
      .then((res) => {
        this.categories = res
      })

  },

  methods: {
    async submit() {
      const payload = {
        category_id: this.category_id,
        name: this.name,
        amount: this.amount,
        quantity: this.quantity,
      };

      try {
        const { data } = await axiosInstanceToken.post('/products', payload);
        this.$router.push({ name: 'home' });
      } catch (error) {
      }

    },
  },
};
</script>


<template>
  <main class="container">
    <form @submit.stop.prevent="submit" class="">
      <h1>Adicionar Produto</h1>
      <div class="form-group d-flex flex-column w-50">
        <div class="d-flex">

          <div class="container">
            <label>Categoria</label>
            <select v-model="category_id" class="form-select">
              <option v-for="category of categories" :key="category.id" :value="category.id">{{ category.name }}
              </option>
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

