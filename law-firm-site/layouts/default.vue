<!-- File: layouts/default.vue -->
<template>
  <div>
    <!-- Scroll progress bar -->
    <div class="fixed top-0 left-0 h-1 bg-emerald z-[60] transition-all" :style="{ width: scrollProgress + '%' }" />

    <header class="fixed top-0 w-full z-50 font-playfair backdrop-blur-md bg-white/80 border-b border-slate-200 shadow-sm transition-all duration-500" role="banner">
      <nav class="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between h-20 space-x-6">
        <!-- Left: Logo -->
        <NuxtLink to="/" class="flex items-center space-x-3 transition duration-300 hover:brightness-110">
          <img src="/images/logo.png" alt="Baweja Law Firm Logo" class="h-12 md:h-16 object-contain" loading="lazy" />
          <span class="text-primary text-xl md:text-2xl font-semibold tracking-wide">Baweja Law Firm</span>
        </NuxtLink>

        <!-- Center: Hanuman Ji Image -->
        <div class="hidden md:block animate-hanuman-glow">
          <img src="/images/hanumanji.png" alt="Hanuman Ji" class="h-14 w-auto drop-shadow-xl" />
        </div>

        <!-- Right: Desktop Nav -->
        <ul class="hidden md:flex space-x-8 text-[1.125rem] font-medium tracking-wide">
          <li v-for="link in navLinks" :key="link.href">
            <a
              :href="link.href"
              @click="setActive(link.href)"
              :class="[
                'relative px-4 py-2 transition duration-300',
                activeSection === link.href
                  ? 'text-primary font-semibold drop-shadow-[0_1px_4px_rgba(29,53,87,0.4)] scale-105'
                  : 'text-slate-800 hover:text-emerald hover:scale-105'
              ]"
              tabindex="0"
            >
              {{ link.label }}
            </a>
          </li>
        </ul>

        <!-- Mobile Nav Toggle -->
        <button @click="toggleMenu" class="md:hidden text-primary focus:outline-none" aria-label="Toggle menu" :aria-expanded="menuOpen.toString()">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>

      <!-- Mobile Menu -->
      <transition name="fade">
        <div v-if="menuOpen" class="md:hidden bg-white text-primary border-t px-6 pb-6 shadow-sm">
          <ul class="space-y-4 font-medium">
            <li v-for="link in navLinks" :key="link.href">
              <a
                :href="link.href"
                @click="setActive(link.href)"
                :class="[
                  'block px-4 py-2 rounded-lg transition',
                  activeSection === link.href
                    ? 'bg-gradient-to-r from-emerald to-primary text-white shadow'
                    : 'hover:text-emerald hover:scale-105'
                ]"
                tabindex="0"
              >
                {{ link.label }}
              </a>
            </li>
          </ul>
        </div>
      </transition>
    </header>

    <main class="pt-24 space-y-20 bg-light text-charcoal" role="main">
      <slot />
    </main>

    <footer class="bg-primary text-white py-12 mt-24 animate-footer-slide-up relative overflow-hidden" role="contentinfo">
      <div class="max-w-6xl mx-auto px-6 text-center">
        <p class="text-sm">© {{ new Date().getFullYear() }} Baweja Law Firm. All rights reserved.</p>
        <p class="text-xs mt-2">Flat No. 1049, Sector 16B, Dwarka, Delhi – 110078 | +91 89201 60434 | vyomini22@gmail.com</p>
        <div class="mt-8 italic text-emerald animate-text-glow text-lg tracking-widest">“Justice delayed is justice denied.”</div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const menuOpen = ref(false)
const activeSection = ref('')
const scrollProgress = ref(0)
const logoGlow = ref(false)
const showHeader = ref(true)

const navLinks = [
  { href: '/#services', label: 'Services' },
  { href: '/#about', label: 'About' },
  { href: '/#blog', label: 'Blog' },
  { href: '/#contact', label: 'Contact' }
]

let lastScroll = 0

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value
}

const setActive = (hash) => {
  activeSection.value = hash
  menuOpen.value = false
}

onMounted(() => {
  document.documentElement.style.scrollBehavior = 'smooth'

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY + 120
    const total = document.body.scrollHeight - window.innerHeight
    scrollProgress.value = (scrollY / total) * 100

    for (const link of navLinks) {
      const section = document.querySelector(link.href.replace('/#', '#'))
      if (section) {
        const top = section.offsetTop
        const bottom = top + section.offsetHeight
        if (scrollY >= top && scrollY < bottom) {
          activeSection.value = link.href
        }
      }
    }

    logoGlow.value = scrollY > 100
    const currentScroll = window.scrollY
    showHeader.value = currentScroll < lastScroll || currentScroll <= 100
    lastScroll = currentScroll
  })
})
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

@keyframes footer-slide-up {
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.animate-footer-slide-up {
  animation: footer-slide-up 1s ease-out both;
}

@keyframes logo-glow {
  0%, 100% {
    text-shadow: none;
  }
  50% {
    text-shadow: 0 0 8px rgba(42, 157, 143, 0.4);
  }
}
.animate-logo-glow {
  animation: logo-glow 1.2s ease-in-out infinite;
}

@keyframes text-glow {
  0%, 100% {
    opacity: 0.7;
  }
  50% {
    opacity: 1;
    text-shadow: 0 0 8px #2A9D8F;
  }
}
.animate-text-glow {
  animation: text-glow 3s ease-in-out infinite;
}

@keyframes hanuman-glow {
  0%, 100% {
    filter: drop-shadow(0 0 0px rgba(255, 223, 186, 0.3));
  }
  50% {
    filter: drop-shadow(0 0 12px rgba(255, 223, 186, 0.6));
  }
}
.animate-hanuman-glow {
  animation: hanuman-glow 3s ease-in-out infinite;
}
.font-playfair {
  font-family: 'Playfair Display', serif;
}
</style>
