<template>
  <ul
    class="fixed bottom-0 left-0 bg-white w-full h-12 flex flex-row items-center justify-around shadow-3xl" 
  >
    <li
      class="flex flex-col items-center justify-center text-[#646464] hover:text-red-500"
      v-for="item in navItem"
      :key="item.name"
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
        },
        {
          name: "پشتیبان",
          fontClass: "fa-solid fa-headset",
        },
        {
          name: "لیست غذایی",
          fontClass: " fa-solid fa-bell-concierge",
        },
        {
          name: "فروشگاه",
          fontClass: "fa-solid fa-store",
        },
        {
          name: "وضعیت",
          fontClass: "fa-solid fa-heart-pulse",
        },
      ],
    };
  },
};
</script>

<style></style>
