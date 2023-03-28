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
        <div>
            <img :src="img" :alt="name">
        </div>  
        <div class="text-center">
            <p class="text-white">{{ name }}</p>
            <p>{{ type }}</p>
        </div>      
        
    </article>
</template>



<style lang="scss" scoped>
</style>