<template>
  <button class="btn btn-primary">
    <i 
    class="fa fa-x3"
    :class="icon"
    ></i>
  </button>
</template>

<script>
export default {
  props:{
    icon:{
      type: String,
      default: 'fa-plus'
    }
  }
}
</script>

<style lang="scss" scoped>
button{
    border-radius: 100%;
    bottom: 20px;
    height: 70px;
    position: fixed;
    right: 20px;
    width: 70px;
}
</style>