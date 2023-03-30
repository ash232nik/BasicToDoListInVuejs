
<template>
    <div class="container">

        <div class="add-button-container">
            <router-link to="/addList">
            <button>
                Add
            </button>
        </router-link>
        </div>
         <table class="table-container">
    <thead>
      <tr>
        <th>ID</th>
        <th>Title</th>
        <th>Description</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item,index) in listData" :key="index">
        <td>{{index+1}}</td>
        <td>{{ item.title }}</td>
        <td>{{ item.description }}</td>
        <td>
            <div class="button-container">
                <!-- <button  @click="viewData(index,item)">View</button> -->
                <button @click="editData(index,item)">Edit</button>
                <button @click="deleteData(index)">Delete</button>
            </div>
        </td>
      </tr>
    </tbody>
  </table>
    </div>
</template>
<script>
export default {
    
    name:"listView",
    computed:{
        listData(){
            return this.$store.state.listData
        },

       
    }
    ,
    methods:{
        editData(value,myObject){
            // console.log("value",data)
            // this.$store.commit('EditList',{value,data})
            // this.$router.push({ name: "FormView", params:{data:data} });
            this.$router.push({ name: "FormView",  params: { myObject: JSON.stringify({value,myObject,disableInput:false}) } });
           
        },
        // viewData(value,myObject){
        //     // console.log("value",data)
        //     // this.$store.commit('EditList',{value,data})
        //     // this.$router.push({ name: "FormView", params:{data:data} });
        //     this.$router.push({ name: "FormView",  params: { myObject: JSON.stringify({value,myObject,disableInput:true}) } });
           
        // }
        // ,
        deleteData(value){
          
            this.$store.commit('DeleteList',value)
            
        }
    }
}
</script>
<style>
   
    .table-container{
        width: 100%;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }
    thead{
        background-color: rgb(210, 210, 210);
    }
    th{
        text-align: center;
        padding: 10px 0;
    }
    td{
        text-align: center;
         padding: 10px 0;
    }
    .button-container{
        display: flex;
        justify-content: center;
        gap: 5%;
    }
    .add-button-container{
        display: flex;
        justify-content: flex-end;
    }
   
</style>