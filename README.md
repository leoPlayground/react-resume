### gh-pages 배포 스트립트 추가
### prefix context 추가
### Setup
```javascript
#package.json

    "build": "next build && next export",
    "predeploy": "npm run build",
    "deploy": "touch out/.nojekyll && gh-pages -d out --dotfiles"
```

```javascript
#next.config.js
    images: {
        unoptimized: true,
    }
```

<br/>
<br/>
<br/>




![vsp](https://github.com/sjoleee/very-simple-portfolio/assets/82137004/3a22ec87-cc1a-4862-9d6e-ae8e1317891f)
This project is licensed under the terms of the MIT license.

출처: https://github.com/sjoleee/very-simple-portfolio

