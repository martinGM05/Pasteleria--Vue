<template>
    <Header />
    <OrderBaker />
    <Footer />
</template>

<script>
    import Header from '../components/Header.vue'
    import Footer from '../components/Footer.vue'
    import OrderBaker from '../components/OrderBaker.vue'

    export default {
        name: 'BakerView',
        components: {
            Header,
            OrderBaker,
            Footer
        }
    }
</script>

<style scoped>

</style>