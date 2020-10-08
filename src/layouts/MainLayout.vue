<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="bg-grey-9">
      <q-toolbar>

        <q-toolbar-title>
          App Title
        </q-toolbar-title>

        <div class="q-pr-md">
          <template>
            <q-input rounded standout bg-color="grey-7" v-model="search" dense>
            <q-btn flat round dense icon="search" color="dark" />
            </q-input>
          </template>
        </div>

        <div>
          <q-btn flat round dense icon="menu">
            <q-menu>
              <q-list style="min-width: 100px">
                <q-item clickable v-close-popup to="MyPage">
                  <q-item-section>マイページ</q-item-section>
                </q-item>
                <q-item clickable v-close-popup to="NewPosts">
                  <q-item-section>最新の投稿</q-item-section>
                </q-item>
                <q-separator />
                <q-item clickable v-close-popup to="Change">
                  <q-item-section>登録内容変更</q-item-section>
                </q-item>
                <q-item clickable v-close-popup to="/">
                  <q-item-section>ログアウト</q-item-section>
                </q-item>
              </q-list>
            </q-menu>
          </q-btn>
        </div>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer class="bg-grey-8 text-white text-caption">
      <q-toolbar>
        <q-toolbar-title class="text-body2" align="center">
          copyrights
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>

  </q-layout>
</template>

<script>

export default {
  name: 'MainLayout',

  data () {
    return {
      search: ''
    }
  }
}
</script>
