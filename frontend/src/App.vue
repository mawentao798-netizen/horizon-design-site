<script setup>
import { computed, nextTick, onMounted, onUnmounted, ref, watch } from 'vue'
import LiquidChrome from './components/LiquidChrome.vue'
import PillNav from './components/PillNav.vue'
import ScrollFloat from './components/ScrollFloat.vue'
import { siteData } from './data/projects'

const text = {
  all: '\u5168\u90e8',
  home: '\u9996\u9875',
  cases: '\u8bbe\u8ba1\u6848\u4f8b',
  contact: '\u8054\u7cfb',
  admin: '\u540e\u53f0',
  brand: '\u5730\u5e73\u7ebf\u7a7a\u95f4\u8bbe\u8ba1',
  brandSub: 'HORIZON SPACE DESIGN',
  publish: '\u9879\u76ee\u53d1\u5e03',
  studio: '\u516c\u53f8\u4ecb\u7ecd',
  inquiry: '\u8bbe\u8ba1\u54a8\u8be2',
  latest: '\u6700\u65b0\u9879\u76ee',
  allProjects: '\u5168\u90e8\u9879\u76ee',
  imageUnit: '\u5f20\u56fe\u50cf',
  readMore: '\u9605\u8bfb\u9879\u76ee',
  category: '\u5206\u7c7b',
  projectImages: '\u9879\u76ee\u56fe\u50cf',
  sourceOrder: '\u6309\u8d44\u6599\u6587\u4ef6\u5939\u987a\u5e8f\u6392\u5217',
  contactTitle: '\u8ba9\u9879\u76ee\u4ece\u73b0\u573a\u95ee\u9898\u5f00\u59cb',
  contactIntro: '\u8bf7\u7559\u4e0b\u9879\u76ee\u9700\u6c42\u3001\u7a7a\u95f4\u9762\u79ef\u3001\u5730\u70b9\u4e0e\u8054\u7cfb\u65b9\u5f0f\u3002\u6211\u4eec\u4f1a\u6839\u636e\u4e1a\u6001\u3001\u73b0\u573a\u6761\u4ef6\u548c\u5546\u4e1a\u76ee\u6807\uff0c\u8fdb\u4e00\u6b65\u68b3\u7406\u9002\u5408\u9879\u76ee\u7684\u7a7a\u95f4\u7b56\u7565\u3002',
  projectScope: '\u9879\u76ee\u8303\u56f4',
  scopeValue: '\u5546\u4e1a / \u6d17\u6d74 / \u9152\u5e97 / \u5c55\u5385 / \u9910\u996e / \u529e\u516c / \u79c1\u5b85',
  enterAdmin: '\u8fdb\u5165 Django \u7ba1\u7406\u540e\u53f0',
  submit: '\u63d0\u4ea4\u8bbe\u8ba1\u9700\u6c42',
  notFound: '\u6848\u4f8b\u4e0d\u5b58\u5728',
  backCases: '\u8fd4\u56de\u8bbe\u8ba1\u6848\u4f8b',
}

