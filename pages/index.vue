<template>
  <section class="latest-posts">
    <div class="posts">
			<h2 class="l-main-title">最新の記事</h2>
			<PostContainer
				page-type="tag"
				:posts="posts"
				:handle-click-more="fetchMore"
			/>
    </div>
  </section>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'
import client from '~/plugins/contentful'
import TagList from '@/components/TagList'
import PostContainer from '@/components/PostContainer'
import { POSTS_PER_PAGE } from '@/config/setting'

export default {
	components: {
		TagList,
		PostContainer
	},
	computed: {
    ...mapGetters(['posts']),
    ...mapState({
      page: state => state.index.post.page
    })
  },
  async fetch({ store }) {
    if (!process.browser) {
      await store.dispatch('fetchPosts', { pageType: POSTS_PER_PAGE, page: 1 })
    }
  },
  head: {
    title: 'frontLabo',
	},
	mounted() {
    if (!this.posts.length) {
      this.fetchPosts({ pageType: POSTS_PER_PAGE, page: 1 })
    }
  },
  methods: {
    ...mapActions(['fetchPosts']),
    fetchMore() {
      this.fetchPosts({ pageType: CONTENT_TYPE_POST, page: this.page + 1 })
    }
  }
}
</script>

<style lang="scss">
.posts {
	h2.l-main-title{
		text-align: center;
		color: #258642;
		margin: 15px 0;
	}
}
</style>