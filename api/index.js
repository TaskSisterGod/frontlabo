import { createClient } from 'contentful'
import { CONTENT_TYPE_TAG, LIMIT_PAGE_NUM,POSTS_PER_PAGE } from '@/config/setting'

const client = createClient({
	space: process.env.CTF_SPACE_ID,
  accessToken: process.env.CTF_ACCESS_TOKEN
})

export const fetchPosts = ({page,tagId = null}) => {
	let param = {
		content_type: POSTS_PER_PAGE,
    skip: (page - 1) * LIMIT_PAGE_NUM,
    order: '-sys.createdAt',
		limit: LIMIT_PAGE_NUM,
	}
	if(tagId){
		param['fields.tags.sys.id'] = tagId
	}
	return client.getEntries(param)
}

export const fetchPost = id => client.getEntry(id)

export const fetchTags = () =>
  client.getEntries({
    content_type: CONTENT_TYPE_TAG
  })