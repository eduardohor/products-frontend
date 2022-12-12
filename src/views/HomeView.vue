<template>
  <header class="container">
    
      <button class="btn btn-primary m-2">Adicionar Categoria</button>
      <button class="btn btn-primary">Adicionar Produto</button>
  

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
        <tr>
          <th scope="row"></th>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      </tbody>
    </table>
  </header>
</template>

<script>
import Cookie from 'js-cookie'

export default {
  name: 'HomeView',

  created(){
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
          console.log(res);
        })
  }
}
</script>
