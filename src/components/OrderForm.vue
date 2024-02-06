<script setup>

</script>

<template>
<form>
    <label for="name">Имя</label><input type="text" name="name" id="name">
    <label for="tel">Телефон</label><input type="text" name="tel" id="tel">
    <label for="email">Email</label><input type="email" name="email" id="email">
    <label for="city">Город</label>
    <select name="city" id="city">
        <option v-for="cities" :value="cities.name"></option>
    </select>
    <button type="submit">Отправить</button>
</form>
</template>
