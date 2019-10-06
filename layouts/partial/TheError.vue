<template>
  <p class="error">{{ message }}</p>
</template>

<script>
export default {
  props: {
    message: String
  }
}
</script>

<style lang="scss" scoped>
.error {
  bottom: 2rem;
  padding: 1rem 2rem;
  font-size: 1.2rem;
  font-family: sans-serif;
}
</style>