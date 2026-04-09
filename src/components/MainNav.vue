<template>
  <header class="w-full text-sm">
    <div class="fixed left-0 top-0 h-16 w-full bg-white">
      <div class="mx-autos flex h-full flex-none border-b border-brand-gray-1 px-8">
        <a :href="url" class="tex-xl flex h-full items-center"> {{ company }} Careers </a>
        <nav class="ml-12 h-full">
          <ul class="flex h-full list-none">
            <li v-for="page in navigationPages" :key="page" class="h-fll ml-9 first:m-0">
              <a href="" class="flex h-full items-center py-2.5">
                {{ page }}
              </a>
            </li>
          </ul>
        </nav>
        <div class="ml-auto flex h-full items-center">
          <ActionButton v-if="!isLoggedIn" />
          <ProfileImage v-else />
        </div>
      </div>
    </div>
  </header>
</template>
<script>
import ActionButton from './ActionButton.vue'
import ProfileImage from './ProfileImage.vue'
export default {
  name: 'MainNav',
  components: {
    ActionButton,
    ProfileImage,
  },
  data() {
    return {
      company: 'PetVue',
      url: '/',
      navigationPages: ['Teams', 'Locations', 'Life at PetVue', 'How we hire', 'Sudents', 'Jobs'],
      isLoggedIn: false,
    }
  },
}
</script>
