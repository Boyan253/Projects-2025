<template>
  <div class="contact">
    <div class="container">
      <div class="section-header">
        <h1>Contact Us</h1>
        <p>Get in touch with the ShadowVision team</p>
      </div>
      
      <div class="contact-container">
        <div class="contact-info">
          <div class="info-card">
            <div class="info-icon">📧</div>
            <h3>Email Us</h3>
            <p>For general inquiries:</p>
            <a href="mailto:info@shadowvision.io">info@shadowvision.io</a>
            <p>For technical support:</p>
            <a href="mailto:support@shadowvision.io">support@shadowvision.io</a>
          </div>
          
          <div class="info-card">
            <div class="info-icon">📞</div>
            <h3>Call Us</h3>
            <p>Customer Service:</p>
            <a href="tel:+1-800-555-0123">+1 (800) 555-0123</a>
            <p>Technical Support:</p>
            <a href="tel:+1-800-555-0124">+1 (800) 555-0124</a>
          </div>
          
          <div class="info-card">
            <div class="info-icon">🌎</div>
            <h3>Visit Us</h3>
            <p>123 Tech Avenue</p>
            <p>Suite 400</p>
            <p>San Francisco, CA 94107</p>
            <p>United States</p>
          </div>
          
          <div class="info-card">
            <div class="info-icon">🔗</div>
            <h3>Connect With Us</h3>
            <div class="social-links">
              <a href="#" class="social-link">Twitter</a>
              <a href="#" class="social-link">LinkedIn</a>
              <a href="#" class="social-link">GitHub</a>
              <a href="#" class="social-link">YouTube</a>
            </div>
          </div>
        </div>
        
        <div class="contact-form-container">
          <h2>Send Us a Message</h2>
          <p>We'll get back to you as soon as possible</p>
          
          <form class="contact-form" @submit.prevent="submitForm">
            <div class="form-group">
              <label for="name">Name</label>
              <input 
                type="text" 
                id="name" 
                v-model="form.name" 
                :class="{ 'error': errors.name }"
                placeholder="Your name"
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
                placeholder="Your email address"
              >
              <span v-if="errors.email" class="error-message">{{ errors.email }}</span>
            </div>
            
            <div class="form-group">
              <label for="subject">Subject</label>
              <input 
                type="text" 
                id="subject" 
                v-model="form.subject" 
                :class="{ 'error': errors.subject }"
                placeholder="What is this regarding?"
              >
              <span v-if="errors.subject" class="error-message">{{ errors.subject }}</span>
            </div>
            
            <div class="form-group">
              <label for="message">Message</label>
              <textarea 
                id="message" 
                v-model="form.message" 
                :class="{ 'error': errors.message }"
                rows="5" 
                placeholder="Your message"
              ></textarea>
              <span v-if="errors.message" class="error-message">{{ errors.message }}</span>
            </div>
            
            <div class="form-group">
              <label class="checkbox-container">
                <input type="checkbox" v-model="form.newsletter">
                <span>Subscribe to our newsletter</span>
              </label>
            </div>
            
            <button type="submit" class="submit-btn" :disabled="submitting">
              <span v-if="submitting">Sending...</span>
              <span v-else>Send Message</span>
            </button>
            
            <div v-if="formSubmitted" class="success-message">
              Your message has been sent successfully! We'll get back to you soon.
            </div>
          </form>
        </div>
      </div>
      
      <div class="faq-section">
        <h2>Frequently Asked Questions</h2>
        
        <div class="faq-list">
          <div class="faq-item">
            <h3 class="faq-question" @click="toggleFaq(1)">
              How quickly can I expect a response?
              <span class="faq-toggle">{{ expandedFaq === 1 ? '−' : '+' }}</span>
            </h3>
            <div class="faq-answer" :class="{ 'expanded': expandedFaq === 1 }">
              <p>We aim to respond to all inquiries within 24 hours during business days. For urgent technical issues, please use the "Technical Support" email or phone number for faster assistance.</p>
            </div>
          </div>
          
          <div class="faq-item">
            <h3 class="faq-question" @click="toggleFaq(2)">
              Do you offer demos of ShadowVision?
              <span class="faq-toggle">{{ expandedFaq === 2 ? '−' : '+' }}</span>
            </h3>
            <div class="faq-answer" :class="{ 'expanded': expandedFaq === 2 }">
              <p>Yes, we offer personalized demos for teams interested in ShadowVision. Please contact our sales team through this form, selecting "Demo Request" as the subject, and we'll arrange a time that works for you.</p>
            </div>
          </div>
          
          <div class="faq-item">
            <h3 class="faq-question" @click="toggleFaq(3)">
              What are your support hours?
              <span class="faq-toggle">{{ expandedFaq === 3 ? '−' : '+' }}</span>
            </h3>
            <div class="faq-answer" :class="{ 'expanded': expandedFaq === 3 }">
              <p>Our support team is available Monday through Friday, 9:00 AM to 8:00 PM Eastern Time. Weekend support is available for enterprise customers.</p>
            </div>
          </div>
          
          <div class="faq-item">
            <h3 class="faq-question" @click="toggleFaq(4)">
              Do you offer on-site training?
              <span class="faq-toggle">{{ expandedFaq === 4 ? '−' : '+' }}</span>
            </h3>
            <div class="faq-answer" :class="{ 'expanded': expandedFaq === 4 }">
              <p>Yes, we offer on-site training for teams of 10 or more. We also provide virtual training sessions for teams of any size. Contact us for more information about our training programs.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContactView',
  data() {
    return {
      form: {
        name: '',
        email: '',
        subject: '',
        message: '',
        newsletter: false
      },
      errors: {
        name: '',
        email: '',
        subject: '',
        message: ''
      },
      submitting: false,
      formSubmitted: false,
      expandedFaq: null
    }
  },
  methods: {
    validateForm() {
      let isValid = true;
      this.errors = {
        name: '',
        email: '',
        subject: '',
        message: ''
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
      
      if (!this.form.subject.trim()) {
        this.errors.subject = 'Subject is required';
        isValid = false;
      }
      
      if (!this.form.message.trim()) {
        this.errors.message = 'Message is required';
        isValid = false;
      } else if (this.form.message.trim().length < 10) {
        this.errors.message = 'Message must be at least 10 characters';
        isValid = false;
      }
      
      return isValid;
    },
    validateEmail(email) {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
    },
    submitForm() {
      if (!this.validateForm()) {
        return;
      }
      
      this.submitting = true;
      
      // Simulate API call
      setTimeout(() => {
        this.submitting = false;
        this.formSubmitted = true;
        
        // Reset form after submission
        this.form = {
          name: '',
          email: '',
          subject: '',
          message: '',
          newsletter: false
        };
        
        // Reset submission status after 5 seconds
        setTimeout(() => {
          this.formSubmitted = false;
        }, 5000);
      }, 1500);
    },
    toggleFaq(id) {
      this.expandedFaq = this.expandedFaq === id ? null : id;
    }
  }
}
</script>

