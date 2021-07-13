# imooc-news

##### 介绍

该项目采用了uni-app框架和uniCloud云数据库实现的，使用了vuex来管理数据、使用promise来封装请求数据。主要功能模块有首页、关注、我的、设置标签、评论文章、关注作者、收藏文章

首页功能模块说明：首页用到了懒加载数据，实现上拉加载更多的功能、收藏文章按钮功能的实现

搜索功能模块：使用vuex管理历史记录、搜索逻辑的实现、历史数据持久化

标签功能模块：编辑标签、使用自定义事件同步数据

详情功能模块：富文本渲染、评论功能、关注作者、文章的收藏点赞、评论列表

关注页功能模块：同步收藏文章和关注的作者

个人信息模块：个人中心页面数据处理、我的文章、问题反馈上传图片

##### 使用说明

克隆到本地后使用HBuilder X 直接运行项目，即可直接运行本项目。不过数据库是云数据库，需要您自行创建一个uniCloud的数据库。初始化数据库在uniCloud-aliyun > database中的db_init.json



##### 项目效果图

首页



![首页](https://gitee.com/nongstudy/images/raw/master/imooc-news/%E9%A6%96%E9%A1%B5.PNG)

关注页面



![我的关注](https://gitee.com/nongstudy/images/raw/master/imooc-news/%E5%85%B3%E6%B3%A8%E9%A1%B5%E9%9D%A2.PNG)

个人中心



![个人中心](https://gitee.com/nongstudy/images/raw/master/imooc-news/%E4%B8%AA%E4%BA%BA%E4%B8%AD%E5%BF%83.PNG)

意见反馈

![意见反馈](https://gitee.com/nongstudy/images/raw/master/imooc-news/%E6%84%8F%E8%A7%81%E5%8F%8D%E9%A6%88.PNG)

详情页面

![详情页面](https://gitee.com/nongstudy/images/raw/master/imooc-news/%E8%AF%A6%E6%83%85%E9%A1%B5%E9%9D%A2.PNG)



