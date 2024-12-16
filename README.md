# My Payments Demo

## 🌐 整体设计
- **主题**：深色系统（黑色背景）
- **风格**：现代、简约、响应式
- **技术栈**：
  - `Next.js`
  - `React Hooks`
  - `Tailwind CSS`

## 📦 页面区块

### 1. 导航栏 (`Navbar`)
- 位于页面顶部
- 预计包含主要导航链接

### 2. 英雄区 (`Hero Section`)
- 标题：`Pricing Plans`
- 副标题：简短介绍定价计划
- 居中对齐，白色文字

### 3. 定价区 (`Pricing Section`)
#### 特点
- 可切换月度/年度计费
- 四个定价等级：
  1. **Hobby**：个人项目
  2. **Freelancer**：新业务基础
  3. **Startup**：创业公司
  4. **Enterprise**：企业级

#### 交互性
- 动态价格显示
- 悬停效果
- 订阅按钮

### 4. 合作伙伴区 (`Brought to You By`)
- 5个合作伙伴 Logo
- 灰度效果，悬停显示彩色
- 居中展示

### 5. 未完成区域
- Features Section
- FAQ Section
- CTA (Call to Action) Section

### 6. 页脚 (`Footer`)
- 四列链接：
  1. 产品
  2. 公司
  3. 资源
  4. 法律
- 深灰色背景
- 链接可悬停

## 🎨 设计细节
- 颜色：
  - 背景：黑色
  - 文字：白色
  - 强调：粉色边框/高亮
- 排版：
  - 大标题：`text-4xl`
  - 小标题：`text-2xl`
  - 正文：`text-xl`

## 🛠 技术实现
- 客户端组件
- 状态管理：`useState` 处理计费周期
- 响应式布局
- Tailwind CSS 动态类

## 🔜 潜在改进
- 完善未完成区域
- 添加更多交互细节
- 优化移动端展示

## 🚀 快速开始
1. 克隆仓库
2. 安装依赖：`npm install`
3. 运行开发服务器：`npm run dev`