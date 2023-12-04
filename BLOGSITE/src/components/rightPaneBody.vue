<template>
  <div class="rightPaneBody boxShadowNormal">
    <styleToolBar />
    <profilePicture />
    <carousel />
  </div>
</template>

<script setup>
import styleToolBar from "./styleToolBar.vue";
import profilePicture from "./profilePicture.vue";
import carousel from "./carousel.vue";
</script>

<style scoped>
.rightPaneBody {
  width: 68%;
  height: 96%;
  background: var(--darkest-1);
  border-radius: var(--borderRadius) 0px 0px 0px;
  overflow: hidden;
}
</style>
