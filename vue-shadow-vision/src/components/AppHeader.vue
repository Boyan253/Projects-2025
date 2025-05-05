<template>
  <header class="header" :class="{ 'scrolled': isScrolled }">
    <div class="container">
      <div class="header-content">
        <router-link to="/" class="logo">
          <span class="logo-text">Shadow<span class="logo-highlight">Vision</span></span>
        </router-link>
        
        <nav class="nav-desktop">
          <ul class="nav-links">
            <li><router-link to="/#features">Features</router-link></li>
            <li><router-link to="/#how-it-works">How it Works</router-link></li>
            <li><router-link to="/#pricing">Pricing</router-link></li>
            <li><router-link to="/documentation">Documentation</router-link></li>
            <li><router-link to="/blog">Blog</router-link></li>
          </ul>
        </nav>
        
        <div class="header-actions">
          <router-link to="/login" class="btn-login">Login</router-link>
          <router-link to="/signup" class="btn-signup">Get Started</router-link>
          <button class="btn-menu" @click="toggleMobileMenu" aria-label="Menu">
            <div class="hamburger" :class="{ 'is-active': isMobileMenuOpen }">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </button>
        </div>
      </div>
    </div>
    
    <!-- Mobile Menu -->
    <div class="mobile-menu" :class="{ 'is-open': isMobileMenuOpen }">
      <div class="container">
        <nav class="nav-mobile">
          <ul class="mobile-nav-links">
            <li>
              <router-link to="/#features" @click="closeMobileMenu">Features</router-link>
            </li>
            <li>
              <router-link to="/#how-it-works" @click="closeMobileMenu">How it Works</router-link>
            </li>
            <li>
              <router-link to="/#pricing" @click="closeMobileMenu">Pricing</router-link>
            </li>
            <li>
              <router-link to="/documentation" @click="closeMobileMenu">Documentation</router-link>
            </li>
            <li>
              <router-link to="/blog" @click="closeMobileMenu">Blog</router-link>
            </li>
          </ul>
          
          <div class="mobile-actions">
            <router-link to="/login" class="mobile-btn-login" @click="closeMobileMenu">Login</router-link>
            <router-link to="/signup" class="mobile-btn-signup" @click="closeMobileMenu">Get Started</router-link>
          </div>
        </nav>
      </div>
    </div>
  </header>
</template>

<script>
import { ref, onMounted, onBeforeUnmount } from 'vue'

export default {
  name: 'AppHeader',
  setup() {
    const isScrolled = ref(false)
    const isMobileMenuOpen = ref(false)
    
    const handleScroll = () => {
      isScrolled.value = window.scrollY > 20
    }
    
    const toggleMobileMenu = () => {
      isMobileMenuOpen.value = !isMobileMenuOpen.value
      document.body.classList.toggle('no-scroll', isMobileMenuOpen.value)
    }
    
    const closeMobileMenu = () => {
      isMobileMenuOpen.value = false
      document.body.classList.remove('no-scroll')
    }
    
    onMounted(() => {
      window.addEventListener('scroll', handleScroll)
    })
    
    onBeforeUnmount(() => {
      window.removeEventListener('scroll', handleScroll)
    })
    
    return {
      isScrolled,
      isMobileMenuOpen,
      toggleMobileMenu,
      closeMobileMenu
    }
  }
}
</script>

<style lang="scss" scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
  padding: 20px 0;
  transition: all $duration-normal ease;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(5, 8, 15, 0);
    backdrop-filter: blur(0);
    transition: all $duration-normal ease;
    z-index: -1;
  }
  
  &.scrolled {
    padding: 15px 0;
    
    &::before {
      background-color: rgba(5, 8, 15, 0.8);
      backdrop-filter: blur(10px);
      box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
    }
  }
}

