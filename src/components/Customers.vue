<template>
    <v-app>
      <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests">
        <v-main>
          <v-container fluid>
            <h1>Customers Management</h1>
            <div class="projects mt-4">
                <v-card max-width="1600" class="ml-9 mr-9 rounded-lg mb-9" elevation="0" outlined>
                    
                       <v-data-table
                            :headers="headers"
                            :items="listCustomers"
                            :search="search"
                            :sort-by="sortBy.toLowerCase()"
                            :sort-desc="sortDesc"
                            class="elevation-1"
                        >
                            <template v-slot:top>
                            <v-toolbar
                                flat
                            >
                                <!-- <v-toolbar-title>My CRUD</v-toolbar-title> -->
                                
                                <!-- <v-divider
                                class="mx-4"
                                inset
                                vertical
                                ></v-divider> -->
                                <v-text-field
                                    v-model="search"
                                    append-icon="mdi-magnify"
                                    label="Search Name"
                                    single-line
                                    hide-details
                                    outlined
                                    dense
                                ></v-text-field>
                                <v-spacer></v-spacer>
                                <!-- <v-select
                                  v-model="sortBy"
                                  flat
                                  solo-inverted
                                  hide-details
                                  :items="keys"
                                  prepend-inner-icon="mdi-magnify"
                                  label="Sort by"
                                ></v-select> -->
                               
                                <v-dialog
                                v-model="dialog"
                                max-width="500px"
                                >

                                <template v-slot:activator="{ on, attrs }" style="align:right">
                                    <v-btn
                                      class="ma-2"
                                      outlined
                                      color="indigo"
                                      v-bind="attrs"
                                      v-on="on"
                                    >
                                    <v-icon>mdi-account-group</v-icon>
                                    Add Customer
                                    </v-btn>
                                </template>
                                <v-card>
                                    <v-card-title>
                                    <span class="text-h6">{{ formTitle }}</span>
                                    </v-card-title>

                                    <v-card-text>
                                    <v-container>
                                        <v-row>
                                        
                                            <v-text-field
                                            v-model="editedItem.name"
                                            label="Name"
                                            outlined
                                            ></v-text-field>
                                        
                                        </v-row>
                                        <v-row>
                                            <v-text-field
                                            v-model="editedItem.job_title"
                                            label="Job Title"
                                            outlined
                                            ></v-text-field>
                                        </v-row>
                                        <v-row>
                                            <v-text-field
                                            v-model="editedItem.address"
                                            label="Address"
                                            outlined
                                            ></v-text-field>
                                        </v-row>
                                        <v-row>
                                            <v-text-field
                                            v-model="editedItem.country"
                                            label="Country"
                                            outlined
                                            ></v-text-field>
                                        </v-row>
                                        <v-row>
                                            <v-text-field
                                            v-model="editedItem.phone_number"
                                            label="Phone"
                                            outlined
                                            ></v-text-field>
                                        </v-row>
                                        <v-row>
                                          <v-select
                                            :items="status"
                                            v-model="editedItem.statusactually"
                                            label="Status"
                                            required
                                            outlined>
                                          </v-select>
                                        </v-row>
                                    </v-container>
                                    </v-card-text>

                                    <v-card-actions>
                                    <v-spacer></v-spacer>
                                    <v-btn
                                        color="blue darken-1"
                                        text
                                        @click="close"
                                    >
                                        Cancel
                                    </v-btn>
                                    <v-btn
                                        color="blue darken-1"
                                        text
                                        @click="save()"
                                    >
                                        Save
                                    </v-btn>
                                    </v-card-actions>
                                </v-card>
                                </v-dialog>
                                <v-dialog v-model="dialogDelete" max-width="500px">
                                <v-card>
                                    <v-card-title class="text-h5">Are you sure you want to delete this item?</v-card-title>
                                    <v-card-actions>
                                    <v-spacer></v-spacer>
                                    <v-btn color="blue darken-1" text @click="closeDelete">Cancel</v-btn>
                                    <v-btn color="blue darken-1" text @click="deleteItemConfirm(item)">OK</v-btn>
                                    <v-spacer></v-spacer>
                                    </v-card-actions>
                                </v-card>
                                </v-dialog>
                            </v-toolbar>
                            </template>
                            <template v-slot:item.actions="{ item }">
                            <v-icon
                                small
                                class="mr-2"
                                @click="editItem(item)"
                            >
                                mdi-pencil
                            </v-icon>
                            <v-icon
                                small
                                @click="deleteItem(item)"
                            >
                                mdi-delete
                            </v-icon>
                            </template>
                            <template v-slot:no-data>
                            <v-btn
                                color="primary"
                                @click="initialize"
                            >
                                Reset
                            </v-btn>
                            </template>
                        </v-data-table>
                    </v-card>
            </div>
          </v-container>
        </v-main>
    </v-app>
</template>

