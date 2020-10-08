<template>
  <q-page>
    <div class="q-col-gutter-md row items-start q-pa-md">

      <div class="col-4">
        <q-card flat bordered>
        <q-img src="../../public/photos/01.jpg" :ratio="1" />
        </q-card>
        <q-btn label="詳細ページ" color="grey-6" dense to="/MyPhotoPage" />
      </div>

      <div class="col-4">
        <q-card flat bordered>
        <q-img src="../../public/photos/03.jpg" :ratio="1" />
        </q-card>
      </div>

      <div class="col-4">
        <q-card flat bordered>
        <q-img src="../../public/photos/04.jpg" :ratio="1" />
        </q-card>
      </div>

      <div class="col-4">
        <q-card flat bordered>
        <q-img src="../../public/photos/06.jpg" :ratio="1" />
        </q-card>
      </div>

      <div class="col-4">
        <q-card flat bordered>
        <q-img src="../../public/photos/08.jpg" :ratio="1" />
        </q-card>
      </div>

      <div class="col-4">
        <q-card flat bordered>
        <q-img src="../../public/photos/09.jpg" :ratio="1" />
        </q-card>
      </div>

      <div class="col-4">
        <q-card flat bordered>
        <q-img src="../../public/photos/10.jpg" :ratio="1" />
        </q-card>
      </div>

      <div class="col-4">
        <q-card flat bordered>
        <q-img src="../../public/photos/13.jpg" :ratio="1" />
        </q-card>
      </div>

    <q-page-scroller :scroll-offset="200" position="bottom-right" :offset="[18, 18]">
      <q-btn round icon="keyboard_arrow_up" color="primary" />
    </q-page-scroller>

    </div>
  </q-page>
</template>

<script>
export default {
  name: 'MyPhotolist',

  data () {
    return {

    }
  }

}
</script>
