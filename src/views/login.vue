<template>
	<div>
		<h1>登录页面</h1>
		<i-button type="primary" @click="modal6 = true">显示对话框</i-button>
		<Modal
		    :visible.sync="modal6"
		    title="对话框标题"
		    :loading="loading"
		    @on-ok="asyncOK">
		    <p>点击确定后，对话框将在 2秒 后关闭。</p>
		</Modal>
		
	</div>
    
</template>
<script>
	import { Modal } from 'iview'
    export default {
        data () {
            return {
                modal6: false,
                loading: true
            }
        },
        methods: {
            asyncOK () {
                setTimeout(() => {
                    this.modal6 = false;
                }, 2000);
            }
        }
    }
</script>
