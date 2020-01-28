
<template>
    <button>MyButton</button>
</template>

<script lang="ts">

import { Vue, Component, } from 'vue-property-decorator';

Component
export default class MyButton extends Vue {

    constructor() {
        super();
        console.log('hello');
    }
}
</script>