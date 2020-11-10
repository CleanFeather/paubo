<template>
    <div>
        {{$store.state.count}}
        <button @click="$store.commit('add')">add</button>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>