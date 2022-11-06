<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="row">
    <div class="col-12 col-md-6">
      <div class="row">
        <!--Columna de datos del telefono-->
        <div class="col">
          <!--Selecciona estado-->
          <div class="q-pa-md">
              <span>Estado: </span>
              <q-radio v-model="shape" val="usado" label="Usado" />
              <q-radio v-model="shape" val="nuevo" label="Nuevo" />
            <div class="q-px-sm">
              Has seleccionado la opcion: <strong>{{ shape }}</strong>
            </div>
            <br>
            <!--Introduce marca-->
            <div class="row">
              <div class="col-3 self-center">Marca:</div>
              <q-input filled square v-model="marca"/>
            </div>
            <br>
            <!--Introduce modelo-->
            <div class="row">
              <div class="col-3 self-center">Modelo:</div>
              <q-input filled square v-model="modelo" />
            </div>
            <br>
            <!--Introduce pantalla-->
            <div class="row">
              <div class="col-3 self-center">Pantalla:</div>
              <q-input filled square v-model="pantalla" />
            </div>
            <br>
            <!--Introduce Sistema-->
            <div class="row">
              <div class="col-3 self-center">Sistema:</div>
              <q-select filled square v-model="model" :options="options" label="Filled" class="col-4"/>
            </div>
            <br>
            <!--Introduce Rom-->
            <div class="row">
              <div class="col-3 self-center">Rom:</div>
              <q-input filled square v-model="rom" />
              <div class="col self-center text-center gt-sm">Almacenamiento Interino</div>
            </div>
            <br>
            <!--Introduce RAM-->
            <div class="row">
              <div class="col-3 self-center">RAM:</div>
              <q-input filled square v-model="ram" />
            </div>
          </div>
        </div>
      </div>
      <!--Columna de fotos del telefono-->
      <div class="row">
            <div class="col q-pa-md">
              <span>Formulario de imagenes.</span>
              <form enctype="multipart/form-data">
                <input type="file" accept="image/*">
                <input type="submit" value="Subir Imagen">
              </form>
            </div>
        </div>
    </div>
    <!--Columna de Especificaciones del telefono-->
    <div class="col-12 col-md-6">
      algo
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import {storage} from''

export default {
  setup () {
    return {
      shape: ref('Ninguna'),
      model: ref(null),
      options: [
        'Google', 'Facebook', 'Twitter', 'Apple', 'Oracle'
      ]
    }
  },
  data() {
    return{
      imagenes:[],
      imagen:null
    },
    methods:{

    }
  }
}
</script>
