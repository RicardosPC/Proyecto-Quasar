<template>
  <q-layout view="hHh lpR fff">

    <q-header elevated class="bg-primary text-white">
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
        <div class="div">
          <q-toolbar-title class="gt-sm">
            <q-avatar>
              <img src="../../public/icons/altoparlante.png" alt="parlante">
            </q-avatar>
            CellPhone Ebay
          </q-toolbar-title>
        </div>
        <!--Buscador-->
        <q-input dark dense standout v-model="text" input-class="text-right" class="q-ml-md col-5 bg-secondary">
          <template v-slot:append>
            <q-icon v-if="text === ''" name="search" class="text-dark"/>
            <q-icon v-else name="clear" class="cursor-pointer text-dark" @click="text = ''"/>
          </template>
        </q-input>

        <q-btn class="bg-secondary text-primary" to="/ejemplo">Inicio</q-btn>
        <div class="container-fluid">
        <span class="material-icons md-36"> add_circle </span>
        <span class="material-icons md-36">add_shopping_cart</span>
      </div>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" side="left" behavior="mobile" bordered>
      <!-- drawer content -->
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer elevated class="bg-grey-8 text-white">
      <q-toolbar>
        <q-toolbar-title>
          <div>Title</div>
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

    return {
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
}
</script>
