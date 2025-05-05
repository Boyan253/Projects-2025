<template>
  <div class="not-found">
    <div class="container">
      <div class="not-found-content">
        <div class="error-code">404</div>
        <h1>Page Not Found</h1>
        <p>The page you're looking for doesn't exist or has been moved.</p>
        <div class="buttons">
          <router-link to="/" class="primary-btn">Go Home</router-link>
          <router-link to="/contact" class="secondary-btn">Contact Support</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NotFoundView'
}
</script>

<style lang="scss" scoped>
.not-found {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 80vh;
  padding: $spacing-xl 0;
  text-align: center;
}

.not-found-content {
  max-width: 600px;
  margin: 0 auto;
}

.error-code {
  font-size: 8rem;
  font-weight: 800;
  background: $gradient-1;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 1;
  margin-bottom: $spacing-md;
  
  @media (max-width: $breakpoint-sm) {
    font-size: 6rem;
  }
}

h1 {
  margin-bottom: $spacing-md;
  font-size: 2.5rem;
  
  @media (max-width: $breakpoint-sm) {
    font-size: 2rem;
  }
}

p {
  color: $muted-text;
  font-size: 1.2rem;
  margin-bottom: $spacing-xl;
  
  @media (max-width: $breakpoint-sm) {
    font-size: 1.1rem;
  }
}

.buttons {
  display: flex;
  justify-content: center;
  gap: $spacing-md;
  
  @media (max-width: $breakpoint-sm) {
    flex-direction: column;
    gap: $spacing-sm;
    
    a {
      width: 100%;
    }
  }
}
</style> 