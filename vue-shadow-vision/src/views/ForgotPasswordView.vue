<template>
  <div class="auth-container">
    <div class="auth-card">
      <div class="auth-header">
        <h2>Reset Password</h2>
        <p>Enter your email to receive a password reset link</p>
      </div>
      
      <form @submit.prevent="handleSubmit">
        <div class="form-group">
          <label for="email">Email Address</label>
          <input 
            type="email" 
            id="email" 
            v-model="email" 
            required
            placeholder="your@email.com"
            autocomplete="email"
          >
        </div>
        
        <button type="submit" class="primary-btn auth-btn" :disabled="isLoading">
          <span v-if="isLoading">
            <span class="loading-spinner"></span>
            Sending...
          </span>
          <span v-else>Send Reset Link</span>
        </button>
      </form>
      
      <div v-if="submitted" class="success-message">
        <p>If an account exists with this email, you'll receive a password reset link shortly.</p>
      </div>
      
      <div class="auth-footer">
        <p>Remember your password? <router-link to="/signin">Sign in</router-link></p>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'ForgotPasswordView',
  setup() {
    const email = ref('')
    const isLoading = ref(false)
    const submitted = ref(false)
    
    const handleSubmit = () => {
      isLoading.value = true
      
      // Simulate API call
      setTimeout(() => {
        isLoading.value = false
        submitted.value = true
        
        // Handle password reset logic here
        console.log('Password reset requested for:', email.value)
      }, 1500)
    }
    
    return {
      email,
      isLoading,
      submitted,
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

.success-message {
  margin-top: 25px;
  padding: 15px;
  background: rgba(52, 168, 83, 0.1);
  border-radius: 6px;
  border-left: 3px solid #34A853;
  
  p {
    color: var(--text-color);
    font-size: 0.95rem;
    margin: 0;
  }
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
}
</style> 