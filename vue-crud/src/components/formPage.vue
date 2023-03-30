<template>
    <form>
        <p>Title :</p>
        <input type="text" v-model="obj.title"/>
        <!-- <p>{{ this.data.title }}</p> -->
        <p>Description :</p>
        <textarea v-model="obj.description" placeholder="add multiple lines"></textarea>
        <button  @click="onSubmit">Submit</button>
    </form>
</template>
<script>

export default {
    name:"AddList",
    data(){
        return{
            obj:{
                title:"",
                description:""
            }
            
        }
    },
    methods:{
        onSubmit(e){
            e.preventDefault()
            console.log("obj",this.obj)
            this.$store.commit('AddList',this.obj)
            this.$router.push("/");
        }
    },
 
}
</script>

<style>

</style>
