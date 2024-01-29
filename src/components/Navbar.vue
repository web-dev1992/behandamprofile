<template>
  <ul
    class="fixed bottom-0 left-0 bg-white max-w-sm w-full h-12 flex flex-row items-center justify-around shadow-3xl"
  >
    <li
      class="flex flex-col items-center justify-center text-[#646464] hover:text-red-500"
      :class="{'text-[#ff5757]': status == item.status}"
      v-for="item in navItem"
      :key="item.name"
      @click="changeStatus(item.status)"
    >
      <i :class="item.fontClass"></i>
      <span class="text-[11px]">{{ item.name }}</span>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      navItem: [
        {
          name: "پروفایل",
          fontClass: "fa-solid fa-user",
          status: "profile",
        },
        {
          name: "پشتیبان",
          fontClass: "fa-solid fa-headset",
          status: "support",
        },
        {
          name: "لیست غذایی",
          fontClass: " fa-solid fa-bell-concierge",
          status: "diet",
        },
        {
          name: "فروشگاه",
          fontClass: "fa-solid fa-store",
          status: "store",
        },
        {
          name: "وضعیت",
          fontClass: "fa-solid fa-heart-pulse",
          status: "state",
        },
      ],
      status: "profile",
    };
  },
  methods: {
    changeStatus(status) {
      this.status = status;
      this.$emit('changeStatus', status);
     
    },
  },
};
</script>

<style></style>
