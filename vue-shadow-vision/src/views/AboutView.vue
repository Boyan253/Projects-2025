<template>
  <div class="about">
    <div class="container">
      <div class="section-header">
        <h1>About ShadowVision</h1>
      </div>
      
      <div class="about-content">
        <div class="about-intro">
          <h2>Our Mission</h2>
          <p>At ShadowVision, we're committed to revolutionizing the way developers approach code quality. Our mission is to make advanced code analysis accessible to everyone, from solo developers to enterprise teams.</p>
          <p>We believe that by harnessing the power of AI, we can help identify bugs and vulnerabilities that traditional tools miss - the ones lurking in the shadows of your code.</p>
        </div>
        
        <div class="about-team">
          <h2>Our Team</h2>
          <p>ShadowVision was founded by a team of developers who were frustrated with the limitations of existing code analysis tools. With backgrounds in cybersecurity, machine learning, and software development, our team combines diverse expertise to create a tool that truly understands your code.</p>
        </div>
        
        <div class="about-vision">
          <h2>Our Vision</h2>
          <p>We envision a future where code quality issues are caught before they become problems. Where developers can deploy with confidence, knowing their code has been analyzed not just for syntax errors, but for logical bugs, security vulnerabilities, and performance bottlenecks.</p>
          <p>ShadowVision is more than just a tool - it's a partner in your development process, working silently behind the scenes to catch the issues you might miss.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AboutView'
}
</script>

<style lang="scss" scoped>
.about {
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
    margin-bottom: $spacing-md;
  }
}

.about-content {
  max-width: 800px;
  margin: 0 auto;
  
  h2 {
    color: $highlight;
    margin-top: $spacing-xl;
    margin-bottom: $spacing-md;
    font-size: 1.8rem;
  }
  
  p {
    margin-bottom: $spacing-md;
    color: $text-color;
    font-size: 1.1rem;
    line-height: 1.6;
  }
}

.about-intro, .about-team, .about-vision {
  margin-bottom: $spacing-xl;
}
</style> 