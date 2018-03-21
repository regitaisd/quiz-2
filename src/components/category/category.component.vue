<template>
 <div class="container">
 <toast ref="toast"></toast>
  <div class="row">
   <div class="col-md-12">
    <div class="jumbotron">
     <div class="row">
      <div class="col-md-12">
       <p><strong>Category panel</strong></p>
       <form role="form" @submit.prevent="storeCategory()">
        <div class="form-group">
         <input type="text" class="form-control" placeholder="Name of Category" required v-model="category.name">
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
  <loading-panel message="Fetching items from server..." v-if="categoryConfig.loading && !categoryConfig.error"></loading-panel>
  <error-panel message="Failed to fetch items from the server!" v-if="!item.loading && categoryConfig.error" @onErrorHandled="bindCategory()"></error-panel>
  <div class="row" v-if="!categoryConfig.loading && !categoryConfig.error">
   <div class="col-md-12">
    <div class="table-responsive">
     <table class="table table-striped">
      <thead>
       <tr>
        <th class="text-center" style="width: 20%">#ID</th>
        <th class="text-center" style="width: 20%">Name</th>
       </tr>
      </thead>
      <tbody>
       <tr v-for="category in categories">
        <td class="text-center">{{ category.id }}</td>
        <td class="text-center">
         <span v-if="!category.onedit">{{ category.name }}</span>
         <input type="text" class="form-control" v-model="category.name" v-if="category.onedit" placeholder="Name">
        <td>
        <button type="button" class="btn btn-sm btn-success" v-if="!category.onedit" @click="editCategory(category)">Edit</button>
        <button type="button" class="btn btn-sm btn-success" v-if ="category.onedit":disabled= "category.name ==''" @click="updateCategory(category)">Update</button>
        <button type="button" class="btn btn-sm btn-danger" @click="deleteCategory(category)">Delete</button>
        </td>
       </tr>
      </tbody>
     </table>
    </div>
   </div>
  </div>
 </div>
</template>

<script src="./category.component.js"></script>