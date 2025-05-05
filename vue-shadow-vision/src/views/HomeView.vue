<template>
  <div class="home">
    <!-- Hero Section -->
    <section class="hero section" id="hero">
      <div class="container">
        <div class="hero-content">
          <div class="hero-text">
            <h1>Discover Hidden Bugs Before They Bite</h1>
            <p class="hero-description">ShadowVision uses advanced AI to analyze your code and detect vulnerabilities and bugs that traditional tools miss. See into the shadows of your codebase.</p>
            <div class="hero-buttons">
              <router-link to="/signup" class="primary-btn">Start Free Trial</router-link>
              <router-link to="/#how-it-works" class="secondary-btn">How It Works</router-link>
            </div>
          </div>
          <div class="hero-image">
            <div class="code-window">
              <div class="code-header">
                <div class="code-dots">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <div class="code-title">ShadowVision Analysis</div>
              </div>
              <div class="code-content">
                <pre><code>// ShadowVision detected potential vulnerability
function processUserData(data) {
  <span class="highlight-error">const sql = "SELECT * FROM users WHERE id = " + data.id;</span>
  
  // Recommendation: Use parameterized queries
  const safeSql = "SELECT * FROM users WHERE id = ?";
  db.query(safeSql, [data.id]);
  
  <span class="highlight-warning">if (data.isAdmin == true) {</span>
  // Use strict equality (===) for type safety
  
  <span class="highlight-success">const sanitized = escapeHtml(data.name);</span>
  // Good practice: Input sanitization detected
}</code></pre>
              </div>
            </div>
          </div>
        </div>
        
        <div class="featured-logos">
          <p>Trusted by developers at:</p>
          <div class="logos">
            <div class="logo-item">Company 1</div>
            <div class="logo-item">Company 2</div>
            <div class="logo-item">Company 3</div>
            <div class="logo-item">Company 4</div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Features Section -->
    <section class="features section" id="features">
      <div class="container">
        <div class="section-header">
          <h2>Powerful Features</h2>
          <p>Tools that help you catch bugs before they cause problems.</p>
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
        </div>
      </div>
    </section>
    
    <!-- How It Works Section -->
    <section class="how-it-works section" id="how-it-works">
      <div class="container">
        <div class="section-header">
          <h2>How ShadowVision Works</h2>
          <p>Our advanced AI-powered code analysis process is simple to use yet incredibly powerful.</p>
        </div>
        
        <div class="steps">
          <div class="step">
            <div class="step-number">1</div>
            <div class="step-content">
              <h3>Connect Your Repository</h3>
              <p>Link your GitHub, GitLab, or Bitbucket repository to ShadowVision with a few clicks.</p>
            </div>
          </div>
          
          <div class="step">
            <div class="step-number">2</div>
            <div class="step-content">
              <h3>AI Analyzes Your Code</h3>
              <p>Our advanced AI engine scans your codebase, understanding architecture and logic flows.</p>
            </div>
          </div>
          
          <div class="step">
            <div class="step-number">3</div>
            <div class="step-content">
              <h3>Review Detailed Reports</h3>
              <p>Get comprehensive reports highlighting vulnerabilities, bugs, and optimization opportunities.</p>
            </div>
          </div>
          
          <div class="step">
            <div class="step-number">4</div>
            <div class="step-content">
              <h3>Implement Suggested Fixes</h3>
              <p>Apply intelligent fix suggestions with a single click or use them as guidance.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Pricing Section -->
    <section class="pricing section" id="pricing">
      <div class="container">
        <div class="section-header">
          <h2>Simple, Transparent Pricing</h2>
          <p>Choose the plan that fits your needs. All plans include core features.</p>
        </div>
        
        <div class="pricing-cards">
          <div class="pricing-card">
            <div class="pricing-header">
              <h3>Free</h3>
              <div class="price">$0<span>/month</span></div>
            </div>
            <div class="pricing-features">
              <ul>
                <li>Basic code analysis</li>
                <li>Security vulnerability detection</li>
                <li>Up to 5 repositories</li>
                <li>Community support</li>
              </ul>
            </div>
            <div class="pricing-action">
              <router-link to="/signup" class="secondary-btn">Start Free</router-link>
            </div>
          </div>
          
          <div class="pricing-card featured">
            <div class="popular-tag">Most Popular</div>
            <div class="pricing-header">
              <h3>Pro</h3>
              <div class="price">$29<span>/month</span></div>
            </div>
            <div class="pricing-features">
              <ul>
                <li>Advanced code analysis</li>
                <li>Security vulnerability detection</li>
                <li>Performance optimization</li>
                <li>Unlimited repositories</li>
                <li>CI/CD integration</li>
                <li>Email support</li>
              </ul>
            </div>
            <div class="pricing-action">
              <router-link to="/signup" class="primary-btn">Start 14-Day Trial</router-link>
            </div>
          </div>
          
          <div class="pricing-card">
            <div class="pricing-header">
              <h3>Enterprise</h3>
              <div class="price">Custom</div>
            </div>
            <div class="pricing-features">
              <ul>
                <li>Everything in Pro</li>
                <li>On-premises deployment</li>
                <li>Custom integrations</li>
                <li>Dedicated account manager</li>
                <li>24/7 priority support</li>
                <li>Custom training</li>
              </ul>
            </div>
            <div class="pricing-action">
              <router-link to="/contact" class="secondary-btn">Contact Sales</router-link>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Testimonials Section -->
    <section class="testimonials section">
      <div class="container">
        <div class="section-header">
          <h2>What Our Users Say</h2>
          <p>Developers around the world trust ShadowVision to improve their code quality.</p>
        </div>
        
        <div class="testimonials-grid">
          <div class="testimonial-card">
            <div class="testimonial-content">
              <p>"ShadowVision helped us identify critical security vulnerabilities that our regular testing missed. It's now an essential part of our development workflow."</p>
            </div>
            <div class="testimonial-author">
              <div class="author-info">
                <h4>Sarah Johnson</h4>
                <p>Lead Developer, TechCorp</p>
              </div>
            </div>
          </div>
          
          <div class="testimonial-card">
            <div class="testimonial-content">
              <p>"The AI-powered insights have transformed how we approach code quality. We've reduced our bug rate by 47% since implementing ShadowVision."</p>
            </div>
            <div class="testimonial-author">
              <div class="author-info">
                <h4>Alex Rodriguez</h4>
                <p>CTO, StartupXYZ</p>
              </div>
            </div>
          </div>
          
          <div class="testimonial-card">
            <div class="testimonial-content">
              <p>"The performance optimization suggestions alone paid for our subscription. Our application is now 30% faster with the improvements ShadowVision identified."</p>
            </div>
            <div class="testimonial-author">
              <div class="author-info">
                <h4>Maya Patel</h4>
                <p>Software Engineer, EnterpriseApp</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- CTA Section -->
    <section class="cta-section section">
      <div class="container">
        <div class="cta-content">
          <h2>Ready to find bugs before they find you?</h2>
          <p>Start your free trial today and see what lurks in the shadows of your code.</p>
          <div class="cta-buttons">
            <router-link to="/signup" class="primary-btn">Start Free Trial</router-link>
            <router-link to="/documentation" class="secondary-btn">View Documentation</router-link>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'HomeView'
}
</script>

