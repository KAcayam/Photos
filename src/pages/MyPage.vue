<template>
  <div class="fit row justify-center">

    <div class="col-md-3 col-xs-2" />
    <div class="col-md-6 col-xs-8">
      <q-card flat>
        <q-item class="q-pa-md">
          <q-avatar size="100px" class="q-mx-md">
            <img src="https://cdn.quasar.dev/img/boy-avatar.png">
          </q-avatar>
          <q-item-section class="q-px-md">
            <q-label class="text-h4 text-weight-bold q-pa-md">
                田中太郎
            </q-label>
            <q-item-label class="text-subtitle1 q-px-md">
                山羊座の不動産営業マンです☺︎上毛かるたにハマってます
            </q-item-label>
          </q-item-section>
        </q-item>
      </q-card>
    </div>
    <div class="col-md-3 col-xs-2 q-pa-md">
      <q-icon name="add_a_photo" style="font-size: 32px" color="grey-7" @click.stop />
      <q-file borderless v-model="pickup" style="max-width: 200px">
        <template v-slot:prepend>
          <q-icon name="add_photo_alternate" style="font-size: 36px" @click.stop />
        </template>
      </q-file>
    </div>

    <q-separator inset />

    <div class="col-10">

        <my-photolist />

    </div>

  </div>
</template>

<script>
import MyPhotolist from '../components/MyPhotolist.vue'

export default {
  name: 'MyPage',
  components: { MyPhotolist },
  data () {
    return {
      addphoto: null,
      pickup: null
    }
  }
}
</script>
