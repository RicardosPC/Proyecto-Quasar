<template>
  <div class="q-pa-md" style="max-width: 1400px">
    <h2 class="text-center"><b>Nuevo Anuncio</b></h2>
    <form @submit.prevent.stop="onSubmit" @reset.prevent.stop="onReset" class="q-gutter-xs col-xs-12 col-sm-12 col-md-6" >
      <div class="row q-pa-md">
        <div class="col-12 col-md-6">
          <div class="row">
            <!--Columna de datos del telefono-->
            <div class="col ">
            <!--Selecciona estado-->
              <q-card class="my-card" style="max-width: 500px">
                <fieldset>
                  <div class="q-pa-md" style="max-width: 900px">
                    <span>Estado: </span>
                    <q-toggle v-model="nuevo.nuevo"  ref="accept1" label="Nuevo" />
                    <br>
                    <!--Introduce marca-->
                    <div class="row self-center">
                      <div class="col-3 self-center">Marca:</div>
                      <q-input class="col self-center" outlined ref="marca1" filled v-model="nuevo.marca" label="Marca" lazy-rules :rules="[ val => val && val.length > 0 || 'Campo requerido']"/>
                    </div>
                    <br>
                    <!--Introduce modelo-->
                    <div class="row">
                      <div class="col-3 self-center">Modelo:</div>
                      <q-input class="col self-center" outlined ref="modelo1" filled v-model="nuevo.modelo" label="Modelo" lazy-rules :rules="[ val => val && val.length > 0 || 'Campo requerido']" />
                    </div>
                    <br>
                    <!--Introduce pantalla-->
                    <div class="row">
                      <div class="col-3 self-center">Pantalla:</div>
                      <q-input class="col self-center" outlined ref="pantalla1" filled v-model="nuevo.pantalla" label="Pantalla" lazy-rules :rules="[ val => val && val.length > 0 || 'Campo requerido']"/>
                    </div>
                    <br>
                    <!--Introduce Sistema-->
                    <div class="row">
                      <div class="col-3 self-center">Sistema:</div>
                      <q-select class="col self-center" outlined color="primary"  ref="sistema1" v-model="nuevo.sistema" :options="sistemas" label="Sistema">
                      </q-select>
                    </div>
                    <br>
                    <!--Introduce Rom-->
                    <div class="row">
                      <div class="col-3 self-center">Rom:</div>
                      <q-input class="col self-center" outlined ref="rom1" filled v-model="nuevo.rom" label="Rom" lazy-rules :rules="[ val => val && val.length > 0 || 'Campo requerido']"/>
                    </div>
                    <br>
                    <!--Introduce RAM-->
                    <div class="row">
                      <div class="col-3 self-center">RAM:</div>
                      <q-input class="col self-center" outlined ref="ram1" filled v-model="nuevo.ram" label="RAM" lazy-rules :rules="[ val => val && val.length > 0 || 'Campo requerido']"/>
                    </div>
                  </div>
                </fieldset>
              </q-card>
            </div>
          </div>
          <br>
          <!--Columna de fotos del telefono-->
          <q-card class="my-card" style="max-width: 500px">
            <fieldset>
              <legend>Imagenes</legend>
              <div class="row bg-white q-pa-md">
                <div class="col q-pa-md">
                  Agregar Imagenes.
                  <br><br>
                  <q-file v-model="fotos" label="Agregar Imagenes" filled multiple accept=".jpg, image/*" style="max-width: 300px" @update:model-value="obtenerURL" />
                </div>
              </div>
            </fieldset>
          </q-card>
        </div>
        <!--Columna de Especificaciones del telefono-->
        <div class="col-12 col-md-6" style="max-width: 700px">
          <div class="row-11">
            <!--Columna de datos del telefono-->
            <div class="col">
              <!--Selecciona estado-->
              <q-card class="my-card" style="max-width: 900px">
                <div class="q-pa-md">
                  Titulo breve del anuncio
                  <br><br>
                  <!--Introduce marca-->
                  <div class="row">
                    <div class="col self-center">
                      <q-input class="col self-center" outlined ref="titulo1" filled v-model="nuevo.titulo" label="Titulo" lazy-rules :rules="[ val => val && val.length > 0 || 'Campo requerido']"/>
                    </div>
                  </div>
                  <br>
                  <!--Introduce modelo-->
                  <div class="row">
                    <div class="col-2 self-center">Vendedor:</div>
                    <q-input class="col self-center" outlined ref="vendedor1" filled v-model="nuevo.vendedor" label="Vendedor" lazy-rules  :rules="[ val => val && val.length > 0 || 'Campo requerido']"/>
                  </div>
                    <br>
                    <!--Introduce pantalla-->
                    <div class="row">
                      <div class="col-2 self-center">Telefono:</div>
                        <q-input class="col self-center" outlined ref="telefono1" filled v-model="nuevo.telefono" label="Telefono" lazy-rules :rules="[ val => val && val.length > 0 || 'Campo requerido']"/>
                    </div>
                    <br>
                    <!--Introduce Sistema-->
                    <div class="row">
                      Descripcion:
                      <div class="col q-pa-md" label="Descripcion del producto" >
                        <br>
                        <q-input class="col self-center" outlined ref="descripcion1" v-model="nuevo.descripcion" filled type="textarea" label="Descripcion" lazy-rules :rules="[ val => val && val.length > 0 || 'Campo requerido']"/>
                      </div>
                    </div>
                    <div class="row justify-center">
                      <div class="col-6 bg-secondary">
                        <fieldset class="bg-secondary">
                          <legend class="bg-secondary">Precio: </legend>
                          <div class="container">
                            <q-input class="col self-center" outlined ref="precio1" filled v-model="nuevo.precio" label="precio" lazy-rules :rules="[ val => val && val.length > 0 || 'Campo requerido']"/>
                          </div>
                        </fieldset>
                      </div>
                    </div>
                    <br>
                    <br>
                    <div class="row justify-center">
                        <q-btn label="Guardar" type="submit" color="primary"/>
                        <q-btn label="Borrar" type="reset" color="primary" flat class="q-ml-sm" />
                    </div><!---->
                  </div>
                </q-card>
              </div>
            </div>
        </div>
      </div>
    </form>
  </div>
