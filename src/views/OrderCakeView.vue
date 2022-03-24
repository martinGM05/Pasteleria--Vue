<template>
    <Header />
    <Order />
    <Footer />
</template>

<script>
    import Header from '../components/Header.vue'
    import Footer from '../components/Footer.vue'
    import Order from '../components/Order.vue'

    export default {
        name: 'OrderCakeView',
        components: {
            Header,
            Footer,
            Order
        }
    }
</script>

<style scoped>

</style>