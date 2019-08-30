---
layout: post
title: "How to Add Custom Fonts to a Shopify Store"
date: 2019-07-24 13:51:00 -0500
categories: [shopify, how-to]
comments: true
---

Many Shopify themes come with built-in options for changing the font used on the store. However sometimes it is necessary to customize the site by adding a font that fits the store’s look and feel. In this tutorial we will look at how to do so. 

<!--!more-->

## Finding fonts

The first task is finding a font that we want to add to the store. There are many sources available for finding fonts, such as [fontsquirrel.com](https://www.fontsquirrel.com/), [dafont](https://www.dafont.com/) and [behance](https://www.behance.net/) many are free while others are premium. One of the criteria when searching for a font to use is to make sure that it is includes a web version of the font (as opposed to an operating system version), specifically we need to make sure that we can get the WOFF and WOFF2 formats of the font. We need more than one web font format because there is not a single format that works in all web browsers, generally all modern web browsers support at least WOFF and WOFF2 formats. Although if needing to support older web browser such as Internet Explorer 9 or earlier will need a EOT version of the font as well. Once we found a font to use we need to download the font file itself. 

## Uploading the font files

Once we have found a font with at least WOFF and WOFF2 formats we need to upload the font to the Shopify store. After logging on to the Shopify admin, navigate to the Theme’s area. Locate the “Actions” drop down to the theme that we want to add this too. For this example we will add this to the live theme, however it may be better to make a duplicate of the theme and test on it beforehand. From the “Actions“ drop down, select “Edit Code“.

On the Edit code screen we want to locate the Assets folder in the list of theme files and folders. Right underneath the assets folder is a blue link “Add new asset” click that link to open a pop up window. Upload each version of the font.

￼![assets-folder](https://user-images.githubusercontent.com/9139991/61821514-f271d180-ae46-11e9-93da-7e1da2279be1.png)


## Add code that specifies using the new font

Once the font files have been added to the theme we need to add code so that they can be used in the theme. There are multiple ways to do this, however the easiest is to add it to the theme’s main stylesheet. While still in the Edit code screen, use the search bar and search for `.css`, files that match should appear, select the theme’s main stylesheet from the options and open it in the code editor. 

![search-and-locate-stylesheet](https://user-images.githubusercontent.com/9139991/61821610-20efac80-ae47-11e9-8b68-b33a1c9e7a87.png)

Scroll to the bottom of this file and add the following styles.

The format looks like this. 

<script src="https://gist.github.com/tyler-vs/2b1f96adcbc4312fbe1c06c9838e89ae.js"></script>

This is how it looks for the font we are adding.

```css

/* Add font declaration */
@font-face {
  font-family: "Amble-Regular-webfont";
  src: url('Amble-Regular-webfont.woff2') format('woff2'),
       url('Amble-Regular-webfont.woff') format('woff');
}

```

Make sure that this matches the font file!

![font-file-match-declaration](https://user-images.githubusercontent.com/9139991/61821484-de2dd480-ae46-11e9-92d5-9028900e8efd.png)

Now the font font can be used within the theme. If wanting to use the font for all the header elements we can make a style rule that targets all the headers, then add it to the stylesheet. 

<script src="https://gist.github.com/tyler-vs/d1ed93920d198764e326949474ed0396.js"></script>

To add the font to the body text, try this code snippet instead.

<script src="https://gist.github.com/tyler-vs/75f26f72b1ac1ac0c3967fa49af1592e.js"></script>

Lastly Click __Save__.