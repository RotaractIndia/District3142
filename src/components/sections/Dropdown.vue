<template>
  <div class="menu-item" @click="isOpen = !isOpen">
    <div class="item -link">
      {{ title }}
    </div>
    <transition name="fade" appear>
      <div class="sub-menu" v-if="isOpen">
        <div v-for="(item, i) in items" :key="i" class="menu-item">
          <a :href="item.link">{{ item.title }}</a>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "dropdown",
  props: ["title", "items"],
  data() {
    return {
      isOpen: false,
    };
  },
};
</script>

<style>
nav .menu-item svg {
  width: 10px;
  margin-left: 10px;
  text-decoration: none !important;
}
nav .menu-item .sub-menu {
    position: absolute;
    background-color: rgb(117, 117, 117);
    top: calc(100% + 18px);
    left: 50%;
    transform: translateX(-50%);
    width: 155%;
    border-radius: 0px 0px 16px 16px;
    z-index: 100;
}
.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s ease-out;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
