<template>
    <div class="containerOrder">
        <div class="orders">
            <div class="title">
                <h1>Pedidos</h1>
            </div>
            <div class="dataOrders">
                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Correo</th>
                            <th>Teléfono</th>
                            <th>Descripción</th>
                            <th>Sabor</th>
                            <th>Adornos</th>
                            <th>Precio</th>
                            <th>Acción</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="order in $store.getters.getOrders" :key="order.id" class="order">
                            <td>{{ order.Nombre }}</td>
                            <td>{{ order.Email }}</td>
                            <td>{{ order.Telefono }}</td>
                            <td>{{ order.Descripcion }}</td>
                            <td>{{ order.Sabor }}</td>
                            <td>
                                <button class="btn btn-primary" v-on:click="showOrnament(order.Adorno)">Ver</button>
                            </td>
                            <td>{{ order.Precio }}</td>
                            <td>{{ order.Accion }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div class="flavors">
            <div class="title">
                <h1>Sabores</h1>
            </div>
                <div class="dataFlavors">
                    <table class="table table-striped">
                        <thead>
                            <tr>
                                <th>Sabor</th>
                                <th>Imagen</th>
                                <th>Precio</th>
                                <th>Cantidad</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="flavor in $store.getters.getFlavors" :key="flavor.id" class="flavor">
                                <td>{{ flavor.name }}</td>
                                <td><img :src="flavor.img" class="imgFlavor" alt=""></td>
                                <td>{{ flavor.price }}</td>
                                <td>{{ flavor.amount }}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
        </div>
        <div class="ornaments">
            <div class="title">
                <h1>Adornos</h1>
            </div>
            <div class="dataOrnaments">
                <table class="table table-striped">
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Imagen</th>
                            <th>Precio</th>
                            <th>Cantidad</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="ornament in $store.getters.getOrnaments" :key="ornament.id" class="ornament">
                            <td>{{ ornament.name }}</td>
                            <td><img :src="ornament.img" class="imgOrnament" alt=""></td>
                            <td>{{ ornament.price }}</td>
                            <td>{{ ornament.amount }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
    import Swal from 'sweetalert2'

    export default {
        name: 'OrderBakerComponent',
        methods: {
            showOrnament(ornament) {
                Swal.fire({
                    title: 'Adorno',
                    text: ornament,
                    icon: 'info',
                });
            }
        }
    }
</script>

<style scoped>


    .containerOrder{
        /* border: 3px solid black; */
        /* background-color: #356786; */
        /* margin-top: 100px;
        margin-bottom: 100px; */
        margin: 50px;
        margin-top: 150px;
        margin-bottom: 100px;
    }

    .orders{
        width: 100%;
        display: flex;
        flex-direction: column;
    }

    .title{
        width: 100%;
        height: 50px;
        background-color: rgb(252, 207, 252);
        display: flex;
        justify-content: center;
        align-items: center;
        font-family: 'Fredoka', sans-serif;
        border: 2px solid black;
    }

    @media (min-width: 768px) {
        .title{
            width: 100%;
        }
    }

    .dataOrders, .dataFlavors, .dataOrnaments{
        width: 100%;
        overflow-x: scroll;
        margin-bottom: 50px;
        /* height: 30%; */
        /* background-color: #004d64; */
    }

    @media (min-width: 768px) {
        .dataOrders, .dataFlavors, .dataOrnaments{
            width: 100%;
            overflow-x: hidden;
            margin-bottom: 50px;
            /* height: 30%; */
            /* background-color: #004d64; */
        }
    }

    .table{
        width: 100%;
        height: 20%;
        border: 1px solid black;
        border-collapse: collapse;
        font-family: 'Fredoka', sans-serif;
    }

    .order{
        width: 100%;
    }

    .flavors, .ornaments{
        width: 100%;
        /* background-color: brown; */
    }

    .imgFlavor, .imgOrnament{
        width: 30px;
        height: 30px;
        border-radius: 5px;
    }


</style>