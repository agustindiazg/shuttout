<template>
  <div class="p-6">
    <div class="grid grid-cols-2 font-medium">
      <div class="text-left"> {{concurso.founder}} </div>
      <div class="text-right"> {{concurso.date_until}} </div>
    </div>
    <div class="py-6">
      <div class="font-bold text-xl">{{concurso.name}}</div>
    <router-link class="inline-block font-extrabold text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-blue-500 hover:bg-white mt-4 lg:mt-0" :to="detailLink">Participar por {{concurso.actual_price | currency}}</router-link>
    </div>
    
  </div>
</template>

<script>
  export default {
    props: ['concurso'],
    computed: {
      detailLink(){
        return `/concurso/detail/${this.concurso.id}`;
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>