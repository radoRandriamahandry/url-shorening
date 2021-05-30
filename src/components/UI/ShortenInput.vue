<template>
  <section
    class="z-10 grid w-full max-w-screen-lg px-10 mx-auto  xl:px-0 place-items-center sm:mt-0"
  >
    <div
      class="relative flex flex-col w-full gap-5 p-10 overflow-hidden rounded-lg  md:bg-desktop-shorten md:bg-cover bg-primary-violet md:flex-row md:p-14"
    >
      <img
        class="absolute top-0 right-0 z-0 w-[70%] md:hidden"
        src="/src/assets/images/mobile/bg-shorten-mobile.svg"
        alt=""
        srcset=""
      />
      <input
        type="text"
        placeholder="Shorten a link here..."
        class="z-10 w-full px-6 py-4 text-xl rounded-lg md:text-base md:py-3"
      />
      <button class="z-10 flex-shrink-0 rounded-lg btn">Shorten it!</button>
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style></style>
