<template>
  <div class="recipe">
    <router-link to="/" class="recipe-close floating-button" />

    <h1>{{ recipe.title }}</h1>

    <div class="recipe-sections">
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
        <ul>
          <li
            v-for="(step, index) in recipe.steps"
            :key="index"
          >
            <RecipeStep 
              :index="index"
              :step="step"
            />
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { recipes } from '@/store/recipes.json';
import RecipeStep from './RecipeStep.vue';

export default {
  name: 'Recipe',
  components: {
    RecipeStep
  },
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
.recipe-close {
  $size: 80px;
  $margin: 12px;

  background-image: url('../assets/icon-close.png');
  background-size: 50%;
  background-position: center;
  background-repeat: no-repeat;
  display: block;
  border-radius: 1000px;
  position: absolute;
  right: $margin;
  top: $margin;
  width: $size;
  height: $size;

  &:after { border-radius: 1000px; }
}

.recipe {
  margin: 0 10px;

  h1 {
    width: 73%;
  }
}

.recipe-steps {
  ul {
    list-style-type: none;
    padding: 0;
  }
}

@media screen and (min-width: 768px) {
  .recipe {
    margin: 40px 20px 0;

    h1 {
      margin-bottom: 60px;
      width: 100%;
    }
  }

  .recipe-sections {
    display: flex;

    .recipe-ingredients {
      flex-basis: 35%;
    }
    
    .recipe-steps {
      flex-basis: 65%;
    }
  }
}
</style>
