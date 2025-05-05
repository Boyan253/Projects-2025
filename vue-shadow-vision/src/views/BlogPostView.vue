<template>
  <div class="blog-post">
    <div v-if="loading" class="loading-container">
      <div class="loading-spinner"></div>
      <p>Loading article...</p>
    </div>
    
    <div v-else-if="error" class="error-container">
      <h2>Article Not Found</h2>
      <p>Sorry, we couldn't find the article you were looking for.</p>
      <router-link to="/blog" class="back-btn">Back to Blog</router-link>
    </div>
    
    <div v-else class="blog-post-content container">
      <div class="post-header">
        <h1>{{ post.title }}</h1>
        <div class="post-meta">
          <div class="post-author">
            <img :src="post.authorImage" :alt="post.author" class="author-image">
            <span>{{ post.author }}</span>
          </div>
          <div class="post-date">{{ post.date }}</div>
          <div class="post-category">{{ post.category }}</div>
        </div>
      </div>
      
      <div class="post-featured-image">
        <img :src="post.image" :alt="post.title">
      </div>
      
      <div class="post-content">
        <p>{{ post.content }}</p>
      </div>
      
      <div class="post-tags">
        <span v-for="(tag, index) in post.tags" :key="index" class="post-tag">#{{ tag }}</span>
      </div>
      
      <div class="post-share">
        <h3>Share this article</h3>
        <div class="social-buttons">
          <button class="social-btn twitter">Twitter</button>
          <button class="social-btn linkedin">LinkedIn</button>
          <button class="social-btn facebook">Facebook</button>
        </div>
      </div>
      
      <div class="post-navigation">
        <div v-if="prevPost" class="prev-post">
          <span>Previous Article</span>
          <router-link :to="'/blog/' + prevPost.id">{{ prevPost.title }}</router-link>
        </div>
        <div v-if="nextPost" class="next-post">
          <span>Next Article</span>
          <router-link :to="'/blog/' + nextPost.id">{{ nextPost.title }}</router-link>
        </div>
      </div>
      
      <div class="related-posts">
        <h2>Related Articles</h2>
        <div class="related-posts-grid">
          <div v-for="relatedPost in relatedPosts" :key="relatedPost.id" class="related-post-card">
            <img :src="relatedPost.image" :alt="relatedPost.title" class="related-post-image">
            <div class="related-post-details">
              <h3>{{ relatedPost.title }}</h3>
              <p>{{ relatedPost.excerpt }}</p>
              <router-link :to="'/blog/' + relatedPost.id" class="read-more">Read More</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BlogPostView',
  data() {
    return {
      loading: true,
      error: false,
      post: null,
      prevPost: null,
      nextPost: null,
      relatedPosts: [],
      allPosts: [
        {
          id: 1,
          title: 'Introducing ShadowVision: AI-Powered Code Analysis',
          excerpt: 'Learn about our new tool that uses AI to detect hard-to-find bugs and vulnerabilities in your code.',
          content: 'Today, we\'re thrilled to announce the launch of ShadowVision, our revolutionary AI-powered code analysis tool designed to find the bugs and vulnerabilities that traditional static analyzers miss. In development for over two years, ShadowVision represents a new approach to code quality and security.\n\nTraditional static analysis tools excel at finding syntax errors and common coding patterns, but they often miss logical bugs, security vulnerabilities, and performance issues that require a deeper understanding of code context. ShadowVision changes this paradigm by leveraging advanced machine learning algorithms trained on millions of code repositories to understand not just what your code is doing, but what it\'s trying to do.\n\nOur early users report finding critical bugs that had been lurking in their codebases for months or even years. By analyzing code flow, data relationships, and potential edge cases, ShadowVision can identify issues like race conditions, memory leaks, and security vulnerabilities that would be nearly impossible to detect through manual code reviews.\n\nWhat makes ShadowVision different? First, our deep learning models understand code semantics, not just syntax. Second, ShadowVision analyzes your entire codebase holistically, not just file by file. And third, our tool learns from your specific codebase over time, becoming more accurate with each analysis.\n\nWe believe ShadowVision represents the future of code quality tools, and we\'re excited to share it with the developer community. Sign up for our free trial today and discover what\'s hiding in the shadows of your code.',
          date: 'May 15, 2023',
          author: 'Alex Chen',
          authorImage: 'https://placehold.co/100x100/3a1c71/ffffff?text=AC',
          category: 'product-updates',
          image: 'https://placehold.co/1200x600/3a1c71/ffffff?text=ShadowVision+Launch',
          tags: ['product', 'launch', 'ai', 'code-analysis']
        },
        {
          id: 2,
          title: 'How to Integrate ShadowVision with GitHub Actions',
          excerpt: 'A step-by-step tutorial on setting up ShadowVision in your CI/CD pipeline using GitHub Actions.',
          content: 'In this tutorial, we\'ll walk through the process of integrating ShadowVision into your GitHub Actions workflow. By the end, you\'ll have an automated system that analyzes your code for potential issues on every push or pull request.\n\nGitHub Actions has become the go-to CI/CD solution for many teams, and with good reason. It\'s powerful, flexible, and tightly integrated with your GitHub repositories. Adding ShadowVision to your workflow is straightforward, and the benefits are substantial: catching bugs before they make it into your main branch.\n\nFirst, you\'ll need a ShadowVision API key. If you don\'t have one yet, sign up for an account and generate a key in your dashboard. Next, add this key as a secret in your GitHub repository settings. Name it something like SHADOWVISION_API_KEY.\n\nNow, create or update your workflow file at .github/workflows/shadowvision.yml with the following configuration:\n\n```yaml\nname: ShadowVision Analysis\n\non:\n  push:\n    branches: [ main ]\n  pull_request:\n    branches: [ main ]\n\njobs:\n  analyze:\n    runs-on: ubuntu-latest\n    steps:\n    - uses: actions/checkout@v2\n    - name: Set up Node.js\n      uses: actions/setup-node@v1\n      with:\n        node-version: 14\n    - name: Install ShadowVision\n      run: npm install -g shadowvision-cli\n    - name: Run ShadowVision Analysis\n      run: sv analyze --report=github-pr-comment\n      env:\n        SHADOWVISION_API_KEY: $\\{\\{ secrets.SHADOWVISION_API_KEY \\}\\}\n```\n\nThis workflow will run the ShadowVision analyzer on every push to main and on pull requests targeting main. The results will be automatically added as comments to your pull requests, making it easy to see and address issues.\n\nFor larger codebases, you might want to configure ShadowVision to focus on changed files rather than analyzing everything. You can do this by adding the --diff-only flag to the analyze command.\n\nWith this setup, you\'ve added an additional layer of protection to your development process, automatically catching subtle bugs and vulnerabilities before they can impact your users. Happy coding!',
          date: 'May 22, 2023',
          author: 'Sophia Rodriguez',
          authorImage: 'https://placehold.co/100x100/3a1c71/ffffff?text=SR',
          category: 'tutorials',
          image: 'https://placehold.co/1200x600/3a1c71/ffffff?text=GitHub+Actions+Integration',
          tags: ['github', 'ci-cd', 'tutorial', 'integration']
        },
        {
          id: 3,
          title: 'Case Study: How Acme Corp Reduced Bugs by 73%',
          excerpt: 'Discover how Acme Corporation implemented ShadowVision and dramatically improved their code quality.',
          content: 'Acme Corporation, a leader in e-commerce solutions serving over 500 million customers annually, was facing a challenge familiar to many growing tech companies: as their codebase expanded and their engineering team grew, bugs were becoming more frequent and harder to catch before reaching production.\n\n"We had a robust testing suite and code review process," says Jane Smith, VP of Engineering at Acme. "But we were still seeing subtle bugs slip through—especially edge cases and security vulnerabilities that were difficult to identify during normal code reviews."\n\nThe impact was significant. The engineering team was spending up to 40% of their time addressing production issues rather than building new features. Customer satisfaction scores were declining, and developer morale was suffering due to constant firefighting.\n\nAcme decided to pilot ShadowVision with a small team initially. "The results were immediate and impressive," Smith recalls. "In the first week alone, ShadowVision identified several critical issues that had been in our codebase for months."\n\nEncouraged by these early results, Acme rolled out ShadowVision company-wide and integrated it into their CI/CD pipeline. Every pull request was now automatically analyzed, with potential issues flagged directly in the PR comments.\n\nThe results after six months were remarkable:\n\n- 73% reduction in production bugs\n- 68% reduction in security vulnerabilities\n- 41% decrease in time spent on maintenance\n- 22% increase in new feature delivery\n\n"Beyond the numbers, we\'ve seen a fundamental shift in our development culture," says Smith. "Developers are learning from the issues ShadowVision identifies, leading to improved coding practices across the team."\n\nAcme\'s success with ShadowVision demonstrates how AI-powered code analysis can transform not just code quality, but team productivity and company outcomes. By catching the subtle bugs and vulnerabilities that traditional tools miss, ShadowVision has helped Acme deliver a more reliable product to their customers while freeing up developer time for innovation.',
          date: 'June 5, 2023',
          author: 'Marcus Johnson',
          authorImage: 'https://placehold.co/100x100/3a1c71/ffffff?text=MJ',
          category: 'case-studies',
          image: 'https://placehold.co/1200x600/3a1c71/ffffff?text=Acme+Corp+Case+Study',
          tags: ['case-study', 'success-story', 'bug-reduction']
        }
      ]
    }
  },
  created() {
    // Simulate API call to fetch post data
    setTimeout(() => {
      this.fetchPost();
    }, 1000);
  },
  methods: {
    fetchPost() {
      const postId = parseInt(this.$route.params.id);
      const post = this.allPosts.find(p => p.id === postId);
      
      if (post) {
        this.post = post;
        this.fetchRelatedPosts();
        this.fetchAdjacentPosts();
      } else {
        this.error = true;
      }
      
      this.loading = false;
    },
    fetchRelatedPosts() {
      // In a real app, you would fetch related posts based on tags or category
      // Here we're just simulating with other posts from the same category
      this.relatedPosts = this.allPosts
        .filter(p => p.id !== this.post.id && p.category === this.post.category)
        .slice(0, 2);
    },
    fetchAdjacentPosts() {
      const currentIndex = this.allPosts.findIndex(p => p.id === this.post.id);
      
      if (currentIndex > 0) {
        this.prevPost = this.allPosts[currentIndex - 1];
      }
      
      if (currentIndex < this.allPosts.length - 1) {
        this.nextPost = this.allPosts[currentIndex + 1];
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.blog-post {
  padding: 100px 0;
}

.loading-container, .error-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 50vh;
  
  h2 {
    margin-bottom: $spacing-md;
    font-size: 2rem;
  }
  
  p {
    color: $muted-text;
    margin-bottom: $spacing-lg;
  }
  
  .back-btn {
    display: inline-block;
    padding: $spacing-sm $spacing-lg;
    background: $highlight;
    color: white;
    border-radius: $radius-md;
    text-decoration: none;
    transition: background 0.2s ease;
    
    &:hover {
      background: darken($highlight, 10%);
    }
  }
}

.loading-spinner {
  width: 50px;
  height: 50px;
  border: 5px solid rgba(124, 77, 255, 0.2);
  border-radius: 50%;
  border-top-color: $highlight;
  animation: spin 1s linear infinite;
  margin-bottom: $spacing-md;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

.blog-post-content {
  max-width: 800px;
  margin: 0 auto;
}

.post-header {
  margin-bottom: $spacing-xl;
  
  h1 {
    font-size: 2.5rem;
    margin-bottom: $spacing-md;
    line-height: 1.3;
  }
}

.post-meta {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: $spacing-md;
  font-size: 0.9rem;
  color: $muted-text;
  
  .post-author {
    display: flex;
    align-items: center;
    
    .author-image {
      width: 30px;
      height: 30px;
      border-radius: 50%;
      margin-right: $spacing-xs;
    }
  }
  
  .post-category {
    background: rgba(124, 77, 255, 0.1);
    color: $highlight;
    padding: 2px 10px;
    border-radius: $radius-sm;
    text-transform: capitalize;
  }
}

.post-featured-image {
  margin-bottom: $spacing-xl;
  border-radius: $radius-lg;
  overflow: hidden;
  
  img {
    width: 100%;
    height: auto;
  }
}

.post-content {
  margin-bottom: $spacing-xl;
  font-size: 1.1rem;
  line-height: 1.8;
  color: $text-color;
  
  p {
    margin-bottom: $spacing-md;
    white-space: pre-line;
  }
}

.post-tags {
  display: flex;
  flex-wrap: wrap;
  gap: $spacing-sm;
  margin-bottom: $spacing-xl;
  
  .post-tag {
    background: $card-bg;
    color: $muted-text;
    padding: 5px 10px;
    border-radius: $radius-sm;
    font-size: 0.85rem;
  }
}

.post-share {
  margin-bottom: $spacing-xl;
  padding-bottom: $spacing-xl;
  border-bottom: 1px solid $border-color;
  
  h3 {
    font-size: 1.2rem;
    margin-bottom: $spacing-md;
    color: $text-color;
  }
  
  .social-buttons {
    display: flex;
    gap: $spacing-sm;
    
    .social-btn {
      padding: $spacing-xs $spacing-md;
      border-radius: $radius-sm;
      font-size: 0.9rem;
      cursor: pointer;
      
      &.twitter {
        background: #1DA1F2;
        color: white;
      }
      
      &.linkedin {
        background: #0077B5;
        color: white;
      }
      
      &.facebook {
        background: #4267B2;
        color: white;
      }
    }
  }
}

.post-navigation {
  display: flex;
  justify-content: space-between;
  margin-bottom: $spacing-xxl;
  padding-bottom: $spacing-xl;
  border-bottom: 1px solid $border-color;
  
  .prev-post, .next-post {
    max-width: 45%;
    
    span {
      display: block;
      font-size: 0.85rem;
      color: $muted-text;
      margin-bottom: $spacing-xs;
    }
    
    a {
      color: $link-color;
      text-decoration: none;
      font-size: 1.1rem;
      
      &:hover {
        text-decoration: underline;
      }
    }
  }
  
  .next-post {
    text-align: right;
  }
}

.related-posts {
  h2 {
    font-size: 1.8rem;
    margin-bottom: $spacing-lg;
  }
  
  .related-posts-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 30px;
    
    @media (max-width: $breakpoint-md) {
      grid-template-columns: 1fr;
    }
  }
  
  .related-post-card {
    background: $card-bg;
    border-radius: $radius-lg;
    overflow: hidden;
    border: 1px solid $border-color;
    
    .related-post-image {
      width: 100%;
      height: 150px;
      object-fit: cover;
    }
    
    .related-post-details {
      padding: $spacing-md;
      
      h3 {
        font-size: 1.2rem;
        margin-bottom: $spacing-sm;
      }
      
      p {
        font-size: 0.9rem;
        color: $muted-text;
        margin-bottom: $spacing-md;
      }
      
      .read-more {
        color: $highlight;
        text-decoration: none;
        font-size: 0.9rem;
        
        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
}
</style> 