<template>
  <q-layout view="hHh lpR fFf">

  <q-page class="column">

    <div class="col absolute-center">
      <q-card class="column q-pa-md" style="min-width: 400px; max-width: 400px">

        <q-card-section>
          <div class="col text-h5">
            ログイン
          </div>
        </q-card-section>

        <q-card-actions class="justify-center">
          <div class="col-12 q-px-md">
            <q-input outlined v-model="username" label="ユーザー名またはメール" dense>
              <template v-slot:prepend>
                <q-icon name="account_circle" />
              </template>
            </q-input>
          </div>
        </q-card-actions>

        <q-card-actions class="justify-center">
          <div class="col-12 q-px-md">
            <q-input outlined v-model="password" :type="isPwd ? 'password' : 'text'" label="パスワード" dense>
              <template v-slot:prepend>
                <q-icon name="lock" />
              </template>
              <template v-slot:append>
                <q-icon
                  :name="isPwd ? 'visibility_off' : 'visibility'"
                  class="cursor-pointer"
                  @click="isPwd = !isPwd"
                />
              </template>
            </q-input>
            <q-btn flat color="primary" to="ForgotPass" class="text-weight-light" dense>パスワードを忘れた場合</q-btn>
          </div>
        </q-card-actions>

        <q-card-actions class="justify-end">
          <div class="q-px-md">
            <q-btn color="primary" to="MainLayout" label="ログイン" />
          </div>
        </q-card-actions>

        <q-separator class="q-mt-md" />

        <q-card-actions align="around">
          <div class="col text-subtitle1">
            アカウントを作成する
          </div>
          <div class="q-px-md">
            <q-btn outline color="primary" to="SignUp" label="新規登録" />
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
  name: 'PageIndex',
  data () {
    return {
      username: '',
      password: '',
      isPwd: true
    }
  }
}
</script>
