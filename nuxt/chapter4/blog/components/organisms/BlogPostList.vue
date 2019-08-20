<template>
  <div>
    <BlogPostCard></BlogPostCard>

    <BlogPostCard></BlogPostCard>

    <!-- 아래의 글 3개는 삭제함 -->
  </div>
</template>

<script>
import BlogPostCard from "~/components/molecules/BlogPostCard.vue"

export default {
    components: {
        BlogPostCard
    }
}
</script>
