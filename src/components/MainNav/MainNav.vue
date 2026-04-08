<template>
  <header class="w-full text-sm">
    <div class="fixed left-0 top-0 h-16 w-full bg-white">
      <div class="mx-autos flex h-full flex-none border-b border-brand-gray-1 px-8">
        <a href="/" class="tex-xl flex h-full items-center"> {{ company }} </a>
      </div>
    </div>
  </header>
</template>
<script>
export default {
  name: 'MainNav',
  data() {
    return {
      company: 'PetVue Careers',
    }
  },
}
</script>
