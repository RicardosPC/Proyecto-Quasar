<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <q-page>
    <!--carrusel del producto-->
    <div class="row">
      <div class="col-4">
        <q-carousel
          class="my-carousel"
          animated
          v-model="deslizar"
          arrows
          navigation
          infinite
          flat
          control-color="primary"
          control-type="flat"
          padding
         >
      <q-carousel-slide :name="1" img-src="Images/samsung a22 5g/samsung.jpg" />
      <q-carousel-slide :name="2" img-src="Images/samsung a22 5g/samsung1.png" />
      <q-carousel-slide :name="3" img-src="Images/samsung a22 5g/samsung2.png" />
      <q-carousel-slide :name="4" img-src="Images/samsung a22 5g/samsung3.png" />
    </q-carousel>
      </div>
      <div class="col-6">
        <div class="row">
          <q-card class="my-card-producto">
            <q-card-section class="bg-grey-8 text-white">
              <div class="text-body1">Samsung A22 5G, Infinity-V de 6.6", 128GB, 4GB Ram</div>
              <div class="text-h6 text-bold">$209.00</div>
            </q-card-section>

             <q-card-actions>
                <q-btn flat>Comprar</q-btn>
             </q-card-actions>
           </q-card>
          </div>
         <div class="row">
         <q-card class="my-card-producto">
            <q-card-section class="bg-accent-8 text-dark">
              <div class="text-h6">vendedor: Juan Perez</div>
              <div class="text-h6">Telefono: 7374-2312</div>
            </q-card-section>
          </q-card>
        </div>
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
.my-carousel {
    font-family:  Verdana;
    border: outset;
    margin: 15px 15px;
    color: #6b6a6bec;

}

.q-btn {
    color:fff;
    background: #ebe1e6cc;
    border-color:fff;
    font-family:  Verdana;
    border: outset;
    cursor: pointer;
    border-radius: 10px;
    cursor: url(icons/puntero.png), auto;
    margin: 3px;
}
.my-card-producto {
    font-family:  Verdana;
    border: outset;
    margin: 15px;
    color: #6b6a6bec;
    width: 100%;
    max-width: 600px;
}
</style>
