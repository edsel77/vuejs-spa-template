<template>
  <div id="app">
    <header>
      <h4>Header: Vue.js SPA</h4>
    </header>
    <main>
      <router-link to="/">Home</router-link>
      <router-link to="/page-1">Page 1</router-link>
      <router-link to="/page-2">Page 2</router-link>
      <div class="content">
        <router-view></router-view>
      </div>
    </main>
  </div>
</template>

<script>
import axios from 'axios'
export default {

}
</script>