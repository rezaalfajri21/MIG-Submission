<template>
  <v-app>
    <v-main>
        <v-row no-gutters class="fill-height" justify="center">
          <v-col cols="12" sm="7" md="7" class="hidden-sm-and-down">
            <v-card flat>
              <v-flex class="text-center">
                <img src="../assets/loginPic.png">
              </v-flex>
            </v-card>
          </v-col>
          <v-col cols="12" sm="5" md="5" class="">
            <v-card flat max-width="500" class="fill-height textTable">
              <v-flex class="px-10 pt-16 pb-2">
                <p class="greetings" 
                font-family= "Poppins"
                >Nice to see you again</p>
                <subtitle class="greetings2"
                font-family= "Poppins"
                >Please sign in with your email!</subtitle>
              </v-flex>
            
              <v-card-text class="px-10 pb-2">
                <v-form v-model="valid" ref="form">
                  <v-text>Login</v-text>
                  <v-text-field 
                    @keypress.enter="login()"
                    label="Email or phone number" 
                    v-model="email"
                    :rules="emailRules" 
                    placeholder="admin@email.com"
                    outlined
                    required>
                  </v-text-field>

                  <v-text>Password</v-text>
                  <v-text-field 
                    @keypress.enter="login()"
                    label="Enter password" 
                    v-model="password"
                    :rules="passwordRules"  
                    :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                    @click:append="show1 = !show1"
                    :type="show1 ? 'text' : 'password'"
                    placeholder="admin123"
                    hint="Password consists of uppercase, lowercase, and characters"
                    outlined
                    required>
                  </v-text-field>

                  <v-card-actions>
                    <v-switch
                      v-model="switch2"
                      flat
                      :label="`Remember me`"
                    ></v-switch>
                    <v-spacer />
                    <a href="/forgotPass" style="text-align:right"
                    font-family= "Poppins"
                    >Forgot your password?</a>
                  </v-card-actions>

                  <v-btn 
                    class="buttonLogin"
                    x-large 
                    block
                    rounded
                    dark
                    @click="login()"
                    >Sign In
                  </v-btn>
                </v-form>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
    </v-main>
  </v-app>
</template>

<script>
// import axios from 'axios'
export default {
  name: 'login',
  created () {
    localStorage.removeItem('TOKEN');
    document.title = "Login";
    
  },
  data (){
    return {
      switch2: false,
      show1: false,
      valid: false,
      password: '',
      passwordRules: [
          (v) => !!v || 'Password cannot be empty',
          //v => /.+@.+/.test(v) || 'Password is not valid',
      ],
      email: '',
      emailRules: [
          (v) => !!v || 'Email or phone number cannot be empty',
          (v) => (v && v.length > 5) || 'Email or phone number is too short',
      ],
    };
  },
  methods: {
    login() {
        console.log('login ni bos');
        if(this.email=="admin@email.com" && this.password=="admin123"){
          localStorage.TOKEN=true;
          this.$router.push('/home');
        }
       
    },
    clear() {
      this.$refs.form.reset() //Clear form login
    },
  }
}
</script>

<style lang="css" scoped>

.greetings{
  position: static;
  width: 360px;
  height: 28px;
  left: calc(50% - 360px/2);
  top: calc(50% - 28px/2 - 16px);

  /* Title */
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 28px;
  /* identical to box height, or 140% */
  display: flex;
  align-items: center;

  /* Black-900 (#1A1A1A) */
  color: #1A1A1A;


  /* Inside Auto Layout */
  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 12px 0px;
}

.greetings2{
  position: static;
  width: 206px;
  height: 20px;
  left: calc(50% - 206px/2);
  top: 0px;

  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;
  /* identical to box height, or 143% */
  display: flex;
  align-items: flex-end;

  color: #778192;


  /* Inside Auto Layout */
  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 0px 1px;
}

.orangeText{
  color:#F15A23;
}

.greenText{
    color:#005E6A;
  font-family: 'Secular One', sans-serif;
}

.forgotPassword{
  width: 172px;
  height: 20px;
  left: calc(50% - 172px/2 + 494px);
  top: 435px;

  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 20px;
  /* identical to box height, or 167% */
  text-align: right;
  letter-spacing: 0.3px;

  /* System-Blue (#007AFF) */
  color: #007AFF;
}

.buttonLogin{
  background: linear-gradient(128.58deg, #0F123F 14.67%, #3A408F 86.8%);
border-radius: 6px;
}
</style>