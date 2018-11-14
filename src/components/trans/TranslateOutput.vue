<template>
  <div class="translateoutput">
    {{outputText}}
  </div>
</template>

<script>
export default {
  name: 'TranslateOutput',
  props:["outputText"],
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.translateoutput{
    margin-top: 20px;
    font-size: 50px;
    color:darkseagreen;
}
</style>