<style lang="scss" scoped>
/* Hero Section */
.hero {
  padding: 120px 0 80px;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at 30% 20%, rgba(124, 77, 255, 0.05) 0%, transparent 50%),
                radial-gradient(circle at 80% 40%, rgba(0, 229, 255, 0.05) 0%, transparent 50%);
    z-index: -1;
  }
}

.hero-content {
  display: flex;
  align-items: center;
  gap: 60px;
  margin-bottom: 80px;
  
  @media (max-width: $breakpoint-md) {
    flex-direction: column;
    gap: 40px;
    margin-bottom: 60px;
  }
}

.hero-text {
  flex: 1;
  
  h1 {
    margin-bottom: $spacing-md;
    font-size: 3.5rem;
    line-height: 1.1;
    background: $gradient-1;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    
    @media (max-width: $breakpoint-md) {
      font-size: 2.8rem;
    }
    
    @media (max-width: $breakpoint-sm) {
      font-size: 2.2rem;
    }
  }
}

.hero-description {
  font-size: 1.2rem;
  color: $muted-text;
  margin-bottom: $spacing-xl;
  
  @media (max-width: $breakpoint-sm) {
    font-size: 1.1rem;
  }
}

.hero-buttons {
  display: flex;
  gap: $spacing-md;
  
  @media (max-width: $breakpoint-sm) {
    flex-direction: column;
    width: 100%;
    
    a {
      width: 100%;
      text-align: center;
    }
  }
}

