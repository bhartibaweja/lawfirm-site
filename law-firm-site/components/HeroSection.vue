<template>
  <section id="hero" class="bg-primary text-white py-24">
    <div class="max-w-7xl mx-auto px-6 text-center">
      <h1 class="text-4xl md:text-6xl font-extrabold leading-tight mb-6 font-playfair">
        Trusted Legal Expertise<br />
        When You Need It Most
      </h1>
      <p class="text-lg md:text-xl max-w-2xl mx-auto mb-8 text-light">
        Empowering individuals and businesses with exceptional legal guidance and representation.
      </p>
      <a
        ref="ctaRef"
        href="#contact"
        :class="[
          'inline-block bg-emerald text-white font-semibold text-lg px-10 py-4 rounded-full shadow-lg transition-all duration-300 transform',
          visible ? 'hover:bg-opacity-90 hover:scale-105 animate-bounce-once' : 'opacity-0 translate-y-6'
        ]"
      >
        Schedule a Free Consultation
      </a>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const visible = ref(false)
const ctaRef = ref(null)

onMounted(() => {
  const observer = new IntersectionObserver(
    ([entry]) => (visible.value = entry.isIntersecting),
    { threshold: 0.4 }
  )
  if (ctaRef.value) observer.observe(ctaRef.value)
})
</script>

<style scoped>
@keyframes bounce-once {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-8px);
  }
}
.animate-bounce-once {
  animation: bounce-once 0.6s ease-in-out;
}
</style>
