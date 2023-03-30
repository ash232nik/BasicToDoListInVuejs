<template>
    <form>
        <p>Title :</p>
        <input type="text" v-model="obj.title"/>
        <!-- <p>{{ this.data.title }}</p> -->
        <p>Description :</p>
        <textarea v-model="obj.description" placeholder="add multiple lines" ></textarea>
        <button  @click="onEditSubmit">Submit</button>
    </form>
</template>
<script>

export default {
    name:"FormView",
    props:['myObject'],
    data(){
        return{
            obj:{
                title:"",
                description:""
            },
            id:0,

            
        }
    },
    methods:{
        onEditSubmit(e){
            e.preventDefault()
            console.log("obj",this.obj)
            let payload = {
                id:this.id,
                obj:this.obj
            }
            this.$store.commit('EditList',payload)
            // this.$store.commit('EditList',this.obj)
            this.$router.push("/");
        },
        setTitleDescription() {
            const Object = JSON.parse(this.$route.params.myObject)

      this.obj.title = Object.myObject.title;
      this.obj.description = Object.myObject.description;
      this.id = Object.value;
    

    }
    },
    mounted(){
        // let urlParams = new URLSearchParams(window.location.search);
    // console.log(window.location); // true
    // console.log(urlParams.get('list')); // "MyParam"
        // console.log("xyz",JSON.parse(this.data))
        // const myObject = JSON.parse(this.$route.params.myObject)
        // console.log(myObject,"kxj")
        // console.log(this.myObject,"kxj")
        // this.obj.title = this.myObject.title
        this.setTitleDescription()
    },
    // created(){
    //     console.log(this.$route.params);
    // }
}
</script>

<style>

</style>
