<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="row bg-accent q-pa-md">
    <div class="col-12 col-md-6">
      <fieldset>
        <div class="row bg-secondary">
          <!--Columna de datos del telefono-->
          <div class="col">
            <!--Selecciona estado-->
            <div class="q-pa-md">
              <div class="row">
                <div class="col-3 self-center">
                  <span><b>Estado: </b> </span>
                </div>
                <div class="col">
                  <q-radio v-model="shape" val="usado" label="Usado" />
                  <q-radio v-model="shape" val="nuevo" label="Nuevo" />
                </div>
              </div>
              <br>
              <!--Introduce marca-->
              <div class="row">
                <div class="col-3 self-center"><b>Marca:</b></div>
                <q-input filled square v-model="marca"/>
              </div>
              <br>
              <!--Introduce modelo-->
              <div class="row">
                <div class="col-3 self-center"><b>Modelo: </b></div>
                <q-input filled square v-model="modelo" />
              </div>
              <br>
              <!--Introduce pantalla-->
              <div class="row">
                <div class="col-3 self-center"><b>Pantalla: </b></div>
                <q-input filled square v-model="pantalla" />
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
                <q-input filled square v-model="rom" />
                <div class="col self-center text-center gt-sm">Almacenamiento Interino</div>
              </div>
              <br>
              <!--Introduce RAM-->
              <div class="row">
                <div class="col-3 self-center"><b>RAM: </b></div>
                <q-input filled square v-model="ram" />
              </div>
            </div>
          </div>
        </div>
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
          <q-input filled square v-model="titulo" />
        </div>
      </div>
      <div class="row q-pa-md">
        <div class="col-3 self-center"><b>Vendedor: </b></div>
        <q-input filled square v-model="vendedor" />
      </div>
      <div class="row q-pa-md">
        <div class="col-3 self-center"><b>Telefono: </b></div>
        <q-input filled square v-model="telefono" />
      </div>
      <div class="row q-pa-md">
        <div class="col">
          <b>Descripcion:</b>
          <div class="q-pa-md">
            <q-input square v-model="text" filled autogrow />
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
                  <q-input square v-model="text" filled autogrow />
                </div>
              </fieldset>
          </div>
          <div class="col-3"></div>
        </div>
        <br>
        <div class="row">
          <div class="col-3"></div>
          <div class="col-6">
            <q-btn><span class="material-icons md-36"> cancel </span><legend>Cancelar</legend></q-btn>
            <q-btn><span class="material-icons md-36"> save </span><legend>Guardar</legend></q-btn>
          </div>
          <div class="col-3"></div>
        </div>
        <div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  setup () {
    return {
      shape: ref('Ninguna'),
      model: ref(null),
      options: [
        'IOS', 'Android', 'Win. Movile', 'Otro', 'y otro'
      ]
    }
  }
}
</script>
