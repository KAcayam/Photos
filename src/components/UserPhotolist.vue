<template>
  <q-page>
    <div class="q-col-gutter-md row items-start q-pa-md">

      <div class="col-4">
        <q-card flat bordered>
        <q-img src="../../public/photos/02.jpg" :ratio="1" />
        </q-card>
        <q-btn label="詳細ページ" color="grey-6" dense to="/UserPhotoPage" />
      </div>

      <div class="col-4">
        <q-card flat bordered>
        <q-img src="../../public/photos/05.jpg" :ratio="1" />
        </q-card>
      </div>

      <div class="col-4">
        <q-card flat bordered>
        <q-img src="../../public/photos/07.jpg" :ratio="1" />
        </q-card>
      </div>

      <div class="col-4">
        <q-card flat bordered>
        <q-img src="../../public/photos/10.jpg" :ratio="1" />
        </q-card>
      </div>

      <div class="col-4">
        <q-card flat bordered>
        <q-img src="../../public/photos/12.jpg" :ratio="1" />
        </q-card>
      </div>

      <div class="col-4">
        <q-card flat bordered>
        <q-img src="../../public/photos/14.jpg" :ratio="1" />
        </q-card>
      </div>

      <div class="col-4">
        <q-card flat bordered>
        <q-img src="../../public/photos/15.jpg" :ratio="1" />
        </q-card>
      </div>

      <div class="col-4">
        <q-card flat bordered>
        <q-img src="../../public/photos/16.jpg" :ratio="1" />
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
  name: 'UserPhotolist',

  data () {
    return {

    }
  }

}
</script>
