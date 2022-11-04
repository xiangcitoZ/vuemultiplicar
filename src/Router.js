import { createRouter, createWebHistory } from "vue-router";
import TablaMultiplicar from "./components/TablaMultiplicar.vue";
import Home from './components/HomeComponent.vue';
import TablaFilters from "./components/TablaFilters.vue";

const misRutas = [
    {
        path: "/", component: Home
    },
    {
        path:"/tablamultiplicar", component: TablaMultiplicar
    }
    ,
    {
        path:"/tablafilters", component: TablaFilters
    }
    
]
//CREAMOS UNA CONSTANTE, QUE CONTENDRA LAS RUTAS Y EL HISTORIAL
//DICHA CONSTANTE SERA LA QUE UTILIZAREMOS DENTRO DE MAIN.JS

const router = createRouter(
    {
        history: createWebHistory(),
        routes: misRutas
    }
);

//POR ULTIMO, EXPORTAMOS LA CONSTANTE router
export default router;

