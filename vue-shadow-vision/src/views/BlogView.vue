<template>
  <div class="blog">
    <div class="container">
      <div class="section-header">
        <h1>ShadowVision Blog</h1>
        <p>Latest news, tutorials, and insights from our team</p>
      </div>
      
      <div class="blog-content">
        <div class="blog-filters">
          <div class="search-box">
            <input type="text" placeholder="Search articles..." v-model="searchQuery">
          </div>
          
          <div class="category-filters">
            <button 
              class="category-btn" 
              :class="{ active: activeCategory === 'all' }"
              @click="filterByCategory('all')"
            >
              All
            </button>
            <button 
              class="category-btn" 
              :class="{ active: activeCategory === 'tutorials' }"
              @click="filterByCategory('tutorials')"
            >
              Tutorials
            </button>
            <button 
              class="category-btn" 
              :class="{ active: activeCategory === 'case-studies' }"
              @click="filterByCategory('case-studies')"
            >
              Case Studies
            </button>
            <button 
              class="category-btn" 
              :class="{ active: activeCategory === 'product-updates' }"
              @click="filterByCategory('product-updates')"
            >
              Product Updates
            </button>
          </div>
        </div>
        
        <div class="blog-grid">
          <div v-for="post in filteredPosts" :key="post.id" class="blog-card">
            <div class="blog-image">
              <img :src="post.image" :alt="post.title">
              <div class="blog-category">{{ post.category }}</div>
            </div>
            <div class="blog-details">
              <div class="blog-meta">
                <span class="blog-date">{{ post.date }}</span>
                <span class="blog-author">by {{ post.author }}</span>
              </div>
              <h2 class="blog-title">{{ post.title }}</h2>
              <p class="blog-excerpt">{{ post.excerpt }}</p>
              <router-link :to="'/blog/' + post.id" class="read-more-btn">Read More</router-link>
            </div>
          </div>
        </div>
        
        <div v-if="filteredPosts.length === 0" class="no-results">
          <h3>No matching posts found</h3>
          <p>Try adjusting your search or category filters</p>
        </div>
        
        <div class="pagination">
          <button class="pagination-btn" :disabled="currentPage === 1" @click="prevPage">
            &laquo; Previous
          </button>
          <span class="page-indicator">Page {{ currentPage }} of {{ totalPages }}</span>
          <button class="pagination-btn" :disabled="currentPage === totalPages" @click="nextPage">
            Next &raquo;
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BlogView',
  data() {
    return {
      searchQuery: '',
      activeCategory: 'all',
      currentPage: 1,
      postsPerPage: 6,
      blogPosts: [
        {
          id: 1,
          title: 'Introducing ShadowVision: AI-Powered Code Analysis',
          excerpt: 'Learn about our new tool that uses AI to detect hard-to-find bugs and vulnerabilities in your code.',
          date: 'May 15, 2023',
          author: 'Alex Chen',
          category: 'product-updates',
          image: 'https://placehold.co/600x400/3a1c71/ffffff?text=ShadowVision'
        },
        {
          id: 2,
          title: 'How to Integrate ShadowVision with GitHub Actions',
          excerpt: 'A step-by-step tutorial on setting up ShadowVision in your CI/CD pipeline using GitHub Actions.',
          date: 'May 22, 2023',
          author: 'Sophia Rodriguez',
          category: 'tutorials',
          image: 'https://placehold.co/600x400/3a1c71/ffffff?text=GitHub+Actions'
        },
        {
          id: 3,
          title: 'Case Study: How Acme Corp Reduced Bugs by 73%',
          excerpt: 'Discover how Acme Corporation implemented ShadowVision and dramatically improved their code quality.',
          date: 'June 5, 2023',
          author: 'Marcus Johnson',
          category: 'case-studies',
          image: 'https://placehold.co/600x400/3a1c71/ffffff?text=Acme+Corp'
        },
        {
          id: 4,
          title: 'Advanced Code Analysis Techniques Used in ShadowVision',
          excerpt: 'A deep dive into the technical aspects of our AI-powered code analysis engine.',
          date: 'June 18, 2023',
          author: 'Priya Patel',
          category: 'tutorials',
          image: 'https://placehold.co/600x400/3a1c71/ffffff?text=Advanced+Analysis'
        },
        {
          id: 5,
          title: 'ShadowVision 2.0: New Features and Improvements',
          excerpt: 'Explore the exciting new capabilities in the latest version of ShadowVision.',
          date: 'July 10, 2023',
          author: 'Alex Chen',
          category: 'product-updates',
          image: 'https://placehold.co/600x400/3a1c71/ffffff?text=Version+2.0'
        },
        {
          id: 6,
          title: 'Security Best Practices for Modern Web Applications',
          excerpt: 'Learn how to keep your web applications secure with these essential best practices.',
          date: 'July 24, 2023',
          author: 'Sophia Rodriguez',
          category: 'tutorials',
          image: 'https://placehold.co/600x400/3a1c71/ffffff?text=Security'
        },
        {
          id: 7,
          title: 'Case Study: TechStart Improves Developer Productivity',
          excerpt: 'How a growing startup used ShadowVision to streamline their development process.',
          date: 'August 8, 2023',
          author: 'Marcus Johnson',
          category: 'case-studies',
          image: 'https://placehold.co/600x400/3a1c71/ffffff?text=TechStart'
        },
        {
          id: 8,
          title: 'Optimizing Performance with ShadowVision Analytics',
          excerpt: 'Discover how to use our performance analysis tools to speed up your applications.',
          date: 'August 22, 2023',
          author: 'Priya Patel',
          category: 'tutorials',
          image: 'https://placehold.co/600x400/3a1c71/ffffff?text=Performance'
        }
      ]
    }
  },
  computed: {
    filteredPosts() {
      let filtered = this.blogPosts;
      
      // Filter by category
      if (this.activeCategory !== 'all') {
        filtered = filtered.filter(post => post.category === this.activeCategory);
      }
      
      // Filter by search query
      if (this.searchQuery.trim() !== '') {
        const query = this.searchQuery.toLowerCase();
        filtered = filtered.filter(post => 
          post.title.toLowerCase().includes(query) || 
          post.excerpt.toLowerCase().includes(query)
        );
      }
      
      // Apply pagination
      const startIndex = (this.currentPage - 1) * this.postsPerPage;
      const endIndex = startIndex + this.postsPerPage;
      
      return filtered.slice(startIndex, endIndex);
    },
    totalPosts() {
      let filtered = this.blogPosts;
      
      // Filter by category
      if (this.activeCategory !== 'all') {
        filtered = filtered.filter(post => post.category === this.activeCategory);
      }
      
      // Filter by search query
      if (this.searchQuery.trim() !== '') {
        const query = this.searchQuery.toLowerCase();
        filtered = filtered.filter(post => 
          post.title.toLowerCase().includes(query) || 
          post.excerpt.toLowerCase().includes(query)
        );
      }
      
      return filtered.length;
    },
    totalPages() {
      return Math.ceil(this.totalPosts / this.postsPerPage);
    }
  },
  methods: {
    filterByCategory(category) {
      this.activeCategory = category;
      this.currentPage = 1; // Reset to first page when changing filters
    },
    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    },
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
      }
    }
  },
  watch: {
    searchQuery() {
      // Reset to first page when search query changes
      this.currentPage = 1;
    }
  }
}
</script>

