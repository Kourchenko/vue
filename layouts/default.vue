<template>
  <div>
    <nuxt />
  </div>
</template>

<style>
html {
  font-family: serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

a {
  text-decoration: none;
  color: default;
  color: rgb(0, 0, 0);
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #41b883;
  color: #41b883;
  text-decoration: none;
  padding: 10px 30px;
  transition: 0.3s;
}

.button--green:hover {
  color: #fff;
  background-color: #41b883;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3e71a6;
  color: #3e71a6;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
  transition: 0.3s;
}

.button--grey:hover {
  color: #fff;
  background-color: #3e71a6;
}

.button--white {
  display: inline-block;
  border-radius: 4px;
  color: #41b883;
  text-decoration: none;
  position: relative;
  border: none;
  outline: none;
  transition: 0.3s;
  padding: 10px;
}

.button--white::before {
  border-bottom: 2px solid #41b883;
  content: '';
  padding: 0;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  margin: 0 auto;
  width: 0;
  transition: 0.3s;
}

.button--white:hover::before {
  width: 100%;
  padding: 0;
}

.button--white:active {
  background: none;
  color: #41b883;
  transition: none;
}

</style>
