# Orinda

审计数智化文章与产品发布平台，基于 Jekyll 与 [Chirpy](https://github.com/cotes2020/jekyll-theme-chirpy) 构建。

访问地址：<https://orindaaudit.github.io/notes/>

## 内容结构

- `首页`：最新文章与产品精选
- `文章`：技术实践、行业观察和学术研究
- `产品`：开源项目与实践工具
- `公众号`：微信公众号二维码与订阅入口

## 本地运行

需要 Ruby 3.1 或更高版本与 Bundler：

```bash
bundle install
bundle exec jekyll serve
```

打开 <http://127.0.0.1:4000/notes/>。

## 内容维护

- 新文章放入 `_posts/`，文件名格式为 `YYYY-MM-DD-title.md`
- 顶部导航页面位于 `_tabs/`
- 首页布局位于 `_layouts/home.html`
- 品牌样式位于 `assets/css/orinda.css`
- 网站信息、域名与评论配置位于 `_config.yml`

推送到 `main` 分支后，GitHub Actions 会构建并发布 GitHub Pages。
