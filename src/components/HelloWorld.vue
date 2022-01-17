<template>
   <div>
           
        <!-- <DataTable  v-for="data of products" :key='data.uid' showGridlines responsiveLayout="scroll">
            <template #header>
                  Company User Details List
            </template>
            
            <Column field="id" header="Id">{{data.id}}</Column>
          
            
            <template #footer>
                    The End
            </template>
        </DataTable> -->
       



         <div >
          <table class="p-d-fluid p-p-3" >
            <tr class="p-d-fleid">
              <td class="p-mb-3">Id</td>
              <td>Name</td>
              <td>Email</td>
              <td>Company Name</td>
              <td>Address</td>
            </tr>
            <tr class="text-center p-p-3" v-for="data of products" :key='data.uid'>
              <td class="p-mb-2 p-mt-1">{{data.id}}</td>
              <td class="p-mb-2">{{data.name}}</td>
              <td class="p-mb-2">{{data.email}}</td>
              <td>{{data.company.name}}</td>
              <td>{{data.address.street}}</td>
            </tr>
          </table>
        </div> 
	</div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data()
  {
    return{
        products:[],
    }
  },
    async created() {                     //using Axios with async and await 
    const Url = `https://jsonplaceholder.typicode.com/users`;
    
    try {
      let response = await axios.get(Url);
      this.products= await response.data;
       console.log(this.products)
    } 
    catch {
      (error) => {
        console.log(error);
      };
    }
    }



  /* created(){                      //Using  Normal Fetch Methods 
   fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        this.products = data;
        
        console.log(this.products);
       });
       
  } */

}
</script>


<style scoped>

</style>
