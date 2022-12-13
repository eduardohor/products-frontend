<template>
  <main class="container">
    <h1>Detalhes - {{product.name}}</h1>
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
            <router-link :to="{name: 'product-edit', params: {id: product.id}}" class="btn btn btn-warning " href="">Editar</router-link>
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
.btn-info{
  margin-left: 10px;
}
.btn-warning{
  margin-right: 10px;
}


</style>

<script>
import Cookie from "js-cookie";

export default {
  name: "ProductShow",

  data() {
    return {
      product: [],
      category:[]
    };
  },

  created(){
    const token = Cookie.get('_myapp_token');
    const id = this.$route.params.id
   
    fetch(`http://127.0.0.1:8000/api/products/${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
          "Authorization": `bearer ${token}`
        }
      }).then((response) => response.json())
        .then((res) => {
          this.category = res.category
          this.product = res
        })

  },

  methods:{
    submit(){
      const token = Cookie.get('_myapp_token');
      const id = this.$route.params.id
   
    fetch(`http://127.0.0.1:8000/api/products/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
          "Authorization": `bearer ${token}`
        }
      }).then((response) => response.json())
        .then((res) => {
         console.log(res)
         this.$router.push({name: 'home'});
        })
    }

  }


    
};
</script>
