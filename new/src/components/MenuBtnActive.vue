<template>
    <div class="q-pa-md q-gutter-sm">
        <q-btn flat class="menu-btn">{{menu.title}}</q-btn>
    </div>
</template>

<style scoped>
.menu-btn {
    color:black;
    font-weight:bold;
    padding: 0;
    margin: 0;
}
</style>

<script>
export default  {
        props: ['menu'],
}
</script>