<style lang="scss" scoped>
.contact {
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

.contact-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;
  margin-bottom: $spacing-xxl;
  
  @media (max-width: $breakpoint-md) {
    grid-template-columns: 1fr;
  }
}

.contact-info {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
  
  @media (max-width: $breakpoint-sm) {
    grid-template-columns: 1fr;
  }
}

.info-card {
  background: $card-bg;
  border-radius: $radius-lg;
  padding: $spacing-lg;
  border: 1px solid $border-color;
  
  .info-icon {
    font-size: 2rem;
    margin-bottom: $spacing-md;
  }
  
  h3 {
    margin-bottom: $spacing-md;
    font-size: 1.2rem;
  }
  
  p {
    margin-bottom: $spacing-xs;
    color: $muted-text;
  }
  
  a {
    display: block;
    margin-bottom: $spacing-md;
    color: $link-color;
    text-decoration: none;
    
    &:hover {
      text-decoration: underline;
    }
  }
  
  .social-links {
    display: flex;
    flex-wrap: wrap;
    gap: $spacing-sm;
    
    .social-link {
      display: inline-block;
      padding: 5px 10px;
      background: rgba(124, 77, 255, 0.1);
      color: $highlight;
      border-radius: $radius-sm;
      margin-bottom: $spacing-xs;
      
      &:hover {
        background: rgba(124, 77, 255, 0.2);
        text-decoration: none;
      }
    }
  }
}

.contact-form-container {
  background: $card-bg;
  border-radius: $radius-lg;
  padding: $spacing-xl;
  border: 1px solid $border-color;
  
  h2 {
    margin-bottom: $spacing-xs;
    font-size: 1.5rem;
  }
  
  > p {
    margin-bottom: $spacing-lg;
    color: $muted-text;
  }
}

.contact-form {
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
  textarea {
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
  
  .checkbox-container {
    display: flex;
    align-items: center;
    
    input[type="checkbox"] {
      margin-right: $spacing-xs;
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
  
  .success-message {
    margin-top: $spacing-md;
    padding: $spacing-md;
    background: rgba(39, 174, 96, 0.1);
    color: #27ae60;
    border-radius: $radius-md;
    text-align: center;
  }
}

.faq-section {
  h2 {
    font-size: 1.8rem;
    margin-bottom: $spacing-xl;
    text-align: center;
  }
}

.faq-list {
  max-width: 800px;
  margin: 0 auto;
}

.faq-item {
  margin-bottom: $spacing-md;
  border: 1px solid $border-color;
  border-radius: $radius-md;
  overflow: hidden;
}

.faq-question {
  padding: $spacing-md;
  background: $card-bg;
  margin: 0;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.1rem;
  
  .faq-toggle {
    font-size: 1.5rem;
    font-weight: 300;
  }
}

.faq-answer {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease, padding 0.3s ease;
  
  &.expanded {
    max-height: 300px;
    padding: $spacing-md;
    border-top: 1px solid $border-color;
  }
  
  p {
    margin: 0;
    color: $muted-text;
    line-height: 1.6;
  }
}
</style> 