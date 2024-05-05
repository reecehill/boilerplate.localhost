
<template>
  <main>
    <TheWelcome />
  </main>
</template>

<script lang="ts">
  import { defineComponent } from 'vue'
  import TheWelcome from '../components/TheWelcome.vue'
export default defineComponent({
    name: 'HomeView',
    components: {
      TheWelcome
    }
  })
  </script>