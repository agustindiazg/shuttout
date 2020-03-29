<template>
  <div>
    <div class="bg-gray-500 pt-24 pb-12 px-10 flex flex-col text-center justify-center">
      <div class="grid grid-cols-2 font-medium">
        <div class="text-left"> Agustin </div>
        <div class="text-right"> 24/4 </div>
      </div>
      <span class="font-black flex-1">#FlattenTheCurve</span>
      <span>There are many ways to slow down the virus. We need time. The most important is to make people THINK. Can you do this with your photos?</span>
      <span class="font-black">$14.000</span>
      <span class="flex-1">
        <router-link class="inline-block font-extrabold text-sm p-4 p-2 leading-none rounded text-white  bg-blue-900 mt-4 lg:mt-0" :to="linkToParticipar">Participá</router-link>
      </span>
      <span class="pt-4"> Vota tus imagenes preferidas</span>
    </div>
    <div class="grid grid-cols-1 gap-1 md:gap-3 md:grid-cols-2 lg:grid-cols-3 p-4">
      <img class="row-auto col-span-1" src="https://instagram.faep8-2.fna.fbcdn.net/v/t51.2885-15/e35/p1080x1080/88378944_198601341486576_2591564088853509817_n.jpg?_nc_ht=instagram.faep8-2.fna.fbcdn.net&_nc_cat=100&_nc_ohc=1R7HIsWzU_gAX-_uD0w&oh=a1822a883476231b9d722286f57c20d1&oe=5EAC4A3E" alt="">
      <img class="row-auto col-span-1" src="https://instagram.faep8-1.fna.fbcdn.net/v/t51.2885-15/e35/p1080x1080/87297423_634932627322021_2419697189746528591_n.jpg?_nc_ht=instagram.faep8-1.fna.fbcdn.net&_nc_cat=101&_nc_ohc=d5JXmyr3gDcAX9Y_9VF&oh=78caba80fa072de0b3f797f58fd3f3af&oe=5EA9580E" alt="">
      <img class="row-auto col-span-1" src="https://instagram.faep8-1.fna.fbcdn.net/v/t51.2885-15/e35/s1080x1080/72665745_589402981830233_1957116619763126021_n.jpg?_nc_ht=instagram.faep8-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=Css3-odS8PoAX-W2_7i&oh=7b16ab02866d2a05ec42c513a12f42ee&oe=5EA8A0D1" alt="">
      <img class="row-auto col-span-1" src="https://instagram.faep8-2.fna.fbcdn.net/v/t51.2885-15/e35/p1080x1080/69906165_595645534599446_2758813595523655758_n.jpg?_nc_ht=instagram.faep8-2.fna.fbcdn.net&_nc_cat=102&_nc_ohc=pV0jNtVEYlsAX-1aJsd&oh=e233b1f33bb1cc876c56f4cb8e6ffac4&oe=5EA9C197" alt="">
      <img class="row-auto col-span-1" src="https://instagram.faep8-2.fna.fbcdn.net/v/t51.2885-15/e35/39812991_276633496396692_4749354894383644672_n.jpg?_nc_ht=instagram.faep8-2.fna.fbcdn.net&_nc_cat=100&_nc_ohc=sxAt4iQ3xyIAX-Svm1E&oh=ca1431f93a73bf8710bbdffe22c44178&oe=5EAB6EB1" alt="">
      <img class="row-auto col-span-1" src="https://instagram.faep8-2.fna.fbcdn.net/v/t51.2885-15/e35/21433983_1891192851146505_4705598536371142656_n.jpg?_nc_ht=instagram.faep8-2.fna.fbcdn.net&_nc_cat=109&_nc_ohc=pVBnL5QmAjsAX9mL3G9&oh=900af831e68baaa2f5d7ac534299c319&oe=5EA9C89E" alt="">
    </div>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        concurso_id:"1"
      }
    },
    computed:{
      linkToParticipar(){
        return `/concurso/participar/${this.concurso_id}`;
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>