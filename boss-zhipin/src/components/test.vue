<template>
    <!--<button v-on:click="count++">You clicked me {{ count }} times.</button>-->
    <DragUploadFile></DragUploadFile>
</template>

<script>
    import DragUploadFile from '../plugin/drag-upload-file-demo'

    export default {
        name: "test",
        components: {
            DragUploadFile: DragUploadFile
        },

        data() {
            return {
                count: 0
            }
        }
    }
</script>

<style scoped>

</style>
