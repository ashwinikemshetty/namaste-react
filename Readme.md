# Day 1

## notes

1. CDN (content delivery network)
2. What is crossorigin attribute in script tag?
3. How does the react support typescript when it is using flow?
4. How can we access react using CDN?
5. What is createElement returning?
6. Difference between library and framework

## Learnings

1. const heading = React.createElement("h1", {}, "Hello")
2. const root = ReactDOM.createRoot(document.getElementById('root'))
3. root.render(heading)
4. Costly operation is adding or removing th elements of DOM

To be great developer:

1. Be curious & question everything you write

# Day 2

## notes

1. Difference between dev dependency and dependency?
2. ^, ~ - difference in the?
3. Difference package.json and package-lock.json?
4. Transitive dependencies
5. npm (install) vs npx (executing)
6. The order of JS cdn files matter but why does the order in package.json doesn't matter?
7. Read more about browserlist (browserlist.dev)
8. what does the .gitignore do

- package.json has approx version, package-lock.json has exact version of it
- If you have package.json & package-lock.json, we can regenerate all the node modules

### Parcel

- Dev build
- Local server
- HMR (Hot module replacement)
- File watching algorithm - written in C++
- Faster builds while developing - caching
- Image optimization
- Minification
- Bundling
- Compress
- consistent hashing
- Code splitting
- Differential bunding - support older browsers
- Diagnostics
- Error handling
- HTTPS
- Tree shaking - remove unused code
- Different dev and prod bundles

dev : npx parcel index.html
prod: npx parcel build index.html
