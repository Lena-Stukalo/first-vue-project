<template>
  <button :class="buttonClasseByType" @click="handleclick">
    {{ text }}
  </button>
</template>
<script>
export default {
  name: 'ActiveButton',
  props: ['text', 'typeOfButton', 'handleclick'],
  computed: {
    buttonClasseByType() {
      return {
        [this.typeOfButton]: true,
      }
    },
  },
}
</script>
<style scoped>
button {
  @apply cursor-pointer rounded px-5 py-3 font-medium;
}
.primary {
  @apply border-0 bg-brand-blue-1 text-white hover:shadow-blue;
}
.secondary {
  @apply hover:bg-brand-blue-2 bg-transparent text-brand-blue-1 hover:text-white;
}
</style>
