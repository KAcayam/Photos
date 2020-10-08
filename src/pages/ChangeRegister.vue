<template>
  <q-layout view="hHh lpR fFf">

  <q-page class="column">

    <div class="col absolute-center q-pt-md">
      <q-card class="column q-pa-md" style="min-width: 400px; max-width: 400px">

        <q-card-section>
          <div class="col text-h5 q-pb-md">
            登録内容変更
          </div>
        </q-card-section>

        <q-card-actions class="justify-center">
          <div class="col-12 q-px-md q-pt-md">
            <q-input
                ref="input"
                outlined
                v-model="userid"
                label="ユーザーID"
                :rules="[ val => val.length >= 2 || 'ユーザーIDは2文字以上です']"
                dense />
          </div>
        </q-card-actions>
        <q-card-actions class="justify-end">
          <div class="q-px-md">
            <q-btn color="light-blue" label="変更" dense/>
          </div>
        </q-card-actions>

        <q-card-actions>
          <div class="col-12 q-pa-md">
            <q-input outlined v-model="username" label="名前" :dense="true" />
          </div>
        </q-card-actions>
        <q-card-actions class="justify-end">
          <div class="q-px-md">
            <q-btn color="light-blue" label="変更" dense/>
          </div>
        </q-card-actions>

        <q-card-actions>
          <div class="col-12 q-pa-md">
            <q-input outlined v-model="address" label="メールアドレス" :dense="true" />
          </div>
        </q-card-actions>
        <q-card-actions class="justify-end">
          <div class="q-px-md">
            <q-btn color="light-blue" label="変更" dense/>
          </div>
        </q-card-actions>

        <q-card-actions>
          <div class="col-12 q-px-md q-pt-md">
            <q-input
                ref="input"
                outlined
                v-model="prepassword"
                :type="isPwd ? 'password' : 'text'"
                label="これまでのパスワード"
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
                v-model="password"
                :type="isPwd ? 'password' : 'text'"
                label="新しいパスワード"
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
        </q-card-actions>
        <q-card-actions class="justify-end">
          <div class="q-px-md">
            <q-btn color="light-blue" label="変更" dense/>
          </div>
        </q-card-actions>

        <q-card-actions>
          <div class="col-12 q-px-md q-pt-md">
            <q-file outlined v-model="icon" label="アイコン" dense>
              <template v-slot:prepend>
                <q-icon name="portrait" @click.stop />
              </template>
            </q-file>
          </div>
        </q-card-actions>
        <q-card-actions class="justify-end">
          <div class="q-px-md q-pt-md">
            <q-btn color="light-blue" label="変更" dense/>
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
  name: 'Change',
  data () {
    return {
      userid: '',
      username: '',
      address: null,
      prepassword: '',
      password: '',
      icon: null,
      isPwd: true
    }
  }

}
</script>
