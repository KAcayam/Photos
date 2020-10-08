<template>
<q-page>
  <div class="fit row justify-center">

    <div class="col-md-3 col-xs-2" />
    <div class="col-md-6 col-xs-8">
      <q-card flat>
        <q-item class="q-pa-lg">
          <q-avatar size="60px" class="q-mx-md">
            <img src="https://cdn.quasar.dev/img/avatar.png">
          </q-avatar>
          <q-item-section class="q-px-md">
            <q-label class="text-h6 text-weight-bold q-pa-md">
                鈴木ヨーコ
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
          <q-img src="../../public/photos/02.jpg" />
          <q-card-actions class="q-pt-xs">
            <q-btn flat dense>2020.07.01</q-btn>
            <q-btn flat dense>東京都千代田区永田町1-10-1</q-btn>
            <q-icon name="place" />
          </q-card-actions>
          <q-card-actions class="q-pt-none">
            <q-btn flat dense>鈴木ヨーコ</q-btn>
            <div>夏の日の風景</div>
          </q-card-actions>
          <q-card-actions class="q-pt-none">
            <q-btn flat text-color="indigo" dense>#国立国会図書館前</q-btn>
            <q-btn flat text-color="indigo" dense>#六本木ヒルズ</q-btn>
            <q-btn flat text-color="indigo" dense>#入道雲</q-btn>
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
          <q-img src="../../public/photos/05.jpg" />
          <q-card-actions class="q-pt-xs">
            <q-btn flat dense>2020.06.25</q-btn>
            <q-btn flat dense>岩手県盛岡市盛岡駅前通1-48</q-btn>
            <q-icon name="place" />
          </q-card-actions>
          <q-card-actions class="q-pt-none">
            <q-btn flat dense>鈴木ヨーコ</q-btn>
            <div>N系の新幹線</div>
          </q-card-actions>
          <q-card-actions class="q-pt-none">
            <q-btn flat text-color="indigo" dense>#東北新幹線</q-btn>
            <q-btn flat text-color="indigo" dense>#盛岡駅</q-btn>
            <q-btn flat text-color="indigo" dense>#GoToトラベル</q-btn>
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
          <q-img src="../../public/photos/07.jpg" />
          <q-card-actions class="q-pt-xs">
            <q-btn flat dense>2020.06.02</q-btn>
            <q-btn flat dense>青森県西津軽郡鰺ヶ沢町大字舞戸町下富田</q-btn>
            <q-icon name="place" />
          </q-card-actions>
          <q-card-actions class="q-pt-none">
            <q-btn flat dense>鈴木ヨーコ</q-btn>
            <div>ローカル鉄道の旅</div>
          </q-card-actions>
          <q-card-actions class="q-pt-none">
            <q-btn flat text-color="indigo" dense>#青森</q-btn>
            <q-btn flat text-color="indigo" dense>#鰺ヶ沢</q-btn>
            <q-btn flat text-color="indigo" dense>#リゾートしらかみ</q-btn>
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
          <q-img src="../../public/photos/10.jpg" />
          <q-card-actions class="q-pt-xs">
            <q-btn flat dense>2020.05.18</q-btn>
            <q-btn flat dense>東京都千代田区隼町4-2</q-btn>
            <q-icon name="place" />
          </q-card-actions>
          <q-card-actions class="q-pt-none">
            <q-btn flat dense>鈴木ヨーコ</q-btn>
            <div>司法府の最高機関の建物</div>
          </q-card-actions>
          <q-card-actions class="q-pt-none">
            <q-btn flat text-color="indigo" dense>#最高裁判所</q-btn>
            <q-btn flat text-color="indigo" dense>#三権分立</q-btn>
            <q-btn flat text-color="indigo" dense>#モダン建築</q-btn>
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
          <q-img src="../../public/photos/12.jpg" />
          <q-card-actions class="q-pt-xs">
            <q-btn flat dense>2020.05.01</q-btn>
            <q-btn flat dense>神奈川県横浜市中区本牧三之谷58-1</q-btn>
            <q-icon name="place" />
          </q-card-actions>
          <q-card-actions class="q-pt-none">
            <q-btn flat dense>鈴木ヨーコ</q-btn>
            <div>本牧の湾岸の夕景</div>
          </q-card-actions>
          <q-card-actions class="q-pt-none">
            <q-btn flat text-color="indigo" dense>#横浜港</q-btn>
            <q-btn flat text-color="indigo" dense>#タンカー</q-btn>
            <q-btn flat text-color="indigo" dense>#京浜工業地帯</q-btn>
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
          <q-img src="../../public/photos/14.jpg" />
          <q-card-actions class="q-pt-xs">
            <q-btn flat dense>2020.04.30</q-btn>
            <q-btn flat dense>青森県西津軽郡鰺ヶ沢町大字南浮田町美ノ捨59-19</q-btn>
            <q-icon name="place" />
          </q-card-actions>
          <q-card-actions class="q-pt-none">
            <q-btn flat dense>鈴木ヨーコ</q-btn>
            <div>志村動物園に出ていた秋田犬</div>
          </q-card-actions>
          <q-card-actions class="q-pt-none">
            <q-btn flat text-color="indigo" dense>#菊谷商店</q-btn>
            <q-btn flat text-color="indigo" dense>#わさお</q-btn>
            <q-btn flat text-color="indigo" dense>#秋田犬</q-btn>
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
          <q-img src="../../public/photos/15.jpg" />
          <q-card-actions class="q-pt-xs">
            <q-btn flat dense>2020.04.09</q-btn>
            <q-btn flat dense>青森県西津軽郡鰺ヶ沢町大字南浮田町美ノ捨59-19</q-btn>
            <q-icon name="place" />
          </q-card-actions>
          <q-card-actions class="q-pt-none">
            <q-btn flat dense>鈴木ヨーコ</q-btn>
            <div>津軽海峡の近く</div>
          </q-card-actions>
          <q-card-actions class="q-pt-none">
            <q-btn flat text-color="indigo" dense>#五能線</q-btn>
            <q-btn flat text-color="indigo" dense>#鰺ヶ沢駅</q-btn>
            <q-btn flat text-color="indigo" dense>#津軽海峡冬景色</q-btn>
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
          <q-img src="../../public/photos/16.jpg" />
          <q-card-actions class="q-pt-xs">
            <q-btn flat dense>2020.03.27</q-btn>
            <q-btn flat dense>滋賀県東近江市甲津畑町67</q-btn>
            <q-icon name="place" />
          </q-card-actions>
          <q-card-actions class="q-pt-none">
            <q-btn flat dense>鈴木ヨーコ</q-btn>
            <div>木々と木漏れ日と雲</div>
          </q-card-actions>
          <q-card-actions class="q-pt-none">
            <q-btn flat text-color="indigo" dense>#いわなの里</q-btn>
            <q-btn flat text-color="indigo" dense>#清流</q-btn>
            <q-btn flat text-color="indigo" dense>#グリーンランド</q-btn>
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
