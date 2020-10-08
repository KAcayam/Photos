<template>
<q-page>
  <div class="fit row justify-center">

    <div class="col-md-3 col-xs-2" />
    <div class="col-md-6 col-xs-8">
      <q-card flat>
        <q-item class="q-pa-lg">
          <q-avatar size="60px" class="q-mx-md">
            <img src="https://cdn.quasar.dev/img/boy-avatar.png" to="/MyPage">
          </q-avatar>
          <q-item-section class="q-px-md">
            <q-label class="text-h6 text-weight-bold q-pa-md">
                田中太郎
            </q-label>
          </q-item-section>
        </q-item>
      </q-card>
    </div>
    <div class="col-md-3 col-xs-2 q-px-sm q-pt-sm">
      <q-icon name="add_a_photo" style="font-size: 32px" color="grey-7" @click.stop />
      <q-file borderless v-model="pickup" style="max-width: 200px">
        <template v-slot:prepend>
          <q-icon name="add_photo_alternate" style="font-size: 36px" @click.stop />
        </template>
      </q-file>
    </div>

    <q-separator inset />

    <div class="col-lg-6 col-md-8 col-xs-10">

      <div class="q-pa-md">
        <q-card flat bordered to="MyPhotoPage">
          <q-img src="../../public/photos/01.jpg" />
          <q-card-actions class="q-pt-xs">
            <q-btn flat dense>2020.07.28</q-btn>
            <q-btn flat dense>大阪府大阪市天王寺区四天王寺1-11-18</q-btn>
            <q-icon name="place" />
          </q-card-actions>
          <q-card-actions class="q-pt-none">
            <q-btn flat dense>田中太郎</q-btn>
            <div>大阪出張の際に四天王寺にて</div>
          </q-card-actions>
          <q-card-actions class="q-pt-none">
            <q-btn flat text-color="indigo" dense>#四天王寺</q-btn>
            <q-btn flat text-color="indigo" dense>#五重塔</q-btn>
            <q-btn flat text-color="indigo" dense>#日本のお寺</q-btn>
          </q-card-actions>
          <q-separator />
          <q-card-actions>
            <div class="col-10 q-pl-sm">
              <q-input borderless v-model="text" label="コメントする" dense/>
            </div>
            <q-btn outline color="primary" v-model="post" dense>投稿</q-btn>
          </q-card-actions>
          <q-card-actions align="right">
            <q-btn flat round dense icon="more_horiz">>
              <q-menu>
                <q-list style="min-width: 100px">
                  <q-item clickable v-close-popup>
                    <q-item-section v-model="delete_photo">写真を削除する</q-item-section>
                  </q-item>
                </q-list>
              </q-menu>
            </q-btn>
          </q-card-actions>
        </q-card>
      </div>

      <div class="q-pa-md">
        <q-card flat bordered to="MyPhotoPage">
          <q-img src="../../public/photos/03.jpg" />
          <q-card-actions class="q-pt-xs">
            <q-btn flat dense>2020.07.04</q-btn>
            <q-btn flat dense>東京都千代田区千代田１</q-btn>
            <q-icon name="place" />
          </q-card-actions>
          <q-card-actions class="q-pt-none">
            <q-btn flat dense>田中太郎</q-btn>
            <div>皇居の平川門を竹橋川から眺める</div>
          </q-card-actions>
          <q-card-actions class="q-pt-none">
            <q-btn flat text-color="indigo" dense>#皇居</q-btn>
            <q-btn flat text-color="indigo" dense>#平川門</q-btn>
            <q-btn flat text-color="indigo" dense>#外堀</q-btn>
          </q-card-actions>
          <q-separator />
          <q-card-actions>
            <div class="col-10 q-pl-sm">
              <q-input borderless v-model="text" label="コメントする" dense/>
            </div>
            <q-btn outline color="primary" v-model="post" dense>投稿</q-btn>
          </q-card-actions>
          <q-card-actions align="right">
            <q-btn flat round dense icon="more_horiz">>
              <q-menu>
                <q-list style="min-width: 100px">
                  <q-item clickable v-close-popup>
                    <q-item-section v-model="delete_photo">写真を削除する</q-item-section>
                  </q-item>
                </q-list>
              </q-menu>
            </q-btn>
          </q-card-actions>
        </q-card>
      </div>

      <div class="q-pa-md">
        <q-card flat bordered to="MyPhotoPage">
          <q-img src="../../public/photos/04.jpg" />
          <q-card-actions class="q-pt-xs">
            <q-btn flat dense>2020.06.17</q-btn>
            <q-btn flat dense>東京都世田谷区祖師谷1-7</q-btn>
            <q-icon name="place" />
          </q-card-actions>
          <q-card-actions class="q-pt-none">
            <q-btn flat dense>田中太郎</q-btn>
            <div>駅前のウルトラマン像</div>
          </q-card-actions>
          <q-card-actions class="q-pt-none">
            <q-btn flat text-color="indigo" dense>#祖師ヶ谷大蔵駅</q-btn>
            <q-btn flat text-color="indigo" dense>#ウルトラマン</q-btn>
            <q-btn flat text-color="indigo" dense>#URTRAMAN</q-btn>
            <q-btn flat text-color="indigo" dense>#小田急線</q-btn>
          </q-card-actions>
          <q-separator />
          <q-card-actions>
            <div class="col-10 q-pl-sm">
              <q-input borderless v-model="text" label="コメントする" dense/>
            </div>
            <q-btn outline color="primary" v-model="post" dense>投稿</q-btn>
          </q-card-actions>
          <q-card-actions align="right">
            <q-btn flat round dense icon="more_horiz">>
              <q-menu>
                <q-list style="min-width: 100px">
                  <q-item clickable v-close-popup>
                    <q-item-section v-model="delete_photo">写真を削除する</q-item-section>
                  </q-item>
                </q-list>
              </q-menu>
            </q-btn>
          </q-card-actions>
        </q-card>
      </div>

      <div class="q-pa-md">
        <q-card flat bordered to="MyPhotoPage">
          <q-img src="../../public/photos/06.jpg" />
          <q-card-actions class="q-pt-xs">
            <q-btn flat dense>2020.06.09</q-btn>
            <q-btn flat dense>茨城県笠間市長兎路1059-6</q-btn>
            <q-icon name="place" />
          </q-card-actions>
          <q-card-actions class="q-pt-none">
            <q-btn flat dense>田中太郎</q-btn>
            <div>大型の観光バスが並んでました</div>
          </q-card-actions>
          <q-card-actions class="q-pt-none">
            <q-btn flat text-color="indigo" dense>#常磐道</q-btn>
            <q-btn flat text-color="indigo" dense>#友部サービスエリア</q-btn>
          </q-card-actions>
          <q-separator />
          <q-card-actions>
            <div class="col-10 q-pl-sm">
              <q-input borderless v-model="text" label="コメントする" dense/>
            </div>
            <q-btn outline color="primary" v-model="post" dense>投稿</q-btn>
          </q-card-actions>
          <q-card-actions align="right">
            <q-btn flat round dense icon="more_horiz">>
              <q-menu>
                <q-list style="min-width: 100px">
                  <q-item clickable v-close-popup>
                    <q-item-section v-model="delete_photo">写真を削除する</q-item-section>
                  </q-item>
                </q-list>
              </q-menu>
            </q-btn>
          </q-card-actions>
        </q-card>
      </div>

      <div class="q-pa-md">
        <q-card flat bordered to="MyPhotoPage">
          <q-img src="../../public/photos/08.jpg" />
          <q-card-actions class="q-pt-xs">
            <q-btn flat dense>2020.05.21</q-btn>
            <q-btn flat dense>福島県会津若松市</q-btn>
            <q-icon name="place" />
          </q-card-actions>
          <q-card-actions class="q-pt-none">
            <q-btn flat dense>田中太郎</q-btn>
            <div>飛行機から雲海を眺める</div>
          </q-card-actions>
          <q-card-actions class="q-pt-none">
            <q-btn flat text-color="indigo" dense>#猪苗代湖上空</q-btn>
            <q-btn flat text-color="indigo" dense>#全日空</q-btn>
            <q-btn flat text-color="indigo" dense>#ANA</q-btn>
            <q-btn flat text-color="indigo" dense>#空の旅</q-btn>
          </q-card-actions>
          <q-separator />
          <q-card-actions>
            <div class="col-10 q-pl-sm">
              <q-input borderless v-model="text" label="コメントする" dense/>
            </div>
            <q-btn outline color="primary" v-model="post" dense>投稿</q-btn>
          </q-card-actions>
          <q-card-actions align="right">
            <q-btn flat round dense icon="more_horiz">>
              <q-menu>
                <q-list style="min-width: 100px">
                  <q-item clickable v-close-popup>
                    <q-item-section v-model="delete_photo">写真を削除する</q-item-section>
                  </q-item>
                </q-list>
              </q-menu>
            </q-btn>
          </q-card-actions>
        </q-card>
      </div>

      <div class="q-pa-md">
        <q-card flat bordered to="MyPhotoPage">
          <q-img src="../../public/photos/09.jpg" />
          <q-card-actions class="q-pt-xs">
            <q-btn flat dense>2020.05.20</q-btn>
            <q-btn flat dense>東京都港区愛宕1-5-3</q-btn>
            <q-icon name="place" />
          </q-card-actions>
          <q-card-actions class="q-pt-none">
            <q-btn flat dense>田中太郎</q-btn>
            <div>のぼると出世するという階段</div>
          </q-card-actions>
          <q-card-actions class="q-pt-none">
            <q-btn flat text-color="indigo" dense>#愛宕神社</q-btn>
            <q-btn flat text-color="indigo" dense>#出世の階段</q-btn>
            <q-btn flat text-color="indigo" dense>#曲垣平九郎</q-btn>
          </q-card-actions>
          <q-separator />
          <q-card-actions>
            <div class="col-10 q-pl-sm">
              <q-input borderless v-model="text" label="コメントする" dense/>
            </div>
            <q-btn outline color="primary" v-model="post" dense>投稿</q-btn>
          </q-card-actions>
          <q-card-actions align="right">
            <q-btn flat round dense icon="more_horiz">>
              <q-menu>
                <q-list style="min-width: 100px">
                  <q-item clickable v-close-popup>
                    <q-item-section v-model="delete_photo">写真を削除する</q-item-section>
                  </q-item>
                </q-list>
              </q-menu>
            </q-btn>
          </q-card-actions>
        </q-card>
      </div>

      <div class="q-pa-md">
        <q-card flat bordered to="MyPhotoPage">
          <q-img src="../../public/photos/11.jpg" />
          <q-card-actions class="q-pt-xs">
            <q-btn flat dense>2020.05.02</q-btn>
            <q-btn flat dense>東京都港区芝公園4-2-8</q-btn>
            <q-icon name="place" />
          </q-card-actions>
          <q-card-actions class="q-pt-none">
            <q-btn flat dense>田中太郎</q-btn>
            <div>ライトアップした東京タワーです</div>
          </q-card-actions>
          <q-card-actions class="q-pt-none">
            <q-btn flat text-color="indigo" dense>#東京タワー</q-btn>
            <q-btn flat text-color="indigo" dense>#333m</q-btn>
          </q-card-actions>
          <q-separator />
          <q-card-actions>
            <div class="col-10 q-pl-sm">
              <q-input borderless v-model="text" label="コメントする" dense/>
            </div>
            <q-btn outline color="primary" v-model="post" dense>投稿</q-btn>
          </q-card-actions>
          <q-card-actions align="right">
            <q-btn flat round dense icon="more_horiz">>
              <q-menu>
                <q-list style="min-width: 100px">
                  <q-item clickable v-close-popup>
                    <q-item-section v-model="delete_photo">写真を削除する</q-item-section>
                  </q-item>
                </q-list>
              </q-menu>
            </q-btn>
          </q-card-actions>
        </q-card>
      </div>

      <div class="q-pa-md">
        <q-card flat bordered to="MyPhotoPage">
          <q-img src="../../public/photos/13.jpg" />
          <q-card-actions class="q-pt-xs">
            <q-btn flat dense>2020.04.23</q-btn>
            <q-btn flat dense>大阪府吹田市千里万博公園1-1</q-btn>
            <q-icon name="place" />
          </q-card-actions>
          <q-card-actions class="q-pt-none">
            <q-btn flat dense>田中太郎</q-btn>
            <div>裏にも顔があるのはあまり知られていません</div>
          </q-card-actions>
          <q-card-actions class="q-pt-none">
            <q-btn flat text-color="indigo" dense>#太陽の塔</q-btn>
            <q-btn flat text-color="indigo" dense>#岡本太郎</q-btn>
            <q-btn flat text-color="indigo" dense>#EXPO</q-btn>
            <q-btn flat text-color="indigo" dense>#大阪万博</q-btn>
          </q-card-actions>
          <q-separator />
          <q-card-actions>
            <div class="col-10 q-pl-sm">
              <q-input borderless v-model="text" label="コメントする" dense/>
            </div>
            <q-btn outline color="primary" v-model="post" dense>投稿</q-btn>
          </q-card-actions>
          <q-card-actions align="right">
            <q-btn flat round dense icon="more_horiz">>
              <q-menu>
                <q-list style="min-width: 100px">
                  <q-item clickable v-close-popup>
                    <q-item-section v-model="delete_photo">写真を削除する</q-item-section>
                  </q-item>
                </q-list>
              </q-menu>
            </q-btn>
          </q-card-actions>
        </q-card>
      </div>

</div>

    <q-page-scroller :scroll-offset="200" position="bottom-right" :offset="[18, 18]">
      <q-btn round icon="keyboard_arrow_up" color="primary" />
    </q-page-scroller>

  </div>
</q-page>
</template>

<script>
export default {
  name: 'MyPhotoPage',

  data () {
    return {
      addphoto: null,
      pickup: null,
      text: '',
      post: '',
      delete_photo: ''
    }
  }
}
</script>
