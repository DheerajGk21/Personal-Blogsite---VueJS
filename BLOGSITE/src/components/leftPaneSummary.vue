<template>
  <div class="leftPaneSummary boxShadowNormal">
    <styleToolBar />

    <!-- Summary Pane -->
    <div class="text-body-1" v-html="blogSiteInfo?.summary.value?.brief.join('<br /><br />')"></div>
  </div>
</template>

<script setup>
import styleToolBar from "./styleToolBar.vue";
import blogSiteInfo from "../assets/conf/blogSiteInfo.json";
</script>

<style scoped>
.leftPaneSummary {
  width: 100%;
  height: 64%;
  background: var(--darkest-1);
  border-radius: var(--borderRadius) var(--borderRadius) 0px 0px;
  overflow: hidden;
}

.text-body-1 {
  height: 100%;
  font-family: unset !important;
  margin: 5%;
}
</style>
