<template>
  <div class="translate">
    <h1>陈小姐的专属翻译</h1>
    <h5>简单 / 便捷 / 准确</h5>
    <translate-form v-on:textSubmit="texttrans"></translate-form>
    <translate-output class="output" v-bind:outputText="outputText"></translate-output>
  </div>
</template>

<script>
import TranslateForm from "./trans/TranslateForm"
import TranslateOutput from  "./trans/TranslateOutput"


export default {
  name: 'TransLate',
  components:{
    "translate-form":TranslateForm,
    "translate-output":TranslateOutput
  },
  data () {
    return {
      outputText:""
    }
  },
  methods:{
    texttrans:function(text,lang){
      this.$http.get('https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20181114T084332Z.c282a1a07985443d.879e6cc277bf35432881e7489e11c2ee85f16783&lang='+lang+'&text='+text).then((response)=>{
        this.outputText = response.body.text[0];
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>