<template>
  <div class="tag">
    <h2 class="tag-title" v-if="tag">#{{ tag.fields.title }}の記事</h2>
		<section class="latest-posts">
			<PostContainer
				page-type="tag"
				:posts="posts"
				:handle-click-more="fetchMore"
			/>
			<p v-if="!posts.length">#{{ tag.fields.title }} の記事はありません。</p>
		</section>
		<p class="tag-button"><nuxt-link to="/">TOPへ</nuxt-link></p>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'
import { CONTENT_TYPE_TAG } from '@/config/setting'
import PostContainer from '@/components/PostContainer'

export default {
	components: {
		PostContainer
	},
  head() {
    return {
      title: `#${this.tag.fields.title}`
    }
  },
  computed: {
    ...mapGetters({
      tag: 'tag',
      posts: 'tagPosts'
    }),
    ...mapState({
      page: state => state.index.tag.page
    })
  },
  async fetch({ store, params }) {
    store.commit('setTagId', { id: params.id })
    store.commit('clearPostIds', { pageType: CONTENT_TYPE_TAG })

    if (!process.browser) {
      await store.dispatch('fetchPosts', {
        pageType: CONTENT_TYPE_TAG,
        page: 1,
        tagId: params.id
      })
    }
  },
  mounted() {
    if (!this.posts.length) {
      this.fetchPosts({
        pageType: CONTENT_TYPE_TAG,
        page: 1,
        tagId: this.$route.params.id
      })
    }
  },
  methods: {
    ...mapActions(['fetchPosts']),
    fetchMore() {
      this.fetchPosts({
        pageType: CONTENT_TYPE_TAG,
        page: this.page + 1,
        tagId: this.$route.params.id
      })
    }
  }
}
</script>

<style lang="scss">
.tag {
	text-align: center;
  &-title {
    letter-spacing: 0.2em;
		margin: 15px 0;
  }
	&-button {
		margin: 30px 0;
		padding: 10px;
		border: 1px solid #258642;
		display: inline-block;
		color: white;
		background-color: #258642;
		a{
			color: white;
		}
	}
}
</style>
