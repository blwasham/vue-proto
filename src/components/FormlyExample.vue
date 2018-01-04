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
import _ from 'lodash';
import { safeParse } from '../jsonHelpers.js';

function checkPasswordFunction() {
  console.log('calling checkPasswordFunction');
}

// function _parseLodash(str) {
//   return _.attempt(JSON.parse.bind(null, str));
// }

function initModel(that) {
  let modelFromStorage = safeParse(that.$ls.get('medical-vision')); //_parseLodash(that.$ls.get('medical-vision'));

  if (!_.isError(modelFromStorage) && !_.isEmpty(modelFromStorage)) {
    return modelFromStorage;
  } else {
    return {};
  }
}

export default {
  name: 'FormlyExample',
  created() {
    console.log('calling created');
    this.$persist(['model'], 'vision');
  },
  data() {
    return {
      handleSubmission(/*model*/) {
        console.log('calling handleSubmission');
        //this.$persist(['model'], 'vision');
      },
      model: initModel(this),
      form: {},
      fields: [
        {
          key: 'name',
          type: 'input',
          required: true,
          templateOptions: {
            label: 'Name'
          },
          wrapper: '<div class="col-8 text-danger"></div>'
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
          },
          wrapper: '<div class="col-8 text-warning"></div>'
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
          },
          wrapper: '<div class="col-8 text-warning"></div>'
        },
        {
          key: 'myField',
          type: 'input',
          display: function(field, model) {
            console.info('calling display');

            if (model.displayMyField === 'yes') {
              return true;
            } else {
              console.log('field', field);
            }
          },
          wrapper: '<div class="col-8 text-warning"></div>'
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
