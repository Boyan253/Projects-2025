<template>
  <div class="auth-container">
    <div class="auth-card">
      <div class="auth-header">
        <h2>Sign In</h2>
        <p>Welcome back to ShadowVision</p>
      </div>
      
      <form @submit.prevent="handleSubmit">
        <div class="form-group">
          <label for="email">Email</label>
          <input 
            type="email" 
            id="email" 
            v-model="email" 
            required
            placeholder="your@email.com"
            autocomplete="email"
          >
        </div>
        
        <div class="form-group">
          <label for="password">Password</label>
          <div class="password-input">
            <input 
              :type="showPassword ? 'text' : 'password'" 
              id="password" 
              v-model="password" 
              required
              placeholder="Your password"
              autocomplete="current-password"
            >
            <button 
              type="button" 
              class="toggle-password" 
              @click="showPassword = !showPassword"
              :aria-label="showPassword ? 'Hide password' : 'Show password'"
            >
              <span v-if="showPassword">Hide</span>
              <span v-else>Show</span>
            </button>
          </div>
        </div>
        
        <div class="form-options">
          <label class="checkbox-container">
            <input type="checkbox" v-model="rememberMe">
            <span class="checkmark"></span>
            Remember me
          </label>
          
          <router-link to="/forgot-password" class="forgot-password">Forgot password?</router-link>
        </div>
        
        <button type="submit" class="primary-btn auth-btn" :disabled="isLoading">
          <span v-if="isLoading">
            <span class="loading-spinner"></span>
            Signing in...
          </span>
          <span v-else>Sign In</span>
        </button>
      </form>
      
      <div class="auth-divider">
        <span>OR</span>
      </div>
      
      <div class="social-auth">
        <button class="social-btn google-btn">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19.8055 10.2252C19.8055 9.51636 19.7414 8.83636 19.6234 8.18182H10.2055V11.9455H15.6234C15.3873 13.1636 14.6873 14.1818 13.6691 14.8455V17.2909H16.9055C18.8055 15.5727 19.8055 13.1 19.8055 10.2252Z" fill="#4285F4"/>
            <path d="M10.2054 20C12.9509 20 15.2691 19.1182 16.9054 17.2909L13.6691 14.8455C12.7782 15.4364 11.6145 15.7818 10.2054 15.7818C7.58727 15.7818 5.37636 14.0455 4.58727 11.7H1.24182V14.2182C2.86545 17.5909 6.26545 20 10.2054 20Z" fill="#34A853"/>
            <path d="M4.58727 11.7C4.39091 11.1091 4.28182 10.4818 4.28182 9.82727C4.28182 9.17273 4.39091 8.54545 4.58727 7.95455V5.43636H1.24182C0.56 6.74545 0.150909 8.25455 0.150909 9.82727C0.150909 11.4 0.56 12.9091 1.24182 14.2182L4.58727 11.7Z" fill="#FBBC05"/>
            <path d="M10.2054 3.87273C11.7236 3.87273 13.0873 4.36364 14.1509 5.36364L17.0145 2.5C15.2691 0.954545 12.9509 0 10.2054 0C6.26545 0 2.86545 2.40909 1.24182 5.78182L4.58727 8.3C5.37636 5.95455 7.58727 3.87273 10.2054 3.87273Z" fill="#EA4335"/>
          </svg>
          Continue with Google
        </button>
        
        <button class="social-btn github-btn">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M10 0C4.477 0 0 4.477 0 10C0 14.418 2.865 18.167 6.839 19.489C7.339 19.582 7.521 19.271 7.521 19.007C7.521 18.768 7.512 18.003 7.509 17.167C4.726 17.772 4.139 15.888 4.139 15.888C3.685 14.733 3.029 14.423 3.029 14.423C2.121 13.803 3.098 13.815 3.098 13.815C4.101 13.887 4.629 14.85 4.629 14.85C5.521 16.37 6.97 15.936 7.539 15.68C7.631 15.033 7.889 14.598 8.175 14.348C5.955 14.098 3.62 13.244 3.62 9.429C3.62 8.342 4.01 7.454 4.649 6.761C4.546 6.508 4.203 5.497 4.747 4.126C4.747 4.126 5.587 3.858 7.499 5.143C8.294 4.923 9.15 4.813 10 4.81C10.85 4.813 11.705 4.923 12.502 5.143C14.412 3.858 15.251 4.126 15.251 4.126C15.797 5.497 15.453 6.508 15.351 6.761C15.989 7.454 16.379 8.342 16.379 9.429C16.379 13.255 14.04 14.095 11.813 14.342C12.172 14.648 12.492 15.255 12.492 16.177C12.492 17.496 12.479 18.676 12.479 19.007C12.479 19.273 12.659 19.586 13.167 19.488C17.137 18.163 20 14.417 20 10C20 4.477 15.523 0 10 0Z" fill="white"/>
          </svg>
          Continue with GitHub
        </button>
      </div>
      
      <div class="auth-footer">
        <p>Don't have an account? <router-link to="/signup">Sign up</router-link></p>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'SignInForm',
  setup() {
    const email = ref('')
    const password = ref('')
    const rememberMe = ref(false)
    const showPassword = ref(false)
    const isLoading = ref(false)
    
    const handleSubmit = () => {
      isLoading.value = true
      
      // Simulate API call
      setTimeout(() => {
        isLoading.value = false
        // Handle login logic here
        console.log('Login attempt with:', {
          email: email.value,
          password: password.value,
          rememberMe: rememberMe.value
        })
      }, 1500)
    }
    
    return {
      email,
      password,
      rememberMe,
      showPassword,
      isLoading,
      handleSubmit
    }
  }
}
</script>

