<template>
 <div class="container">
 <toast ref="toast"></toast>
  <div class="row">
   <div class="col-md-12">
    <div class="jumbotron">
     <div class="row">
      <div class="col-md-12">
       <p><strong>Log In</strong></p>
       <form role="form" @submit.prevent="storeUsers()">
        <div class="form-group">
         <input type="text" class="form-control" placeholder="E-mail" required v-model="user.email">
        </div>
        <div class="form-group">
         <input type="password" class="form-control" placeholder="Password" required v-model="user.password">
        </div>
        <div class="text-right">
         <button type="submit" class="btn btn-primary">Submit</button>
        </div>
       </form>
      </div>
     </div>
    </div>
   </div> 
  </div>
  <!--<loading-panel message="Logging you in..." v-if="userConfig.loading && !userConfig.error"></loading-panel>-->
  <!--<div class="row" v-if="!userConfig.loading && !userConfig.error">
  </div>-->
  <!--<error-panel message="Failed to fetch users from the server!" v-if="!user.loading && userConfig.error" @onErrorHandled="bindUsers()"></error-panel>-->
  <!--<div class="row" v-if="!userConfig.loading && !userConfig.error">
   <div class="col-md-12">
    <div class="table-responsive">
     <table class="table table-striped">
      <thead>
       <tr>
        <th class="text-center" style="width: 20%">#ID</th>
              <th class="text-center" style="width: 20%">Category ID</th>
              <th class="text-center" style="width: 20%">Name</th>
              <th class="text-center" style="width: 20%">Stock</th>
              <th class="text-center" style="width: 20%">Price</th>
       </tr>
      </thead>
      <tbody>
       <tr v-for="user in users">
        <td class="text-center">{{ user.id }}</td>
        <td class="text-center">
         <span v-if="!user.onedit">{{ user.email }}</span>
         <input type="text" class="form-control" v-model="user.email" v-if="user.onedit" placeholder="E-mail">
        </td>
        <td class="text-center">
         <span v-if="!user.onedit">{{ user.password }}</span>
         <input type="text" class="form-control" v-model="user.password" v-if="user.onedit" placeholder="Password">
        </td>
         <button type="button" class="btn btn-sm btn-danger" @click="deleteItem(item)">Delete</button>
        </td>
       </tr>
      </tbody>
     </table>
    </div>
   </div>
  </div>-->
 </div>
</template>

<script src="./user.component.js"></script>