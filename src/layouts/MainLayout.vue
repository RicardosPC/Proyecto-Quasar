<template>
  <q-layout view="hHh lpR fff">
    <!--Encabezado-->
    <q-header class="bg-primary text-white">
      <q-toolbar class="justify-between">
          <q-btn
          class="lt-md"
          md
          dense
          flat
          round
          icon="menu"
          @click="toggleLeftDrawer"
          />
          <!--Imagen mas titulo-->
        <div>
          <q-toolbar-title class="gt-sm">
            <q-avatar>
              <img src="/icons/altoparlante.png" alt="parlante">
            </q-avatar>
            <b>CellPhone Ebay</b>
          </q-toolbar-title>
        </div>
        <!--Buscador-->
        <q-input dark dense standout v-model="text" input-class="text-right" class="q-ml-md col-5 bg-secondary" placeholder="¿Qué estás buscando?">
          <template v-slot:append>
            <q-icon v-if="text === ''" name="search" class="text-dark"/>
            <q-icon v-else name="clear" class="cursor-pointer text-dark" @click="text = ''"/>
          </template>
        </q-input>
        <!--Botones comprar y carrito-->
        <q-btn class="bg-secondary text-primary gt-sm" to="/">Inicio</q-btn>
        <div class="gt-sm">
          <q-btn to="/anuncio"><span class="material-icons md-36"> add_circle </span></q-btn>
          <q-btn to="/anuncio"><span class="material-icons md-36">add_shopping_cart</span></q-btn>
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" side="left" behavior="mobile" bordered>
      <div class="q-pa-md" style="max-width: 350px">
        <q-list>
          <q-item clickable v-ripple>
            <q-item-section avatar>
              <q-avatar>
              <img src="/icons/altoparlante.png" alt="parlante">
            </q-avatar>
            </q-item-section>
            <q-item-section>CellPhone EBay</q-item-section>
          </q-item>
          <q-separator />
          <q-item clickable v-ripple>
            <q-item-section avatar>
              <span class="material-icons md-36" to="/">home</span>
            </q-item-section>
            <q-item-section>Inicio</q-item-section>
          </q-item>
          <q-separator />
          <q-item clickable v-ripple>
            <q-item-section avatar>
              <span class="material-icons md-36" to="/anuncio">add_circle</span>
            </q-item-section>
            <q-item-section>Nuevo Anuncio</q-item-section>
          </q-item>
          <q-separator />
          <q-item clickable v-ripple>
            <q-item-section avatar>
              <span class="material-icons md-36">add_shopping_cart</span>
            </q-item-section>
            <q-item-section>Carrito</q-item-section>
          </q-item>
          <q-separator />
        </q-list>
      </div>
    </q-drawer>

    <q-page-container>
      <router-view />

    </q-page-container>

    <q-footer class="bg-8 text-white" style="background-color:#5dc460;">
      <q-toolbar class="my-footer">
        <q-toolbar-title>
          <div class="text-caption text-bold">&copy; 2022 Judith Elizabeth Amaya Cano AC14027 / Ingeniería en sistemas Informáticos</div>
          <div class="text-caption text-bold">&copy; 2022 Ricardo Edenilson Guevara Rivas GR12043 / Ingeniería en sistemas Informáticos</div>
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script>
import { ref } from 'vue'

export default {
  setup () {
    const leftDrawerOpen = ref(false)
    const rightDrawerOpen = ref(false)

    return {
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      },
      rightDrawerOpen,
      toggleRightDrawer () {
        rightDrawerOpen.value = !rightDrawerOpen.value
      }
    }
  }
}
</script>
<style lang="scss">
.my-footer {
    text-align: center;
    padding: 10px;
    color: #6b6a6bec;
    font-family:  Verdana;
    border: black solid;
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

.q-header {
    text-align: center;
    padding: 5px;
    color: #6b6a6bec;
    font-family:  Verdana;
    border: black solid;
}
</style>
