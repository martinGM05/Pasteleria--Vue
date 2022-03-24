<template>
    <Header />
    <Carrousel />
    <Flavors />
    <Ornaments />
    <Cakes />
    <Footer />
</template>

<script>
    import Header from '../components/Header.vue'
    import Carrousel from '../components/Carrousel.vue'
    import Flavors from '../components/Flavors.vue'
    import Ornaments from '../components/Ornaments.vue'
    import Cakes from '../components/Cakes.vue'
    import Footer from '../components/Footer.vue'

    export default {
        name: 'CustomerView',
        components: {
            Header,
            Carrousel,
            Flavors,
            Ornaments,
            Cakes,
            Footer
        }
    }
</script>

<style scoped>

</style>