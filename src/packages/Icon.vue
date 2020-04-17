<template>
  <div>
    <svg class="t-icon" aria-hidden="true">
      <use :xlink:href="`#icon-${icon}`" />
    </svg>
  </div>
</template>
<script>
export default {
  name: "t-icon",
  props:{
      icon:{
          type:String,
          required:true
      }
  }
};
</script>
<style lang="scss">
.t-icon{
    width: 25px;
    height: 25px;
    vertical-align: middle;
}

</style>