.hero-image {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

.code-window {
  width: 100%;
  max-width: 550px;
  background-color: $dark-accent;
  border-radius: $radius-lg;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3),
              0 0 0 1px rgba(255, 255, 255, 0.05),
              0 0 30px rgba(124, 77, 255, 0.2);
  transform: perspective(1000px) rotateY(-5deg) rotateX(5deg);
  transition: all 0.3s ease;
  
  &:hover {
    transform: perspective(1000px) rotateY(-2deg) rotateX(2deg) translateY(-5px);
    box-shadow: 0 25px 50px rgba(0, 0, 0, 0.4), 
                0 0 0 1px rgba(255, 255, 255, 0.05),
                0 0 40px rgba(124, 77, 255, 0.3);
  }
}

.code-header {
  display: flex;
  padding: 12px 20px;
  background-color: rgba(0, 0, 0, 0.2);
  align-items: center;
}

.code-dots {
  display: flex;
  gap: 6px;
  margin-right: 15px;
  
  span {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: rgba(255, 255, 255, 0.1);
    
    &:nth-child(1) {
      background-color: #ff5f56;
    }
    
    &:nth-child(2) {
      background-color: #ffbd2e;
    }
    
    &:nth-child(3) {
      background-color: #27c93f;
    }
  }
}

.code-title {
  font-size: 0.9rem;
  color: $muted-text;
  font-family: 'Fira Code', monospace;
}

.code-content {
  padding: 20px;
  overflow: auto;
  max-height: 400px;
  
  pre {
    margin: 0;
    padding: 0;
    background: transparent;
    
    code {
      font-family: 'Fira Code', monospace;
      font-size: 0.95rem;
      line-height: 1.6;
      color: $text-color;
    }
  }
  
  .highlight-error {
    background-color: rgba(255, 95, 86, 0.1);
    color: #ff5f56;
    border-radius: 3px;
    padding: 2px 5px;
    margin: 0 -5px;
  }
  
  .highlight-warning {
    background-color: rgba(255, 189, 46, 0.1);
    color: #ffbd2e;
    border-radius: 3px;
    padding: 2px 5px;
    margin: 0 -5px;
  }
  
  .highlight-success {
    background-color: rgba(39, 201, 63, 0.1);
    color: #27c93f;
    border-radius: 3px;
    padding: 2px 5px;
    margin: 0 -5px;
  }
}

.featured-logos {
  text-align: center;
  
  p {
    color: $muted-text;
    margin-bottom: $spacing-md;
    font-size: 0.95rem;
  }
  
  .logos {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 40px;
    flex-wrap: wrap;
    
    .logo-item {
      color: $muted-text;
      font-weight: 500;
    }
  }
}

/* Features Section */
.features {
  background-color: rgba(5, 8, 15, 0.5);
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at 70% 30%, rgba(124, 77, 255, 0.05) 0%, transparent 50%),
                radial-gradient(circle at 30% 70%, rgba(0, 229, 255, 0.05) 0%, transparent 50%);
    z-index: -1;
  }
}

.section-header {
  text-align: center;
  max-width: 700px;
  margin: 0 auto $spacing-xxl;
  
  h2 {
    background: $gradient-1;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin-bottom: $spacing-sm;
  }
  
  p {
    color: $muted-text;
    font-size: 1.2rem;
    
    @media (max-width: $breakpoint-sm) {
      font-size: 1.1rem;
    }
  }
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  
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

/* How It Works Section */
.steps {
  display: flex;
  flex-direction: column;
  gap: 50px;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 40px;
    width: 2px;
    background: linear-gradient(to bottom, $highlight, $secondary-highlight);
    z-index: -1;
    
    @media (max-width: $breakpoint-sm) {
      left: 30px;
    }
  }
}

.step {
  display: flex;
  gap: 30px;
  
  .step-number {
    width: 80px;
    height: 80px;
    background: linear-gradient(135deg, $highlight, $secondary-highlight);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.8rem;
    font-weight: 700;
    color: white;
    flex-shrink: 0;
    box-shadow: 0 5px 15px $shadow-color;
    
    @media (max-width: $breakpoint-sm) {
      width: 60px;
      height: 60px;
      font-size: 1.5rem;
    }
  }
  
  .step-content {
    padding-top: $spacing-sm;
    
    h3 {
      margin-bottom: $spacing-sm;
      font-size: 1.6rem;
      
      @media (max-width: $breakpoint-sm) {
        font-size: 1.4rem;
      }
    }
    
    p {
      color: $muted-text;
      font-size: 1.1rem;
      margin-bottom: 0;
      
      @media (max-width: $breakpoint-sm) {
        font-size: 1rem;
      }
    }
  }
}

