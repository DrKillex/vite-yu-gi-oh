<script>
export default {
    name: "CardElement",
    props: {
        img: String,
        name: String,
        type: String
    }
}
</script>

<template>
    <article>
        <img :src="img" :alt="name">
        <p>{{ name }}</p>
        <p>{{ type }}</p>
    </article>
</template>



<style lang="scss" scoped>
img {
    width: 10%;
}
</style>