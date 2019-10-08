<template>
  <ul class="post-list">
    <li class="post-item" v-for="post in posts" :key="post.sys.id">
      <nuxt-link :to="`/posts/${post.sys.id}`">
				<div class="thumb">
					<img :src="post.fields.image.fields.file.url" :alt="post.fields.title">
				</div>
				<div class="post-text">
          <p>{{ formatDate(post.sys.createdAt) }}</p>
          <h3>{{ post.fields.title }}</h3>
        </div>
			</nuxt-link>
			<TagList class="entry-tag" :tags="post.fields.tags" />
    </li>
  </ul>
</template>

<script>
import TagList from '@/components/TagList'
export default {
	components: {
		TagList
	},
  props: {
    posts: Array
	},
	methods: {
    formatDate(iso) {
      const date = new Date(iso)
      const yyyy = new String(date.getFullYear())
      const mm = new String(date.getMonth() + 1).padStart(2, "0")
      const dd = new String(date.getDate()).padStart(2, "0")
      return `${yyyy}.${mm}.${dd}`
    }
  }
}
</script>

<style lang="scss">
ul.post-list {
	display: -webkit-inline-box;
	overflow-x: scroll;
	width: 100%;
}
.post-item {
	width: 200px;
	padding: 12px;
	border: 1px dotted darkseagreen;
	font-size: 80%;
	margin: 0 15px;
	img {
		width: 100%;
	}
	.post-text{
		text-align: center;
		h3 {
			color: black;
		}
	}
}
</style>