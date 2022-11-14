<template>
  <q-page>
    <!--filtro nuevo-->
    <div class="row">
      <div class="col-2">
        <q-scroll-area style="height: 550px; max-width: 200;">
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
       <!--cartas con los articulos-->
        <div class="row">
          <!---->
          <div class="col-2 col-md-2">
            <q-card class="my-producto">
              <img src="Images/samsung a22 5g/samsung.jpg">
              <q-separator black/>
              <q-card-section>
                <div class="text-h6 text-bold">$209.00</div>
                <div class="text-caption">Samsung A22 5G, Infinity-V de 6.6", 128GB, 4GB Ram</div>
              </q-card-section>
              <q-card-actions vertical>
                <q-btn flat class="my-btn text-white" to="/vista">Detalles</q-btn>
              </q-card-actions>
            </q-card>
          </div>
          <!---->
          <div class="col-2 col-md-2">
            <q-card class="my-producto">
              <img src="Images/samsung a22 5g/samsung.jpg">
              <q-separator black/>
              <q-card-section>
                <div class="text-h6 text-bold">$209.00</div>
                <div class="text-caption">Samsung A22 5G, Infinity-V de 6.6", 128GB, 4GB Ram</div>
              </q-card-section>
              <q-card-actions vertical>
                <q-btn flat class="my-btn text-white" to="/vista">Detalles</q-btn>
              </q-card-actions>
            </q-card>
          </div>
          <!---->
          <div class="col-2 col-md-2">
            <q-card class="my-producto">
              <img src="Images/samsung a22 5g/samsung.jpg">
              <q-separator black/>
              <q-card-section>
                <div class="text-h6 text-bold">$209.00</div>
                <div class="text-caption">Samsung A22 5G, Infinity-V de 6.6", 128GB, 4GB Ram</div>
              </q-card-section>
              <q-card-actions vertical>
                <q-btn flat class="my-btn text-white" to="/vista">Detalles</q-btn>
              </q-card-actions>
            </q-card>
          </div>
          <!---->
          <div class="col-2 col-md-2">
            <q-card class="my-producto">
              <img src="Images/samsung a22 5g/samsung.jpg">
              <q-separator black/>
              <q-card-section>
                <div class="text-h6 text-bold">$209.00</div>
                <div class="text-caption">Samsung A22 5G, Infinity-V de 6.6", 128GB, 4GB Ram</div>
              </q-card-section>
              <q-card-actions vertical>
                <q-btn flat class="my-btn text-white" to="/vista">Detalles</q-btn>
              </q-card-actions>
            </q-card>
          </div>
          <!---->
          <div class="row">
          <!---->
          <div class="col-2 col-md-2">
            <q-card class="my-producto">
              <img src="Images/samsung a22 5g/samsung.jpg">
              <q-separator black/>
              <q-card-section>
                <div class="text-h6 text-bold">$209.00</div>
                <div class="text-caption">Samsung A22 5G, Infinity-V de 6.6", 128GB, 4GB Ram</div>
              </q-card-section>
              <q-card-actions vertical>
                <q-btn flat class="my-btn text-white" to="/vista">Detalles</q-btn>
              </q-card-actions>
            </q-card>
          </div>
          <!---->
          <div class="col-2 col-md-2">
            <q-card class="my-producto">
              <img src="Images/samsung a22 5g/samsung.jpg">
              <q-separator black/>
              <q-card-section>
                <div class="text-h6 text-bold">$209.00</div>
                <div class="text-caption">Samsung A22 5G, Infinity-V de 6.6", 128GB, 4GB Ram</div>
              </q-card-section>
              <q-card-actions vertical>
                <q-btn flat class="my-btn text-white" to="/vista">Detalles</q-btn>
              </q-card-actions>
            </q-card>
          </div>
          <!---->
          <div class="col-2 col-md-2">
            <q-card class="my-producto">
              <img src="Images/samsung a22 5g/samsung.jpg">
              <q-separator black/>
              <q-card-section>
                <div class="text-h6 text-bold">$209.00</div>
                <div class="text-caption">Samsung A22 5G, Infinity-V de 6.6", 128GB, 4GB Ram</div>
              </q-card-section>
              <q-card-actions vertical>
                <q-btn flat class="my-btn text-white" to="/vista">Detalles</q-btn>
              </q-card-actions>
            </q-card>
          </div>
          <!---->
          <div class="col-2 col-md-2">
            <q-card class="my-producto">
              <img src="Images/samsung a22 5g/samsung.jpg">
              <q-separator black/>
              <q-card-section>
                <div class="text-h6 text-bold">$209.00</div>
                <div class="text-caption">Samsung A22 5G, Infinity-V de 6.6", 128GB, 4GB Ram</div>
              </q-card-section>
              <q-card-actions vertical>
                <q-btn flat class="my-btn text-white" to="/vista">Detalles</q-btn>
              </q-card-actions>
            </q-card>
          </div>
          <!---->
        </div>
        </div>
      </div>
    </div>
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

<script>
import { ref } from 'vue'

export default {
  setup () {
    return {
      estado: ref(true),
      samsung: ref(true),
      huawei: ref(true),
      nokia: ref(true),
      iPhone: ref(true),
      xiaomi: ref(true),
      android: ref(true),
      windows: ref(true),
      ios: ref(true),
      pantalla1: ref(true),
      pantalla2: ref(true),
      pantalla3: ref(true),
      paginacion: ref(true)
    }
  }
}
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
