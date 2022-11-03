<template>
    <div>
        <nav>
            <ul id="menu">
                <li>
                    <router-link to="/tablamultiplicar">
                    Tabla Multiplicar
                    </router-link>
                </li>                
            </ul>
        </nav>
    </div>
</template>
<script>


export default {
    name: "MenuComponent"
}
</script>

<style scoped>
    ul#menu li {
        display : inline;
        margin: 5px;
    }
</style>