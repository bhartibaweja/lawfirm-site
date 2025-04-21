<template>
  <div class="prose max-w-3xl mx-auto py-16 px-6">
    <h1 class="text-3xl font-bold mb-4">{{ post?.title }}</h1>
    <p class="text-sm text-gray-500 mb-4">
      Published {{ formatDate(post?.publishedAt) }}
    </p>
    <NuxtImg v-if="post?.image" :src="post.image" class="rounded-lg mb-6" width="800" format="webp" />
    <PortableText :value="post?.body" />
  </div>
</template>

<script setup>
import { useRoute, useAsyncData } from '#app'
import { createClient } from '@sanity/client'
import { PortableText } from '@portabletext/vue'

const route = useRoute()

const client = createClient({
  projectId: '5p6z5xe4', // Replace with your actual projectId
  dataset: 'production',
  apiVersion: '2023-10-01',
  useCdn: true,
})

const { data: post } = await useAsyncData('post', () =>
  client.fetch(
    `*[_type == "post" && slug.current == $slug][0]{
      title, body, publishedAt,
      "image": mainImage.asset->url
    }`,
    { slug: route.params.slug }
  )
)

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString(undefined, {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}
</script>
