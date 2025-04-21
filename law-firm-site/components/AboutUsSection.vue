<template>
  <section id="about" class="bg-light py-24 px-6 text-center overflow-hidden">
    <div class="max-w-4xl mx-auto animate-fade-slide-in">
      <h2 class="text-4xl font-bold mb-8 text-primary font-playfair">About Our Firm</h2>
      <p class="text-lg text-slate leading-relaxed space-y-5">
        <span class="block mb-4">
          <strong><span class="text-primary font-semibold animate-glow">Adv. Vyomini Baweja</span></strong> is a law graduate with a <span class="text-emerald font-semibold animate-glow">B.A. LL.B. (Distinction – 80%)</span> and a consistent record of academic excellence. She secured <span class="text-emerald font-semibold animate-pulse">All Delhi Rank 166</span> in IPU CET and later achieved <span class="text-primary font-semibold animate-glow">All India Rank 80</span> in CLAT PG.
        </span>
        <span class="block mb-4">
          Her practice spans <span class="font-medium text-primary">Criminal Law</span>, <span class="font-medium text-primary">Civil Litigation</span>, <span class="font-medium text-primary">Intellectual Property Rights</span>, <span class="font-medium text-primary">Taxation</span>, <span class="font-medium text-primary">Cyber Law</span>, and <span class="font-medium text-primary">Healthcare Laws</span>—backed by interdisciplinary clarity and precision.
        </span>
        <span class="block mb-4">
          She represents clients before the <strong>Supreme Court of India</strong>, <strong>Delhi High Court</strong>, and several tribunals and forums. A proud member of the <span class="text-emerald font-semibold animate-glow">Bar Council of Delhi</span>, she combines professionalism with empathetic advocacy.
        </span>
        <span class="block">
          Believing justice is empowerment, she is committed to enhancing access for the underrepresented—handling every matter with <span class="italic text-emerald">integrity, depth, and impact.</span>
        </span>
      </p>

      <div class="mt-12">
        <NuxtLink
          to="#contact"
          class="inline-block px-6 py-3 text-lg font-semibold rounded-full bg-emerald text-white shadow-md hover:bg-primary transition-all duration-300"
        >
          Get in Touch
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<style scoped>
@keyframes fade-slide-in {
  from {
    opacity: 0;
    transform: translateY(60px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.animate-fade-slide-in {
  animation: fade-slide-in 1s ease-out both;
}

@keyframes glow {
  0%, 100% {
    text-shadow: none;
  }
  50% {
    text-shadow: 0 0 8px rgba(42, 157, 143, 0.5);
  }
}
.animate-glow {
  animation: glow 2s ease-in-out infinite;
}

.animate-pulse {
  animation: pulse 2s infinite;
}
</style>
