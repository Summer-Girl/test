<template>
  <!--  所有的元素，必须不能在根节点下-->
  <!--  这边来展示-->
  <div>
    <h1>个人信息</h1>
    <!--    {{$route.params.id}}-->
    {{ id }}
  </div>
</template>

<script>
export default {
  props: ['id'],
  name: "UserProfile",
  //过滤器 chain
  beforeRouteEnter: (to, from, next) => {
    console.log("进入路由之前11");//加载数据
    //业务代码
    next(vm => {
      vm.getData();
    });
  },
  beforeRouterLeave: (to, from, next) => {
    console.log("进入路由之后");
    //业务代码
    next();
  },
  methods: {
    getData: function () {
      this.axios({
        method: 'get',
        url:'http://localhost:8080/static/mock/data.json'
      }).then(function (response){
        console.log(response);
      })
    }
  }
}
</script>

<style scoped>

</style>
