<template>
  <img :src="urlImage" alt="profile Image" class="h-8 w-8 rounded-3xl object-contain" />
</template>
<script>
export default {
  name: 'ProfileImage',
  data() {
    return {
      urlImage:
        'https://i.etsystatic.com/31548528/r/il/ffde13/5804742914/il_fullxfull.5804742914_ap2d.jpg',
    }
  },
}
</script>
