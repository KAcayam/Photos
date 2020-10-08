<template>
  <q-layout view="hHh lpR fFf">

  <q-page class="column">

    <div class="col absolute-center">
      <q-card class="column q-pa-md" style="min-width: 400px; max-width: 400px">

        <q-card-section>
          <div class="col text-h5">
            コードを送る
          </div>
          <div class="text-subtitle2 text-weight-light">
            パスワードを再登録するためのコードを送ります
          </div>
        </q-card-section>

        <q-card-actions class="justify-center">
          <div class="col-12 q-px-md">
            <q-input outlined v-model="username" label="メールアドレス" dense>
              <template v-slot:prepend>
                <q-icon name="mail" />
              </template>
            </q-input>
          </div>
        </q-card-actions>

        <q-card-actions class="justify-end">
          <div class="q-px-md">
            <q-btn color="primary" label="送信する" @click="send_mail" />
          </div>
        </q-card-actions>

      </q-card>
    </div>

    <q-footer class="bg-grey-8 text-white text-caption">
      <q-toolbar>
        <q-toolbar-title class="text-body2" align="center">
          copyrights
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>

  </q-page>
  </q-layout>
</template>

<script>
export default {
  name: 'ForgotPass',
  data () {
    return {
      username: '',
      password: '',
      isPwd: true
    }
  },
  methods: {
    send_mail () {

    }
  }

}
</script>
