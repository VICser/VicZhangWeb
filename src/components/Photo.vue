<template>
  <div class="photos">
    <div class="header"></div>
    <div class="wrap">
      <div class="photo" v-for="(img,index) in imglist" :key="index">
        <img class="img" v-bind:src="img.data"/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Photo',
  data () {
    return {
      imglist:[{data:require("@/assets/home.jpg")},
               {data:require("@/assets/logo.png")},
               {data:require("@/assets/home.jpg")},
               {data:require("@/assets/logo.png")},
               {data:require("@/assets/home.jpg")},
               {data:require("@/assets/logo.png")},
               {data:require("@/assets/home.jpg")},
               {data:require("@/assets/logo.png")},
               {data:require("@/assets/home.jpg")},
               {data:require("@/assets/logo.png")},
               {data:require("@/assets/home.jpg")},
               {data:require("@/assets/logo.png")},
               {data:require("@/assets/home.jpg")},
               {data:require("@/assets/logo.png")}]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header{
  height: 60px;
  border: 1px solid red;
}
.wrap{
  display: flex;
  margin: 0 auto;
  width: 1800px;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: start;
}
.photo{
  height:300px;
  width:300px;
  /* background-color: aqua; */
  margin-top: 20px;
  /* border: 1px solid red; */
}
.img{
  height: 100%;
  width: 100%;
}
</style>
