This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## App Setup
```
npx create-next-app@latest
# or
yarn create next-app
# or
pnpm create next-app
```

- cd into app
- git init

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Structure

### public
- static folder for anything directly accesible in the browsers
 - images, icons, pdfs

### pages
- api: for  
- index: hompage for app

### styles
- globals: spread around the entire app; also cant import global css within components 
- Home.module.css: component based stylesheet


## Casing conventionals
- Capitilize for components
- Lowercase for pages


## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.


## Deploy Static
First, npm install serve:

```bash with admin privelege eg sudo 
npm i -g serve
```

Second, run the build command:

```
npm run build

```

Then, run serve:

-this would then serve the build export of out and run on port 8000 on the localhost

```
serve -s out -p 8000

```