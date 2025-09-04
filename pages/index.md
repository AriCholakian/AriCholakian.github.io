---
layout: default
permalink: /
---

<div class="hero-section" style="min-height: 100vh; display: flex; align-items: center; justify-content: center; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; text-align: center;">
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-lg-8">
        <h1 class="display-3 font-weight-bold mb-4">Ari Cholakian</h1>
        <h2 class="h4 mb-4 font-weight-light">Portfolio & Projects</h2>
        <p class="lead mb-5">Welcome to my personal portfolio. Explore my projects, read my blog, and get to know more about my work.</p>
        
        <div class="d-flex justify-content-center flex-wrap gap-3 mb-5">
          <a href="{{ '/projects/' | relative_url }}" class="btn btn-light btn-lg px-4">
            <i class="fas fa-folder-open me-2"></i>View Projects
          </a>
          <a href="{{ '/blog/' | relative_url }}" class="btn btn-outline-light btn-lg px-4">
            <i class="fas fa-blog me-2"></i>Read Blog
          </a>
          <a href="{{ '/about/' | relative_url }}" class="btn btn-outline-light btn-lg px-4">
            <i class="fas fa-user me-2"></i>About Me
          </a>
        </div>

        <!-- Social Media Links -->
        <div class="social-links">
          <h5 class="mb-3">Connect with me</h5>
          <div class="d-flex justify-content-center gap-3">
            {% if site.author.github %}
            <a href="https://github.com/{{ site.author.github }}" target="_blank" class="btn btn-outline-light btn-sm rounded-circle" style="width: 50px; height: 50px; display: flex; align-items: center; justify-content: center;">
              <i class="fab fa-github fa-lg"></i>
            </a>
            {% endif %}
            
            {% if site.author.linkedin %}
            <a href="https://linkedin.com/in/{{ site.author.linkedin }}" target="_blank" class="btn btn-outline-light btn-sm rounded-circle" style="width: 50px; height: 50px; display: flex; align-items: center; justify-content: center;">
              <i class="fab fa-linkedin-in fa-lg"></i>
            </a>
            {% endif %}
            
            {% if site.author.email %}
            <a href="mailto:{{ site.author.email }}" class="btn btn-outline-light btn-sm rounded-circle" style="width: 50px; height: 50px; display: flex; align-items: center; justify-content: center;">
              <i class="fas fa-envelope fa-lg"></i>
            </a>
            {% endif %}
            
            {% if site.author.twitter %}
            <a href="https://twitter.com/{{ site.author.twitter }}" target="_blank" class="btn btn-outline-light btn-sm rounded-circle" style="width: 50px; height: 50px; display: flex; align-items: center; justify-content: center;">
              <i class="fab fa-twitter fa-lg"></i>
            </a>
            {% endif %}
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- Featured Projects Section -->
<div class="featured-projects py-5" style="background: #f8f9fa;">
  <div class="container">
    <div class="row">
      <div class="col-lg-12 text-center mb-5">
        <h2 class="display-4 font-weight-bold">Featured Projects</h2>
        <p class="lead">Here are some of my recent works</p>
      </div>
    </div>
    <div class="row">
      {% assign featured_projects = site.projects | limit: 3 %}
      {% for project in featured_projects %}
      <div class="col-lg-4 col-md-6 mb-4">
        <div class="card h-100 shadow-sm border-0">
          {% if project.image %}
          <img src="{{ project.image }}" class="card-img-top" alt="{{ project.name }}" style="height: 200px; object-fit: cover;">
          {% else %}
          <div class="card-img-top d-flex align-items-center justify-content-center" style="height: 200px; background: linear-gradient(45deg, #667eea, #764ba2); color: white;">
            <i class="fas fa-code fa-3x"></i>
          </div>
          {% endif %}
          <div class="card-body d-flex flex-column">
            <h5 class="card-title font-weight-bold">{{ project.name }}</h5>
            <p class="card-text flex-grow-1">{{ project.description | truncate: 100 }}</p>
            {% if project.tools %}
            <div class="mb-3">
              {% for tool in project.tools %}
              <span class="badge badge-secondary me-1">{{ tool }}</span>
              {% endfor %}
            </div>
            {% endif %}
            {% if project.external_url %}
            <a href="{{ project.external_url }}" target="_blank" class="btn btn-primary mt-auto">
              View Project <i class="fas fa-external-link-alt ms-1"></i>
            </a>
            {% else %}
            <a href="{{ project.url | relative_url }}" class="btn btn-primary mt-auto">
              Learn More <i class="fas fa-arrow-right ms-1"></i>
            </a>
            {% endif %}
          </div>
        </div>
      </div>
      {% endfor %}
    </div>
    <div class="text-center mt-4">
      <a href="{{ '/projects/' | relative_url }}" class="btn btn-outline-primary btn-lg">
        View All Projects <i class="fas fa-arrow-right ms-1"></i>
      </a>
    </div>
  </div>
</div>

<!-- Recent Blog Posts Section -->
<div class="recent-posts py-5">
  <div class="container">
    <div class="row">
      <div class="col-lg-12 text-center mb-5">
        <h2 class="display-4 font-weight-bold">Recent Posts</h2>
        <p class="lead">Latest articles from my blog</p>
      </div>
    </div>
    <div class="row">
      {% assign recent_posts = site.posts | limit: 3 %}
      {% for post in recent_posts %}
      <div class="col-lg-4 col-md-6 mb-4">
        <div class="card h-100 shadow-sm border-0">
          <div class="card-body d-flex flex-column">
            <div class="mb-2">
              {% for tag in post.tags limit: 2 %}
              <span class="badge badge-light">{{ tag }}</span>
              {% endfor %}
            </div>
            <h5 class="card-title font-weight-bold">{{ post.title }}</h5>
            <p class="card-text text-muted small mb-3">{{ post.date | date: "%B %d, %Y" }}</p>
            <p class="card-text flex-grow-1">{{ post.description | default: post.excerpt | strip_html | truncate: 120 }}</p>
            {% if post.external_url %}
            <a href="{{ post.external_url }}" target="_blank" class="btn btn-outline-primary mt-auto">
              Read More <i class="fas fa-external-link-alt ms-1"></i>
            </a>
            {% else %}
            <a href="{{ post.url | relative_url }}" class="btn btn-outline-primary mt-auto">
              Read More <i class="fas fa-arrow-right ms-1"></i>
            </a>
            {% endif %}
          </div>
        </div>
      </div>
      {% endfor %}
    </div>
    <div class="text-center mt-4">
      <a href="{{ '/blog/' | relative_url }}" class="btn btn-outline-primary btn-lg">
        View All Posts <i class="fas fa-arrow-right ms-1"></i>
      </a>
    </div>
  </div>
</div>

<style>
.gap-3 > * {
  margin: 0.5rem;
}

.btn {
  transition: all 0.3s ease;
}

.btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0,0,0,0.2);
}

.card {
  transition: all 0.3s ease;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(0,0,0,0.15);
}

.hero-section {
  position: relative;
  overflow: hidden;
}

.hero-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000"><polygon fill="rgba(255,255,255,0.1)" points="0,1000 1000,0 1000,1000"/></svg>');
  background-size: cover;
}

.hero-section .container {
  position: relative;
  z-index: 2;
}
</style>