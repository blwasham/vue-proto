<template>
    <div class="container">
      <pre class="col-sm text-info">model: {{ model }}</pre>
      <button class="btn btn-primary">Funky Red Button</button>
       <form @submit="handleSubmission(model)">
          <formly-form :form="form" :model="model" :fields="fields"></formly-form>
          <button>Submit</button>
       </form>
   </div>
</template>

<script>
function checkPasswordFunction() {
  console.log('puke 123123123');
}

export default {
  name: 'FormlyExample',
  persist: ['model'],
  methods: {
    initModel() {
      let lsValObj = JSON.parse(this.$ls.get('medical-vision'));

      if (lsValObj) {
        return lsValObj.data.model;
      } else {
        return {};
      }

      // return {
      //   name: 'Tito',
      //   email: 'tito@tonto.com',
      //   password: '234',
      //   displayMyField: 'yes',
      //   myField: 'boo boo chicken'
      // };
    }
  },
  data() {
    return {
      handleSubmission(model) {
        //this.$persist(['model'], 'vision');
      },
      model: this.initModel(),
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
          },
          wrapper: '<div class="col-8 text-info"></div>'
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
            return model.displayMyField === 'yes';
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
