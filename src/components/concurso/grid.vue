<template>
  <div class="container mx-auto pt-5">
    <div class="font-extrabold pb-5 grid grid-cols-2">
      <span>Join</span>
      <span>Vote</span>
    </div>
    <div class="grid grid-cols-1 gap-1 md:grid-cols-2 md:gap-3 lg:gap-6 lg:grid-cols-3">
      <card class="bg-gray-900 text-white" v-for="(concurso,key) in concursos" :key="key" :concurso="concurso"/>
    </div>
  </div>
</template>

<script>
  import card from "./card";
  export default {
  components: {card},
  data(){
    return {
      concursos: [
        {id:"1",name:"#StayHome","date_from":"",date_until:"21/4",actual_price:"5000",founder:"Agustin",main_img:""},
        {id:"2",name:"Best Photo of the Month","date_from":"",date_until:"23/4",actual_price:"10000",founder:"Mariano",main_img:""},
        {id:"3",name:"Travel","date_from":"",date_until:"24/5",actual_price:"3000",founder:"Gaston Luna",main_img:""},
        {id:"4",name:"Portrait","date_from":"",date_until:"1/6",actual_price:"2000",founder:"m.j fotografia",main_img:""},
        {id:"5",name:"Macro","date_from":"",date_until:"3/4",actual_price:"1000",founder:"clarita cao",main_img:""},
      ]
    }
  }  
  }
</script>

<style lang="scss" scoped>

</style>