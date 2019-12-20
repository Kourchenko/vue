<template>
  <div class="container">
    <div>
      <logo />
      <h1 class="title">
        diego kourchenko
      </h1>
      <div class="links">
        <router-link class="button--green" to="/vue-resume"> Resume/CV </router-link>
        <a
          href="https://github.com/Kourchenko"
          target="_blank"
          class="button--grey"
        >
          GitHub
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo,
  },
  created() {
    this.links = [
      {
        to: "/vue-resume",
        label: "Resume",
        title: "View Resume"
      }
    ]
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: rgb(22, 22, 22);
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #41b883;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #41b883;
  word-spacing: 5px;
}

.links {
  padding-top: 15px;
}
</style>
