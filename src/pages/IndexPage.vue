<template>
  <q-page>
    <!--filtro nuevo marcas sistema pantalla-->
    <div class="row">
      <div class="col-2 gt-sm">
        <q-scroll-area style="height: 500px; max-width: 200;">
          <div class="row"></div>
          <div class="row">
          <q-toggle
            v-model="estado"
            label="Nuevo"
            checked-icon="check"
            unchecked-icon="clear"
            color="primary"
            size="sm"
            keep-color
          />
        </div>
        <q-card class="my-card bg-white">
          <q-card-section>
            <div class="text-h6 text-bold">Marca</div>
          </q-card-section>
          <q-card-actions vertical>
            <q-checkbox
              v-model="samsung"
              label="Samsung"
              color="primary"
              size="sm"
              dense
              keep-color
              />
              <q-checkbox
              v-model="huawei"
              label="Huawei"
              color="primary"
              size="sm"
              dense
              keep-color
              />
              <q-checkbox
              v-model="nokia"
              label="Nokia"
              color="primary"
              size="sm"
              dense
              keep-color
              />
              <q-checkbox
              v-model="iPhone"
              label="iPhone"
              color="primary"
              size="sm"
              dense
              keep-color
              />
              <q-checkbox
              v-model="xiaomi"
              label="Xiaomi"
              color="primary"
              size="sm"
              dense
              keep-color
              />
          </q-card-actions>
        </q-card>
        <q-card class="my-card bg-white">
          <q-card-section>
            <div class="text-h6 text-bold">Sistema</div>
          </q-card-section>
          <q-card-actions vertical>
            <q-checkbox
              v-model="android"
              label="Android"
              color="primary"
              size="sm"
              dense
              keep-color
              />
              <q-checkbox
              v-model="windows"
              label="Windows"
              color="primary"
              size="sm"
              dense
              keep-color
              />
              <q-checkbox
              v-model="ios"
              label="Ios"
              color="primary"
              size="sm"
              dense
              keep-color
              />
          </q-card-actions>
        </q-card>
        <q-card class="my-card bg-white">
          <q-card-section>
            <div class="text-h6 text-bold">Pantalla</div>
          </q-card-section>
          <q-card-actions vertical>
            <q-checkbox
              v-model="pantalla1"
              label="6.0"
              color="primary"
              size="sm"
              dense
              keep-color
              />
              <q-checkbox
              v-model="pantalla2"
              label="5.5"
              color="primary"
              size="sm"
              dense
              keep-color
              />
              <q-checkbox
              v-model="pantalla3"
              label="5.0"
              color="primary"
              size="sm"
              dense
              keep-color
              />
          </q-card-actions>
        </q-card>
        </q-scroll-area>
      </div>
      <div class="col-10">
        <div class="row">
          <div class="col"></div>
          <div class="col-2">
            Precio:
            <q-input type="number" dense rounded standout bottom-slots v-model.number="desde" label="Desde">
              <template v-slot:prepend>
                <q-icon name="attach_money" />
              </template>
              <template v-slot:hint>
                Precio desde:
              </template>
            </q-input>
          </div>
          <div class="col-2">
            Hasta:
            <q-input type="number" dense rounded standout bottom-slots v-model.number="hasta" label="Hasta">
              <template v-slot:prepend>
                <q-icon name="attach_money" />
              </template>
              <template v-slot:hint>
                Precio hasta:
              </template>
            </q-input>
          </div>
          <div class="col-1 self-center">
            <q-btn class="gt-sm" @click="filtrarPrecio" round color="primary" icon="search" />
          </div>
          <div class="col-2 self-center">
            <q-btn class="gt-sm" round @click="cargarDatosOriginales" v-show="hayFiltrosP" color="primary" icon="close" />
            <q-select dense class="col-4 lt-md" v-model="ordenarpor" :options="opcionesOrdenar" outlined label="Ordenar por:"
              @update:model-value="cambioSelectOrdenar" />
            <div class="col-5 mobile-hide gt-sm">
              <!-- Ordenar Por: -->
              <q-btn-toggle v-model="ordenarpor" class="my-custom-toggle mobile-hide" no-caps roundedunelevated toggle-color="primary" color="white" text-color="primary" :options="opcionesOrdenar" @click="ordenar"/>
            </div>
          </div>
          <div class="col"></div>
        </div>
       <!--cartas con los articulos-->
        <div class="row">
          <!---->
          <div class="col"  v-for="(item,key) in articulos" :key="key">
            <q-card class="my-card q-pa-xs">
              <img :src="item.urlImagen">
              <q-separator black/>
              <q-card-section>
                <div class="text-h6 text-center">${{item.precio}}</div>
                <div class="text-subtitle2">{{item.titulo}}</div>
              </q-card-section>
              <q-card-section class="q-pt-none">
                <q-card-actions align="right">
                  <q-btn  @click="fullHeight = true"  class="bg-primary text-white" flat>Ver detalles</q-btn>
                </q-card-actions>
              </q-card-section>
            </q-card>
          </div>
        </div>
        <q-dialog v-model="fullHeight" full-height>
          <q-card class="column full-height" style="width: 200px"   v-for="(item,key) in articulos" :key="key">
            <q-card-section>
              <img :src="item.urlImagen">
              <div class="text-h6 text-center">${{item.precio}}</div>
              <div class="text-subtitle2">{{item.titulo}}</div>
              <div class="text-h6 text-center">${{item.descripcion}}</div>
            </q-card-section>
            <q-card-actions align="right" class="bg-white text-teal">
              <q-btn flat label="OK" v-close-popup />
            </q-card-actions>
          </q-card>
        </q-dialog>
      </div>
    </div>
    <br>
    <div class="row justify-center">
      <q-pagination
        v-model="paginacion"
        :max="5"
        direction-links
        unelevated
        color="dark"
        active-color="dark-page"
      />
    </div>
  </q-page>
