<template>
  <div class="page-container">
    <PostList :posts="posts" />
    <ButtonMore v-if="hasMorePosts" :handle-click="handleClickMore" />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import PostList from '@/components/PostList'
import ButtonMore from '@/components/ButtonMore'

export default {
	components: {
		PostList,
		ButtonMore
	},
	props: {
		pageType: String,
    posts: Array,
    handleClickMore: Function
	},
	computed: {
    ...mapState(['index']),
    page() {
      return this.index[this.pageType].page
    },
    lastPage() {
      return this.index[this.pageType].lastPage
    },
    isFetching() {
      return this.index[this.pageType].isFetching
    },
    hasMorePosts() {
      return !this.isFetching && this.page < this.lastPage
    }
  }
}
</script>

<style lang="scss">
.page-container {
	margin:0 5%;
}
</style>