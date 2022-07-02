<script setup>
import RecipeCard from '../components/RecipeCard.vue'
</script>
<template>
  <a-row type="flex" justify="center" class="ma-16">
    <a-col :span="24" :md="16">
      <a-typography-title>Найти рецепт</a-typography-title>
      <div class="mt-16 mb-16">
        <a-input placeholder="Поиск"></a-input>
      </div>
      <a-row>
        тут результаты
      </a-row>
      <a-typography-title :level="3">Рекомендуемое</a-typography-title>
      <a-row style="display: flex; flex-direction: row;">
        <a-col v-for="(item, index) in 4" :key="index">
          <RecipeCard />
        </a-col>
      </a-row>
      <div class="mt-8 mb-8">
        <a-button>Показать ещё +</a-button>
      </div>
      <a-typography-title :level="3">Популярное</a-typography-title>
      <a-row style="display: flex; flex-direction: row;">
        <a-col v-for="(item, index) in 6" :key="index">
          <RecipeCard />
        </a-col>
      </a-row>
      <div class="mt-8 mb-8">
        <a-button>Показать ещё +</a-button>
      </div>
    </a-col>
  </a-row>
</template>
<style>
</style>