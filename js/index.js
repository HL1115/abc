(function(m, doc) {
				m.init();
				// 左划菜单切换
				m('.mui-off-canvas-wrap').on('tap', '.menu', function(event) {
					m('.mui-off-canvas-wrap').offCanvas().toggle();
				});
				// 退出事件
				m('.logout')[0].addEventListener('tap', function() {
					m.openWindow({
						url: 'login.html',
					});
				})
				
				m('.mui-table-view-cell').each(function(idx) {
					this.index = idx;
				})

				function togg(idx) {
					m('.con').each(function(i) {
						if(idx == i){
							this.style.display = 'block';
						}else{
							this.style.display = 'none'
						}
					})
				}
				togg(0);
				// m('.mui-inner-wrap').on('tap','button',function(){
				// 	m.alert('请选择要处理的订单');
				// })
				m('.nav').on('tap', '.mui-table-view-cell', function() {
					togg(this.index)
					m('.title')[0].innerHTML = this.innerText;
				})
				m('.mui-content').on('tap','.addsh',function(){
					this.nextElementSibling.style.display = 'flex'
				})
				$('.close').on('tap',function(){
					this.parentNode.parentNode.parentNode.style.display = 'none'
				})
				// $('.modal').on('tap',function(){
				// 	$(this).hide()
				// })
				// $('.content').on('tap',function(e){
				// 	e.stopPropagation();
				// })
				
				// 收款账号
				$('.acc .edit').click(function(){
					$(this).parents('.con').find('.modal').css('display','flex')
				})
				$('.del').click(function(){
					m.confirm('确定要删除此条记录吗')
				})
				// 管理员
				$('.gl .edit').click(function(){
					$(this).parents('.con').find('.edit-modal').css('display','flex')
				})
				$('.qx').click(function(){
					$(this).parents('.con').find('.fpqx').css('display','flex')
				})
				$('.gl .del').click(function(){
					m.confirm('确定要删除此记录吗')
				})
				// $('.modal').click(function(){
				// 	console.log($(this).parents('.modal'))
				// 	$(this).parents('.modal').css('display','none')
				// })
				$('input').click(function(){
					console.log(this.checked)
					// this.checked = this.checked
				})
				$('.czbtn').click(function(){
					$(this).parents('.con').find('.cz').css('display','flex')
				})
				$('.xgbtn').click(function(){
					$(this).parents('.con').find('.xg').css('display','flex')
				})
				$('.bjbtn').click(function(){
					$(this).parents('.con').find('.bj').css('display','flex')
				})
				$('.selectAll').click(function(){
					if($(this).find('input')[0].checked){
						$(this).parent().find('.mui-table-view').find('input').attr('checked',true)
					}else{
						$(this).parent().find('.mui-table-view').find('input').removeAttr('checked')
					}
				})
			}(mui, document));