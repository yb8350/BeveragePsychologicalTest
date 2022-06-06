<template>
  <div>{{ res }}</div>
</template>

<script>
export default {
  data() {
    return {
      res: "",
    };
  },
  created() {
    this.res = this.$route.params.res;
  },
};
</script>

<style></style>
