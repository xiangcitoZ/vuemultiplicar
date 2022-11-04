<template>
    <div>
        <h1>TABLA MULTIPLICAR</h1>
        <label>Introduzca un número: </label>
        <input type="number" v-model="numero"/><br/>
        <br/>
        <button @click="tablaMultiplicar()">
            Mostrar
        </button>
        <br/>
        <br/>
        
        <table align="center">
            <thead>
                <tr>
                    <th>Resultado</th>
                </tr>
            </thead>
            <tbody v-html="tabla">
            </tbody>
        </table>

    </div>
</template>

<script>
    export default {
        name: "TablaMultiplicar",
        data(){
            return {
                numero:0,
                tabla: ""
            } 
        },
        methods:{
             tablaMultiplicar(){
                var html ="";
                for (var i = 1; i < 10; i++){

                        var resultado =  this.numero *  i;
                        
                        html += "<tr>";
                        html += "<td>" + this.numero + " * "+ i +" = "+ resultado +"</td>" ;
                        html += "</tr>";

                    }

                return this.tabla = html;
        }
        }
       
        
    }
</script>