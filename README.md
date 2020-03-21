# 2019-ADAWARE-WEBSITE-v31

[![Netlify Status](https://api.netlify.com/api/v1/badges/2dd2f862-7b2c-4c76-9be4-d6a166b054c3/deploy-status)](https://app.netlify.com/sites/adaware/deploys)


## Instrucciones

**If you want to run these template on Gatsby Js server , then**

1. 'yarn' on root folder.
2. 'yarn gatsby-dev' root folder.
   Then , please go to address localhost:8000 on your browser and You will find website page.

**If you want to Build these template on Gatsby Js server , then**
3. 'yarn' on root folder.
4. 'yarn gatsby-build' on root folder.
   3.'yarn gatsby-serve' on root folder.

**To run the SuperProps Next.js app in docker**

- docker build -t superprops/landing-next -f ./packages/landing/Dockerfile .
- docker run -it -p 3000:3000 superprops/landing-next:latest
- Open http://localhost:3000

**To run the SuperProps Gatsby.js app in docker**

- yarn gatsby-build
- docker build -t superprops/landing-gatsby -f ./packages/landing-gatsby/Dockerfile .
- docker run -it -p 8080:8080 superprops/landing-gatsby:latest
- open http://localhost:8080
