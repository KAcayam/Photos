<template>
  <q-layout view="hHh lpR fFf">

  <q-page class="column">

    <div class="col absolute-center">
      <q-card class="column q-pa-md" style="min-width: 400px; max-width: 400px">

        <q-card-section>
          <div class="col text-h5">
            アカウントを作成する
          </div>
        </q-card-section>

        <q-card-actions class="justify-center">
          <div class="col-12 q-pa-md">
            <q-input
                ref="input"
                outlined
                v-model="userid"
                label="ユーザーID"
                :rules="[ val => val.length >= 2 || 'ユーザーIDは2文字以上です']"
                dense />
          </div>

          <div class="col-12 q-px-md q-pb-md">
            <q-input outlined v-model="username" label="名前" :dense="true" />
          </div>

          <div class="col-12 q-pa-md">
            <q-input outlined v-model="address" label="メールアドレス" :dense="true" />
          </div>

          <div class="col-12 q-px-md q-pt-md">
            <q-input
                ref="input"
                outlined
                v-model="password"
                :type="isPwd ? 'password' : 'text'"
                label="パスワード"
                :rules="[ val => val.length >= 6 || '6文字以上を設定してください'] "
                dense>
                <template v-slot:append>
                    <q-icon
                        :name="isPwd ? 'visibility_off' : 'visibility'"
                        class="cursor-pointer"
                        @click="isPwd = !isPwd"
                    />
                </template>
            </q-input>
          </div>

          <div class="col-12 q-px-md q-pt-md">
            <q-input
                ref="input"
                outlined
                v-model="password2"
                :type="isPwd ? 'password' : 'text'"
                label="パスワード確認"
                :rules="[ val => password == password2 || '一致していません']"
                dense>
                <template v-slot:append>
                    <q-icon
                        :name="isPwd ? 'visibility_off' : 'visibility'"
                        class="cursor-pointer"
                        @click="isPwd = !isPwd"
                    />
                </template>
            </q-input>
          </div>
        </q-card-actions>

        <q-card-actions class="justify-end">
          <div class="q-px-md">
            <q-btn color="primary" label="登録する" />
          </div>
        </q-card-actions>

        <q-separator class="q-mt-md" />

        <q-card-actions align="around">
          <div class="col text-subtitle1">
            既に登録している
          </div>
          <div class="q-px-md">
            <q-btn outline color="primary" to="/" label="ログイン" />
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
  name: 'SignUp',
  data () {
    return {
      userid: '',
      username: '',
      address: null,
      password: '',
      password2: '',
      isPwd: true
    }
  }

}
</script>
