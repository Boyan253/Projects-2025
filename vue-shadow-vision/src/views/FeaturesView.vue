<template>
  <div class="features-page">
    <div class="container">
      <div class="section-header">
        <h1>ShadowVision Features</h1>
        <p>Discover the powerful capabilities that make ShadowVision unique</p>
      </div>
      
      <div class="features-grid">
        <div class="feature-card">
          <div class="feature-icon">🔍</div>
          <h3>Deep Code Analysis</h3>
          <p>Our AI analyzes your code at a deeper level, understanding context and logic flow that traditional static analyzers miss.</p>
        </div>
        
        <div class="feature-card">
          <div class="feature-icon">🛡️</div>
          <h3>Security Vulnerability Detection</h3>
          <p>Identify security risks early, including SQL injection, XSS vulnerabilities, and unsanitized inputs.</p>
        </div>
        
        <div class="feature-card">
          <div class="feature-icon">🔄</div>
          <h3>CI/CD Integration</h3>
          <p>Seamlessly integrate with your CI/CD pipeline to catch bugs before they reach production.</p>
        </div>
        
        <div class="feature-card">
          <div class="feature-icon">📊</div>
          <h3>Detailed Reports</h3>
          <p>Get comprehensive reports with actionable insights to improve your code quality and security posture.</p>
        </div>
        
        <div class="feature-card">
          <div class="feature-icon">⚡</div>
          <h3>Performance Optimization</h3>
          <p>Identify bottlenecks and inefficient code patterns that could slow down your application.</p>
        </div>
        
        <div class="feature-card">
          <div class="feature-icon">🚀</div>
          <h3>Auto-Fix Suggestions</h3>
          <p>Get intelligent suggestions for fixing detected issues with one-click implementation.</p>
        </div>
        
        <div class="feature-card">
          <div class="feature-icon">🌍</div>
          <h3>Multi-Language Support</h3>
          <p>ShadowVision works with all major programming languages including JavaScript, Python, Java, Go, and more.</p>
        </div>
        
        <div class="feature-card">
          <div class="feature-icon">🔗</div>
          <h3>Seamless Git Integration</h3>
          <p>Connect directly to your GitHub, GitLab, or Bitbucket repositories with just a few clicks.</p>
        </div>
        
        <div class="feature-card">
          <div class="feature-icon">📱</div>
          <h3>Mobile App</h3>
          <p>Monitor your code quality and get alerts on the go with our mobile companion app.</p>
        </div>
      </div>
      
      <div class="cta-section">
        <h2>Ready to explore ShadowVision?</h2>
        <router-link to="/signup" class="primary-btn">Start Free Trial</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FeaturesView'
}
</script>

<style lang="scss" scoped>
.features-page {
  padding: 100px 0;
}

.section-header {
  text-align: center;
  margin-bottom: $spacing-xxl;
  
  h1 {
    background: $gradient-1;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    font-size: 3rem;
    margin-bottom: $spacing-sm;
  }
  
  p {
    color: $muted-text;
    font-size: 1.2rem;
    max-width: 700px;
    margin: 0 auto;
  }
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  margin-bottom: $spacing-xxl;
  
  @media (max-width: $breakpoint-md) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: $breakpoint-sm) {
    grid-template-columns: 1fr;
  }
}

.feature-card {
  background-color: $card-bg;
  border-radius: $radius-lg;
  padding: $spacing-lg;
  border: 1px solid $border-color;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(255, 255, 255, 0.05);
  }
  
  .feature-icon {
    font-size: 2.5rem;
    margin-bottom: $spacing-md;
  }
  
  h3 {
    margin-bottom: $spacing-sm;
    font-size: 1.4rem;
  }
  
  p {
    color: $muted-text;
    font-size: 0.95rem;
    margin-bottom: 0;
  }
}

.cta-section {
  text-align: center;
  max-width: 700px;
  margin: 0 auto;
  padding: $spacing-xl;
  background: rgba(124, 77, 255, 0.1);
  border-radius: $radius-lg;
  
  h2 {
    margin-bottom: $spacing-lg;
    font-size: 1.8rem;
  }
}
</style> 