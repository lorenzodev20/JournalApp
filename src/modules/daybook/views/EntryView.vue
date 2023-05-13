<template>
  <div class="entry-title d-flex justify-content-between p-2">
    <div>
      <span class="text-success fs-3 fw-bold"> 12 </span>
      <span class="mx-1 fs-3"> Mayo </span>
      <span class="mx-2 fs-4 fw-light"> 2023, viernes </span>
    </div>
    <div>
      <button class="btn btn-danger mx-2">
        Borrar
        <i class="fa fa-trash-alt"></i>
      </button>
      <button class="btn btn-primary mx-2">
        Subir foto
        <i class="fa fa-upload"></i>
      </button>
    </div>
  </div>
  <hr>
  <div class="d-flex flex-column px-3 h-75">
    <textarea placeholder="¿Que sucedio hoy?"></textarea>
  </div>
  <FabButton
    icon="fa-save"
  />
  <img 
    src="https://us.123rf.com/450wm/aleksandarnako/aleksandarnako2104/aleksandarnako210400769/167454186-primavera-de-%C3%A1rbol-en-la-ilustraci%C3%B3n-de-la-puesta-de-sol-del-prado-representaci%C3%B3n-3d.jpg?ver=6" 
    alt="entry-picture"
    class="img-thumbnail"
    >
</template>

<script>
import { defineAsyncComponent } from 'vue'
export default {
    components:{
        FabButton: defineAsyncComponent( () => import('../components/FabButton.vue'))
    }
}
</script>

<style lang="scss" scoped>
textarea{
    font-size: 20px;
    border: none;
    height: 100%;

    &:focus{
        outline: none;
    }
}
img{
    width: 200px;
    position:fixed;
    bottom: 150px;
    right: 20px;
    box-shadow: 0px 5px 10px rgba($color: #000000, $alpha: 0.2);
}
</style>