</template>

<script setup>
import { collection, getDocs } from 'firebase/firestore'
import { db } from 'boot/database'
import { ref, onMounted, computed } from 'vue'
import { getStorage, ref as refStorage, listAll, getDownloadURL } from 'firebase/storage'

const desde = ref(0)
const hasta = ref(0)
const hayFiltrosP = ref(false)
const contaCargarFoto = ref(0)
const fullHeight = ref(false)
const storage = getStorage()
const ordenarpor = ref('PRECIO')
const opcionesOrdenar = ref([{ label: 'PRECIO', value: 'PRECIO' }, { label: 'FECHA', value: 'FECHA' }])
const articuloriginal = ref([
  { id: '12234', precio: 132, titulo: 'Iphone 6 pantalla de 8 pulgadas, 64Gb internos 2Gb de Ram, Sólo Banda Tigo, Nuevo', vendedor: 'Juan Perez', telefono: 7613 - 1106, fecha: '2022-10-05' },
  { id: '122345', precio: 125, titulo: 'Iphone 7 pantalla de 8 pulgadas, 64Gb internos 2Gb de Ram, Sólo Banda Tigo, Nuevo', vendedor: 'Juan Perez', telefono: 7613 - 1106, fecha: '2022-09-05' },
  { id: '122346', precio: 100, titulo: 'Iphone 8 pantalla de 8 pulgadas, 64Gb internos 2Gb de Ram, Sólo Banda Tigo, Nuevo', vendedor: 'Juan Perez', telefono: 7613 - 1106, fecha: '2022-07-05' },
  { id: '12234', precio: 141, titulo: 'Iphone 4 pantalla de 8 pulgadas, 64Gb internos 2Gb de Ram, Sólo Banda Tigo, Nuevo', vendedor: 'Juan Perez', telefono: 7613 - 1106, fecha: '2022-04-05' }
])
const articulos = ref([])
// Computed
const hayFiltro = computed(() => {
  if (desde.value > 0 && hasta.value > 0) {
    return true
  } else {
    return false
  }
})
// observadores

// Metodos

async function cargarDatosOriginales () {
  hayFiltrosP.value = false
  articulos.value = []
  articuloriginal.value = []
  const querySnapshot = await getDocs(collection(db, 'articulos'))
  querySnapshot.forEach((doc) => {
    const tupla = doc.data()
    tupla.id = doc.id
    articuloriginal.value.push(tupla)
    // console.log(`${doc.id} => ${doc.data()}`);
  })
  cargarImagenes()
}
function cargarImagenes () {
  console.log('cargar imagenes')
  articuloriginal.value.forEach((arti) => {
    console.log(arti.id)
    const listRef = refStorage(storage, arti.id)
    // Find all the prefixes and items.
    listAll(listRef).then((res) => {
      if (res.items.length > 0) {
        getDownloadURL(refStorage(storage, res.items[0].fullPath)).then((url) => {
        // `url` is the download URL for 'images/stars.jpg'
          console.log(url)
          contaCargarFoto.value++
          arti.urlImagen = url
          estanCompletasImagenes()
        // console.log(url)
        }).catch((error) => {
          console.log(error)
        })
      } else {
        estanCompletasImagenes()
        contaCargarFoto.value++
      }
    })
  })
}
function filtrarPrecio () {
  hayFiltrosP.value = true
  if (desde.value > 0 && hasta.value > 0) {
    articulos.value = articulos.value.filter((item) => {
      if (item.precio >= desde.value && item.precio <= hasta.value) {
        return true
      } else {
        return false
      }
    })
  }
}
function cambioSelectOrdenar (value) {
  console.log(value)
  ordenarpor.value = value.value
  ordenar()
}
const ordenar = () => {
  if (ordenarpor.value === 'PRECIO') {
    articulos.value.sort((a, b) => a.precio - b.precio)
  }
  if (ordenarpor.value === 'FECHA') {
    articulos.value.sort((a, b) => {
      if (a.fecha < b.fecha) {
        return -1
      }
      if (a.fecha > b.fecha) {
        return 1
      }
      return 0
    })
  }
}
function estanCompletasImagenes () {
  console.log('estan completas')
  if (contaCargarFoto.value === articuloriginal.value.length) {
    console.log('si estan completas')
    articulos.value = articuloriginal.value.map((a) => {
      return { ...a }
    })
  }
}
// ciclo de vida
onMounted(() => {
  cargarDatosOriginales()
  ordenar()
  /* fullHeight */
})
console.log(hayFiltro.value)
</script>
<style lang="scss">
.my-card {
    font-family:  Verdana;
    border: outset;
    margin: 15px;
    color: #6b6a6bec;
    width: 100%;
    max-width: 125px;
}
.my-producto {
    font-family:  Verdana;
    border: outset;
    margin: 5px 5px;
    color: #6b6a6bec;
    height: 100%;
    max-height: 360px;
    width: 100%;
    max-width: 360;
    background: #ebe1e6cc;
}
.my-btn {
    color:white;
    background: #6b6a6bec;
    font-family:  Verdana;
    border: outset;
    cursor: pointer;
    border-radius: 10px;
    cursor: url(icons/puntero.png), auto;
    margin: 3px;
}
.q-checkbox {
    cursor: pointer;
    cursor: url(icons/puntero.png), auto;
}
.q-toggle {
    cursor: pointer;
    cursor: url(icons/puntero.png), auto;
}
</style>
