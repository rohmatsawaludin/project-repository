<template>
    <div id="app">
        <h2>Formulir</h2>
        <div class="px-5">
            <b-form @submit="onSubmit" @reset="onReset" v-if="insertVisible">
                <div class="px-5">
                        <div class="px-5">
                            <div class="px-5">
                                <div class="px-5">
                                    <b-form-group id="input-group-1" label="Email address:" label-for="input-1" description="We'll never share your email with anyone else.">
                                        <b-form-input name="email" v-model="form.email" type="email" required placeholder="Enter email"></b-form-input>
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
                        <b-button type="submit" variant="primary" class="mr-3" id="save">Submit</b-button>
                        <b-button type="reset" variant="danger">Reset</b-button>
                    </div>
            </b-form>
            <b-form v-if="visible" @submit="onEditSubmit">
                    <input v-if="keyVisible" type="text" name="key" placeholder="Key" v-model="keyInt" />
                        <div class="px-5">
                            <div class="px-5">
                                <div class="px-5">
                                    <div class="px-5">
                                        <b-form-group id="input-group-1" label="Email address:" label-for="input-1" description="We'll never share your email with anyone else.">
                                            <b-form-input name="email" v-model="nameString" type="email" required placeholder="Enter email"></b-form-input>
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
                            <b-button type="submit" variant="primary" class="mr-3" id="save">Submit</b-button>
                            <b-button type="reset" variant="danger">Reset</b-button>
                        </div>
                </b-form>
            <div class="pt-5">
                <router-link to="/data-result">Data Result</router-link>
            </div>
            <b-card class="mt-3" header="Form Data Result">
            <ul v-for="(key, i) in alldata" :key="i">
                <li>{{key.data.kunci.nilai}} | <a href="#" @click.prevent="onDelete(key.key)">Delete</a> | <a href="#" @click.prevent="onEdit(key.key)">Edit</a></li>
            </ul>
            </b-card>
        </div>
    </div>
</template>

<script src="https://unpkg.com/localbase/dist/localbase.dev.js"></script>
<script>
import localbase from 'localbase'

let db = new localbase('formulir')

export default {
    data() {
        return {
            alldata: [],
            visible: false,
            insertVisible: false,
            keyVisible: false,
            keyInt: [],
            emailString: [],
            nameString: [],
            foodString: [],
            checkedString: []
        };
    },
    methods: {
        insert: async function () {
            this.insertVisible ? this.insertVisible = false : this.insertVisible = true;
            this.visible ? this.visible = false : this.visible = false;
        },
        async onDelete(key) {
            const sure = window.confirm('Are you sure?');
            if (!sure) return;
            await db.collection('data').doc(key).delete()
            await db.collection('data').get({ keys: true }).then(document => {
                this.alldata = document
            })
        },
        async onEdit(docKey) {
            await db.collection('data').doc(docKey).get().then(document => {
                this.keyInt = docKey
                this.emailString = document.kunci.nilai.name
                this.nameString = document.kunci.nilai.name
                this.foodString = document.kunci.nilai.age
                this.checkedString = document.kunci.nilai.age
            })
            this.insertVisible ? this.insertVisible = false : this.insertVisible = false;
            this.visible ?this.visible= true : this.visible = true;
        },
        async onSubmit(){
            if (this.form.email === '' || this.form.name === '' || this.form.food === '' || this.form.checked === ''){
                this.errorsPresent = true;
            }else {
                nilai = {
                    email: this.form.email,
                    name: this.form.name,
                    food: this.form.food,
                    checked: this.form.checked,
                }
                await db.collection('data').add({kunci: {nilai}})
                await db.collection('data').get({keys: true}).then(document => {
                    this.alldata = document
                })
            }
        },
        async onEditSubmit(){
            let editKey = this.keyInt
            const sure = window.confirm('Are you sure?');
            if (!sure) return;
            if (this.emailString === '' || this.nameString === '' || this.foodString === '' || this.checkedString === '') {
                this.errorsPresent = true;
            } else {
                nilai = {
                    email: this.emailString,
                    name: this.nameString,
                    food: this.foodString,
                    checked: this.checkedString
                }
                console.log(this.keyInt)
                await db.collection('data').doc(editKey).update({kunci:{nilai}})
                await db.collection('data').get({keys: true}).then(document => {
                    this.alldata = document
                })
                await this.visible ? this.visible = false : this.visible = false;
            }
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
    },
    async mounted() {
        this.alldata
        db.collection('data').get({ keys: true }).then(document => {
            this.alldata = document
        })
    }
}
//   export default {
//     data() {
//       return {
//         form: {
//             id: null,
//             email: null,
//             name: null,
//             food: null,
//             checked: []
//         },
//         foods: [{ text: 'Select One', value: null }, 'Carrots', 'Beans', 'Tomatoes', 'Corn'],
//         show: true
//       }
//     },
//     methods: {
//       onSubmit(evt) {
//         evt.preventDefault()
//         alert(JSON.stringify(this.form))
//       },
//       onReset(evt) {
//         evt.preventDefault()
//         // Reset our form values
//         this.form.email = ''
//         this.form.name = ''
//         this.form.food = null
//         this.form.checked = []
//         // Trick to reset/clear native browser form validation state
//         this.show = false
//         this.$nextTick(() => {
//           this.show = true
//         })
//       }
//     }
//   }
</script>
