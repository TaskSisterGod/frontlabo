 <template> 
	<article class="article">
    <div class="single">
			<TheBreadCrumb :breadcrumbs="post" />
      <h1 class="post-title">{{ post.fields.title }}</h1>
      <p class="post-created-at">{{ formatDate(post.sys.createdAt) }}</p>
			<TagList class="entry-tag" :tags="post.fields.tags" />
      <div class="post-content line-numbers" v-html="$md.render(post.fields.context)"></div>
			<p class="tag-button"><nuxt-link to="/">TOPへ</nuxt-link></p>
    </div>
  </article>
</template>

<script>
import TagList from '@/components/TagList'
import TheBreadCrumb from '@/components/TheBreadCrumb'
import { mapGetters } from 'vuex'

export default {
	components: {
		TagList,
		TheBreadCrumb
	},
	computed: {
		...mapGetters(['post']),
	},
	head() {
    return {
      title: `${this.post.fields.title} | 邦画だってさ`
    }
  },
	async fetch({ store, params }) {
		console.log(store)
		console.log(params)
    if (!process.browser) {
      await store.dispatch('fetchPost', { id: params.id })
    }
    store.commit('setPostId', { id: params.id })
  },
  methods: {
    formatDate(iso) {
      const date = new Date(iso)
      const yyyy = new String(date.getFullYear())
      const mm = new String(date.getMonth() + 1).padStart(2, "0")
      const dd = new String(date.getDate()).padStart(2, "0")
      return `${yyyy}.${mm}.${dd}`
    }
	},
	mounted() {
    Prism.highlightAll()
  }
}
</script>

<style lang="scss">
article.article {
  padding: 10px;
  .single {
    max-width: 900px;
    margin: 0 auto;
    padding: 10px;
    color: #222;
    border-radius: 10px;
    h1, h2, h3 {
      margin: 16px 0;
    }
    h1.post-title {
      font-size: 32px;
      text-decoration: underline;
    }
    .post-content {
			font-size: 85%;
      h1 {
        font-size: 32px;
      }
      h2 {
        font-size: 24px;
        background: #258642;
				color: white;
				padding-left: 15px;
      }
      p {
        margin: 16px 0;
        font-size: 16px;
      }
      img {
        max-width: 100%;
        border: 1px solid #000;
      }
    }
  }
}
</style>