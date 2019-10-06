<template>
	<div class="l-main-nav">
		<nav>
			<p @click="openFrontModal">FrontLaboとは</p>
			<p @click="openMailModal">お問い合わせ</p>
			<p>フロントエンド用語辞典(作成中)</p>
		</nav>

		<ModalWindow @close="closeFrontModal" v-if="frontmodal">
			<h4 class="modal-title">FrontLaboとは</h4>
			<p>フロントエンドエンジニアに特化したブログです。<br>このブログではフロントエンドエンジニアのスキルやキャリア等を中心に発信していきます。</p>
		</ModalWindow>

		<ModalWindow @close="closeMailModal" v-if="mailmodal">
			<h4 class="modal-title">お問い合わせ</h4>
			<form name="contact" method="POST" netlify>
				<p>
					<label>Your Name: <input type="text" name="name" /></label>   
				</p>
				<p>
					<label>Your Email: <input type="email" name="email" /></label>
				</p>
				<p>
					<label>Your Role: <select name="role[]" multiple>
						<option value="leader">Leader</option>
						<option value="follower">Follower</option>
					</select></label>
				</p>
				<p>
					<label>Message: <textarea name="message"></textarea></label>
				</p>
				<p>
					<button type="submit">Send</button>
				</p>
			</form>
		</ModalWindow>
	</div>
</template>

<script>
import ModalWindow from '@/components/ModalWindow'
export default {
	components: {
		ModalWindow
	},
	data() {
		return {
			frontmodal: false,
			mailmodal:false
		}
	},
	methods: {
		openFrontModal(){
			this.frontmodal = true
		},
		closeFrontModal(){
			this.frontmodal = false
		},
		openMailModal(){
			this.mailmodal = true
		},
		closeMailModal(){
			this.mailmodal = false
		}
	}
}
</script>

<style lang="scss">
.l-main-nav {
	text-align: center;
	nav {
		display: flex;
		font-size: 80%;
		cursor: pointer;
		p {
			flex:1 1 0;
			text-decoration: underline;
		}
	}
}
.modal-title {
	margin: 10px 0;
}
</style>