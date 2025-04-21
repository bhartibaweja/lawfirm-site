<template>
  <section id="blog" class="bg-light py-24 text-charcoal">
    <div class="max-w-7xl mx-auto px-6">
      <div class="text-center mb-16">
        <h2 class="text-4xl font-bold text-primary mb-4">Legal Insights</h2>
        <p class="text-slate-600 max-w-2xl mx-auto text-lg">
          Stay informed with our expert-written articles and recent legal updates.
        </p>
      </div>

      <div class="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        <div
          v-for="post in posts"
          :key="post._id"
          class="bg-white rounded-2xl p-6 shadow hover:shadow-xl transform hover:-translate-y-1 transition duration-300 group"
        >
          <NuxtLink :to="`/blog/${post.slug.current}`">
            <h3 class="text-xl font-semibold text-primary group-hover:text-emerald mb-2">
              {{ post.title }}
            </h3>
            <p class="text-slate-600 text-sm">{{ post.excerpt }}</p>
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { createClient } from '@sanity/client'
import { ref, onMounted } from 'vue'

const posts = ref([])

const client = createClient({
  projectId: '5p6z5xe4',
  dataset: 'production',
  apiVersion: '2023-10-01',
  useCdn: true
})

onMounted(async () => {
  const results = await client.fetch(`*[_type == "post"] | order(_createdAt desc)[0..5]{
    _id,
    title,
    excerpt,
    slug
  }`)
  posts.value = results
})
</script>

<style scoped>
</style>
