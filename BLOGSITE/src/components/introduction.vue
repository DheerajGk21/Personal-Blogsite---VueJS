<template>
  <div class="introduction boxShadowDeep">
    <div class="text-h3">{{ blogSiteInfo.name }}</div>
    <v-divider></v-divider>
    <div class="text-h6 designation">{{ blogSiteInfo.designation.value }}</div>
    <div class="text-h6">{{ blogSiteInfo.experience.value.yearsDetailed }}</div>
  </div>
</template>

<script setup>
import blogSiteInfo from "../assets/conf/blogSiteInfo.json";
</script>

<style scoped>
.introduction {
  width: 88%;
  height: 30%;
  margin: 0% 6%;
  padding: 0 3% 8% 4%;
  border-radius: 0px 0px var(--borderRadius) var(--borderRadius);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  text-align: center;
  background: var(--light-1);
}

.text-h3,
.text-h6 {
  font-family: unset !important;
  text-shadow: 2px 2px 8px #000000;
}

.text-h6 {
  margin-left: 2%;
}

.designation {
  font-weight: bolder;
}

.v-divider {
  margin: 20px 0;
}
</style>
