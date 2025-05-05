<template>
  <AppHeader />
  <main>
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </main>
  <AppFooter />
</template>

<script>
import AppHeader from '@/components/AppHeader.vue'
import AppFooter from '@/components/AppFooter.vue'

export default {
  name: 'App',
  components: {
    AppHeader,
    AppFooter
  }
}
</script>

<style lang="scss">
@import '@/assets/scss/main.scss';

:root {
  --dark-bg: #{$dark-bg};
  --darker-bg: #{$darker-bg};
  --dark-accent: #{$dark-accent};
  --text-color: #{$text-color};
  --muted-text: #{$muted-text};
  --highlight: #{$highlight};
  --secondary-highlight: #{$secondary-highlight};
  --gradient-1: #{$gradient-1};
  --gradient-2: #{$gradient-2};
  --shadow-color: #{$shadow-color};
  --card-bg: #{$card-bg};
  --border-color: #{$border-color};
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
  background-color: var(--dark-bg);
  color: var(--text-color);
  line-height: 1.6;
  min-height: 100vh;
  
  &.no-scroll {
    overflow: hidden;
  }
}

main {
  margin-top: 70px;
  min-height: calc(100vh - 70px - 400px); /* Account for header and footer height */
}

.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 $spacing-md;
}

a {
  color: var(--highlight);
  text-decoration: none;
  
  &:hover {
    text-decoration: underline;
  }
}

h1, h2, h3, h4, h5, h6 {
  font-weight: 700;
  line-height: 1.3;
  margin-bottom: $spacing-md;
}

h1 {
  font-size: 3rem;
  letter-spacing: -1px;
  
  @media (max-width: $breakpoint-md) {
    font-size: 2.5rem;
  }
  
  @media (max-width: $breakpoint-sm) {
    font-size: 2rem;
  }
}

h2 {
  font-size: 2.2rem;
  letter-spacing: -0.5px;
  
  @media (max-width: $breakpoint-md) {
    font-size: 1.8rem;
  }
}

h3 {
  font-size: 1.8rem;
  
  @media (max-width: $breakpoint-md) {
    font-size: 1.5rem;
  }
}

p {
  margin-bottom: $spacing-md;
}

button, .btn {
  cursor: pointer;
  font-family: inherit;
}

.primary-btn {
  display: inline-block;
  padding: 12px 24px;
  background: var(--gradient-1);
  color: white;
  text-decoration: none;
  font-size: 1rem;
  font-weight: 500;
  border-radius: $radius-md;
  border: none;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px var(--shadow-color);
    text-decoration: none;
  }
}

.secondary-btn {
  display: inline-block;
  padding: 12px 24px;
  background: rgba(124, 77, 255, 0.1);
  color: var(--text-color);
  text-decoration: none;
  font-size: 1rem;
  font-weight: 500;
  border-radius: $radius-md;
  border: 1px solid rgba(124, 77, 255, 0.3);
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(124, 77, 255, 0.2);
    text-decoration: none;
  }
}

.section {
  padding: 80px 0;
  
  @media (max-width: $breakpoint-md) {
    padding: 60px 0;
  }
  
  @media (max-width: $breakpoint-sm) {
    padding: 40px 0;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.card {
  background: var(--card-bg);
  border-radius: $radius-lg;
  padding: $spacing-lg;
  border: 1px solid var(--border-color);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
  }
}

.gradient-text {
  background: var(--gradient-1);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.code {
  font-family: 'Fira Code', monospace;
  background: var(--dark-accent);
  padding: 2px 6px;
  border-radius: $radius-sm;
  font-size: 0.9em;
  color: var(--secondary-highlight);
}

pre {
  font-family: 'Fira Code', monospace;
  background: var(--dark-accent);
  padding: $spacing-md;
  border-radius: $radius-md;
  overflow-x: auto;
  margin-bottom: $spacing-lg;
  
  code {
    color: var(--text-color);
  }
}

/* Form elements */
input, textarea, select {
  width: 100%;
  padding: 12px 16px;
  background: var(--dark-accent);
  border: 1px solid var(--border-color);
  border-radius: $radius-md;
  color: var(--text-color);
  font-family: inherit;
  font-size: 1rem;
  margin-bottom: $spacing-md;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: var(--highlight);
    box-shadow: 0 0 0 2px rgba(124, 77, 255, 0.2);
  }
  
  &::placeholder {
    color: var(--muted-text);
  }
}

label {
  display: block;
  margin-bottom: $spacing-sm;
  color: var(--text-color);
  font-weight: 500;
}

/* Grid system */
.row {
  display: flex;
  flex-wrap: wrap;
  margin: 0 -15px;
}

.col {
  padding: 0 15px;
  flex: 1;
  
  @media (max-width: $breakpoint-sm) {
    flex: 0 0 100%;
    margin-bottom: $spacing-lg;
  }
}

.col-6 {
  width: 50%;
  padding: 0 15px;
  
  @media (max-width: $breakpoint-sm) {
    width: 100%;
    margin-bottom: $spacing-lg;
  }
}

.col-4 {
  width: 33.333333%;
  padding: 0 15px;
  
  @media (max-width: $breakpoint-md) {
    width: 50%;
  }
  
  @media (max-width: $breakpoint-sm) {
    width: 100%;
    margin-bottom: $spacing-lg;
  }
}

.col-3 {
  width: 25%;
  padding: 0 15px;
  
  @media (max-width: $breakpoint-md) {
    width: 50%;
  }
  
  @media (max-width: $breakpoint-sm) {
    width: 100%;
    margin-bottom: $spacing-lg;
  }
}
</style> 