const companyIntro = [
  '\u5730\u5e73\u7ebf\u7a7a\u95f4\u8bbe\u8ba1\uff0c\u7531\u8d44\u6df1\u5ba4\u5185\u8bbe\u8ba1\u5e08\u521b\u7acb\uff0c\u6df1\u8015\u6d17\u6d74\u3001\u9152\u5e97\u53ca\u5546\u4e1a\u7a7a\u95f4\u8bbe\u8ba1\u9886\u57df\u4e8c\u5341\u5e74\uff0c\u4e13\u6ce8\u9ad8\u54c1\u8d28\u5ba4\u5185\u7a7a\u95f4\u5168\u6848\u8bbe\u8ba1\u4e0e\u843d\u5730\u670d\u52a1\u3002\u670d\u52a1\u8303\u56f4\u6db5\u76d6\u9ad8\u7aef\u6d17\u6d74\u4f1a\u6240\u3001\u7cbe\u54c1\u6e29\u6cc9\u9152\u5e97\u3001\u5546\u4e1a\u7efc\u5408\u4f53\u3001\u9910\u996e\u7a7a\u95f4\u3001\u529e\u516c\u7a7a\u95f4\u3001\u79c1\u5b85\u522b\u5885\u53ca\u6587\u65c5\u914d\u5957\u7b49\u591a\u5143\u9886\u57df\u3002',
  '\u516c\u53f8\u79c9\u6301"\u4ee5\u89c6\u91ce\u7834\u8fb9\u754c\uff0c\u4ee5\u8bbe\u8ba1\u7b51\u8d28\u611f"\u7684\u7406\u5ff5\uff0c\u878d\u5408\u5f53\u4ee3\u7f8e\u5b66\u4e0e\u5b9e\u7528\u529f\u80fd\uff0c\u6df1\u5ea6\u6316\u6398\u7a7a\u95f4\u4ef7\u503c\u3002\u6211\u4eec\u76f8\u4fe1\uff0c\u597d\u7684\u8bbe\u8ba1\u4e0d\u4ec5\u662f\u89c6\u89c9\u7684\u8868\u8fbe\uff0c\u66f4\u662f\u7a7a\u95f4\u4e0e\u4eba\u7684\u5bf9\u8bdd\u3002',
  '\u56e2\u961f\u6c47\u805a\u8d44\u6df1\u8bbe\u8ba1\u5e08\u3001\u8f6f\u88c5\u642d\u914d\u5e08\u53ca\u5de5\u7a0b\u987e\u95ee\uff0c\u4ece\u65b9\u6848\u521b\u610f\u3001\u6548\u679c\u56fe\u5448\u73b0\u5230\u65bd\u5de5\u843d\u5730\u5168\u7a0b\u628a\u63a7\uff0c\u4e25\u63a7\u7ec6\u8282\u4e0e\u54c1\u8d28\u3002',
]

const inquiryFields = [
  { label: '\u8bbe\u8ba1\u9700\u6c42', type: 'textarea', placeholder: '\u8bf7\u7b80\u8981\u8bf4\u660e\u4e1a\u6001\u3001\u98ce\u683c\u503e\u5411\u3001\u529f\u80fd\u9700\u6c42\u6216\u6539\u9020\u91cd\u70b9' },
  { label: '\u7a7a\u95f4\u9762\u79ef', type: 'text', placeholder: '\u4f8b\uff1a1200\u33a1 / 3\u5c42 / \u5c40\u90e8\u6539\u9020' },
  { label: '\u9879\u76ee\u5730\u70b9', type: 'text', placeholder: '\u4f8b\uff1a\u8fbd\u5b81\u5927\u8fde / \u5c71\u4e1c\u6f4d\u574a' },
  { label: '\u8054\u7cfb\u65b9\u5f0f', type: 'text', placeholder: '\u8bf7\u7559\u4e0b\u624b\u673a\u6216\u5fae\u4fe1' },
]

const route = ref(parseRoute())
const activeCategory = ref(text.all)
let revealObserver = null
let lazyImageObserver = null

function parseRoute() {
  const hash = window.location.hash.replace(/^#/, '') || '/'
  const parts = hash.split('/').filter(Boolean).map(decodeURIComponent)
  if (parts[0] === 'cases' && parts[1]) return { name: 'case', slug: parts[1] }
  if (parts[0] === 'cases') return { name: 'cases' }
  if (parts[0] === 'contact') return { name: 'contact' }
  return { name: 'home' }
}

function handleHashChange() {
  route.value = parseRoute()
  nextTick(setupRevealAnimations)
}

function handleKeydown(event) {
  if (event.key !== 'Escape' || route.value.name === 'home') return
  if (window.history.length > 1) {
    window.history.back()
  } else {
    window.location.hash = '#/'
  }
}

onMounted(() => {
  window.addEventListener('hashchange', handleHashChange)
  window.addEventListener('keydown', handleKeydown)
  setupRevealAnimations()
})
onUnmounted(() => {
  window.removeEventListener('hashchange', handleHashChange)
  window.removeEventListener('keydown', handleKeydown)
  revealObserver?.disconnect()
  lazyImageObserver?.disconnect()
})

function setupRevealAnimations() {
  revealObserver?.disconnect()
  const elements = document.querySelectorAll('.reveal-card')

  revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return
        entry.target.classList.add('is-visible')
        revealObserver.unobserve(entry.target)
      })
    },
    { rootMargin: '0px 0px -8% 0px', threshold: 0.16 },
  )

  elements.forEach((element, index) => {
    element.style.setProperty('--reveal-delay', `${Math.min(index % 9, 8) * 55}ms`)
    revealObserver.observe(element)
  })

  setupLazyImages()
}

