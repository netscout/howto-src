<template>
<div>
    <!-- 네비게이션이 있던 부분 -->
    <BlogNavigation></BlogNavigation>
    <!-- END nav -->

    <div class="hero-wrap js-fullheight" style="background-image: url('images/bg_3.jpg');"
        data-stellar-background-ratio="0.5">
        <div class="overlay"></div>
        <div class="container">
            <div class="row no-gutters slider-text js-fullheight align-items-center justify-content-center"
                data-scrollax-parent="true">
                <div class="col-md-9 ftco-animate text-center" data-scrollax=" properties: { translateY: '70%' }">
                    <h1 class="mb-4" data-scrollax="properties: { translateY: '30%', opacity: 1.6 }">Discover the wonder
                        of the world</h1>
                    <p data-scrollax="properties: { translateY: '30%', opacity: 1.6 }">Find great places to stay, eat,
                        shop, or visit from local experts</p>
                </div>
            </div>
        </div>
    </div>

    <section class="ftco-intro">
        <div class="container">
            <div class="row justify-content-start">
                <div class="col-md-9">
                    <h1>We're <strong>Traveler</strong> &amp; <strong>Blogger</strong> from Paris, Italy Who Loves
                        Documenting Adventures &amp; Discoveries Around the World</h1>
                </div>
            </div>
        </div>
    </section>

    <section class="ftco-section">
        <div class="container">
            <div class="row">
                <div class="col-lg-8">
                    <div class="row">
                        <!-- 글 목록이 표시되던 부분 -->
                        <BlogPostList></BlogPostList>
                    </div>
                    
                    <!-- 페이징 영역 -->
                    <BlogPaging></BlogPaging>

                </div><!-- END-->
                <!-- 우측 사이드바가 있던 부분 -->
                <BlogRightSide></BlogRightSide>
                <!-- END COL -->
            </div>
        </div>
    </section>

    <!-- 푸터 영역이 있던 부분 -->
    <BlogFooter></BlogFooter> 
</div>
</template>

<script>
import BlogNavigation from "~/components/organisms/BlogNavigation.vue"
import BlogPostList from "~/components/organisms/BlogPostList.vue"
import BlogRightSide from "~/components/organisms/BlogRightSide.vue"
import BlogFooter from "~/components/organisms/BlogFooter.vue"
import BlogPaging from "~/components/molecules/BlogPaging.vue"

export default {
    components: {
        BlogNavigation,
        BlogPostList,
        BlogRightSide,
        BlogFooter,
        BlogPaging
    },
}
</script>

<style>
</style>
