---
layout: post
title: "How to Clear the Formatting of Content in the Rich Test Editor"
date: 2019-09-05 06:58:00 -0400
categories: [shopify, how-to]
comments: true
---

Many Shopify merchants have or had an existing store's which they would like to migrate that store's content into their Shopify store. This process can be problematic when unseen markup is copied over as well.

<!--!more-->

## Formatted Text vs Plain Text 

Sometimes when copying over content from a source there is unseen markup being copied over as well, this unseen markup usually includes HTML which is good in that it allows lists, tablets and images to be copied over however ideally we just want the content without the markup. To view the unseen markup, click the [HTML](https://help.shopify.com/en/manual/productivity-tools/rich-text-editor#add-html-content-with-the-rich-text-editor-desktop-specific) view option in the Rich Text Editor.

Here is a sample of what the Rich Text Editor shows:

![rich-text](https://user-images.githubusercontent.com/9139991/64337691-e16fc080-cfad-11e9-8e92-707b5b89fb03.png)

Here is what the unseen markup looks like when using the HTML view mode.

![markup](https://user-images.githubusercontent.com/9139991/64337740-f5b3bd80-cfad-11e9-9831-bea41cf3a094.png)

Notice the tags such as the `<h1>`, `<h2>`, `<h3>`, `<p>`, these correspond to the Rich Text formatting and generally do not cause an issue. It is the `<div class="desktop-6 tablet-3 mobile-3">` which can carry potential issues with style conflicts with the theme. 


## Clearing the Content Formatting

Sometimes the unseen markup will not cause issues at all and there is no need to remove the unseen markup from the content. However if the styles do cause an issue or style conflict with the theme's code then it may be best to clear the unseen markup, this will make the text content more predictable.

The steps are as follows: 

1. Copy all of the Rich Text content
2. Switch to HTML mode and replace with copied content
3. Reformat the content

_Important: Before proceeding make a duplicate of the page, this makes sure that there is a backup when reformatting the content._


### Copy the Rich Text Content

The first step is to simply copy all the existing content. Go to the Rich Text Editor and select all the text and use the keyboard short cuts to copy it.

### Switch to HTML mode and replace with copied content

Next, switch to the HTML mode and select all of the markup seen and delete it. Then paste in the content that we copied into the editor. Please be aware that images, tables, lists and formatting (i.e. bold, italic, underline) will not be carried over as formatting will need to be re-applied in the next step.

### Reformat the content

With the plain text added to the HTML mode of the Rich Text Editor we can switch to Rich Text mode from HTML mode and reapply the formatting, which headings are used, add horizontal rules, add in pictures and tables back to the content as needed. 

That's about it. The content should be removed of any unseen (and unnecessary) markup and it removes the possibility of having any unseen markup potentially causing issues with the theme's layout.