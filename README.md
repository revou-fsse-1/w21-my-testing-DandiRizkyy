# Week 20 Assignment NextJs Implementation (ISR/SSG/SSR)

![Assignment](/public/w20-images.png)

## Description ✍🏻

---

For this week's assignment, I am creating a website using Nextjs framework that integrates some functionality such as auth, displaying products to homepages and add products to wishlists as well as delete the products from wishlists.

For `Homepages` it's using ISR and SSG structures. I'm choosing ISR for homepages because it's not private routes.. the homepages will `revalidate each 10 seconds` if someone hit the api. It will bring good consistency for all users and it will ease the server load.

For `Wishlist` route i wrap it into private routes and only person who already login can access it. I'm planning to make it `SSR` at first but `got some troubles on implementing it.` So i make it into static pages for now, the user can still do the functionality as long as the javascript is enabled.

When the javascript is disabled, it still show the html structures.

## Installation 🔨

---

In order to install and develop locally, follow these steps:

1. Clone this repository

```bash
$ https://github.com/revou-fsse-1/w20-react-router-DandiRizkyy.git
```

2. install required dependencies

```bash
$ pnpm install
```

3. run the project locally

```bash
$ pnpm dev
```

4. go to your browser and input localhost:3000 to url path to start developing. :)

5. if you encounter pnpm version error, delete `pnpm-lock.yaml` and do `pnpm install` again.

## Pages 📖

---

1. Homepages
2. Wishlist
3. Cart (Not Yet Implemented)

## Technologies 🚀

---

- HTML
- Tailwindcss
- Javascript
- Typescript
- React
- Nextjs

## Links 🔗

---

Week 20 Assignment Links : https://w20-react-router-dandi-rizkyy.vercel.app/
