<template>
    <v-main>
           <v-app-bar nav height="75px" color="white" hide-on-scroll elevation="1"
                    class="mb-1 mx-3 rounded-b-lg">
                    <v-toolbar class="ml-8" flat color="white">
                        <v-toolbar-title class="text-bold" color="white">
                            <h4 style="color : #E84D0E">{{$route.meta.title}}</h4>
                            <h6 style="color : #006A8E">{{toolbarSubtitle}}</h6>
                        </v-toolbar-title>
                    </v-toolbar>
                    <v-row justify="end" align="center">
                        <v-col class="mr-4" style="max-width: 300px;">
                            <v-text-field filled v-model="search" label="Search" hide-details outlined
                                 dense append-icon="mdi-magnify" clear-icon="mdi-close-circle" clearable>
                            </v-text-field>
                        </v-col>
                        
                            <v-list-item-icon  style="max-width: 300px;">
                                <v-icon @click="select()" >mdi-bell-badge-outline</v-icon>
                            </v-list-item-icon>
                            <br>
                            <v-list-item-icon left bottom style="max-width: 300px;">
                                <v-icon @click="select()" >mdi-account</v-icon>
                                <v-list-item-title @click="select()">John Doe</v-list-item-title>
                                <v-icon @click="modalLogout=true" >mdi-chevron-down</v-icon>
                            </v-list-item-icon>   
                            
                       <v-dialog v-model="modalLogout" max-width="290">
                            <v-card>
                                <v-card-title class="text-h5">
                                    Log Out
                                </v-card-title>

                                <v-card-text>
                                    Are you sure to log out?
                                </v-card-text>

                                <v-card-actions>
                                    <v-spacer></v-spacer>

                                    <v-btn color="" text @click="modalLogout = false">
                                        No
                                    </v-btn>

                                    <v-btn color="#E80000" v-on:click="logout()" text @click="modalLogout = false">
                                        Yes
                                    </v-btn>
                                </v-card-actions>
                            </v-card>
                        </v-dialog>
                    </v-row>
                </v-app-bar>
    </v-main>
</template>
<script>
export default {
    data: () => ({
        modalLogout: false,
        selectedItem: 0,
        drawer: null,
        items: [
            {icon: 'fas fa-home', text: 'Dashboard', route: '/home'},
            {icon: 'fas fa-money-check-alt', text: 'Buy / Sell', route: '/hobuysme'},
            {icon: 'fas fa-dolly', text: 'Transactions', route: '/transactions'},
            {icon: 'fas fa-exchange-alt', text: 'Exchange', route: '/exchanges'},
            {icon: 'fas fa-cog', text: 'Tools', route: '/tools'},
        ]
        }),
    methods: {
        logout() {
            localStorage.removeItem('TOKEN');
            this.$router.push('/');
        },
    }
}
</script>
<style scoped>
div >>> .v-list a {
    text-decoration: none;
}
</style>