<style lang="scss" scoped>
.auth-container {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 100px 20px;
  background: var(--dark-bg);
  background-image: 
    radial-gradient(circle at 10% 20%, rgba(20, 30, 48, 0.7) 0%, transparent 50%),
    radial-gradient(circle at 80% 30%, rgba(30, 41, 59, 0.6) 0%, transparent 50%);
}

.auth-card {
  width: 100%;
  max-width: 450px;
  background: rgba(8, 12, 21, 0.6);
  border: 1px solid rgba(124, 77, 255, 0.2);
  border-radius: 12px;
  padding: 40px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2),
              0 0 30px rgba(124, 77, 255, 0.2);
  backdrop-filter: blur(10px);
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: -5px;
    left: -5px;
    right: -5px;
    bottom: -5px;
    background: linear-gradient(45deg, rgba(124, 77, 255, 0.1), rgba(0, 229, 255, 0.1));
    border-radius: 14px;
    z-index: -1;
    pointer-events: none;
  }
}

.auth-header {
  text-align: center;
  margin-bottom: 40px;
  
  h2 {
    font-size: 2rem;
    margin-bottom: 10px;
    background: var(--gradient-1);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    display: inline-block;
  }
  
  p {
    color: var(--muted-text);
  }
}

.form-group {
  margin-bottom: 25px;
  
  label {
    display: block;
    margin-bottom: 8px;
    font-weight: 500;
    color: var(--text-color);
  }
  
  input {
    width: 100%;
    padding: 12px 15px;
    border: 1px solid rgba(124, 77, 255, 0.3);
    border-radius: 6px;
    background: rgba(5, 8, 15, 0.5);
    color: var(--text-color);
    font-size: 1rem;
    transition: all 0.3s ease;
    
    &:focus {
      outline: none;
      border-color: var(--highlight);
      box-shadow: 0 0 0 2px rgba(124, 77, 255, 0.2);
    }
    
    &::placeholder {
      color: rgba(148, 163, 184, 0.5);
    }
  }
}

.password-input {
  position: relative;
  
  input {
    padding-right: 60px;
  }
  
  .toggle-password {
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    background: transparent;
    border: none;
    color: var(--muted-text);
    font-size: 0.85rem;
    cursor: pointer;
    padding: 5px;
    
    &:hover {
      color: var(--highlight);
    }
  }
}

.form-options {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
}

.checkbox-container {
  display: flex;
  align-items: center;
  position: relative;
  padding-left: 30px;
  cursor: pointer;
  font-size: 0.9rem;
  color: var(--muted-text);
  
  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
    
    &:checked ~ .checkmark {
      background: var(--gradient-1);
      
      &:after {
        display: block;
      }
    }
  }
  
  .checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 20px;
    width: 20px;
    background-color: rgba(5, 8, 15, 0.5);
    border: 1px solid rgba(124, 77, 255, 0.3);
    border-radius: 4px;
    
    &:after {
      content: "";
      position: absolute;
      display: none;
      left: 7px;
      top: 3px;
      width: 5px;
      height: 10px;
      border: solid white;
      border-width: 0 2px 2px 0;
      transform: rotate(45deg);
    }
  }
}

.forgot-password {
  color: var(--highlight);
  text-decoration: none;
  font-size: 0.9rem;
  
  &:hover {
    text-decoration: underline;
  }
}

.auth-btn {
  width: 100%;
  padding: 14px;
  font-size: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
}

.loading-spinner {
  display: inline-block;
  width: 16px;
  height: 16px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  border-top-color: white;
  animation: spin 1s linear infinite;
  margin-right: 10px;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

.auth-divider {
  display: flex;
  align-items: center;
  margin: 30px 0;
  
  &::before, &::after {
    content: '';
    flex: 1;
    height: 1px;
    background: rgba(148, 163, 184, 0.2);
  }
  
  span {
    padding: 0 15px;
    color: var(--muted-text);
    font-size: 0.85rem;
  }
}

.social-auth {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.social-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 12px;
  border-radius: 6px;
  font-size: 0.95rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  border: none;
  
  svg {
    margin-right: 10px;
  }
  
  &:hover {
    transform: translateY(-2px);
  }
}

.google-btn {
  background: white;
  color: #333;
}

.github-btn {
  background: #333;
  color: white;
}

.auth-footer {
  margin-top: 30px;
  text-align: center;
  
  p {
    color: var(--muted-text);
    font-size: 0.95rem;
    
    a {
      color: var(--highlight);
      text-decoration: none;
      
      &:hover {
        text-decoration: underline;
      }
    }
  }
}

/* Responsive styles */
@media (max-width: 576px) {
  .auth-card {
    padding: 25px;
  }
  
  .auth-header h2 {
    font-size: 1.8rem;
  }
  
  .form-options {
    flex-direction: column;
    align-items: flex-start;
    gap: 15px;
  }
  
  .checkbox-container {
    margin-bottom: 5px;
  }
}
</style> 