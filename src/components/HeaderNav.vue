<template>
  <header>
    <div>헤더</div>
  </header>
</template>

<script>
export default {};
</script>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 80px;
  background-color: #815854;
  color: white;
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.1);
}
@media screen and (max-width: 576px) {
  header {
    height: 40px;
  }
}
@media screen and (min-width: 576px) and (max-width: 768px) {
  header {
    height: 60px;
  }
}
</style>
