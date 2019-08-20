<template>
  <div class="col-lg-4 sidebar ftco-animate">
    <div class="sidebar-box">
      <form action="#" class="search-form">
        <div class="form-group">
          <span class="icon icon-search"></span>
          <input type="text" class="form-control" placeholder="Type a keyword and hit enter" />
        </div>
      </form>
    </div>
    <div class="sidebar-box ftco-animate">
      <h3>Categories</h3>
      
      <!-- 카테고리 정보영역 -->
      <BlogCategoryInfo :categoryInfos="blogData.categoryInfos"></BlogCategoryInfo>
    </div>
    
    <!-- 태그 클라우드 -->
    <div class="sidebar-box ftco-animate">
      <h3>Tag Cloud</h3>
      <ul class="tagcloud">
        <a href="#" class="tag-cloud-link" v-for="tag in blogData.tagCloud" :key="tag">{{ tag }}</a>
      </ul>
    </div>

    <div class="sidebar-box ftco-animate">
      <h3>Archives</h3>
            
      <!-- 연월별 작성글 컴포넌트 -->
      <BlogArchives :archives="blogData.archives"></BlogArchives>
    </div>
  </div>
</template>

<script>
import BlogArchives from "~/components/molecules/BlogArchives.vue"
import BlogCategoryInfo from "~/components/molecules/BlogCategoryInfo.vue"

export default {
    components: {
        BlogArchives,
        BlogCategoryInfo
    },

    props: {
      blogData: {
        type: Object,
        default: () => {}
      }
    }
}
</script>
