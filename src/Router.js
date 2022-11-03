import { createRouter, createWebHistory } from "vue-router";
import TablaMultiplicar from "./components/TablaMultiplicar.vue"

const misRutas = [
    {
        path:"/tablamultiplicar", component: TablaMultiplicar
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

