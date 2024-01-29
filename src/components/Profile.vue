<template>
  <div class="w-full h-screen bg-hero-pattern">
    <h3 class="text-white text-center font-bold py-2">{{ title }}</h3>
    <div class="flex items-center justify-between mt-5 mb-3 px-4">
      <div
        class="bg-[rgba(255,255,255,.4)] text-white w-10 h-8 text-xl rounded-xl flex items-center justify-center"
      >
        <i class="fa-solid fa-gear"></i>
      </div>
      <div class="flex w-1/2 items-center justify-end gap-2">
        <span class="text-white">{{ name ? name : "" }}</span
        ><img
          :src="
            gender == 1
              ? 'src/assets/profile/male_avatar.svg'
              : 'src/assets/profile/female_avatar.svg'
          "
          :alt="name"
          class="w-12 h-12 rounded-2xl shadow-white"
        />
      </div>
    </div>
    <div
      class="bg-gray-100 rounded-[30px] flex flex-col items-center justify-center px-4 py-8"
    >
      <div class="flex justify-between items-center w-full">
        <button
          class="bg-[#f45151] text-white text-center font-bold text-xs px-5 rounded-3xl py-2"
        >
          خرید اشتراک
        </button>
        <div
          class="flex w-1/2 items-center justify-between text-[10px] text-gray-700"
        >
          <router-link to="#" v-if="hasFitaminService"
            >تاریخچه اشتراک</router-link
          >
          <router-link to="#" v-else>شما اشتراک فعالی ندارید</router-link>

          <img src="/src/assets/subscribe.jpg" alt="subscribe" class="w-12 h-12"/>
        </div>
      </div>
      <button
        class="bg-white w-full my-8 rounded-3xl py-[10px] text-zinc-500 text-[10px] text-center drop-shadow-red flex justify-center items-center gap-2"
      >
        <span>سوابق خرید اشتراک</span>
        <span class="text-rose text-sm"><i class="fa fa-list-alt"></i></span>
      </button>
      <div class="flex w-full flex-col bg-white rounded-xl py-4 px-4 relative">
        <button
          class="bg-gray-100 w-10 h-10 rounded-full border-4 border-white absolute -top-4 inset-x-0 mx-auto text-zinc-300"
        >
          <i class="fa-solid fa-phone"></i>
        </button>
        <div class="flex items-center justify-between py-2 border-b">
          <span class="text-sm text-gray-700">{{
            mobile ? +mobile : "ثبت نشده"
          }}</span>
          <span>: شماره موبایل</span>
        </div>
        <div class="flex items-center justify-between py-2 border-b">
          <span class="text-sm text-gray-700">{{
            phone ? mobile : "ثبت نشده"
          }}</span>
          <span>: شماره تماس دوم</span>
        </div>
        <div class="flex items-center justify-between py-2 border-b">
          <span class="text-sm text-gray-700">{{
            whatsapp ? mobile : "ثبت نشده"
          }}</span>
          <span>: شماره واتساپ</span>
        </div>
        <div class="flex items-center justify-between py-2">
          <span class="text-sm text-gray-700">{{
            skype ? mobile : "ثبت نشده"
          }}</span>
          <span>: شماره اسکایپ</span>
        </div>

        <button
          class="text-rose px-4 py-[10px] rounded-3xl bg-black bg-opacity-5 flex self-start"
        >
          ویرایش
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    "gender",
    "mobile",
    "title",
    "name",
    "phone",
    "whatsapp",
    "skype",
    "hasFitaminService",
  ],
};
</script>

<style></style>
