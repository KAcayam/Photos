<template>
  <div class="fit row justify-center">

    <div class="col-md-3 col-xs-2" />
    <div class="col-md-6 col-xs-8">
      <q-card flat>
        <q-item class="q-pa-md">
          <q-item-section class="q-px-md">
            <q-label class="text-h4 text-weight-bold q-pa-md text-center">
                最新の投稿
            </q-label>
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
      <new-list />
    </div>

  </div>
</template>

<script>
import NewList from '../components/NewList.vue'

export default {
  name: 'NewPosts',
  components: { NewList },
  data () {
    return {
      addphoto: null,
      pickup: null
    }
  }
}
</script>
