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
                  <v-toolbar-title>Login form</v-toolbar-title>
                </v-toolbar>
                <v-card-text>
                  <v-form ref="loginForm" v-model="valid" lazy-validation>
                    <v-text-field
                    v-model="loginEmail"
                     :rules="loginEmailRules"
                      prepend-icon="email"
                      name="login"
                      label="Email"
                      type="email"
                      required
                    ></v-text-field>
                    <v-text-field
                      id="password"
                      prepend-icon="lock"
                      name="password"
                      label="Password"
                      type="password"
                      v-model="loginPassword"
                      :rules="[rules.required, rules.min]"
                    ></v-text-field>
                  </v-form>
                </v-card-text>
                <v-card-actions>
                       <router-link to="" class="forget-pass">
                Forgot password?
                       </router-link>
                  <v-spacer></v-spacer>
                  <v-btn color="success" to="">Login</v-btn>
                </v-card-actions>
              </v-card>
              <div class="px-1 pt-0 text-center px-lg-2">
                  <p class="card-footer">
                    Don't have an account?
                    <router-link to="/signup"
                      
                      class="signup-text font-weight-bold"
                      >Sign up</router-link
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
    name: "Login",
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
