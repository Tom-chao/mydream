复习:重点
1:swiper|lodash|moment插件工作的时候经常使用----【API：有时间翻看一下】
2:$nextTick,组件实例的方法。
在下次DOM更新循环结束之后执行延迟回调。在修改数据之后立即使用这个方法，获取更新后的 DOM。



1)合并参数*****
为什么需要合并参数（query|params）:因为这些参数，对于search是有用的，因为search通过这些参数
向服务器发请求，需要把这些参数携带给服务器，服务器就会返回相应的用户的搜索的数据，search就可以进行展示。

1.1:开发的三级联动业务，当你点击a标签的时候，会进行路由的跳转，将产品的名字与id传递给search模块----（query）
1.2:点击搜索按钮的时候，用户输入进来的关键字，点击按钮的时候会通过params参数传递给search模块-----（params）
1.3路由跳转（home->search）,两个地方，三级联动（typeNav）、Header组件（搜索按钮）







2)完成search静态组件
再次提醒：组件通信很重要-----【七种组件通信：务必要会】
接下来开发search搜索模块：注意在老师给你们的文件夹中有search静态组件，复制过来即可。
2.1书写静态页面【布局、样式】
2.2拆分组件
































3)获取search模块数据





4)展示商品列表数据





5)获取用户搜索数据并进行展示




6)关键字业务完成

