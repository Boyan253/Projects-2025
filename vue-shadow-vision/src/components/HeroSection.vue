<template>
  <section id="hero" class="hero">
    <div class="container">
      <div class="hero-content" data-aos="fade-up">
        <h1 ref="heroHeading">The Future of <span class="gradient-text">Invisible</span> Code Analysis</h1>
        <p>Discover hidden bugs and vulnerabilities in your code before they become problems. ShadowVision uses AI to analyze your codebase like never before.</p>
        <div class="hero-cta">
          <router-link to="/#demo" class="primary-btn">See It In Action</router-link>
          <router-link to="/#pricing" class="secondary-btn">View Pricing</router-link>
        </div>
      </div>
      
      <div class="hero-image" data-aos="fade-left" data-aos-delay="200">
        <div class="code-block code-block-1">
          <pre><code>function analyzeCode() {
  shadowVision.scan();
  // Detect invisible bugs
}</code></pre>
        </div>
        <div class="code-block code-block-2">
          <pre><code>class BugDetector {
  constructor() {
    this.ai = new ShadowAI();
  }
}</code></pre>
        </div>
        <div class="shadow-image">
          <img src="@/assets/images/shadow-analyzer.png" alt="ShadowVision Code Analyzer" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { ref, onMounted } from 'vue'

export default {
  name: 'HeroSection',
  setup() {
    const heroHeading = ref(null)
    
    onMounted(() => {
      if (heroHeading.value) {
        // Store the original content with HTML tags
        const originalText = heroHeading.value.innerHTML
        // Clear the content
        heroHeading.value.innerHTML = ''
        
        // Create flash effect before typing
        const flash = document.createElement('div')
        flash.style.position = 'fixed'
        flash.style.top = '0'
        flash.style.left = '0'
        flash.style.width = '100%'
        flash.style.height = '100%'
        flash.style.background = 'rgba(124, 77, 255, 0.2)'
        flash.style.pointerEvents = 'none'
        flash.style.zIndex = '9999'
        flash.style.opacity = '0'
        document.body.appendChild(flash)
        
        // Function for typewriter effect that properly handles HTML tags
        const startTypewriter = () => {
          // Parse the HTML to separate tags from text content
          const parser = new DOMParser()
          const dom = parser.parseFromString(originalText, 'text/html')
          const elements = []
          
          // Process the DOM and separate text from tags
          const processNode = (node) => {
            if (node.nodeType === Node.TEXT_NODE) {
              // Text node - split into characters
              const chars = node.textContent.split('')
              chars.forEach(char => {
                elements.push({ type: 'text', content: char })
              })
            } else if (node.nodeType === Node.ELEMENT_NODE) {
              // Element node - add opening tag
              elements.push({ type: 'tag', content: node.outerHTML.match(/^<[^>]+>/)[0] })
              
              // Process children
              Array.from(node.childNodes).forEach(child => {
                processNode(child)
              })
              
              // Add closing tag
              elements.push({ type: 'tag', content: `</${node.tagName.toLowerCase()}>` })
            }
          }
          
          Array.from(dom.body.childNodes).forEach(node => {
            processNode(node)
          })
          
          // Type out the content
          let i = 0
          const typeNextElement = () => {
            if (i < elements.length) {
              const element = elements[i]
              
              if (element.type === 'text') {
                // Add text character by character
                heroHeading.value.innerHTML += element.content
              } else if (element.type === 'tag') {
                // Add complete HTML tags at once
                heroHeading.value.innerHTML += element.content
              }
              
              i++
              setTimeout(typeNextElement, 50)
            }
          }
          
          // Start typing
          typeNextElement()
        }
        
        // Flash animation then start typing
        setTimeout(() => {
          flash.style.transition = 'opacity 0.2s ease'
          flash.style.opacity = '1'
          
          setTimeout(() => {
            flash.style.opacity = '0'
            
            setTimeout(() => {
              document.body.removeChild(flash)
              startTypewriter() // Start typing after flash
            }, 200)
          }, 300)
        }, 500)
      }
    })
    
    return {
      heroHeading
    }
  }
}
</script>