function setupLazyImages() {
  lazyImageObserver?.disconnect()
  const images = document.querySelectorAll('img[data-src]:not([src])')
  if (!images.length) return

  const loadImage = (image) => {
    image.src = image.dataset.src
    image.removeAttribute('data-src')
  }

  if (!('IntersectionObserver' in window)) {
    images.forEach(loadImage)
    return
  }

  lazyImageObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return
        loadImage(entry.target)
        lazyImageObserver.unobserve(entry.target)
      })
    },
    {
      rootMargin: '250px 0px',
      threshold: 0.01,
    },
  )

  images.forEach((image) => lazyImageObserver.observe(image))
}

watch(activeCategory, () => nextTick(setupRevealAnimations))

const projects = siteData.projects
const categories = computed(() => [text.all, ...siteData.categories])
const currentProject = computed(() => projects.find((project) => project.slug === route.value.slug))
const filteredProjects = computed(() => {
  if (activeCategory.value === text.all) return projects
  return projects.filter((project) => project.category === activeCategory.value)
})
const homeProjects = computed(() => projects.slice(0, 12))
const carouselProjects = computed(() => projects)

const projectTranslations = {
  '商业-ex机器人展厅': 'EX Robot Exhibition Hall',
  '商业-coffe-杭州': 'Coffe Hangzhou',
  '商业-全羊宴-大连': 'Whole Lamb Banquet Dalian',
  '商业-卓越检测公司办公室-太原': 'Zhuoyue Testing Office Taiyuan',
  '商业-大连理工大学会所': 'Dalian University of Technology Club',
  '商业-大连理工大学风雨操场': 'Dalian University of Technology Indoor Sports Field',
  '商业-小川家': 'Ogawa House',
  '商业-岚里coffee-wine-厦门': 'Lanli Coffee and Wine Xiamen',
  '商业-未来科技馆展厅': 'Future Technology Museum Exhibition Hall',
  '商业-林夕阁-大连': 'Linxi Pavilion Dalian',
  '商业-欣全欣餐厅-大连': 'Xinquanxin Restaurant Dalian',
  '商业-水系统设备展厅-沈阳': 'Water System Equipment Showroom Shenyang',
  '商业-牧城驿教堂': 'Muchengyi Church',
  '商业-花园教堂-武昌': 'Garden Church Wuchang',
  '洗浴-万豪-水一方-丹东': 'Marriott Shuiyifang Dandong',
  '洗浴-全天初见足疗洗浴-芜湖': 'Quantian Chujian Foot Spa Wuhu',
  '洗浴-安小溪汤泉-合肥': 'Anxiaoxi Hot Spring Hefei',
  '洗浴-悦榕汇温泉酒店-哈尔滨': 'Yueronghui Hot Spring Hotel Harbin',
  '洗浴-明月泉-沈阳': 'Mingyue Spring Shenyang',
  '洗浴-水逸汇洗浴会所-依安': 'Shuiyihui Bath Club Yian',
  '洗浴-维州路搓背馆-潍坊': 'Weizhou Road Body Scrub House Weifang',
  '洗浴-鲁搓搓背馆-潍坊': 'Lucuo Body Scrub House Weifang',
  '酒店-大连理工大学城市学院酒店': 'Dalian University of Technology City Institute Hotel',
  '酒店-温泉度假酒店-瓦房店': 'Hot Spring Resort Hotel Wafangdian',
  '酒店-私宅': 'Private Residence',
}

function projectTranslation(project) {
  return projectTranslations[project.slug] || project.name
}

const navItems = [
  { label: text.home, href: '#/' },
  { label: text.cases, href: '#/cases' },
]

const activeHref = computed(() => {
  if (route.value.name === 'home') return '#/'
  if (route.value.name === 'cases' || route.value.name === 'case') return '#/cases'
  if (route.value.name === 'contact') return '#/contact'
  return ''
})
</script>

