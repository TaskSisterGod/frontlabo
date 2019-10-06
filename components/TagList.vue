<template>
	<div>
		<ul class="tag-list">
			<li class="tag-item" v-for="tag in tags" :key="tag.sys.id">
				<nuxt-link :to="`/tag/${tag.sys.id}/`">#{{ tag.fields.title }}</nuxt-link>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
  props: {
    tags: Array
  }
}
</script>

<style lang="scss" scoped>
.tag {
  &-item {
    margin: 0.4rem;
		font-size: 90%;
		list-style: none;
		display: inline-block;
		a,a:visited{
			color: rgb(76, 112, 76)
		}
  }
	&-list {
		text-align: center;
	}
}
</style>
