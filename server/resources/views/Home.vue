
<template>
    <div>

        <h1>hello world</h1>
        <button v-on:click="click()">ボタン</button>
    </div>
</template>


<script lang="ts">

// import { Vue, Component } from 'vue -property-decorator';
import Vue from 'vue';
// @Component
export default Vue.extend({
    name: 'HomeComponent',
    methods: {
        click: () => {
            console.log('hello');
        }
    }
})
</script>