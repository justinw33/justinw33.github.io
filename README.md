To get this working on gh pages: followed https://reginafurness.medium.com/client-side-routing-on-github-pages-with-create-react-app-f5a393341c2

1. include 404.html under public folder
2. add script portion https://github.com/rafgraph/spa-github-pages/blob/gh-pages/index.html#L21-L42 to index.html

to deploy changes run npm run deploy which should result in pushing to `gh-pages` branch
