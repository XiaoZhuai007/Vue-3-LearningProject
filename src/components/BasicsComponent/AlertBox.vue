<template>
    <div class="alert-box">
        <strong>This is an Error for Demo Purposes</strong>
        <br>
        <slot />
    </div>
</template>
  
<style scoped>
.alert-box {
    /* ... */
    border-radius: 5px;
    border: 1px solid #333;
    background-color: #999;
}
</style>