## 1. 资源目录规范

所有作品资源统一放在：

    public/works/

每个作品必须有自己的独立目录：

    public/works/{work-slug}/

示例：

    public/works/ai-knowledge-base-qa/

## 2. 当前主作品资源

当前主作品 slug：

    ai-knowledge-base-qa

推荐目录：

    public/works/ai-knowledge-base-qa/
    ├── cover.png
    ├── login.png
    ├── knowledge-base-list.png
    ├── document-management.png
    └── qa-chat.png

## 3. 当前必须准备的截图

第一版需要准备以下图片：

### 3.1 cover.png

用途：

- 作品封面图
- Featured Work 大卡片
- Works Grid 卡片封面

建议内容：

- AI 知识库问答平台的主界面
- 或者问答页面与知识库页面组合图
- 或者一张经过裁剪优化的项目展示图

### 3.2 login.png

用途：

- 展示登录页面

要求：

- 不显示真实密码
- 不显示真实 token
- 不显示敏感账号
- 页面干净清晰

### 3.3 knowledge-base-list.png

用途：

- 展示知识库列表页面

要求：

- 知识库名称可以使用测试数据
- 不显示敏感业务内容
- 布局清晰

### 3.4 document-management.png

用途：

- 展示文档管理页面

要求：

- 展示上传、解析、向量化等能力
- 文件名可以使用测试数据
- 不暴露真实路径或隐私数据

### 3.5 qa-chat.png

用途：

- 展示问答对话页面

要求：

- 问题和回答内容要适合作品展示
- 不暴露 API key
- 不暴露真实用户数据
- 答案内容尽量体现 RAG 引用和知识库问答能力

## 4. 图片比例要求

所有项目图片推荐使用：

- 16:9 比例
- 推荐尺寸：1600x900
- 或推荐尺寸：1920x1080

不要使用：

- 过窄截图
- 过高长图
- 模糊截图
- 随意裁剪导致主体缺失的截图

## 5. 图片质量要求

截图必须满足：

- 清晰
- 无明显模糊
- 无敏感信息
- UI 状态完整
- 页面内容有代表性
- 截图边缘整齐
- 不出现浏览器多余隐私信息

## 6. 敏感信息检查

截图发布前必须检查是否包含：

- API Key
- Token
- 数据库连接地址
- 真实密码
- 真实手机号
- 真实邮箱
- 云服务器 IP
- 私有业务数据
- 真实用户信息
- 后台管理敏感路径

如有以上内容，必须打码或换成测试数据。

## 7. 未来新增作品资源规范

未来新增作品时，使用同样目录规范。

示例：

    public/works/new-project-slug/
    ├── cover.png
    ├── screenshot-1.png
    ├── screenshot-2.png
    └── screenshot-3.png

新增作品时需要同步修改：

    src/data/works.ts

但不应该修改核心组件结构。

## 8. 缺失图片处理规则

如果图片暂时不存在，页面必须显示美观占位卡片。

占位卡片应包含：

- 作品名称
- 截图标题
- Coming Soon 或 Preview Coming Soon
- 渐变背景
- 简洁图标或装饰元素

不允许出现：

- broken image
- 空白区域
- 浏览器默认图片错误图标
- 布局塌陷

## 9. 当前资源准备状态

当前阶段可以先使用占位图。

正式上线前建议完成：

- [ ] cover.png
- [ ] login.png
- [ ] knowledge-base-list.png
- [ ] document-management.png
- [ ] qa-chat.png

## 10. 上传 GitHub 前检查

提交前检查：

- [ ] 图片命名正确
- [ ] 图片路径正确
- [ ] 图片比例接近 16:9
- [ ] 图片没有敏感信息
- [ ] 图片在页面中正常显示
- [ ] 移动端图片不变形
- [ ] npm run build 通过