.header-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo {
  text-decoration: none;
  z-index: 101;
  
  .logo-text {
    font-size: 1.6rem;
    font-weight: 800;
    color: $text-color;
    letter-spacing: -0.5px;
  }
  
  .logo-highlight {
    background: $gradient-1;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
}

.nav-links {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 30px;
  
  li {
    a {
      color: $text-color;
      text-decoration: none;
      font-size: 0.95rem;
      transition: color $duration-fast ease;
      position: relative;
      
      &::after {
        content: '';
        position: absolute;
        left: 0;
        bottom: -5px;
        width: 0;
        height: 2px;
        background: $gradient-1;
        transition: width $duration-normal ease;
      }
      
      &:hover,
      &.router-link-active {
        color: $highlight;
        
        &::after {
          width: 100%;
        }
      }
    }
  }
}

.header-actions {
  display: flex;
  align-items: center;
  gap: 15px;
}

.btn-login {
  color: $text-color;
  text-decoration: none;
  font-size: 0.95rem;
  transition: color $duration-fast ease;
  
  &:hover {
    color: $highlight;
  }
}

.btn-signup {
  display: inline-block;
  padding: 10px 20px;
  background: $gradient-1;
  color: white;
  text-decoration: none;
  font-size: 0.95rem;
  font-weight: $font-medium;
  border-radius: $radius-md;
  transition: transform $duration-fast ease, box-shadow $duration-fast ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px $shadow-color;
  }
}

.btn-menu {
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: 5px;
  z-index: 101;
}

.hamburger {
  width: 24px;
  height: 18px;
  position: relative;
  
  span {
    display: block;
    position: absolute;
    height: 2px;
    width: 100%;
    background: $text-color;
    border-radius: 2px;
    opacity: 1;
    left: 0;
    transform: rotate(0deg);
    transition: .25s ease-in-out;
    
    &:nth-child(1) {
      top: 0px;
    }
    
    &:nth-child(2) {
      top: 8px;
    }
    
    &:nth-child(3) {
      top: 16px;
    }
  }
  
  &.is-active {
    span {
      &:nth-child(1) {
        top: 8px;
        transform: rotate(45deg);
      }
      
      &:nth-child(2) {
        opacity: 0;
      }
      
      &:nth-child(3) {
        top: 8px;
        transform: rotate(-45deg);
      }
    }
  }
}

.mobile-menu {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: $darker-bg;
  z-index: 100;
  padding: 80px 0 40px;
  visibility: hidden;
  opacity: 0;
  transform: translateY(-20px);
  transition: all $duration-normal ease;
  overflow-y: auto;
  
  &.is-open {
    visibility: visible;
    opacity: 1;
    transform: translateY(0);
  }
}

.nav-mobile {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.mobile-nav-links {
  list-style: none;
  padding: 0;
  margin: 0 0 40px;
  
  li {
    margin-bottom: 15px;
    
    a {
      display: block;
      color: $text-color;
      text-decoration: none;
      font-size: 1.3rem;
      padding: 10px 0;
      transition: color $duration-fast ease;
      
      &:hover,
      &.router-link-active {
        color: $highlight;
      }
    }
  }
}

.mobile-actions {
  display: flex;
  flex-direction: column;
  gap: 15px;
  
  .mobile-btn-login,
  .mobile-btn-signup {
    display: block;
    padding: 12px 20px;
    text-align: center;
    border-radius: $radius-md;
    text-decoration: none;
    font-size: 1rem;
    font-weight: $font-medium;
    transition: all $duration-fast ease;
  }
  
  .mobile-btn-login {
    background-color: rgba(124, 77, 255, 0.1);
    color: $text-color;
    
    &:hover {
      background-color: rgba(124, 77, 255, 0.2);
    }
  }
  
  .mobile-btn-signup {
    background: $gradient-1;
    color: white;
    
    &:hover {
      box-shadow: 0 5px 15px $shadow-color;
    }
  }
}

@media (max-width: 991px) {
  .nav-desktop {
    display: none;
  }
  
  .btn-menu {
    display: block;
  }
}

@media (max-width: 576px) {
  .btn-login {
    display: none;
  }
  
  .header {
    padding: 15px 0;
  }
}
</style> 