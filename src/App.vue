<template>
  <div class="text-center font-sans p4">
    <div class="logo" />
    <div class="flex flex-col flex-items-center">
      <div
        class="h-20 w-40 bg-gray-1 mb-2"
        v-for="item of items"
        v-text="item.description"
      />
      <div id="loader" v-text="'Loading...'" />
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from "vue";
import useApi from "./useApi";

const start = ref(0);
const end = ref(24);
const { data, loading, getItems } = useApi();

onMounted(() => {
  getItems(start.value, end.value);
});

const items = computed(() => data.value.items);
</script>
