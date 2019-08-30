---
layout: post
title: Moving from WordPress to Shopify
# date: 2019-08-30 11:14:00 -0500
categories: [jekyll, shopify, wordpress, blog]
published: true
comments: true
---

Last November I took up a new job as a support developer that assisted people using Shopify themes, given my background as a front-end development that mainly worked on WordPress, here are some comparisons I discovered between them.

## What I have liked in Shopify

Some of the first things that I came to enjoy in Shopify is that everything was hosted through Shopify's CDN, there was no need to setup servers, moving files around from a local machine to a remote machine which was usually required when using WordPress. As a front end developer this was a breath of fresh air, my forte is in HTML, CSS and JavaScript, having to move things around from server to server was not the highlight of my work.

Another cool feature of Shopify is the code editor embedded into the store, this allows themes to be updated immediately without having to uploading updated files to the server. WordPress also has the ability to edit the theme code from the WordPress admin, however the code editor that Shopify uses seems to have cooler features such as:

- highlights matching tags
- warning when code is broken
- can link directly to a line of code using the URL
- search feature

While the code editor is easy to access, it however can be too easy, this can be dangerous with non-tech savvy merchants that use Shopify, this makes me see the value is hiding the embedded code editor which WordPress does initially.

## What could be better

One feature that WordPress has that Shopify does not have is the ability to have what is called "child themes", this allowed me to inherit a themes styles and modify it without directly the underlying base theme. Shopify does not have child themes so instead it is best to make a duplicate of the theme, work on it, then publish it to take the place of the live theme. This works well and in some perspective even is even a more simpler way of modifying code.

Another feature which WordPress seems to have an upper hand is that the theme's have the option to be updated or not. While it is generally good to update, there are many merchants who like to "set it and forget it", however occasionally Shopify will have an update across all stores, with WordPress it is possible to simply not update the code. This argument can be turned around however, because when using WordPress updating WooCommerce would require making changes to the theme, in Shopify they make the system-wide updated for you.

## Conclusion

Both platforms have pros and cons however have found that Liquid and the Shopify platform really delightful, I would argue that WordPress allows for more granular controls however at the same time Shopify provides many features which circumvent the need of some of the granular features seen in WordPress.