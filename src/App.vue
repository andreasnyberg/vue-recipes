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
  background-color: #fbfbfb;
  margin: 0;
}

ul, ol {
  line-height: 1.6;
  padding-left: 20px;
}

.floating-button {
  background-color: #fff;
  border: none;
  border-radius: 5px;
  box-shadow: 0 25px 85px rgba(0,0,0,0.15);
  cursor: pointer;
  transition: transform 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
  position: relative;
  outline: none;

  @media screen and (min-width: 768px) { border-radius: 10px; }

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

  &--round {
    $size: 80px;

    display: block;
    border-radius: 1000px;
    width: $size;
    height: $size;
    
    &:after { border-radius: 1000px; }
  }
}

@media screen and (min-width: 768px) {
  h1 { font-size: 50px; }
  h2 { font-size: 30px; }
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
