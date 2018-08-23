<template>
  <div class="recipes">
    <router-link
      v-for="recipe in recipes"
      :to="`/recipe/${recipe.id}`"
      v-bind:key="recipe.id"
      class="recipe-link floating-button"
    >
      <h2>{{ recipe.title }}</h2>
      <p>{{ recipe.description }}</p>
    </router-link>
  </div>
</template>

<script>
import { recipes } from '@/store/recipes.json';

export default {
  name: 'home',
  data() {
    return {
      recipes,
    };
  },
};
</script>

<style scoped lang="scss">
.recipes {
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  margin: auto;
  padding: 10px;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  }

  @media screen and (min-width: 1000px) {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    padding-top: 100px;
  }
}

.recipe-link {
  color: inherit;
  padding: 6px 20px;
  text-decoration: none;

  h2 {
    hyphens: auto;
  }

  p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
}
</style>
