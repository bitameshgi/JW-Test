<template>

  <v-container fluid>
    <v-toolbar class="hidden-xs-and-down"></v-toolbar>
    <v-app id="inspire">
      <v-content>
        <v-container fluid>
          <v-layout align-center justify-center class="mt-5">
            <v-flex xs12 sm8 md4>
              <v-card>
                <v-toolbar dark color="success">
                  <v-toolbar-title>Register form</v-toolbar-title>
                </v-toolbar>
                <v-card-text>
                  <v-form  ref="registerForm" v-model="valid" lazy-validation>
                    <v-row>
                                        <v-col cols="12" sm="6" md="6">
                                            <v-text-field v-model="firstName" :rules="[rules.required]" label="First Name" maxlength="20" required></v-text-field>
                                        </v-col>
                                        <v-col cols="12" sm="6" md="6">
                                            <v-text-field v-model="lastName" :rules="[rules.required]" label="Last Name" maxlength="20" required></v-text-field>
                                        </v-col>
                                        <v-col cols="12">
                                            <v-text-field v-model="email" :rules="emailRules" label="E-mail" required></v-text-field>
                                        </v-col>
                                        <v-col cols="12">
                                            <v-text-field v-model="password" :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'" :rules="[rules.required, rules.min]" :type="show1 ? 'text' : 'password'" name="input-10-1" label="Password" hint="At least 8 characters" counter @click:append="show1 = !show1"></v-text-field>
                                        </v-col>
                                        <v-col cols="12">
                                            <v-text-field block v-model="verify" :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'" :rules="[rules.required, passwordMatch]" :type="show1 ? 'text' : 'password'" name="input-10-1" label="Confirm Password" counter @click:append="show1 = !show1"></v-text-field>
                                        </v-col>
                                     
                                    </v-row>
                  </v-form>
                </v-card-text>
                <v-card-actions>
        
                  <v-spacer></v-spacer>
                  <v-btn color="success" to="">Register</v-btn>
                </v-card-actions>
              </v-card>
              <div class="px-1 pt-0 text-center px-lg-2">
                  <p class="card-footer">
                   Already have an account? 
                    <router-link to="/signin"
                      
                      class="signup-text font-weight-bold"
                      >Sign in</router-link
                    >
                  </p>
                </div>
            </v-flex>
          </v-layout>
        </v-container>
      </v-content>
    </v-app>
 
  </v-container>
  
</template>


<script>
export default {
    name: "Signup",
   data: () => ({
  

    valid: true,
    email: "",
    password: "",
    loginPassword: "",
    loginEmail: "",
    loginEmailRules: [
      v => !!v || "Required",
      v => /.+@.+\..+/.test(v) || "E-mail must be valid"
    ],
    emailRules: [
      v => !!v || "Required",
      v => /.+@.+\..+/.test(v) || "E-mail must be valid"
    ],

    show1: false,
    rules: {
      required: value => !!value || "Required.",
      min: v => (v && v.length >= 8) || "Min 8 characters"
    }
  })

};
</script>

 


