<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
// import Test from './components/Test.vue'
import HelloWorld from './components/HelloWorld.vue'

// the following is an example of using a js file that may be shared by the
// phoenix app.js
import { meaningOfLife } from '../../shared'

console.log('App.vue')
</script>

<template>
  <img alt="Vue logo" src="/images/logo.png" />
	<!-- <HelloWorld msg="Hello Vue 3 + esBuild" /> -->
	<h5 class="fish">{{ meaningOfLife() }}</h5>
	<router-link to="/">HelloWorld</router-link>
	|
	<router-link to="/about">About</router-link>
	 <router-view></router-view>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
h5.fish {
	color: purple;
}
</style>
