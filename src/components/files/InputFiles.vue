<script setup>

</script>

<template>
  <input type="file" ref="file" @change="onFileChange">
  <img ref="image" src="" />
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {
    onFileChange() {
      const file = this.$refs['file'].files[0];
      let reader = new FileReader();
      reader.onload = () => {
        this.$refs['image'].src = String(reader.result);
      };
      console.log(URL.createObjectURL(file), file.name)
      reader.readAsDataURL(file);
    }
  }
}
</script>

<style scoped lang="scss">

</style>