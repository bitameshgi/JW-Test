<template>
<div>
    <Navbar/>
    <Detailheader/>
    <Detailcard/>
</div>
</template>
<script>
import Navbar from '../components/Navbar.vue'
import Detailheader from '../components/Detailheader.vue'
import Detailcard from '../components/Detailcard.vue'
export default {
    components:{
        Navbar,
        Detailheader,
        Detailcard
    }
}
</script>