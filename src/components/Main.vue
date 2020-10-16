<template>
    <div id="app">
        <h2>Formulir</h2>
        <div class="px-5">
            <b-form @submit="onSubmit" @reset="onReset" v-if="show">
                <div class="px-5">
                    <div class="px-5">
                        <div class="px-5">
                            <div class="px-5">
                                <b-form-group id="input-group-1" label="Email address:" label-for="input-1" description="We'll never share your email with anyone else.">
                                    <b-form-input id="input-1" v-model="form.email" type="email" required placeholder="Enter email"></b-form-input>
                                </b-form-group>
                            </div>
                        </div>
                    </div>
                </div>
   
                <div class="px-5">
                    <div class="px-5">
                        <div class="px-5">
                            <div class="px-5">
                                <b-form-group id="input-group-2" label="Your Name:" label-for="input-2">
                                    <b-form-input id="input-2" v-model="form.name" required placeholder="Enter name"></b-form-input>
                                </b-form-group>
                            </div>
                        </div>
                    </div>
                </div>
            
                <div class="px-5">
                    <div class="px-5">
                        <div class="px-5">
                            <div class="px-5">
                                <b-form-group id="input-group-3" label="Food:" label-for="input-3">
                                    <b-form-select id="input-3" v-model="form.food" :options="foods" required></b-form-select>
                                </b-form-group>
                            </div>
                        </div>
                    </div>
                </div>

                <b-form-group id="input-group-4">
                    <b-form-checkbox-group v-model="form.checked" id="checkboxes-4">
                        <b-form-checkbox value="me">Check me out</b-form-checkbox>
                        <b-form-checkbox value="that">Check that out</b-form-checkbox>
                    </b-form-checkbox-group>
                </b-form-group>

                <div class="pt-3">
                    <b-button type="submit" variant="primary" class="mr-3">Submit</b-button>
                    <b-button type="reset" variant="danger">Reset</b-button>
                </div>
            </b-form>

            <div class="pt-5">
                <router-link to="/data-result">Data Result</router-link>
            </div>
        </div>
    <b-card class="mt-3" header="Form Data Result">
      <pre class="m-0">{{ form }}</pre>
    </b-card>
    </div>
</template>

<script>
  export default {
    data() {
      return {
        form: {
            id: null,
            email: null,
            name: null,
            food: null,
            checked: []
        },
        foods: [{ text: 'Select One', value: null }, 'Carrots', 'Beans', 'Tomatoes', 'Corn'],
        form: []
      }
    },
    methods: {
      onSubmit(evt) {
        evt.preventDefault()
        alert(JSON.stringify(this.form))
      },
      onReset(evt) {
        evt.preventDefault()
        // Reset our form values
        this.form.email = ''
        this.form.name = ''
        this.form.food = null
        this.form.checked = []
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
    }
  }
</script>