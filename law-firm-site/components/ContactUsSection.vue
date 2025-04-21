<template>
  <section id="contact" aria-labelledby="contact-title" class="bg-primary text-white py-24 px-6 overflow-hidden">
    <div class="max-w-6xl mx-auto animate-fade-slide-in">
      <h2 id="contact-title" class="text-4xl font-bold mb-8 text-center">Contact Us</h2>

      <div class="grid md:grid-cols-2 gap-12">
        <!-- Left Column: Info + Map -->
        <div class="space-y-10">
          <!-- Contact Info -->
          <div class="space-y-4 text-base">
            <p class="flex items-start gap-3 transition-transform duration-300 hover:scale-105">
              <svg class="w-6 h-6 mt-1 text-emerald" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M12 11c1.656 0 3-1.343 3-3s-1.344-3-3-3-3 1.343-3 3 1.344 3 3 3zM12 2C7.589 2 4 5.589 4 10c0 4.333 4 8 8 12 4-4 8-7.667 8-12 0-4.411-3.589-8-8-8z"/>
              </svg>
              <span>Flat no. 1049, Sector 16 B,<br />Dwarka, Delhi 110078</span>
            </p>

            <p class="flex items-center gap-3 transition-transform duration-300 hover:scale-105">
              <svg class="w-6 h-6 text-emerald" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M3 5l2 4 3.5-2 1 1-2 3.5 4 4 3.5-2 1 1-2 3a2 2 0 01-2 1H8a2 2 0 01-2-1l-3-5a2 2 0 010-2l1-2z"/>
              </svg>
              <a href="tel:+918920160434" class="text-emerald hover:underline">+91 89201 60434</a>
            </p>

            <p class="flex items-center gap-3 transition-transform duration-300 hover:scale-105">
              <svg class="w-6 h-6 text-emerald" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M16 12H8m0 0l4-4m-4 4l4 4"/>
              </svg>
              <a href="mailto:vyomini22@gmail.com" class="text-emerald hover:underline">vyomini22@gmail.com</a>
            </p>

            <p class="flex items-center gap-3 transition-transform duration-300 hover:scale-105">
              <svg class="w-6 h-6 text-emerald" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
              <span>Mon–Fri: 9 AM – 6 PM</span>
            </p>
          </div>

          <!-- Map -->
          <div class="transition-transform duration-700 ease-out hover:scale-105">
            <iframe
              title="Law Firm Location"
               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d112168.46065656799!2d76.98184729999999!3d28.59596925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d051bbf2304a3%3A0x8eaf7ec6e739d96c!2sDwarka%20Sector%2016B%2C%20Dwarka%2C%20Delhi%2C%20110078!5e0!3m2!1sen!2sin!4v1713888312345!5m2!1sen!2sin"
              width="100%"
              height="250"
              style="border:0; border-radius:12px"
              allowfullscreen
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              class="rounded-lg shadow-lg"
            ></iframe>
          </div>
        </div>

        <!-- Contact Form -->
        <form
          action="https://formspree.io/f/mnnpekro"
          method="POST"
          class="space-y-6 bg-white p-8 rounded-2xl shadow-lg text-gray-800 animate-fade-slide-in delay-200"
        >
          <input type="hidden" name="_next" value="https://yourdomain.com/thank-you" />
          <input type="text" name="_honey" style="display: none;" />

          <div>
            <label class="block font-medium mb-1" for="name">Full Name</label>
            <input name="name" id="name" type="text" required class="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald" />
          </div>

          <div>
            <label class="block font-medium mb-1" for="email">Email Address</label>
            <input name="email" id="email" type="email" required class="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald" />
          </div>

          <div>
            <label class="block font-medium mb-1" for="phone">Phone Number</label>
            <input name="phone" id="phone" type="tel" required class="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald" />
          </div>

          <div>
            <label class="block font-medium mb-1" for="message">Your Message</label>
            <textarea name="message" id="message" rows="5" required class="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald"></textarea>
          </div>

          <button type="submit" class="bg-emerald hover:bg-teal-600 text-white font-semibold px-6 py-3 rounded-md shadow-md transition-all duration-300 transform hover:scale-105">
            Send Message
          </button>
        </form>
      </div>
    </div>
  </section>
</template>
