<script setup>
import { axiosInstanceToken } from '../services/http';
import { reactive } from 'vue';
import { useRouter } from 'vue-router';

const category = reactive({
  name: ''
});

const validate = reactive({});

const router = useRouter();

async function create() {
  try {
    const { data } = await axiosInstanceToken.post('/categories', category);
    router.push({ name: 'home' });
  } catch (error) {
    Object.assign(validate, error.response.data['errors']);
  }

}

</script>

<template>
  <main class="container">
    <form @submit.prevent="create">
      <div class="form-group">
        <h1>Adicionar Categoria</h1>
        <label>Nome da categoria</label>
        <input v-model="category.name" type="text" class="form-control mt-1 w-25" placeholder="Nome">
        <template v-if="validate.name">
          {{ validate.name }}
        </template>
      </div>
      <button type="submit" class="btn btn-primary mt-3">
        Cadastrar
      </button>
    </form>
  </main>
</template>


