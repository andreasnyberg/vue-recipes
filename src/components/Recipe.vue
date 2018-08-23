<template>
  <div class="recipe">
    <router-link to="/" class="recipe-close floating-button">X</router-link>
    <h1>{{ recipe.title }}</h1>

    <div class="recipe-ingredients">
      <h2>Ingredienser</h2>
      <ul>
        <li
          v-for="ingredient in recipe.ingredients"
          :key="ingredient"
        >
          {{ ingredient }}
        </li>
      </ul>
    </div>

    <div class="recipe-steps">
      <h2>Tillagning</h2>
      <ol>
        <li
          v-for="step in recipe.steps"
          :key="step"
        >
          {{ step }}
        </li>
      </ol>
    </div>
  </div>
</template>

<script>
import { recipes } from '@/store/recipes.json';

export default {
  name: 'Recipe',
  data() {
    return {
      recipes,
    };
  },
  computed: {
    recipe() {
      return this.recipes.find(item => item.id === this.$route.params.id);
    },
  },
};
</script>

<style scoped lang="scss">
// .recipe-close {

// }

</style>
