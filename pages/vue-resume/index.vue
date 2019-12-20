<template>
  <div class="container">
    <nav class="nav--resume">
      <router-link class="button--white" to="/"> 
        Home
      </router-link>
    </nav>
    <div class="resume-container">
      <div class="resume-page">
        <vue-resume-header />
        <vue-resume-summary />
        <vue-resume-education />
        <vue-resume-experience />
        <vue-resume-projects />
      </div>
    </div>
  </div>
</template>

<script>
import VueResumeHeader from '~/components/VueResumeHeader.vue'
import VueResumeSummary from '~/components/VueResumeSummary.vue'
import VueResumeEducation from '~/components/VueResumeEducation.vue'
import VueResumeExperience from '~/components/VueResumeExperience.vue'
import VueResumeProjects from '~/components/VueResumeProjects.vue'
export default {
  components: {
    VueResumeHeader,
    VueResumeSummary,
    VueResumeEducation,
    VueResumeExperience,
    VueResumeProjects
  }
}
</script>

<style scoped>
.container {
  display: block;
  overflow: auto;
  background-color: rgb(82, 86, 89);
  text-align: left;
  height: 100vh;
  padding: 0;
}

.nav--resume {
  margin-bottom: 15px;
  background-color: rgba(0, 0, 0, 0.14);
  padding-left: 20px;
  display: flex;
}

.resume-container {
  display: block;
  margin: 0 auto;
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.14);
  width: 50%;
  min-width: 850px;
  padding: 20px;
}

.resume-page {
  width: 850px;
  min-width: 850px;
  background-color: #efefef;
  z-index: 100;
  padding: 48px;
}
</style>