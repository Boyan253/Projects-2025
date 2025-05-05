<template>
  <div class="login">
    <div class="container">
      <div class="auth-container">
        <div class="auth-card">
          <div class="auth-header">
            <h1>Welcome Back</h1>
            <p>Sign in to your ShadowVision account</p>
          </div>
          
          <form class="auth-form" @submit.prevent="login">
            <div v-if="error" class="error-alert">
              {{ error }}
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
            </div>
            
            <div class="form-options">
              <label class="remember-me">
                <input type="checkbox" v-model="form.rememberMe">
                <span>Remember me</span>
              </label>
              
              <router-link to="/forgot-password" class="forgot-password">
                Forgot password?
              </router-link>
            </div>
            
            <button type="submit" class="submit-btn" :disabled="loading">
              <span v-if="loading">Signing in...</span>
              <span v-else>Sign In</span>
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
            <p>Don't have an account? <router-link to="/signup">Sign up</router-link></p>
          </div>
        </div>
        
        <div class="auth-features">
          <h2>Get More from ShadowVision</h2>
          <ul class="features-list">
            <li class="feature-item">
              <div class="feature-icon">📊</div>
              <div class="feature-text">
                <h3>Personalized Dashboard</h3>
                <p>Track your project metrics and code quality over time</p>
              </div>
            </li>
            <li class="feature-item">
              <div class="feature-icon">🔔</div>
              <div class="feature-text">
                <h3>Smart Notifications</h3>
                <p>Receive alerts about critical vulnerabilities in your code</p>
              </div>
            </li>
            <li class="feature-item">
              <div class="feature-icon">🚀</div>
              <div class="feature-text">
                <h3>Integration Management</h3>
                <p>Configure and manage your CI/CD pipeline integrations</p>
              </div>
            </li>
            <li class="feature-item">
              <div class="feature-icon">👥</div>
              <div class="feature-text">
                <h3>Team Collaboration</h3>
                <p>Invite team members and assign roles for better workflow</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginView',
  data() {
    return {
      form: {
        email: '',
        password: '',
        rememberMe: false
      },
      errors: {
        email: '',
        password: ''
      },
      error: '',
      loading: false,
      showPassword: false
    }
  },
  methods: {
    validateForm() {
      let isValid = true;
      this.errors = {
        email: '',
        password: ''
      };
      
      if (!this.form.email.trim()) {
        this.errors.email = 'Email is required';
        isValid = false;
      } else if (!this.validateEmail(this.form.email)) {
        this.errors.email = 'Please enter a valid email address';
        isValid = false;
      }
      
      if (!this.form.password.trim()) {
        this.errors.password = 'Password is required';
        isValid = false;
      }
      
      return isValid;
    },
    validateEmail(email) {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
    },
    login() {
      if (!this.validateForm()) {
        return;
      }
      
      this.loading = true;
      this.error = '';
      
      // Simulate API call for login
      setTimeout(() => {
        this.loading = false;
        
        // Demo credentials check - in a real app this would be handled by the backend
        if (this.form.email === 'demo@shadowvision.io' && this.form.password === 'demo123') {
          // Successful login - redirect to dashboard
          this.$router.push('/');
        } else {
          // Failed login
          this.error = 'Invalid email or password. Try demo@shadowvision.io / demo123';
        }
      }, 1500);
    }
  }
}
</script>

<style lang="scss" scoped>
.login {
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
  
  input[type="email"],
  input[type="password"],
  input[type="text"] {
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
  
  .form-options {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: $spacing-md;
    
    .remember-me {
      display: flex;
      align-items: center;
      
      input[type="checkbox"] {
        margin-right: $spacing-xs;
      }
      
      span {
        font-size: 0.9rem;
        color: $muted-text;
      }
    }
    
    .forgot-password {
      font-size: 0.9rem;
      color: $link-color;
      text-decoration: none;
      
      &:hover {
        text-decoration: underline;
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

.auth-features {
  align-self: center;
  
  h2 {
    font-size: 1.8rem;
    margin-bottom: $spacing-xl;
    color: $text-color;
    border-bottom: 1px solid $border-color;
    padding-bottom: $spacing-md;
  }
  
  .features-list {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  
  .feature-item {
    display: flex;
    margin-bottom: $spacing-lg;
    
    .feature-icon {
      font-size: 2rem;
      margin-right: $spacing-md;
    }
    
    .feature-text {
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
</style> 