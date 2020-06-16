# Gridsome Remark Asciinema

Embed Asciinema in Gridsome markdown.

## Install

```bash
npm install gridsome-plugin-remark-asciinema
```

## How to use

```js
module.exports = {
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'blog/**/*.md',
        route: '/blog/:year/:month/:day/:slug',
        remark: {
          plugins: [
            [ 'gridsome-plugin-remark-asciinema']
          ]
        }
      }
    }
  ]
}
```

Or you can add it globally for all source

```js
  transformers: {
    remark: {
      plugins: [
        "gridsome-plugin-remark-asciinema",
      ],
    },
```

## Usage

```markdown
# Blog post title

Check out my asciinema

https://asciinema.org/a/14.js

```

## How the rendered html will look like:

`<script src="https://asciinema.org/a/14.js" id="asciicast-14" async></script>`

## License

MIT

## Resources
https://asciinema.org
https://asciinema.org/docs/embedding
