<template>
  <section id="services" class="bg-light py-24">
    <div class="max-w-7xl mx-auto px-6">
      <div class="text-center mb-16">
        <h2 class="text-4xl font-bold text-primary mb-4">Our Legal Services</h2>
        <p class="text-slate max-w-2xl mx-auto text-lg">
          From personal cases to corporate counsel, we provide tailored legal support across diverse sectors.
        </p>
      </div>

      <div class="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        <div
          v-for="(service, index) in services"
          :key="index"
          class="bg-white rounded-2xl shadow hover:shadow-lg transform hover:-translate-y-1 transition duration-300 p-6 group"
        >
          <div class="text-emerald mb-4">
            <component :is="service.icon" class="w-10 h-10 group-hover:scale-110 transition-transform duration-300" />
          </div>
          <h3 class="text-xl font-semibold text-charcoal mb-2 group-hover:text-emerald">
            {{ service.title }}
          </h3>
          <p class="text-slate">{{ service.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import {
  GavelIcon,
  BriefcaseIcon,
  ShieldIcon,
  HeartHandshakeIcon,
  LightbulbIcon,
  LandmarkIcon,
  Building2Icon,
  FileTextIcon,
  ScaleIcon,
  StethoscopeIcon
} from 'lucide-vue-next'

const services = [
  {
    title: 'Corporate & Commercial Law',
    description: 'Expert legal support for contracts, compliance, and corporate transactions.',
    icon: BriefcaseIcon
  },
  {
    title: 'Criminal Law & Bail Matters',
    description: 'Defending rights in criminal cases with bail assistance and legal strategy.',
    icon: ShieldIcon
  },
  {
    title: 'Family Matters & Partition',
    description: 'Handling divorce, mediation, family disputes, and property partitions.',
    icon: HeartHandshakeIcon
  },
  {
    title: 'Intellectual Property Rights',
    description: 'Trademark, copyright, and trade secret protection including IPR disputes.',
    icon: LightbulbIcon
  },
  {
    title: 'Constitutional & Writ Matters',
    description: 'Representation in constitutional cases in High Courts & Supreme Court.',
    icon: LandmarkIcon
  },
  {
    title: 'Property Law',
    description: 'Resolving disputes, verification, and advisory on property transactions.',
    icon: FileTextIcon
  },
  {
    title: 'Real Estate Law',
    description: 'Guidance in real estate investments, leases, and regulatory compliance.',
    icon: Building2Icon
  },
  {
    title: 'Civil Disputes',
    description: 'Litigation and resolution for contract breaches, damages, and torts.',
    icon: GavelIcon
  },
  {
    title: 'Anti-Trust & Competition Law',
    description: 'Ensuring fair practices and compliance with competition regulations.',
    icon: ScaleIcon
  },
  {
    title: 'Healthcare Law',
    description: 'Regulatory advice for clinics, pharma, and medical professionals.',
    icon: StethoscopeIcon
  }
]
</script>

<style scoped>
</style>
