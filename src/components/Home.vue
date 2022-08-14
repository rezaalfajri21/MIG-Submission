<template>
<v-app>
    <v-main>
        <div class="home">
            <v-container class="mt-5">
                <v-row>
                    <v-col cols="12" sm="3">
                        <v-hover v-slot="{ hover }" open-delay="200">
                            <v-card :elevation="hover ? 16 : 2">
                                <v-container>
                                    <v-row justify="space-around">
                                        <v-card width="400">
                                            <v-img
                                            height="200px"
                                            src="../assets/building.png"
                                            >
                                            <v-card-title class=" centered white--text mt-8">
                                                <v-avatar size="80">
                                                <img
                                                    alt="user"
                                                    src="../assets/mid-cropped.png"
                                                >
                                                </v-avatar>
                                            </v-card-title>
                                            </v-img>
                                            <v-card-text>
                                            <div style="text-align:center">
                                                <v-list-item-title class="font-weight-bold mb-2">Mitramas Infosys Global</v-list-item-title>
                                                <v-list-item-subtitle>Layanan IT</v-list-item-subtitle>
                                                <br>
                                                <v-list-item-subtitle style="color:green">
                                                    <v-icon style="color:green" size="16" @click="editItem(card)" >mdi-pencil-outline</v-icon>
                                                    Sunting Profil
                                                </v-list-item-subtitle>
                                            </div>
                                            <br>
                                            <div>
                                                <v-list-item-content>
                                                    <v-list-item-subtitle>
                                                        Status Perusahaan
                                                    </v-list-item-subtitle>
                                                    <v-list-item-title class="font-weight-bold mb-2">
                                                        <v-col cols="12" sm="3" md="3">
                                                            Aktif
                                                        </v-col>
                                                        <v-col cols="12" sm="9" md="9">
                                                            <v-switch
                                                                style="text-align:right"
                                                                v-model="switch1"
                                                                inset
                                                            ></v-switch>
                                                        </v-col>
                                                    </v-list-item-title>
                                                    <v-list-item-subtitle>
                                                        Singkatan
                                                    </v-list-item-subtitle>
                                                    <v-list-item-title class="font-weight-bold mb-2">
                                                        MIG
                                                    </v-list-item-title>
                                                    <v-list-item-subtitle>
                                                        Alamat
                                                    </v-list-item-subtitle>
                                                    <v-list-item-title class="font-weight-bold mb-2">
                                                        Jl. Raya Tebet
                                                    </v-list-item-title>
                                                    <v-list-item-subtitle>
                                                        Penanggung Jawab
                                                    </v-list-item-subtitle>
                                                    <v-list-item-title class="font-weight-bold mb-2">
                                                        John Doe
                                                    </v-list-item-title>
                                                    <v-list-item-subtitle>
                                                        Tanggal PKP
                                                    </v-list-item-subtitle>
                                                    <v-list-item-title class="font-weight-bold mb-2">
                                                        03 Maret 2021
                                                    </v-list-item-title>
                                                    <v-list-item-subtitle>
                                                        Email
                                                    </v-list-item-subtitle>
                                                    <v-list-item-title class="font-weight-bold mb-2">
                                                        email
                                                    </v-list-item-title>
                                                    <v-list-item-subtitle>
                                                        No Telp
                                                    </v-list-item-subtitle>
                                                    <v-list-item-title class="font-weight-bold mb-2">
                                                        021
                                                    </v-list-item-title>
                                                    <v-list-item-subtitle>
                                                        Situs Web
                                                    </v-list-item-subtitle>
                                                    <v-list-item-title class="font-weight-bold mb-2">
                                                        mitramas.com
                                                    </v-list-item-title>
                                                </v-list-item-content>
                                            </div>
                                            </v-card-text>
                                        </v-card>
                                    </v-row>
                                </v-container>
                            </v-card>
                        </v-hover>
                    </v-col>
                    <v-col cols="12" sm="9">
                        <v-row>
                            <v-col cols="12" sm="12">
                                <v-hover v-slot="{ hover }" open-delay="200">
                                    <v-card :elevation="hover ? 16 : 2">
                                        <v-row>
                                            <v-col>
                                                Lokasi
                                            </v-col>
                                            <v-col>
                                                Lihat Semua
                                            </v-col>
                                        </v-row>
                                        <v-row>
                                            <v-col>
                                                <v-card elevation="2" color="green">
                                                <v-list-item three-line>
                                                    <v-list-item-content>
                                                        <v-col cols="3" sm="3">
                                                        <div style="text-align:left">
                                                            <v-icon size="30" color="white" >mdi-home-silo-outline</v-icon>
                                                        </div>
                                                        </v-col>
                                                        <v-col cols="9" sm="9" style="text-align:right">
                                                        <v-list-item-title class="headline mb-1 ">
                                                            20
                                                        </v-list-item-title>
                                                        <v-list-item-subtitle >Induk</v-list-item-subtitle>
                                                        </v-col>
                                                    </v-list-item-content>
                                                    </v-list-item>
                                                </v-card>
                                            </v-col>
                                            <v-col>
                                                <v-card color="green">
                                                    <v-list-item three-line>
                                                    <v-list-item-content>
                                                        <v-col cols="3" sm="3">
                                                        <div style="text-align:left">
                                                            <v-icon size="30" color="white" >mdi-wrench-outline</v-icon>
                                                        </div>
                                                        </v-col>
                                                        <v-col cols="9" sm="9" style="text-align:right">
                                                        <v-list-item-title class="headline mb-1 ">
                                                            3
                                                        </v-list-item-title>
                                                        <v-list-item-subtitle >Sub Lokasi Level</v-list-item-subtitle>
                                                        </v-col>
                                                    </v-list-item-content>
                                                    </v-list-item>
                                                </v-card>
                                            </v-col>
                                            <v-col>
                                                <v-card color="green">
                                                <v-list-item three-line>
                                                    <v-list-item-content>
                                                        <v-col cols="3" sm="3">
                                                        <div style="text-align:left">
                                                            <v-icon size="30" color="white" >mdi-wrench-outline</v-icon>
                                                        </div>
                                                        </v-col>
                                                        <v-col cols="9" sm="9" style="text-align:right">
                                                        <v-list-item-title class="headline mb-1 ">
                                                            3
                                                        </v-list-item-title>
                                                        <v-list-item-subtitle >Sub Lokasi Level</v-list-item-subtitle>
                                                        </v-col>
                                                    </v-list-item-content>
                                                    </v-list-item>
                                                </v-card>
                                            </v-col>
                                        </v-row>
                                    </v-card>
                                </v-hover>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="12" sm="6">
                                <v-row>
                                    <v-col>
                                        <v-hover v-slot="{ hover }" open-delay="200">
                                            <v-card :elevation="hover ? 16 : 2">
                                                <v-row>
                                                    <v-col>
                                                        <v-text>Akun Bank</v-text>
                                                    </v-col>
                                                    <v-col>
                                                        <v-btn>Tambah Akun Bank</v-btn>
                                                    </v-col>
                                                </v-row>
                                                <v-row>
                                                    <v-col cols="12" sm="4">
                                                        <v-img sizes="10%" src="../assets/bank1.png"></v-img>
                                                    </v-col>
                                                    <v-col cols="12" sm="5">
                                                        <v-row>Bank Bukopin</v-row>
                                                        <v-row>**** - 0937 - Yuson Tauqif</v-row>
                                                        <v-row>IDR</v-row>
                                                    </v-col>
                                                    <v-col cols="12" sm="3">
                                                        <v-btn icon>
                                                            <v-icon style="color:green" size="16" @click="editItem(card)" >mdi-pencil-outline</v-icon>
                                                        </v-btn>

                                                        <v-btn icon>
                                                            <v-icon style="color:red" size="16" @click="deleteItem(card)">mdi-trash-can-outline</v-icon>
                                                        </v-btn>
                                                    </v-col>
                                                </v-row>
                                                <v-row>
                                                    <v-col cols="12" sm="4">
                                                        <v-img sizes="10%" src="../assets/bank2.png"></v-img>
                                                    </v-col>
                                                    <v-col cols="12" sm="5">
                                                        <v-row>Citibank</v-row>
                                                        <v-row>**** - 0539 - Si Tampan</v-row>
                                                        <v-row>USD</v-row>
                                                    </v-col>
                                                    <v-col cols="12" sm="3">
                                                        <v-btn icon>
                                                            <v-icon style="color:green" size="16" @click="editItem(card)" >mdi-pencil-outline</v-icon>
                                                        </v-btn>

                                                        <v-btn icon>
                                                            <v-icon style="color:red" size="16" @click="deleteItem(card)">mdi-trash-can-outline</v-icon>
                                                        </v-btn>
                                                    </v-col>
                                                </v-row>
                                            </v-card>
                                        </v-hover>
                                    </v-col>
                                </v-row>
                                <v-row>
                                    <v-col>
                                        <v-hover v-slot="{ hover }" open-delay="200">
                                            <v-card :elevation="hover ? 16 : 2">
                                                <v-row>
                                                    <v-col>
                                                        <v-text>Relasi</v-text>
                                                    </v-col>
                                                    <v-col  style="text-align:right">
                                                        <v-text>Lihat Semua</v-text>
                                                    </v-col>
                                                </v-row>
                                                <v-row>
                                                    <v-col cols="12" sm="1">
                                                        <v-icon>mdi-share-variant-outline</v-icon>
                                                    </v-col>
                                                    <v-col cols="12" sm="4">
                                                        <v-row>20</v-row>
                                                        <v-row>Memiliki</v-row>
                                                    </v-col>
                                                </v-row>
                                                <v-row>
                                                    <v-col cols="12" sm="1">
                                                        <v-icon>mdi-share-variant-outline</v-icon>
                                                    </v-col>
                                                    <v-col cols="12" sm="4">
                                                        <v-row>108</v-row>
                                                        <v-row>Menggunakan</v-row>
                                                    </v-col>
                                                </v-row>
                                                <v-row>
                                                    <v-col cols="12" sm="1">
                                                        <v-icon>mdi-share-variant-outline</v-icon>
                                                    </v-col>
                                                    <v-col cols="12" sm="4">
                                                        <v-row>67</v-row>
                                                        <v-row>Menyimpan</v-row>
                                                    </v-col>
                                                </v-row>
                                            </v-card>
                                        </v-hover>
                                    </v-col>
                                </v-row>
                            </v-col>
                            <v-col cols="12" sm="6">
                                <v-hover v-slot="{ hover }" open-delay="200">
                                    <v-card :elevation="hover ? 16 : 2">
                                        <v-text>Aktivitas</v-text>
                                        <br> <br>
                                        <v-list-item>
                                            <v-list-item-content>
                                                <v-list-item-title>
                                                    Yusron bar saja menambahkan lokasi baru Kantor Cabang Jagakarsa
                                                </v-list-item-title>
                                                <v-list-item-subtitle>
                                                    Hari ini, 06:00
                                                </v-list-item-subtitle>
                                                <br>
                                                <v-list-item-title>
                                                    Bintang baru saja menghapus sublokasi KCP Tebet 4 dari induk Kantor Cabang Tebet
                                                </v-list-item-title>
                                                <v-list-item-subtitle>
                                                    Kemarin, 17:32
                                                </v-list-item-subtitle>
                                                <br>
                                                <v-list-item-title>
                                                    Yusron melakukan perubahan profil pada induk Kantor Cabang Bekasi
                                                </v-list-item-title>
                                                <v-list-item-subtitle>
                                                    Kemarin, 17:32
                                                </v-list-item-subtitle>
                                            </v-list-item-content>
                                        </v-list-item>
                                    </v-card>
                                </v-hover>
                            </v-col>
                        </v-row>
                    </v-col>
                </v-row>
            </v-container>
        </div>
  </v-main>
</v-app>
</template>

<script>
export default {
    components: {
    
  },
    
  name: 'Home',
  data: () => ({
      
     tab: null,
     text: 'center',
     fill: true,
      padding: 8,
      radius: 10,
      value: [0, 2, 5, 9, 5, 10, 3, 5, 0, 0, 1, 8, 2, 9, 0],
      width: 2,
      lineCap: 'round',
      type: 'trend',
      autoLineWidth: false,
      fills: false,
      switch1 : true,
  })
}
</script>
<style lang="sass" scoped>
.v-card.on-hover.theme--dark
  background-color: rgba(#FFF, 0.8)
  >.v-card__text
    color: #000
</style>
<style scoped>
.border {
  border-right: 1px solid grey
}
.icon{
  background: linear-gradient(128.58deg, #0F123F 14.67%, #3A408F 86.8%);

}
.centered {
  margin: auto;
  width: 40%;
  height: 100%;
  padding: 10px;
}

.titled {
    font-size: medium;
}
</style>