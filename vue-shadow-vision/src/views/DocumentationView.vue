<template>
  <div class="documentation">
    <div class="container">
      <div class="section-header">
        <h1>Documentation</h1>
        <p>Learn how to use ShadowVision effectively</p>
      </div>
      
      <div class="docs-container">
        <div class="docs-sidebar">
          <div class="docs-menu">
            <h3>Getting Started</h3>
            <ul>
              <li><a href="#installation" class="active">Installation</a></li>
              <li><a href="#quick-start">Quick Start Guide</a></li>
              <li><a href="#configuration">Configuration Options</a></li>
            </ul>
            
            <h3>Core Features</h3>
            <ul>
              <li><a href="#code-analysis">Code Analysis</a></li>
              <li><a href="#vuln-detection">Vulnerability Detection</a></li>
              <li><a href="#performance">Performance Analysis</a></li>
            </ul>
            
            <h3>Integrations</h3>
            <ul>
              <li><a href="#github">GitHub Integration</a></li>
              <li><a href="#gitlab">GitLab Integration</a></li>
              <li><a href="#cicd">CI/CD Pipeline</a></li>
            </ul>
            
            <h3>API Reference</h3>
            <ul>
              <li><a href="#api-intro">Introduction</a></li>
              <li><a href="#api-auth">Authentication</a></li>
              <li><a href="#api-endpoints">Endpoints</a></li>
            </ul>
          </div>
        </div>
        
        <div class="docs-content">
          <section id="installation">
            <h2>Installation</h2>
            <p>Getting started with ShadowVision is quick and easy. You can install our tool using npm, yarn, or directly from our GitHub repository.</p>
            
            <div class="code-block">
              <pre><code># Using npm
npm install shadowvision

# Using yarn
yarn add shadowvision</code></pre>
            </div>
            
            <p>For more detailed installation instructions, including Docker setup and manual installation, please refer to our <a href="#installation-full">full installation guide</a>.</p>
          </section>
          
          <section id="quick-start">
            <h2>Quick Start Guide</h2>
            <p>Once you have ShadowVision installed, you can start analyzing your code with just a few simple commands:</p>
            
            <div class="code-block">
              <pre><code># Initialize ShadowVision in your project
sv init

# Run a basic analysis
sv analyze</code></pre>
            </div>
            
            <p>This will generate a detailed report highlighting potential issues in your code. To customize the analysis, you can use various flags and options:</p>
            
            <div class="code-block">
              <pre><code># Analyze with specific focus on security vulnerabilities
sv analyze --focus=security

# Exclude certain directories
sv analyze --exclude=node_modules,dist</code></pre>
            </div>
          </section>
          
          <section id="configuration">
            <h2>Configuration Options</h2>
            <p>ShadowVision can be configured using a <code>shadowvision.config.js</code> file in your project root. Here's an example configuration:</p>
            
            <div class="code-block">
              <pre><code>module.exports = {
  // Directories to exclude from analysis
  exclude: ['node_modules', 'dist', 'build'],
  
  // Analysis depth (basic, standard, deep)
  analysisDepth: 'standard',
  
  // Focus areas (security, performance, all)
  focus: ['security', 'performance'],
  
  // Integration settings
  integrations: {
    github: {
      enabled: true,
      autoComment: true
    }
  }
}</code></pre>
            </div>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DocumentationView'
}
</script>

<style lang="scss" scoped>
.documentation {
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

.docs-container {
  display: grid;
  grid-template-columns: 250px 1fr;
  gap: 40px;
  
  @media (max-width: $breakpoint-md) {
    grid-template-columns: 1fr;
  }
}

.docs-sidebar {
  position: sticky;
  top: 100px;
  align-self: start;
  height: calc(100vh - 200px);
  overflow-y: auto;
  padding-right: $spacing-md;
  
  @media (max-width: $breakpoint-md) {
    position: relative;
    top: 0;
    height: auto;
    border-bottom: 1px solid $border-color;
    margin-bottom: $spacing-lg;
    padding-bottom: $spacing-lg;
  }
  
  h3 {
    font-size: 1.1rem;
    margin-top: $spacing-lg;
    margin-bottom: $spacing-sm;
    color: $highlight;
  }
  
  ul {
    list-style: none;
    padding: 0;
    margin: 0 0 $spacing-lg 0;
    
    li {
      margin-bottom: $spacing-xs;
      
      a {
        color: $muted-text;
        text-decoration: none;
        font-size: 0.95rem;
        display: block;
        padding: 5px 0;
        transition: color 0.2s ease;
        
        &:hover, &.active {
          color: $link-color;
        }
        
        &.active {
          font-weight: 600;
        }
      }
    }
  }
}

.docs-content {
  section {
    margin-bottom: $spacing-xxl;
    
    h2 {
      font-size: 1.8rem;
      margin-bottom: $spacing-md;
      padding-bottom: $spacing-sm;
      border-bottom: 1px solid $border-color;
    }
    
    p {
      margin-bottom: $spacing-md;
      font-size: 1rem;
      line-height: 1.6;
      color: $text-color;
    }
    
    a {
      color: $link-color;
      text-decoration: none;
      
      &:hover {
        text-decoration: underline;
      }
    }
  }
  
  .code-block {
    background: $code-bg;
    border-radius: $radius-md;
    padding: $spacing-md;
    margin-bottom: $spacing-lg;
    
    pre {
      margin: 0;
      
      code {
        font-family: monospace;
        color: $code-text;
        line-height: 1.5;
      }
    }
  }
}
</style> 