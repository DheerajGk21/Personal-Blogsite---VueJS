<template>
  <div class="profilePicture">
    <img :src="profilePicturePath" />
    <hr />
    <div class="gradientSpread"></div>
  </div>
</template>

<script setup>
import blogSiteInfo from "../assets/conf/blogSiteInfo.json";
import * as Utilities from "../utilities/utilities.js";

var profilePicturePath = Utilities.getImageURL("author.png");
</script>

<style scoped>
.profilePicture {
  height: 50%;
  width: 100%;
  display: flex;
  justify-content: center;
  padding-left: 15%;
}

.profilePicture img {
  height: 90%;
  -webkit-mask-image: linear-gradient(to bottom, rgb(0 0 0) 40%, transparent 100%);
  mask-image: linear-gradient(to bottom, rgb(0 0 0) 40%, transparent 100%);
}

.profilePicture hr {
  height: 100%;
  border: none;
  border-right: 1px solid;
  border-image: linear-gradient(rgba(2, 242, 255, 0), rgb(2, 242, 255, 1), rgb(2, 242, 255, 0)) 1 100%;
}

.gradientSpread {
  width: 40%;
  height: 100%;
  background-image: radial-gradient(
    farthest-corner at -100% 50%,
    rgba(51, 214, 255, 1) 0%,
    rgba(51, 214, 255, 0.4) -40%,
    var(--darkest-1) 70%
  );
  margin: auto 0;
  border-radius: 0 100% 100% 1 / 60%;
}
</style>
