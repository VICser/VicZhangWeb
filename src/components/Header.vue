<template>
  <div class="theheader">
      <el-menu
        :default-active="2"
        class="el-menu-demo"
        mode="horizontal"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b">
        <el-menu-item index="1"><router-link to="/"><img src="http://img.logonc.com/d/file/logo/20181015/1fb64d40b8166658c0bacfdd0d471804.jpg" style="height:100%"></router-link></el-menu-item>
        <el-submenu index="2">
            <template slot="title">我的工作台</template>
            <el-menu-item index="2-1"><router-link to="/datatag">数据标注</router-link></el-menu-item>
            <el-menu-item index="2-2"><router-link to="/coding">Coding</router-link></el-menu-item>
            <el-menu-item index="2-3"><router-link to="/translate">TransLate</router-link></el-menu-item>
            <el-submenu index="2-4">
            <template slot="title">TodoList</template>
            <el-menu-item index="2-4-1">Todo</el-menu-item>
            <el-menu-item index="2-4-2">Todo</el-menu-item>
            <el-menu-item index="2-4-3">Todo</el-menu-item>
            </el-submenu>
        </el-submenu>
        <el-menu-item index="3"><router-link to="/game">Game</router-link>
        </el-menu-item>
        <el-menu-item index="4"><router-link to="/photo">Photo</router-link>
        </el-menu-item>
      </el-menu>
  </div>
</template>

<script>
export default {
  name: 'header',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a {
    text-decoration-line: none;
    color: aliceblue
}
.el-menu-demo{
  height: 50px;
}
</style>
