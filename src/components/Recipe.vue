<template>
  <div :class="['recipe', state.bigFontMode ? 'bigfont-mode' : '']">
    <router-link to="/" class="recipe-close floating-button floating-button--round" />

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

    <button
      v-on:click="toggleBigfontMode"
      class="toggle-bigfont-mode floating-button floating-button--round"
    />
  </div>
</template>

<script>
import { recipes } from '@/store/recipes.json';
import RecipeStep from './RecipeStep.vue';

export default {
  name: 'Recipe',
  components: {
    RecipeStep,
  },
  data() {
    return {
      recipes,
      state: {
        bigFontMode: false,
      },
    };
  },
  computed: {
    recipe() {
      return this.recipes.find(item => item.id === this.$route.params.id);
    },
  },
  methods: {
    toggleBigfontMode() {
      this.state.bigFontMode = !this.state.bigFontMode;
    },
  },
};
</script>

<style scoped lang="scss">

.recipe {
  margin: 0 10px;
  padding-bottom: 120px;

  label, li {
    transition: font-size 0.2s ease;
  }

  h1 {
    width: 73%;
  }

  &.bigfont-mode {
    label, li {
      font-size: 22px;
    }
  }
}

.recipe-steps {
  ul {
    list-style-type: none;
    padding: 0;
  }
}

// buttons
$button-margin: 12px;

.recipe-close {
  background-image: url('../assets/icon-close.png');
  background-size: 50%;
  background-position: center;
  background-repeat: no-repeat;
  position: absolute;
  right: $button-margin;
  top: $button-margin;
}

.toggle-bigfont-mode {
  background-image: url('../assets/icon-bigfont.svg');
  background-size: 50%;
  background-position: center;
  background-repeat: no-repeat;
  position: fixed;
  left: $button-margin;
  bottom: $button-margin;
}

@media screen and (min-width: 768px) {
  .recipe {
    margin: 40px 20px 0;

    h1 {
      margin-bottom: 60px;
      width: 100%;
    }

    .recipe-ingredients {
      ul, ol { padding-right: 30px; }
    }

    &.bigfont-mode {

      label {
        outline: 2px solid pink;
        padding-left: 50px;
      }

      li {
        font-size: 26px;
      }

      .recipe-sections {
        flex-direction: column;
      }

      .recipe-ingredients {
        margin-bottom: 40px;
      }

      .recipe-steps {
        .step-row {
          margin-bottom: 40px;
        }
      }
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

@media screen and (min-width: 992px) {
  .recipe {
    &.bigfont-mode {
      .recipe-sections {
        flex-direction: row;
      }
    }
  }
}
</style>
