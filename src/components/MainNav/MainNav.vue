<template>
  <header class="w-full text-sm">
    <div class="fixed left-0 top-0 h-16 w-full bg-white">
      <div class="border-brand-gray-1 mx-autos flex h-full flex-none border-b px-8">
        <a href="/" class="tex-xl flex h-full items-center"> {{ company }} </a>
        <h2 class="ml-8 flex h-full items-center">
          Developed by {{ author.firstName }} {{ author.lastName }}
        </h2>
      </div>
    </div>
  </header>
</template>
<script>
export default {
  name: 'MainNav',
  data() {
    return {
      company: 'Test Vue Careers',
      author: {
        firstName: 'Olena',
        lastName: ' Stukalo',
      },
    }
  },
}
</script>
