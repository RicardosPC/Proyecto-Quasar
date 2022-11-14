<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <q-page>
    <!--carrusel del producto-->
    <div class="row">
      <div class="col-3">
        <q-carousel
          animated
          v-model="deslizar"
          arrows
          navigation
          infinite
          flat
          control-color="primary"
         >
      <q-carousel-slide :name="1" img-src="Images/samsung a22 5g/samsung.jpg" />
      <q-carousel-slide :name="2" img-src="Images/samsung a22 5g/samsung1.png" />
      <q-carousel-slide :name="3" img-src="Images/samsung a22 5g/samsung2.png" />
      <q-carousel-slide :name="4" img-src="Images/samsung a22 5g/samsung3.png" />
    </q-carousel>
      </div>
    </div>
  </q-page>
</template>
<script>
import { ref } from 'vue'

export default {
  setup () {
    return {
      deslizar: ref(1)
    }
  }
}
</script>
<style lang="scss">
.q-carousel {
    font-family:  Verdana;
    border: outset;
    margin: 15px 15px;
    color: #6b6a6bec;

}
</style>