<style lang="scss" scoped>
.hero {
  padding: 160px 0 100px;
  overflow: hidden;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: 
      radial-gradient(circle at 20% 30%, rgba(124, 77, 255, 0.1), transparent 40%),
      radial-gradient(circle at 80% 70%, rgba(0, 229, 255, 0.1), transparent 40%);
    z-index: -1;
  }
}

.container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
}

.hero-content {
  width: 50%;
  padding-right: 40px;
  
  h1 {
    margin-bottom: 20px;
  }
  
  p {
    font-size: 1.2rem;
    color: var(--muted-text);
    margin-bottom: 30px;
    max-width: 90%;
  }
}

.hero-cta {
  display: flex;
  margin-top: 40px;
  
  .primary-btn {
    margin-right: 20px;
  }
}

.gradient-text {
  background: var(--gradient-1);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
  display: inline-block;
}

.hero-image {
  width: 50%;
  position: relative;
  height: 400px;
}

.shadow-image {
  width: 80%;
  max-width: 400px;
  position: relative;
  z-index: 2;
  margin: 0 auto;
  transform-style: preserve-3d;
  perspective: 1000px;
  transition: transform 0.3s ease;
  
  img {
    width: 100%;
    height: auto;
    border-radius: 10px;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3), 
                0 0 30px rgba(124, 77, 255, 0.3);
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      45deg, 
      rgba(124, 77, 255, 0.2) 0%, 
      rgba(0, 229, 255, 0.2) 100%
    );
    border-radius: 10px;
    z-index: 1;
    pointer-events: none;
  }
}

.code-block {
  position: absolute;
  background: rgba(5, 8, 15, 0.8);
  border: 1px solid rgba(124, 77, 255, 0.3);
  border-radius: 8px;
  padding: 15px;
  font-family: 'Fira Code', monospace;
  font-size: 0.85rem;
  color: #e2e8f0;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2), 
              0 0 15px rgba(124, 77, 255, 0.2);
  width: 220px;
  z-index: 1;
  transition: transform 1s cubic-bezier(0.19, 1, 0.22, 1);
  
  pre {
    margin: 0;
    overflow: hidden;
  }
  
  code {
    display: block;
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      45deg, 
      rgba(124, 77, 255, 0.05) 0%, 
      rgba(0, 229, 255, 0.05) 100%
    );
    z-index: -1;
    border-radius: 8px;
  }
}

.code-block-1 {
  top: 30px;
  left: 0;
  transform: rotate(-5deg);
}

.code-block-2 {
  bottom: 30px;
  right: 0;
  transform: rotate(5deg);
}

/* Responsive styles */
@media (max-width: 992px) {
  .hero-content, .hero-image {
    width: 100%;
    padding-right: 0;
  }
  
  .hero-content {
    margin-bottom: 60px;
    text-align: center;
    
    p {
      margin: 0 auto 30px;
      max-width: 100%;
    }
  }
  
  .hero-cta {
    justify-content: center;
  }
  
  .hero-image {
    height: 350px;
  }
}

@media (max-width: 768px) {
  .hero {
    padding: 130px 0 80px;
  }
  
  .code-block {
    width: 180px;
    font-size: 0.75rem;
    padding: 12px;
  }
  
  .code-block-1 {
    top: 20px;
    left: 10px;
  }
  
  .code-block-2 {
    bottom: 20px;
    right: 10px;
  }
}

@media (max-width: 576px) {
  .hero {
    padding: 120px 0 60px;
  }
  
  .hero-image {
    height: 300px;
  }
  
  .shadow-image {
    width: 90%;
  }
  
  .code-block {
    width: 150px;
    font-size: 0.7rem;
    padding: 10px;
  }
  
  .code-block-1 {
    left: 5px;
  }
  
  .code-block-2 {
    right: 5px;
  }
}
</style> 