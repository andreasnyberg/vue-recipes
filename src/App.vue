<template>
  <div id="app">
    <transition
      name="fade"
      mode="out-in"
    >
      <router-view/>
    </transition>
  </div>
</template>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  color: #2c3e50;
  margin: 0 auto;
  max-width: 900px;
}

body {
  margin: 0;
}

ul, ol {
  padding-left: 20px;
}

.floating-button {
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 25px 85px rgba(0,0,0,0.15);
  cursor: pointer;
  transition: transform 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
  position: relative;

  &:after {
    content: "";
    border-radius: 8px;
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    box-shadow: 0 25px 70px rgba(0,0,0,0.2);
    opacity: 0;
    transition: opacity 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
  }

  &:hover {
    transform: scale(1.05);

    &:after {
      opacity: 1;
    }
  }

  &:active {
    background-color: #eee;
  }
}

// CSS STATE
.fade-enter-active,
.fade-leave-active {
  transition: opacity .2s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
