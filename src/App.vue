<script>
import Navbar from "./components/Navbar.vue";
import Profile from "./components/Profile.vue";
import axios from "axios";
export default {
  components: { Navbar, Profile },
  data() {
    return {
      status: "profile",
      userData:{},
      url: "https://debug.behaminplus.ir/behandam-diet/api/profile",
      token: "1283551|Q2CufGgtouTPl3OKL1f5KYIW25pc7iEL9tD7ojQM",
    };
  },
  
  methods: {},
  async mounted() {
    const config = {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${this.token}`,
      },
    };
    const response = await axios.get(this.url, config);
    this.userData=response.data.data;
    console.log(this.userData)
    console.log(response);
  },
};
</script>

<template>
  <div class="flex flex-col items-center justify-between max-w-sm min-h-screen">
    <Profile
      v-if="status == 'profile'"
      title="پروفایل"
      :gender="userData.gender"
      :name="userData?.first_name && userData?.last_name ? userData.first_name+' ' + userData.last_name:''"
      :mobile="userData.mobile"
      :phone="userData.call_number"      
      :whatsapp="userData?.social_media?.[0]?.pivot?.link??''"
      :skype="userData?.social_media?.[2]?.pivot?.link??''"
      :hasFitaminService="userData.has_fitamin_service"
      
    />
    <Navbar @changeStatus="status = $event" />
  </div>
</template>

<style scoped></style>