/* Pricing Section */
.pricing-cards {
  display: flex;
  gap: 30px;
  justify-content: center;
  flex-wrap: wrap;
}

.pricing-card {
  background-color: $card-bg;
  border-radius: $radius-lg;
  padding: $spacing-lg;
  border: 1px solid $border-color;
  flex: 1;
  min-width: 280px;
  max-width: 350px;
  position: relative;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  }
  
  &.featured {
    border: 1px solid $highlight;
    box-shadow: 0 0 0 1px rgba(124, 77, 255, 0.2), 0 10px 30px rgba(0, 0, 0, 0.2);
    transform: translateY(-10px) scale(1.05);
    z-index: 1;
    
    &:hover {
      transform: translateY(-15px) scale(1.05);
    }
    
    .popular-tag {
      position: absolute;
      top: -15px;
      left: 50%;
      transform: translateX(-50%);
      background: linear-gradient(90deg, $highlight, $secondary-highlight);
      color: white;
      font-size: 0.8rem;
      font-weight: 600;
      padding: 5px 15px;
      border-radius: 20px;
    }
  }
}

.pricing-header {
  text-align: center;
  margin-bottom: $spacing-lg;
  
  h3 {
    font-size: 1.6rem;
    margin-bottom: $spacing-sm;
  }
  
  .price {
    font-size: 2.5rem;
    font-weight: 700;
    color: $highlight;
    
    span {
      font-size: 1rem;
      font-weight: 400;
      color: $muted-text;
    }
  }
}

.pricing-features {
  margin-bottom: $spacing-lg;
  
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    
    li {
      margin-bottom: $spacing-sm;
      color: $muted-text;
      position: relative;
      padding-left: 25px;
      
      &::before {
        content: '✓';
        position: absolute;
        left: 0;
        color: $highlight;
        font-weight: 700;
      }
    }
  }
}

.pricing-action {
  text-align: center;
  
  a {
    width: 100%;
    display: block;
    text-align: center;
  }
}

/* Testimonials Section */
.testimonials-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  
  @media (max-width: $breakpoint-md) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: $breakpoint-sm) {
    grid-template-columns: 1fr;
  }
}

.testimonial-card {
  background-color: $card-bg;
  border-radius: $radius-lg;
  padding: $spacing-lg;
  border: 1px solid $border-color;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
  }
}

.testimonial-content {
  margin-bottom: $spacing-md;
  
  p {
    font-size: 1.05rem;
    font-style: italic;
    margin-bottom: 0;
    position: relative;
    
    &::before, &::after {
      content: '"';
      color: $highlight;
      font-size: 1.5rem;
      font-weight: 700;
    }
  }
}

.testimonial-author {
  display: flex;
  align-items: center;
  
  .author-info {
    h4 {
      margin-bottom: 5px;
      font-size: 1.1rem;
    }
    
    p {
      color: $muted-text;
      font-size: 0.9rem;
      margin-bottom: 0;
    }
  }
}

/* CTA Section */
.cta-section {
  background: linear-gradient(to right, rgba(124, 77, 255, 0.1), rgba(0, 229, 255, 0.1));
  border-radius: $radius-lg;
  margin: 0 $spacing-md;
}

.cta-content {
  text-align: center;
  max-width: 700px;
  margin: 0 auto;
  
  h2 {
    font-size: 2.5rem;
    margin-bottom: $spacing-md;
    background: $gradient-1;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    
    @media (max-width: $breakpoint-md) {
      font-size: 2rem;
    }
    
    @media (max-width: $breakpoint-sm) {
      font-size: 1.8rem;
    }
  }
  
  p {
    color: $muted-text;
    font-size: 1.2rem;
    margin-bottom: $spacing-lg;
    
    @media (max-width: $breakpoint-sm) {
      font-size: 1.1rem;
    }
  }
}

.cta-buttons {
  display: flex;
  gap: $spacing-md;
  justify-content: center;
  
  @media (max-width: $breakpoint-sm) {
    flex-direction: column;
    width: 100%;
    
    a {
      width: 100%;
      text-align: center;
    }
  }
}
</style> 