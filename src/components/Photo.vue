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
      imglist:[{data:require("@/assets/pics/1.jpg")},
               {data:require("@/assets/pics/2.jpg")},
               {data:require("@/assets/pics/3.jpg")},
               {data:require("@/assets/pics/4.jpg")},
               {data:require("@/assets/pics/5.jpg")},
               {data:require("@/assets/pics/6.jpg")},
               {data:require("@/assets/pics/7.jpg")},
               {data:require("@/assets/pics/8.jpeg")},
               {data:require("@/assets/pics/9.jpg")},
               {data:require("@/assets/pics/10.jpg")},
               {data:require("@/assets/pics/11.jpg")},
               {data:require("@/assets/pics/12.jpg")},
               {data:require("@/assets/pics/13.jpg")},
               {data:require("@/assets/pics/14.jpg")},
               {data:require("@/assets/pics/15.jpg")},
               {data:require("@/assets/pics/16.jpg")},
               {data:require("@/assets/pics/17.jpg")},
               {data:require("@/assets/pics/18.jpg")},
               {data:require("@/assets/pics/19.jpg")},
               {data:require("@/assets/pics/20.jpg")},
               {data:require("@/assets/pics/21.jpg")},
               {data:require("@/assets/pics/22.jpg")},
               {data:require("@/assets/pics/23.jpg")},
               {data:require("@/assets/pics/24.jpg")},
               {data:require("@/assets/pics/25.jpg")},
               {data:require("@/assets/pics/26.jpeg")},
               {data:require("@/assets/pics/27.jpg")}]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header{
  height: 30px;
  /* border: 1px solid red; */
}
.wrap{
  display: flex;
  margin: 0 auto;
  width: 1800px;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content:flex-start;
}
.photo{
  height:220px;
  width:300px;
  margin-left: 50px;
  /* background-color: aqua; */
  margin-top: 50px;
  /* border: 1px solid red; */
}
.img{
  height: 100%;
  width: 100%;
}
</style>
