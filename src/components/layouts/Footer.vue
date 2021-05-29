<template>
  <div class="text-gray-300 py-14 bg-neutral-dark-violet">
    <div class="grid max-w-screen-lg grid-cols-5 mx-auto">
      <h3 class="text-2xl font-bold">Shortly</h3>
      <section class="flex justify-end col-span-3 gap-24">
        <div>
          <h4 class="font-bold">Features</h4>
          <ul class="grid gap-2 mt-5 text-neutral-violet">
            <li>
              <router-link to="#">Link Shortening</router-link>
            </li>
            <ul>
              <router-link to="#">Branded Links</router-link>
            </ul>
            <ul>
              <router-link to="#">Analytics</router-link>
            </ul>
          </ul>
        </div>
        <div>
          <h4 class="font-bold">Ressources</h4>
          <ul class="grid gap-2 mt-5 text-neutral-violet">
            <li>
              <router-link to="#">Blog</router-link>
            </li>
            <ul>
              <router-link to="#">Developers</router-link>
            </ul>
            <ul>
              <router-link to="#">Support</router-link>
            </ul>
          </ul>
        </div>
        <div>
          <h4 class="font-bold">Company</h4>
          <ul class="grid gap-2 mt-5 text-neutral-violet">
            <li>
              <router-link to="#">About</router-link>
            </li>
            <ul>
              <router-link to="#">Our Team</router-link>
            </ul>
            <ul>
              <router-link to="#">Careers</router-link>
            </ul>
            <ul>
              <router-link to="#">Contact</router-link>
            </ul>
          </ul>
        </div>
      </section>
      <div class="flex justify-end gap-4">
        <FontAwesomeIcon :icon="['fab', 'facebook-square']" size="lg" />
        <FontAwesomeIcon :icon="['fab', 'twitter']" size="lg" />
        <FontAwesomeIcon :icon="['fab', 'pinterest']" size="lg" />
        <FontAwesomeIcon :icon="['fab', 'instagram']" size="lg" />
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style></style>