<style lang="scss" scoped>
.blog {
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

.blog-filters {
  margin-bottom: $spacing-xl;
  
  .search-box {
    margin-bottom: $spacing-md;
    
    input {
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
    }
  }
  
  .category-filters {
    display: flex;
    flex-wrap: wrap;
    gap: $spacing-sm;
    
    .category-btn {
      padding: $spacing-xs $spacing-md;
      border-radius: $radius-sm;
      background: $card-bg;
      border: 1px solid $border-color;
      color: $muted-text;
      cursor: pointer;
      transition: all 0.2s ease;
      
      &:hover {
        border-color: $highlight;
      }
      
      &.active {
        background: rgba(124, 77, 255, 0.1);
        color: $highlight;
        border-color: $highlight;
      }
    }
  }
}

.blog-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  margin-bottom: $spacing-xl;
  
  @media (max-width: $breakpoint-lg) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: $breakpoint-md) {
    grid-template-columns: 1fr;
  }
}

.blog-card {
  background: $card-bg;
  border-radius: $radius-lg;
  overflow: hidden;
  border: 1px solid $border-color;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
  }
}

.blog-image {
  position: relative;
  height: 200px;
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  .blog-category {
    position: absolute;
    bottom: 15px;
    left: 15px;
    background: rgba(0, 0, 0, 0.7);
    color: white;
    padding: 5px 10px;
    border-radius: $radius-sm;
    font-size: 0.8rem;
    text-transform: capitalize;
  }
}

.blog-details {
  padding: $spacing-lg;
}

.blog-meta {
  display: flex;
  justify-content: space-between;
  margin-bottom: $spacing-sm;
  font-size: 0.85rem;
  color: $muted-text;
}

.blog-title {
  font-size: 1.3rem;
  margin-bottom: $spacing-sm;
  line-height: 1.4;
}

.blog-excerpt {
  color: $muted-text;
  margin-bottom: $spacing-md;
  font-size: 0.95rem;
  line-height: 1.5;
}

.read-more-btn {
  display: inline-block;
  padding: $spacing-xs $spacing-md;
  background: transparent;
  border: 1px solid $highlight;
  color: $highlight;
  border-radius: $radius-sm;
  text-decoration: none;
  transition: all 0.2s ease;
  
  &:hover {
    background: $highlight;
    color: white;
  }
}

.no-results {
  text-align: center;
  padding: $spacing-xxl 0;
  
  h3 {
    margin-bottom: $spacing-md;
    font-size: 1.5rem;
  }
  
  p {
    color: $muted-text;
  }
}

.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: $spacing-md;
  margin-top: $spacing-xl;
  
  .pagination-btn {
    padding: $spacing-xs $spacing-md;
    border-radius: $radius-sm;
    background: $card-bg;
    border: 1px solid $border-color;
    color: $text-color;
    cursor: pointer;
    transition: all 0.2s ease;
    
    &:hover:not(:disabled) {
      border-color: $highlight;
      color: $highlight;
    }
    
    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
  }
  
  .page-indicator {
    color: $muted-text;
    font-size: 0.9rem;
  }
}
</style> 