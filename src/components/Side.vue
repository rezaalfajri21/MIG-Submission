<template>
    <v-navigation-drawer flat expand-on-hover v-model="drawer" permanent color="white" app :mini-variant.sync="mini">
        <template v-slot:prepend>
                <v-list-item class="px-2 py-2">
                    <router-link to="/home">
                        <v-list-item-avatar>
                            <v-img src="../assets/logo.png"></v-img>
                        </v-list-item-avatar>
                    </router-link>


                    <v-list-item-title style="font-weight : bolder; font-size:x-large;">Seeker</v-list-item-title>
                    <!-- <v-btn icon @click.stop="mini = !mini">
                        <v-icon>mdi-chevron-left</v-icon>
                    </v-btn> -->
                </v-list-item>
            </template>

            <v-divider></v-divider>
            
        <v-list nav dense>
            <v-list-item-group v-model="selectedItem" color="deep-purple">
                <v-list-item v-for="(item, i) in items" :key="i" link tag="router-link" :to="item.route">
                    <v-list-item-icon>
                        <v-icon v-text="item.icon"></v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title v-text="item.text"></v-list-item-title>
                    </v-list-item-content>
                </v-list-item> 
                <!-- <v-list-item>
                    <v-list-item-icon>
                        <v-icon>mdi-shape-outline</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title>Category</v-list-item-title>
                    </v-list-item-content>
                </v-list-item> 
                <v-list-item>
                    <v-list-item-icon>
                        <v-icon>mdi-bookmark-minus-outline</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title>Workspace</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                <v-list-item>
                    <v-list-item-icon>
                        <v-icon>mdi-account-outline</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title>Account</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>  -->
            </v-list-item-group>
        </v-list>
        <!-- <template v-slot:append>
                <div class="pa-2">
                    <v-card align="center" class="pa-3">
                        <v-badge bordered bottom color="green" dot offset-x="10" offset-y="10" class="mb-8">
                            <v-avatar size="40">
                                <v-img src="https://cdn.vuetifyjs.com/images/lists/2.jpg"></v-img>
                            </v-avatar>
                        </v-badge>
                        <h4 class="grey--text">Total Balance</h4>
                        <h2>$852.50</h2>
                        <h5 class="green--text">+$584.50 today</h5>
                        <v-card color="deep-purple" dark class="mt-5">
                            <v-list-item two-line>
                               <v-list-item-content>
                                   <v-list-item-title>
                                       Your Wallet Address
                                   </v-list-item-title>
                                   <v-list-item-subtitle>
                                       3QjwF2YkhdygZ47Akjh
                                   </v-list-item-subtitle>
                               </v-list-item-content>
                            </v-list-item>             
                        </v-card>
                    </v-card>
                </div>
        </template> -->
    </v-navigation-drawer>
</template>
<script>
export default {
    data: () => ({
        mini: true,
        selectedItem: 0,
        drawer: null,
        items: [
            {icon: 'mdi-home-outline', text: 'Dashboard', route: '/home'},
            {icon: 'mdi-shape-outline', text: 'Category', route: '/category'},
            {icon: 'mdi-bookmark-minus-outline', text: 'Workspace', route: '/workspace'},
            {icon: 'mdi-account-outline', text: 'Customers', route: '/customers'},
            // {icon: 'fas fa-cog', text: 'Tools', route: '/tools'},
        ]
        })
}
</script>
<style scoped>
div >>> .v-list a {
    text-decoration: none;
}
</style>