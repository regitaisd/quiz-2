<template>
 <div class="container">
 <toast ref="toast"></toast>
  <div class="row">
   <div class="col-md-12">
    <div class="jumbotron">
     <div class="row">
      <div class="col-md-12">
       <p><strong>Register</strong></p>
       <form role="form" @submit.prevent="storeRegister()">
        <!--<div class="form-group">
          <input type="text" class="form-control" placeholder="Name" required v-model="register.name">
        </div>-->
        <div class="form-group">
         <input type="text" class="form-control" placeholder="E-mail" required v-model="register.email">
        </div>
        <div class="form-group">
         <input type="password" class="form-control" placeholder="Password" required v-model="register.password">
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
</div>
</template>
<script src="./register.component.js"></script>