<template>
  <LiquidChrome
    class="site-webgl-bg"
    :base-color="[0.11, 0.11, 0.11]"
    :speed="0.18"
    :amplitude="0.3"
    :frequency-x="3.1"
    :frequency-y="2.6"
    :interactive="true"
  />
  <div class="site">
    <header class="site-header">
      <PillNav
        :logo="siteData.brand.logo?.src"
        :logo-alt="text.brand"
        :items="navItems"
        :active-href="activeHref"
        base-color="#050505"
        pill-color="rgba(255, 255, 255, 0.92)"
        hovered-pill-text-color="#ffffff"
        pill-text-color="#050505"
        ease="power3.easeOut"
        :initial-load-animation="true"
      />
    </header>

    <main v-if="route.name === 'home'" class="gooood-page">
      <section class="case-carousel" :aria-label="text.latest">
        <div class="carousel-track">
          <a
            v-for="(project, index) in carouselProjects"
            :key="`${project.slug}-${index}`"
            class="carousel-item reveal-card"
            :href="`#/cases/${encodeURIComponent(project.slug)}`"
          >
            <span class="media-frame">
              <img
                :src="index < 5 ? project.cover.src : undefined"
                :data-src="index < 5 ? undefined : project.cover.src"
                :alt="project.name"
                :loading="index < 5 ? 'eager' : 'lazy'"
                :fetchpriority="index < 3 ? 'high' : 'low'"
                decoding="async"
              />
            </span>
            <span class="carousel-caption reveal-text">{{ project.name }}</span>
          </a>
        </div>
      </section>

      <section class="home-cover">
        <figure class="portrait-frame">
          <img :src="siteData.brand.portrait.src" :alt="text.brand" loading="eager" fetchpriority="high" decoding="async" />
        </figure>
        <div class="cover-copy">
          <p class="brand-sub">{{ text.brandSub }}</p>
          <ScrollFloat
            tag="h1"
            :text="text.brand"
            container-class="home-title-float"
            :animation-duration="1"
            ease="back.inOut(2)"
            scroll-start="top bottom+=8%"
            scroll-end="top bottom-=12%"
            :stagger="0.035"
          />
          <div class="intro-copy">
            <p v-for="paragraph in companyIntro" :key="paragraph">{{ paragraph }}</p>
          </div>
        </div>
      </section>

      <section class="feed-section">
        <div class="feed-heading">
          <ScrollFloat
            tag="h2"
            :text="text.latest"
            container-class="section-title-float"
            :animation-duration="0.9"
            scroll-start="top bottom-=4%"
            scroll-end="bottom center"
            :stagger="0.045"
          />
          <span>{{ projects.length }} {{ text.cases }} / {{ siteData.totalImages }} {{ text.projectImages }}</span>
        </div>
        <div class="project-grid">
          <article v-for="(project, index) in homeProjects" :key="project.slug" class="project-card reveal-card">
            <a class="project-cover" :href="`#/cases/${encodeURIComponent(project.slug)}`">
              <img
                :src="index < 6 ? project.cover.src : undefined"
                :data-src="index < 6 ? undefined : project.cover.src"
                :alt="project.name"
                :loading="index < 6 ? 'eager' : 'lazy'"
                fetchpriority="low"
                decoding="async"
              />
            </a>
            <div class="project-info reveal-text">
              <div class="post-meta">
                <span>{{ project.category }}</span>
                <span>{{ project.imageCount }} {{ text.projectImages }}</span>
              </div>
              <a class="grid-title" :href="`#/cases/${encodeURIComponent(project.slug)}`">
                <h2>{{ project.name }}</h2>
                <p>{{ projectTranslation(project) }}</p>
              </a>
            </div>
          </article>
        </div>
      </section>
    </main>

    <main v-else-if="route.name === 'cases'" class="gooood-page">
      <section class="archive-head">
        <ScrollFloat
          tag="h1"
          :text="text.allProjects"
          container-class="archive-title-float"
          :animation-duration="0.9"
          scroll-start="top bottom-=4%"
          scroll-end="bottom center"
          :stagger="0.04"
        />
        <div class="filters" :aria-label="text.category">
          <button
            v-for="category in categories"
            :key="category"
            :class="{ active: activeCategory === category }"
            type="button"
            @click="activeCategory = category"
          >
            {{ category }}
          </button>
        </div>
      </section>
      <section class="feed-section compact">
        <div class="project-grid">
          <article v-for="(project, index) in filteredProjects" :key="project.slug" class="project-card reveal-card">
            <a class="project-cover" :href="`#/cases/${encodeURIComponent(project.slug)}`">
              <img
                :src="index < 9 ? project.cover.src : undefined"
                :data-src="index < 9 ? undefined : project.cover.src"
                :alt="project.name"
                :loading="index < 9 ? 'eager' : 'lazy'"
                fetchpriority="low"
                decoding="async"
              />
            </a>
            <div class="project-info reveal-text">
              <div class="post-meta">
                <span>{{ project.category }}</span>
                <span>{{ project.imageCount }} {{ text.projectImages }}</span>
              </div>
              <a class="grid-title" :href="`#/cases/${encodeURIComponent(project.slug)}`">
                <h2>{{ project.name }}</h2>
                <p>{{ projectTranslation(project) }}</p>
              </a>
            </div>
          </article>
        </div>
      </section>
    </main>

    <main v-else-if="route.name === 'case' && currentProject" class="article-page">
      <header class="article-head">
        <div class="post-meta">
          <span>{{ currentProject.category }}</span>
          <span>{{ currentProject.date }}</span>
          <span>{{ currentProject.imageCount }} {{ text.projectImages }}</span>
        </div>
        <ScrollFloat
          tag="h1"
          :text="currentProject.name"
          container-class="article-title-float"
          :animation-duration="0.9"
          scroll-start="top bottom-=4%"
          scroll-end="bottom center"
          :stagger="0.03"
        />
      </header>
      <section class="image-stream" :aria-label="text.sourceOrder">
        <figure v-for="(image, index) in currentProject.images" :key="image.src">
          <img
            :src="index === 0 ? image.src : undefined"
            :data-src="index === 0 ? undefined : image.src"
            :alt="`${currentProject.name} ${image.originalName}`"
            :loading="index === 0 ? 'eager' : 'lazy'"
            :fetchpriority="index === 0 ? 'high' : 'low'"
            decoding="async"
          />
          <figcaption>{{ currentProject.name }} / {{ image.section || image.originalName }}</figcaption>
        </figure>
      </section>
    </main>

    <main v-else-if="route.name === 'contact'" class="contact-page">
      <section class="contact-layout">
        <div class="contact-card">
          <ScrollFloat
            tag="h1"
            :text="text.contactTitle"
            container-class="contact-title-float"
            :animation-duration="0.9"
            scroll-start="top bottom-=4%"
            scroll-end="bottom center"
            :stagger="0.035"
          />
          <p>{{ text.contactIntro }}</p>
          <dl>
            <div>
              <dt>{{ text.projectScope }}</dt>
              <dd>{{ text.scopeValue }}</dd>
            </div>
            <div>
              <dt>{{ text.admin }}</dt>
              <dd><a href="/admin/">{{ text.enterAdmin }}</a></dd>
            </div>
          </dl>
        </div>
        <form class="inquiry-form" action="mailto:1871242312@qq.com" method="post" enctype="text/plain">
          <label v-for="field in inquiryFields" :key="field.label">
            <span>{{ field.label }}</span>
            <textarea v-if="field.type === 'textarea'" :name="field.label" :placeholder="field.placeholder" rows="6" />
            <input v-else :name="field.label" :placeholder="field.placeholder" />
          </label>
          <button type="submit">{{ text.submit }}</button>
        </form>
      </section>
    </main>

    <main v-else class="article-page">
      <header class="article-head">
        <ScrollFloat
          tag="h1"
          :text="text.notFound"
          container-class="article-title-float"
          :animation-duration="0.9"
          :stagger="0.04"
        />
        <a href="#/cases">{{ text.backCases }}</a>
      </header>
    </main>

    <footer class="site-footer">
      <div>
        <strong>{{ text.brand }}</strong>
        <span>{{ text.brandSub }}</span>
      </div>
      <nav>
        <a href="#/">{{ text.home }}</a>
        <a href="#/cases">{{ text.cases }}</a>
        <a href="#/contact">{{ text.contact }}</a>
      </nav>
    </footer>
  </div>
</template>
