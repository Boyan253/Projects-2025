<template>
  <div class="signup">
    <div class="container">
      <div class="auth-container">
        <div class="auth-card">
          <div class="auth-header">
            <h1>Create Your Account</h1>
            <p>Join ShadowVision and start finding hidden bugs</p>
          </div>
          
          <form class="auth-form" @submit.prevent="register">
            <div v-if="error" class="error-alert">
              {{ error }}
            </div>
            
            <div class="form-group">
              <label for="name">Full Name</label>
              <input 
                type="text" 
                id="name" 
                v-model="form.name"
                :class="{ 'error': errors.name }"
                placeholder="Your full name"
                required
              >
              <span v-if="errors.name" class="error-message">{{ errors.name }}</span>
            </div>
            
            <div class="form-group">
              <label for="email">Email</label>
              <input 
                type="email" 
                id="email" 
                v-model="form.email"
                :class="{ 'error': errors.email }"
                placeholder="your@email.com"
                required
              >
              <span v-if="errors.email" class="error-message">{{ errors.email }}</span>
            </div>
            
            <div class="form-group">
              <label for="password">Password</label>
              <div class="password-input">
                <input 
                  :type="showPassword ? 'text' : 'password'" 
                  id="password" 
                  v-model="form.password"
                  :class="{ 'error': errors.password }"
                  placeholder="••••••••"
                  required
                >
                <button 
                  type="button" 
                  class="password-toggle" 
                  @click="showPassword = !showPassword"
                >
                  {{ showPassword ? 'Hide' : 'Show' }}
                </button>
              </div>
              <span v-if="errors.password" class="error-message">{{ errors.password }}</span>
              <div class="password-strength" v-if="form.password">
                <div class="strength-meter">
                  <div 
                    class="strength-value" 
                    :style="{ width: passwordStrength + '%' }"
                    :class="passwordStrengthClass"
                  ></div>
                </div>
                <span class="strength-text">{{ passwordStrengthText }}</span>
              </div>
            </div>
            
            <div class="form-group">
              <label for="confirmPassword">Confirm Password</label>
              <input 
                type="password" 
                id="confirmPassword" 
                v-model="form.confirmPassword"
                :class="{ 'error': errors.confirmPassword }"
                placeholder="••••••••"
                required
              >
              <span v-if="errors.confirmPassword" class="error-message">{{ errors.confirmPassword }}</span>
            </div>
            
            <div class="form-group">
              <label class="checkbox-container">
                <input type="checkbox" v-model="form.terms" required>
                <span>I agree to the <a href="#" @click.prevent="showTerms = true">Terms of Service</a> and <a href="#" @click.prevent="showPrivacy = true">Privacy Policy</a></span>
              </label>
              <span v-if="errors.terms" class="error-message">{{ errors.terms }}</span>
            </div>
            
            <div class="form-group">
              <label class="checkbox-container">
                <input type="checkbox" v-model="form.newsletter">
                <span>Subscribe to our newsletter for updates and tips</span>
              </label>
            </div>
            
            <button type="submit" class="submit-btn" :disabled="loading">
              <span v-if="loading">Creating account...</span>
              <span v-else>Create Account</span>
            </button>
          </form>
          
          <div class="divider">
            <span>or continue with</span>
          </div>
          
          <div class="social-auth">
            <button class="social-btn github">
              <span class="icon">GitHub</span>
            </button>
            <button class="social-btn google">
              <span class="icon">Google</span>
            </button>
            <button class="social-btn microsoft">
              <span class="icon">Microsoft</span>
            </button>
          </div>
          
          <div class="auth-footer">
            <p>Already have an account? <router-link to="/login">Sign in</router-link></p>
          </div>
        </div>
        
        <div class="auth-benefits">
          <h2>Why Choose ShadowVision?</h2>
          <ul class="benefits-list">
            <li class="benefit-item">
              <div class="benefit-icon">✅</div>
              <div class="benefit-text">
                <h3>Free Trial, No Credit Card Required</h3>
                <p>Try all features free for 14 days with no commitments</p>
              </div>
            </li>
            <li class="benefit-item">
              <div class="benefit-icon">🔍</div>
              <div class="benefit-text">
                <h3>Deep AI-Powered Analysis</h3>
                <p>Find issues traditional tools miss with our advanced algorithms</p>
              </div>
            </li>
            <li class="benefit-item">
              <div class="benefit-icon">⚡</div>
              <div class="benefit-text">
                <h3>Fast, Incremental Scans</h3>
                <p>Only analyze what changed for lightning-fast feedback</p>
              </div>
            </li>
            <li class="benefit-item">
              <div class="benefit-icon">🚀</div>
              <div class="benefit-text">
                <h3>Easy Integration</h3>
                <p>Works with GitHub, GitLab, Bitbucket, and all major CI systems</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      
      <!-- Terms of Service Modal -->
      <div v-if="showTerms" class="modal">
        <div class="modal-content">
          <div class="modal-header">
            <h2>Terms of Service</h2>
            <button class="modal-close" @click="showTerms = false">&times;</button>
          </div>
          <div class="modal-body">
            <p>These Terms of Service govern your use of the ShadowVision platform.</p>
            <p>By using our services, you agree to these terms. Please read them carefully.</p>
            <!-- More terms content would go here -->
          </div>
          <div class="modal-footer">
            <button class="btn" @click="showTerms = false">Close</button>
          </div>
        </div>
      </div>
      
      <!-- Privacy Policy Modal -->
      <div v-if="showPrivacy" class="modal">
        <div class="modal-content">
          <div class="modal-header">
            <h2>Privacy Policy</h2>
            <button class="modal-close" @click="showPrivacy = false">&times;</button>
          </div>
          <div class="modal-body">
            <p>This Privacy Policy describes how we collect, use, and protect your information.</p>
            <p>We take your privacy seriously and only use your data as described in this policy.</p>
            <!-- More privacy content would go here -->
          </div>
          <div class="modal-footer">
            <button class="btn" @click="showPrivacy = false">Close</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SignUpView',
  data() {
    return {
      form: {
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        terms: false,
        newsletter: false
      },
      errors: {
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        terms: ''
      },
      error: '',
      loading: false,
      showPassword: false,
      showTerms: false,
      showPrivacy: false
    }
  },
  computed: {
    passwordStrength() {
      if (!this.form.password) return 0;
      
      const password = this.form.password;
      let score = 0;
      
      // Length check
      if (password.length >= 8) score += 20;
      if (password.length >= 12) score += 10;
      
      // Complexity checks
      if (/[A-Z]/.test(password)) score += 20; // Has uppercase
      if (/[a-z]/.test(password)) score += 15; // Has lowercase
      if (/[0-9]/.test(password)) score += 15; // Has number
      if (/[^A-Za-z0-9]/.test(password)) score += 20; // Has special char
      
      return Math.min(score, 100);
    },
    passwordStrengthClass() {
      if (this.passwordStrength < 30) return 'weak';
      if (this.passwordStrength < 60) return 'medium';
      return 'strong';
    },
    passwordStrengthText() {
      if (this.passwordStrength < 30) return 'Weak';
      if (this.passwordStrength < 60) return 'Medium';
      if (this.passwordStrength < 80) return 'Strong';
      return 'Very Strong';
    }
  },
  methods: {
    validateForm() {
      let isValid = true;
      this.errors = {
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        terms: ''
      };
      
      if (!this.form.name.trim()) {
        this.errors.name = 'Name is required';
        isValid = false;
      }
      
      if (!this.form.email.trim()) {
        this.errors.email = 'Email is required';
        isValid = false;
      } else if (!this.validateEmail(this.form.email)) {
        this.errors.email = 'Please enter a valid email address';
        isValid = false;
      }
      
      if (!this.form.password) {
        this.errors.password = 'Password is required';
        isValid = false;
      } else if (this.form.password.length < 8) {
        this.errors.password = 'Password must be at least 8 characters';
        isValid = false;
      } else if (this.passwordStrength < 30) {
        this.errors.password = 'Password is too weak';
        isValid = false;
      }
      
      if (!this.form.confirmPassword) {
        this.errors.confirmPassword = 'Please confirm your password';
        isValid = false;
      } else if (this.form.password !== this.form.confirmPassword) {
        this.errors.confirmPassword = 'Passwords do not match';
        isValid = false;
      }
      
      if (!this.form.terms) {
        this.errors.terms = 'You must agree to the terms of service';
        isValid = false;
      }
      
      return isValid;
    },
    validateEmail(email) {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
    },
    register() {
      if (!this.validateForm()) {
        return;
      }
      
      this.loading = true;
      this.error = '';
      
      // Simulate API call for registration
      setTimeout(() => {
        this.loading = false;
        
        // In a real app, you would send the form data to your API
        console.log('Registration form submitted:', this.form);
        
        // Redirect to success page or login
        this.$router.push('/');
      }, 1500);
    }
  }
}
</script>

