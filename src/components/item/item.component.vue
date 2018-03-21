<template>
 <div class="container">
 <toast ref="toast"></toast>
  <div class="row">
   <div class="col-md-12">
    <div class="jumbotron">
     <div class="row">
      <div class="col-md-12">
       <p><strong>Add Item</strong></p>
       <form role="form" @submit.prevent="storeItem()">
        <div class="form-group">
         <input type="number" class="form-control" placeholder="Category ID" required v-model="item.category_id">
        </div>
        <div class="form-group">
         <input type="text" class="form-control" placeholder="Name" required v-model="item.name">
        </div>
        <div class="form-group">
         <input type="number" class="form-control" placeholder="Stock" required v-model="item.stock">
        </div>
        <div class="form-group">
         <input type="number" class="form-control" placeholder="Price" required v-model="item.price">
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
  <loading-panel message="Fetching items from server..." v-if="itemConfig.loading && !itemConfig.error"></loading-panel>
  <error-panel message="Failed to fetch items from the server!" v-if="!item.loading && itemConfig.error" @onErrorHandled="bindItems()"></error-panel>
  <div class="row" v-if="!itemConfig.loading && !itemConfig.error">
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
       <tr v-for="item in items">
        <td class="text-center">{{ item.id }}</td>
        <td class="text-center">
         <span v-if="!item.onedit">{{ item.category_id }}</span>
         <input type="text" class="form-control" v-model="item.category_id" v-if="item.onedit" placeholder="Category ID">
        </td>
        <td class="text-center">
         <span v-if="!item.onedit">{{ item.name }}</span>
         <input type="text" class="form-control" v-model="item.name" v-if="item.onedit" placeholder="Name">
        </td>
         <td class="text-center">
         <span v-if="!item.onedit">{{ item.stock }}</span>
         <input type="text" class="form-control" v-model="item.stock" v-if="item.onedit" placeholder="Stock">
        </td>
         <td class="text-center">
         <span v-if="!item.onedit">{{ item.price }}</span>
         <input type="text" class="form-control" v-model="item.price" v-if="item.onedit" placeholder="Price">
        </td>
        <td>
        <button type="button" class="btn btn-sm btn-success" v-if="!item.onedit" @click="editItem(item)">Edit</button>
        <button type="button" class="btn btn-sm btn-success" v-if ="item.onedit":disabled= "item.stock == '' || item.price ==''" @click="updateItem(item)">Update</button>
        <button type="button" class="btn btn-sm btn-danger" @click="deleteItem(item)">Delete</button>
        </td>
       </tr>
      </tbody>
     </table>
    </div>
   </div>
  </div>
 </div>
</template>

<script src="./item.component.js"></script>