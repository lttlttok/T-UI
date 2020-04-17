<template>
  <div id="app">
    <t-button>默认按钮</t-button>
    <t-button type="primary">主要按钮</t-button>
    <t-button type="success">成功按钮</t-button>
    <t-button type="info">信息按钮</t-button>
    <t-button type="warning" icon="richengzhushou" icon-position="right">警告按钮</t-button>
    <t-button type="danger" @click="del">危险按钮</t-button>
    <t-icon icon="richengzhushou"></t-icon>
    <t-icon icon="fangzi-"></t-icon>
    <t-icon icon="ren"></t-icon>
    <t-icon icon="caidan"></t-icon>
    <t-icon icon="weibiaoti--"></t-icon>
    <t-icon icon="dianzan-copy"></t-icon>
    <t-icon icon="xuanzhong"></t-icon>
    <t-icon icon="weibiaoti13"></t-icon>
    <t-icon icon="el-openfile1"></t-icon>
    <t-icon icon="el-closefile1"></t-icon>
    <t-icon icon="shanchu"></t-icon>
    </div>
</template>

<script>
export default {
  name: "App",
  methods:{
    del(e){
      console.log(e)
    }
  }
};
</script>
