<template>
  <section
    class="relative flex justify-center px-10 mx-auto  lg:max-w-screen-lg lg:justify-start lg:items-center"
  >
    <!-- flex items-center is for position the ligne to the center -->
    <!-- On large screen -->
    <div class="absolute hidden w-3/4 h-2 bg-primary-cyan lg:block"></div>
    <!-- On small screen -->
    <div class="absolute w-2 h-full bg-primary-cyan lg:hidden"></div>

    <!-- END line -->

    <div class="flex flex-col justify-between gap-16 lg:flex-row lg:gap-7">
      <CardsItem
        :image="firstCard.image"
        :title="firstCard.title"
        :content="firstCard.content"
      />
      <CardsItem
        :image="secondCard.image"
        :title="secondCard.title"
        :content="secondCard.content"
        class="top-8"
      />
      <CardsItem
        :image="thirdCard.image"
        :title="thirdCard.title"
        :content="thirdCard.content"
        class="top-16"
      />
    </div>
  </section>
</template>

<script>
import CardsItem from "../UI/CardsItem.vue"
export default {
  components: {
    CardsItem,
  },
  setup() {
    const firstCard = {
      image: "/src/assets/images/icon-brand-recognition.svg",
      title: "Brand Recognition",
      content:
        "Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content.",
    }
    const secondCard = {
      image: "/src/assets/images/icon-detailed-records.svg",
      title: "Detailed Records",
      content:
        "Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.",
    }
    const thirdCard = {
      image: "/src/assets/images/icon-fully-customizable.svg",
      title: "Fully Customizable",
      content:
        "Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.",
    }
    return { firstCard, secondCard, thirdCard }
  },
}
</script>

<style></style>
