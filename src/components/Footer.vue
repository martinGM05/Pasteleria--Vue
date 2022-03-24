<template>
    <footer class="footer">
        <div class="dataBake">
            <div class="dataLocation">
                <div class="titleLocation">
                    <h3>Ubicación</h3>
                </div>
                <div class="data">
                   <div class="phone">
                        <font-awesome-icon :icon="['fas','phone']" size="lg" class="icon"></font-awesome-icon>
                        <span>+52 000-000-000</span>
                   </div>
                   <div class="location">
                        <font-awesome-icon :icon="['fas','map-marker-alt']" size="lg" class="icon"></font-awesome-icon>
                        <span>Calle Falsa 123, Col. Falsa, CDMX, México</span>
                   </div>
                </div>
            </div>
            <div class="schedule">
                <div class="titleSchedule">
                    <h3>Horario</h3>
                </div>
                <div class="data">
                    <div class="schedule">
                        <font-awesome-icon :icon="['fas','clock']" size="lg" class="icon"></font-awesome-icon>
                        <span>Lunes a Viernes de 9:00 a 18:00 hrs</span>
                    </div>
                    <div class="schedule">
                        <font-awesome-icon :icon="['fas','clock']" size="lg" class="icon"></font-awesome-icon>
                        <span>Sábados de 9:00 a 13:00 hrs</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="copyright">
            <div class="dataCopy">
                <div class="copyrightText">
                    <span>Copyright © 2022 - Todos los derechos reservados Pasteleria Carmen</span>
                </div>
                <div class="developer">
                    <span>Desarrollado por <a href="https://www.facebook.com/martin.gonzalezmiranda/" target="_blank">Martín González Miranda</a></span>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
    export default {
        name: 'FooterComponent',
    }
</script>

<style scoped>

    a{
        text-decoration: none;
        color: #000;
        font-weight: bold;
    }

    .developer{
        font-family: 'Fredoka', sans-serif;
        color: #111;
    }

    .copyrightText{
        font-family: 'Fredoka', sans-serif;
        color: #111;
        margin-bottom: 5px;
    }

    .footer{
        width: 100%;
        height: 350px;
        background-color: rgb(252, 207, 252);
        border-top: 2px solid black;
        display: flex;
        flex-direction: column;
    }

    @media (min-width: 768px) {
        .footer{
            height: 230px;
        }
    }

    .dataBake{
        width: 100%;
        flex: 3;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
    }
    @media (min-width: 768px) {
        .dataBake{
            width: 100%;
            flex: 3;
            display: flex;
            flex-direction: row;
            justify-content: space-around;
        }
    }
    .dataLocation{
        width: 40%;
        height: 100px;
    }
    .schedule{
        width: 200px;
        height: 100px;
    }
    @media (min-width: 768px) {
        .schedule{
            width: 45%;
            height: 100px;
        }
    }
    .schedule span{
        font-size: 18px;
        margin-left: 5px;
        font-family: 'Fredoka', sans-serif;
    }
    .location span{
         font-size: 18px;
        margin-left: 5px;
        font-family: 'Fredoka', sans-serif;
    }
    .titleLocation{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border-bottom: 2px solid black;
        margin-bottom: 10px;
        margin-top: 10px;
        font-family: 'Fredoka', sans-serif;
    }
    .titleSchedule{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border-bottom: 2px solid black;
        margin-bottom: 10px;
        margin-top: 10px;
           font-family: 'Fredoka', sans-serif;
    }
    .data{
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        height: 150px;
    }
    @media (min-width: 768px) {
        .data{
            flex-direction: row;
        }
    }
    .dataCopy{
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        padding: 10px;
    }
    @media (min-width: 768px) {
        .dataCopy{
            flex-direction: row;
        }
    }
    .copyright{
        width: 100%;
        background-color: rgb(102, 82, 102);
        flex: 1;
    }

</style>