<style lang="scss" scoped>
.signup {
  padding: 100px 0;
}

.auth-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;
  max-width: 1000px;
  margin: 0 auto;
  
  @media (max-width: $breakpoint-md) {
    grid-template-columns: 1fr;
  }
}

.auth-card {
  background: $card-bg;
  border-radius: $radius-lg;
  padding: $spacing-xl;
  border: 1px solid $border-color;
}

.auth-header {
  text-align: center;
  margin-bottom: $spacing-xl;
  
  h1 {
    font-size: 2rem;
    margin-bottom: $spacing-xs;
  }
  
  p {
    color: $muted-text;
  }
}

.auth-form {
  .form-group {
    margin-bottom: $spacing-md;
  }
  
  label {
    display: block;
    margin-bottom: $spacing-xs;
    font-weight: 500;
  }
  
  input[type="text"],
  input[type="email"],
  input[type="password"] {
    width: 100%;
    padding: $spacing-sm $spacing-md;
    border-radius: $radius-md;
    border: 1px solid $border-color;
    background: $input-bg;
    color: $text-color;
    font-size: 1rem;
    
    &:focus {
      outline: none;
      border-color: $highlight;
    }
    
    &.error {
      border-color: $error-color;
    }
  }
  
  .error-message {
    display: block;
    color: $error-color;
    font-size: 0.85rem;
    margin-top: 5px;
  }
  
  .error-alert {
    background: rgba(255, 77, 77, 0.1);
    color: $error-color;
    padding: $spacing-md;
    border-radius: $radius-md;
    margin-bottom: $spacing-md;
    text-align: center;
  }
  
  .password-input {
    position: relative;
    
    .password-toggle {
      position: absolute;
      right: 10px;
      top: 50%;
      transform: translateY(-50%);
      background: none;
      border: none;
      color: $muted-text;
      cursor: pointer;
      font-size: 0.85rem;
      
      &:hover {
        color: $highlight;
      }
    }
  }
  
  .password-strength {
    margin-top: $spacing-xs;
    
    .strength-meter {
      height: 5px;
      background: $border-color;
      border-radius: 5px;
      margin-bottom: 5px;
      
      .strength-value {
        height: 100%;
        border-radius: 5px;
        
        &.weak { background-color: #ff4d4d; }
        &.medium { background-color: #ffa64d; }
        &.strong { background-color: #2ecc71; }
      }
    }
    
    .strength-text {
      font-size: 0.8rem;
      color: $muted-text;
    }
  }
  
  .checkbox-container {
    display: flex;
    align-items: flex-start;
    
    input[type="checkbox"] {
      margin-right: $spacing-xs;
      margin-top: 4px;
    }
    
    span {
      font-size: 0.9rem;
      color: $muted-text;
      
      a {
        color: $link-color;
        text-decoration: none;
        
        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
  
  .submit-btn {
    width: 100%;
    padding: $spacing-md;
    background: $highlight;
    color: white;
    border: none;
    border-radius: $radius-md;
    font-size: 1rem;
    cursor: pointer;
    transition: background 0.2s ease;
    margin-top: $spacing-md;
    
    &:hover {
      background: darken($highlight, 10%);
    }
    
    &:disabled {
      background: darken($highlight, 20%);
      cursor: not-allowed;
    }
  }
}

.divider {
  display: flex;
  align-items: center;
  margin: $spacing-xl 0;
  
  &::before, &::after {
    content: '';
    flex: 1;
    height: 1px;
    background: $border-color;
  }
  
  span {
    padding: 0 $spacing-sm;
    color: $muted-text;
    font-size: 0.9rem;
  }
}

.social-auth {
  display: flex;
  justify-content: center;
  gap: $spacing-md;
  margin-bottom: $spacing-xl;
  
  .social-btn {
    flex: 1;
    padding: $spacing-sm 0;
    border-radius: $radius-md;
    border: 1px solid $border-color;
    background: $card-bg;
    cursor: pointer;
    transition: all 0.2s ease;
    
    &:hover {
      background: darken($card-bg, 5%);
    }
    
    &.github {
      color: #24292e;
    }
    
    &.google {
      color: #ea4335;
    }
    
    &.microsoft {
      color: #0078d4;
    }
  }
}

.auth-footer {
  text-align: center;
  
  p {
    color: $muted-text;
    font-size: 0.95rem;
    
    a {
      color: $link-color;
      text-decoration: none;
      
      &:hover {
        text-decoration: underline;
      }
    }
  }
}

.auth-benefits {
  align-self: center;
  
  h2 {
    font-size: 1.8rem;
    margin-bottom: $spacing-xl;
    color: $text-color;
    border-bottom: 1px solid $border-color;
    padding-bottom: $spacing-md;
  }
  
  .benefits-list {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  
  .benefit-item {
    display: flex;
    margin-bottom: $spacing-lg;
    
    .benefit-icon {
      font-size: 2rem;
      margin-right: $spacing-md;
    }
    
    .benefit-text {
      h3 {
        margin-bottom: $spacing-xs;
        font-size: 1.2rem;
      }
      
      p {
        color: $muted-text;
        font-size: 0.95rem;
      }
    }
  }
  
  @media (max-width: $breakpoint-md) {
    display: none;
  }
}

.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.modal-content {
  background: $card-bg;
  border-radius: $radius-lg;
  width: 90%;
  max-width: 600px;
  max-height: 80vh;
  overflow: auto;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
}

.modal-header {
  padding: $spacing-md;
  border-bottom: 1px solid $border-color;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  h2 {
    margin: 0;
    font-size: 1.5rem;
  }
  
  .modal-close {
    background: none;
    border: none;
    font-size: 1.5rem;
    cursor: pointer;
    color: $muted-text;
    
    &:hover {
      color: $text-color;
    }
  }
}

.modal-body {
  padding: $spacing-lg;
  overflow-y: auto;
  max-height: 50vh;
  
  p {
    margin-bottom: $spacing-md;
    line-height: 1.6;
  }
}

.modal-footer {
  padding: $spacing-md;
  border-top: 1px solid $border-color;
  text-align: right;
  
  .btn {
    padding: $spacing-xs $spacing-lg;
    background: $highlight;
    color: white;
    border: none;
    border-radius: $radius-md;
    cursor: pointer;
    
    &:hover {
      background: darken($highlight, 10%);
    }
  }
}
</style> 