<script setup>
</script>
<template>
    <div class="background">
        <div class="logo-container">
            <a-typography-title>Chefee</a-typography-title>
        </div>
    </div>
</template>
<style scoped lang="scss">
.background {
    background-repeat: no-repeat;
    background-image: url(../assets/WelcomePage/Background.svg);
    height: 100vh;
    -moz-background-size: 100%;
    /* Firefox 3.6+ */
    -webkit-background-size: 100%;
    /* Safari 3.1+ и Chrome 4.0+ */
    -o-background-size: 100%;
    /* Opera 9.6+ */
    background-size: 100%;

    display: flex;
    justify-content: center;
    align-items: center;
}

// TODO: добавить media-query, меняющие backgroung 
.logo-container>* {
    color: white;
    padding-bottom: 150px;
}
</style>