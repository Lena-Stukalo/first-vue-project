<template>
  <button
    class="hover:shadow-blue rounded border-0 bg-brand-blue-1 px-5 py-3 font-medium text-white"
    @click="handelClick"
  >
    {{ text }}
  </button>
</template>
<script>
export default {
  name: 'ActiveButton',
  data() {
    return {
      text: 'Sign In',
    }
  },
  methods: {
    handelClick() {
      console.log('button was clicked')
    },
  },
}
</script>
