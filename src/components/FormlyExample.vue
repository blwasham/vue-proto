<template>
    <div class="container">
      <pre class="text-info">model: {{ model }}</pre>
       <form @submit="handleSubmission(model)">
          <formly-form :form="form" :model="model" :fields="fields"></formly-form>
          <button>Submit</button>
       </form>
   </div>
</template>

<script>
//import _ from 'lodash';
import storageHelpers from '../storageHelpers.js';

const sectionKey = 'vision';

function checkPasswordFunction() {
  console.log('calling checkPasswordFunction');
}

export default {
  name: 'FormlyExample',
  created() {
    console.log('calling created');
    this.$persist(['model'], sectionKey);
  },
  data() {
    return {
      handleSubmission(/*model*/) {
        console.log('calling handleSubmission');
        //this.$persist(['model'], 'vision');
      },
      model: storageHelpers.read(sectionKey),
      form: {},
      fields: [
        {
          key: 'name',
          type: 'input',
          required: true,
          templateOptions: {
            label: 'Name'
          },
          wrapper: '<div class="col-6"></div>'
        },
        {
          key: 'email',
          type: 'input',
          templateOptions: {
            type: 'email',
            label: 'Email'
          },
          required: true,
          validators: {
            //validEmail: checkEmailFunction
          }
        },
        {
          key: 'password',
          type: 'input',
          templateOptions: {
            type: 'password',
            label: 'Password'
          },
          required: true,
          validators: {
            validPassword: checkPasswordFunction
          }
        },
        {
          key: 'displayMyField',
          type: 'input',
          templateOptions: {
            label: 'Display Hidden Field'
          }
        },
        {
          key: 'myField',
          type: 'input',
          display: function(field, model) {
            if (model.displayMyField === 'yes') {
              return true;
            }
          }
        }
      ]
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  button {
    /*color: blue;*/
  }
</style>
