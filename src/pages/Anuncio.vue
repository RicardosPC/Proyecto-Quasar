<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <h5 class="text-center">Nuevo Anuncio</h5>
  <form class="row bg-accent q-pa-md" @submit.prevent.stop="onSubmit" @reset.prevent.stop="onReset">
    <div class="col-12 col-md-6">
      <fieldset>
        <q-form class="row bg-secondary" v-model="formu">
          <!--Columna de datos del telefono-->
          <div class="col">
            <!--Selecciona estado-->
            <div class="q-pa-md">
              <div class="row">
                <div class="col-3 self-center">
                  <span><b>Estado: </b> </span>
                </div>
                <div class="col">
                  <q-radio v-model="shape" val="usado" label="Usado"/>
                  <q-radio v-model="shape" val="nuevo" label="Nuevo" />
                </div>
              </div>
              <br>
              <!--Introduce marca-->
              <div class="row">
                <div class="col-3 self-center"><b>Marca:</b></div>
                <q-input filled square  v-model="marca" :rules="[val => !!val || 'Campo Requerido']" ref="validacionTexto"/>
              </div>
              <br>
              <!--Introduce modelo-->
              <div class="row">
                <div class="col-3 self-center"><b>Modelo: </b></div>
                <q-input filled square v-model="modelo" :rules="[val => !!val || 'Campo Requerido']" ref="validacionTexto"/>
              </div>
              <br>
              <!--Introduce pantalla-->
              <div class="row">
                <div class="col-3 self-center"><b>Pantalla: </b></div>
                <q-input filled square type="number" v-model="pantalla" :rules="[val => !!val || 'Campo Requerido']" ref="validacionTexto"/>
              </div>
              <br>
              <!--Introduce Sistema-->
              <div class="row">
                <div class="col-3 self-center"><b>Sistema: </b></div>
                <q-select filled square v-model="model" :options="options" label="Filled" class="col-4"/>
              </div>
              <br>
              <!--Introduce Rom-->
              <div class="row">
                <div class="col-3 self-center"><b>Rom: </b></div>
                <q-input filled square type="number" v-model="rom" :rules="[val => val>0 || 'Debe de ser mayor que 0.']" ref="validacionTexto"/>
                <div class="col self-center text-center gt-sm">Almacenamiento Interino</div>
              </div>
              <br>
              <!--Introduce RAM-->
              <div class="row">
                <div class="col-3 self-center"><b>RAM: </b></div>
                <q-input filled square type="number" v-model="ram" :rules="[val => val>0 || 'Debe de ser mayor que 0.']" ref="validacionTexto"/>
              </div>
            </div>
          </div>
        </q-form>
      </fieldset>
      <br>
      <!--Columna de fotos del telefono-->
      <fieldset>
        <div class="row bg-secondary q-pa-md">
          <div class="col q-pa-md">
            <span>Formulario de imagenes.</span>
            <form enctype="multipart/form-data">
              <input type="file" accept="image/*">
              <input type="submit" value="Subir Imagen"/>
            </form>
          </div>
        </div>
      </fieldset>
    </div>
    <!--Columna de Especificaciones del telefono-->
    <div class="col-12 col-md-6">
      <div class="row q-pa-md">
        <div class="col">
          <b>Titulo breve del anuncio:</b>
          <q-input filled square v-model="titulo" :rules="[val => !!val || 'Campo Requerido']" ref="validacionTexto"/>
        </div>
      </div>
      <div class="row q-pa-md">
        <div class="col-3 self-center"><b>Vendedor: </b></div>
        <q-input filled square v-model="vendedor" :rules="[val => !!val || 'Campo Requerido']" ref="validacionTexto"/>
      </div>
      <div class="row q-pa-md">
        <div class="col-3 self-center"><b>Telefono: </b></div>
        <q-input filled square v-model="telefono" :rules="[val => val>0 || 'Debe de ser mayor que 0.']" ref="validacionTexto"/>
      </div>
      <div class="row q-pa-md">
        <div class="col">
          <b>Descripcion:</b>
          <div class="q-pa-md">
            <q-input square v-model="descripcion" filled autogrow :rules="[val => !!val || 'Campo Requerido']" ref="validacionTexto"/>
          </div>
        </div>
      </div>
      <div class="col content-center">
        <div class="row">
          <div class="col-3"></div>
          <div class="col-6 bg-secondary">
              <fieldset class="bg-secondary">
                <legend class="bg-secondary">Precio: </legend>
                <div class="container">
                  <q-input square type="number" v-model="precio" filled autogrow :rules="[val => val>0 || 'Debe de ser mayor que 0.']" ref="validacionTexto"/>
                </div>
              </fieldset>
          </div>
          <div class="col-3"></div>
        </div>
        <br>
        <div class="row">
          <div class="col-3"></div>
          <div class="col-6">
            <q-btn @click="resetearValidacion"><span class="material-icons md-36"> cancel </span><legend>Cancelar</legend></q-btn>
            <q-btn><span class="material-icons md-36"> save </span><legend>Guardar</legend></q-btn>
          </div>
          <div class="col-3"></div>
        </div>
        <div>
        </div>
      </div>
    </div>
  </form>
</template>

<script setup>
import { ref } from 'vue'
const shape = ref(null)
const validacionTexto = ref('')
const marca = ref('')
const modelo = ref('')
const pantalla = ref('')
const rom = ref('')
const ram = ref('')
const precio = ref('')
const titulo = ref('')
const vendedor = ref('')
const telefono = ref('')
const descripcion = ref('')
const formu = ref(null)
const resetearValidacion = function reset () {
  shape.value = false
  validacionTexto.value = null
  marca.value = null
  modelo.value = null
  pantalla.value = null
  rom.value = null
  ram.value = null
  precio.value = null
  titulo.value = null
  vendedor.value = null
  telefono.value = null
  descripcion.value = null
}

</script>
