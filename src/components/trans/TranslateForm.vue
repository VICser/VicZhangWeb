<template>
  <div class="translateform">
    <form v-on:submit = "formSubmit">
        <input type="text" placeholder="请输入要翻译的文字" v-model="translateText">
        <select v-model="language">
            <option value="en">English</option>
            <option value="ko">Korean</option>
            <option value="ja">Japanese</option>
        </select>
        <input type="submit" value="翻译">
    </form>
  </div>
</template>

<script>
export default {
  name: 'TranslateForm',
  data () {
    return {
        translateText:"",
        language:""
    }
  },
  methods:{
      formSubmit:function(e){
          this.$emit("textSubmit",this.translateText,this.language)
          e.preventDefault();
      }
  },
  created:function(){
      this.language = "en"
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>