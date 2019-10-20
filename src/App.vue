<template>
  <v-app>
    <v-container>
      <v-row
        no-gutters
      >
        <v-col>
          <div class="display-1 port-title">マイポートフォリオ</div>
        </v-col>
      </v-row>
      <v-row
        no-gutters
      >
        <v-col class="col-4">
            <v-container fluid="">
              <v-row  justify="center">
                <v-card
                  class="pa-2"
                  outlined
                  tile
                >
                  <v-img
                    src="@/icon_image.png"
                    max-width="250">
                  </v-img>
                </v-card>
              </v-row>
            </v-container>
          <v-row
            no-gutters
          >
            <v-col>
              <v-card
                class="pa-2"
                outlined
                tile
              >
                One of three columns
                One of three columns
                One of three columns
              </v-card>
            </v-col>
          </v-row>
          <v-icon color="#55acee" x-large>mdi-twitter</v-icon>
          <v-icon color="#3b5998" x-large>mdi-facebook</v-icon>
          <v-icon color="black" x-large>mdi-github-circle</v-icon>
        </v-col>
        <v-col>
          <v-row>
            <v-col class="col-1 d-flex">
              <v-container fluid="" class="pa-0">
                <v-row
                  no-gutters
                  justify="center"
                >
                  <div class="border"></div>
                </v-row>
              </v-container>
            </v-col>
            <v-col>
              <v-row
                no-gutters
                class="pb-4"
              >
                <v-col>
                  <v-card
                    class="pa-2"
                    outlined
                    tile
                    color="#cfe2f3"
                  >
                    <p class="title">自己紹介</p>
                    <p>
                      2年目のITエンジニアです。
                      面白い人になりたいなー、と試行錯誤しながら生きています。
                      最新技術に興味があり、日々勉強だなーと感じながら、毎日頑張って生きています。
                    </p>
                  </v-card>
                </v-col>
              </v-row>
              <v-row
                no-gutters
                class="pb-4"
              >
                <v-col>
                  <v-card
                    class="pa-2"
                    outlined
                    tile
                    color="#ead1dc"
                  >
                    <p class="title">興味のある技術</p>
                    <p>Linux</p>
                    <p>AWS</p>
                    <p>Vue.js</p>
                  </v-card>
                </v-col>
              </v-row>
              <v-row
                no-gutters
              >
                <v-col>
                  <v-card
                    class="pa-2"
                    outlined
                    tile
                    color="#f5e4bf"
                  >
                    <p class="title">好きな言葉</p>
                    <p>どんなことでも、経験するというのはあなたの財産になります</p>
                  </v-card>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<style scoped>
#app {
  background: #e8e8e8;
}
.border{
  background-color: #585858;
  width: 1px;
  height:80vh;
}
.port-title {
  border-left: solid 10px #4a86e8;
  border-top:  solid 3px #4a86e8;
  border-bottom:  solid 3px #4a86e8;
  border-right: solid 3px #4a86e8;
}
</style>

<script>
// import HelloWorld from './components/HelloWorld';

export default {
  name: 'App',
  components: {
    // HelloWorld,
  },
  data: () => ({
    alignments: [
      'start',
      'center',
      'end',
    ],
  }),
};
</script>