<script>
import axios from 'axios'
const BASE_URL = 'https://mitramas-test.herokuapp.com'
  export default {
    data: () => ({
      statusactually: '',
      status: ['Active', 'Inactive'],
      statusId: [true, false],
      destroyId: '',
      username: 'akun19@mig.id',
      password: 'AD98163B',
      listCustomers: [],
      sortDesc: false,
      sortBy: 'username',
      dialog: false,
      search: '',
      dialogDelete: false,
      headers: [
        {
          text: 'Name',
          align: 'start',
          sortable: false,
          value: 'name',
        },
        { text: 'Job Title', value: 'job_title' },
        { text: 'Address', value: 'address' },
        { text: 'Country', value: 'country' },
        { text: 'Phone Number', value: 'phone_number' },
        { text: 'Created At', value: 'created_at' },
        { text: 'Updated At', value: 'updated_at' },
        { text: 'Status', value: 'statusactually' },
        { text: 'Actions', value: 'actions', sortable: false },
      ],
      editedIndex: -1,
      editedItem: {
        id: '',
        name: '',
        job_title: '',
        address: '',
        country: '',
        phone_number: '',
        status: '',
      },
    }),

    computed: {
      formTitle () {
        return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
      },
      filteredKeys () {
        return this.keys.filter(key => key !== 'Name')
      },
    },

    watch: {
      dialog (val) {
        val || this.close()
      },
      dialogDelete (val) {
        val || this.closeDelete()
      },
    },

    async created(){
       await axios
       .post(BASE_URL+'/auth/login', {"email": this.username,"password": this.password})
        .then(response => {
          localStorage.TOKEN = response.data.access_token;
          console.log(localStorage.TOKEN);
        })
        this.get();
       
  },

    methods: {
      async get(){
        await axios
      .create({
            baseURL: BASE_URL+'/customers',
            timeout: 10000,
            headers: {'Authorization': localStorage.TOKEN }
        })
        .get(BASE_URL+'/customers')
        .then(response => { this.listCustomers = response.data.data;
          console.log(response.data.data);
          for (var i = 0; i < this.listCustomers.length; i++) {
                        if (this.listCustomers[i].status === true) {
                            this.listCustomers[i].statusactually = 'Active';
                        } else {
                            this.listCustomers[i].statusactually = 'Inactive';
                        }
                    }
        });
    },

    async addCustomer(){
      this.convert();
      var customer = {
         "name": this.editedItem.name,
          "address" : this.editedItem.address,
          "country": this.editedItem.country,
          "phone_number" : this.editedItem.phone_number,
          "job_title": this.editedItem.job_title,
          "status":this.statusactually,
      };
      console.log(customer);
      await axios
        .create({
              baseURL: BASE_URL+'/customers',
              timeout: 10000,
              headers: {'Authorization': localStorage.TOKEN }
          })
        .post(BASE_URL+'/customers', customer)
        .then(response => {
          console.log(response);
          this.statusactually='';
        });
    },

    async updateCustomer(){
      this.convertUpdate();
      var customer = {
          "id": this.editedItem.id,
          "name": this.editedItem.name,
          "address" : this.editedItem.address,
          "country": this.editedItem.country,
          "phone_number" : this.editedItem.phone_number,
          "job_title": this.editedItem.job_title,
          "status":this.statusactually,
      };
      console.log(customer);
      await axios
        .create({
              baseURL: BASE_URL+'/customers',
              timeout: 10000,
              headers: {'Authorization': localStorage.TOKEN }
          })
        .put(BASE_URL+'/customers', customer)
        .then(response => {
          console.log(response);
          this.statusactually='';
        });
    },

    async destroy() {
      var id = this.destroyId;
                await axios
                    .create({
                        baseURL: BASE_URL,
                        timeout: 10000,
                        headers: {
                            'Authorization': localStorage.TOKEN
                        }
                    })
                    .delete(BASE_URL+'/customers/', {"id":id})
                    .then(response => {
                        console.log(response);
                    });
            },
    
    convert(){
      for (var k = 0; k < this.status.length; k++) {
                    if (this.editedItem.status === this.status[k]) {
                        this.statusactually = this.statusId[k];
                    }
                }
                console.log('status:'+this.statusactually);
    },
    convertUpdate(){
      for (var k = 0; k < this.status.length; k++) {
                    if (this.editedItem.statusactually === this.status[k]) {
                        this.statusactually = this.statusId[k];
                    }
                }
                console.log('status:'+this.statusactually);
    },

      editItem (item) {
        this.editedIndex = this.listCustomers.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = true
      },

      deleteItem (item) {
        this.editedIndex = this.listCustomers.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialogDelete = true
        this.destroyId = item.id;
      },

      deleteItemConfirm () {
        console.log(this.destroyId);
        this.destroy(this.destroyId);
        this.destroyId = '';
        this.closeDelete();
        this.get();
      },

      close () {
        this.dialog = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
        this.get();
      },

      closeDelete () {
        this.dialogDelete = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },

      save () {
        if (this.editedIndex > -1) {
          this.updateCustomer()
        } else {
          this.addCustomer();
        }
        this.close()
      },
    },
  }
</script>

<style lang="scss" scoped>

</style>