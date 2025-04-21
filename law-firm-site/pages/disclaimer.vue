<template>
  <div class="min-h-screen bg-light text-charcoal flex items-center justify-center px-4 py-12">
    <div class="bg-white shadow-xl max-w-3xl w-full rounded-xl p-10 animate-fade-slide-in">
      <h1 class="text-3xl font-semibold mb-6 text-primary">Disclaimer</h1>
      <p class="mb-4">
        The rules of the Bar Council of India prohibit law firms/lawyers from soliciting work or advertising in any manner.
      </p>
      <p class="mb-4">By clicking on ‘I AGREE’, the user acknowledges that:</p>
      <ul class="list-disc list-inside mb-4 space-y-2">
        <li>
          The user wishes to gain more information about Advocate Vyomini Baweja, her practice areas and her attorneys, for his/her own information and use.
        </li>
        <li>
          The information is made available/provided to the user only on his/her specific request and any information obtained or material downloaded from this website is completely at the user’s volition and any transmission, receipt or use of this site is not intended to, and will not, create any lawyer-client relationship.
        </li>
        <li>
          None of the information contained on the website is in the nature of a legal opinion or otherwise amounts to any legal advice.
        </li>
      </ul>
      <p class="mb-6">
        Vyomini Baweja is not liable for any consequence of any action taken by the user relying on material/information provided under this website. In cases where the user has any legal issues, he/she in all cases must seek independent legal advice.
      </p>
      <div class="flex justify-center space-x-6">
        <button
          @click="agree"
          class="px-6 py-3 rounded-full bg-emerald text-white font-semibold shadow hover:scale-105 transition"
        >
          I AGREE
        </button>
        <button
          @click="handleDisagree"
          class="px-6 py-3 rounded-full bg-red-500 text-white font-semibold shadow hover:scale-105 transition"
        >
          I DISAGREE
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
const handleDisagree = () => {
  window.location.href = 'https://www.google.com'
}

const agree = () => {
  localStorage.setItem('agreedToDisclaimer', 'true')
  navigateTo('/')
}
</script>

<style scoped>
@keyframes fade-slide-in {
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.animate-fade-slide-in {
  animation: fade-slide-in 0.9s ease-out both;
}
</style>
