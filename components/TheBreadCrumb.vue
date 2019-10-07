<template>
  <div class="l-breadcrumb">
    <div class="l-breadcrumb__inner">
      <div class="l-breadcrumb__items">
        <li class="l-breadcrumb__item">
          <nuxt-link to="/">ホーム</nuxt-link>
        </li>
				<li class="l-breadcrumb__item">
          {{ breadcrumbs.fields.title }}
        </li>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    breadcrumbs: Object
  }
}
</script>

<style lang="scss">
.l-breadcrumb__items {
  
}

.l-breadcrumb__item {
  display:inline-block;/*横に並ぶように*/
  list-style: none;
  font-weight: bold;/*太字*/
}

.l-breadcrumb__item a:after {
  /* ▶を表示*/
  content: '>';
  padding: 0 3px;
  color: #79c295;
}

.l-breadcrumb__item a:last-child:after {
  content: '';
}

.l-breadcrumb__item a {
  display: inline-block;
  padding: 3px 10px;
  border-radius: 15px;
  text-decoration: none;
  color: white;
  background: #1db156;
  font-size: 0.9em;
}

.l-breadcrumb__item a:hover {
  background: #c9dbfb;
}
</style>