---
layout: post
title: "How to Clear the Formatting of Content in the Rich Text Editor"
date: 2019-09-05 06:58:00 -0400
categories: [shopify, how-to]
comments: true
---

Many Shopify merchants have or had an existing store's which they would like to migrate that store's content into their Shopify store. This process can be problematic when unseen markup is copied over as well.

<!--!more-->

## Formatted Text vs Plain Text 

Sometimes when copying over content from a source there is unseen markup being copied over as well, this unseen markup usually includes HTML which is good in that it allows lists, tablets and images to be copied over however ideally we just want the content without the markup. To view the unseen markup, click the [HTML](https://help.shopify.com/en/manual/productivity-tools/rich-text-editor#add-html-content-with-the-rich-text-editor-desktop-specific) view option in the Rich Text Editor.

Here is a sample of what the Rich Text Editor shows:

![1-rich-text](https://user-images.githubusercontent.com/9139991/65791879-9e2deb00-e130-11e9-9431-2e3daae53c86.png)

Here is what the unseen markup looks like when using the HTML view mode.

![2-html-view](https://user-images.githubusercontent.com/9139991/65791880-9e2deb00-e130-11e9-8b7f-9b49e89373c3.png)

Notice the tags such as the `<h1>`, `<h2>`, `<h3>`, `<p>`, these correspond to the Rich Text formatting and generally do not cause an issue. It is the `<div class="desktop-6 tablet-3 mobile-3">` which can carry potential issues with style conflicts with the theme. 


## Clearing the Content Formatting

Sometimes the unseen markup will not cause issues at all and there is no need to remove the unseen markup from the content. However if the styles do cause an issue or style conflict with the theme's code then it may be best to clear the unseen markup, this will make the text content more predictable.

The steps are as follows: 

_Important: Use the duplicate feature to make a duplicate of the page just in case._

1. Select all of the Rich Text content
2. Hit the [Clear Formatting button](https://help.shopify.com/en/manual/productivity-tools/rich-text-editor#clear-formatting-in-the-rich-text-editor-desktop-specific)

![3-clear-formatting-button](https://user-images.githubusercontent.com/9139991/65791881-9e2deb00-e130-11e9-9314-9d80a62db914.png)

Check out the results, it removes the `class` attribute from the `<div>`'s which can prevent style conflicts.

![4-cleared-formatting](https://user-images.githubusercontent.com/9139991/65791882-9e2deb00-e130-11e9-8031-487787be3b5b.png)


## Things that it won't fix

Clearing the formatting is great however unseen markup can still exist and cause some issues, if this is the case then we need to copy all of the Rich Text content and go back to HTML view and paste it in, it should now only show the plain text and no markup in the HTML mode, then switch back to the Rich Text editor to apply formatting (bold, italic, underline, alignment, color, ect.) and add back tables, lists, images that weren't carried over.