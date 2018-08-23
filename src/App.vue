<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  color: #2c3e50;
  margin: 0 auto;
  max-width: 900px;
}

.floating-button {
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 25px 85px rgba(0,0,0,0.3);
  cursor: pointer;

  &:hover {
    background-color: #f5f5f5;
  }

  &:active {
    background-color: #eee;
  }
}
</style>