</template>
<script>
import { useQuasar } from 'quasar'
import { ref } from 'vue'
import { collection, addDoc } from 'firebase/firestore'
import { db } from 'boot/database'
import { useRouter } from 'vue-router'
import { getStorage, ref as ref2, uploadBytes } from 'firebase/storage'

export default {
  setup () {
    const subirArticulo = async function () {
      try {
        const docRef = await addDoc(collection(db, 'articulos'), nuevo.value)
        console.log('Document written with ID: ', docRef.id)
        idArticulo.value = docRef.id
        subirImagenes()
      } catch (e) {
        console.error('Error subir articulo: ', e)
      }
    }
    const subirImagenes = function () {
      console.log('subir imagen')
      const storage = getStorage()
      fotos.value.forEach((foto) => {
        const storageRef = ref2(storage, idArticulo.value + '/' + foto.name)
        uploadBytes(storageRef, foto).then((snapshot) => {
          contaImg.value++
          eslaUltima()
        })
      })
    }
    function eslaUltima () {
      if (contaImg.value === fotos.value.length) {
        $q.notify({
          message: 'Se agrego el articulo.',
          color: 'primary',
          icon: 'save'
        })
        router.push('/')
      }
    }
    function obtenerURL () {
      if (fotos.value) {
        fotos.value.forEach(element => {
          fotosURL.value.push(URL.createObjectURL(element))
        })
      }
    }
    const contaImg = ref(0)
    const fotos = ref(null)
    const fotosURL = ref([])
    const $q = useQuasar()
    const router = useRouter()
    const idArticulo = ref('')
    const sistemas = ['Android', 'Windows', 'Ios']
    const slide = ref(1)
    const nuevo = ref({
      nuevo: false,
      marca: '',
      modelo: '',
      pantalla: '',
      sistema: '',
      rom: '',
      ram: '',
      imagen: '',
      titulo: '',
      vendedor: '',
      telefono: '',
      descripcion: '',
      precio: ''
    })

    return {

      fotos,
      sistemas,
      nuevo,
      slide,
      obtenerURL,
      onSubmit () {
        subirArticulo()
      },

      onReset () {
        nuevo.value = {
          nuevo: false,
          marca: '',
          modelo: '',
          pantalla: '',
          sistema: '',
          rom: '',
          ram: '',
          titulo: '',
          vendedor: '',
          telefono: '',
          descripcion: '',
          precio: '',
          imagen: ''
        }
      }
    }
  }
}
</script>
