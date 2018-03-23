---
title: Download Page with WordPress
layout: page
image_paths:
  default: img/projects/mid-downloads-small.jpg
  large: img/projects/mid-downloads-large.jpg
image_alt: Screenshot of the Downloads page on the client's live website.
highlights:
- ACF Pro Integration
- WordPress Development
- Front-end
summary: Creating a page with downloadable content for a client website using WordPress and ACF Pro Plugin.
---

It is a common need for a business’s website to provide downloadable content for a user, especially when that user is a paying customer. For this project, the client’s website needed similar functionality, allowing users to download service manuals, catalogs and brochures and also allow for certain pieces of content to only be available to logged-in users. The functionality would seem pretty simple if only a few pieces of content existed to download. However, our client had many product lines which required more creativity when deriving a solution. That was the challenge being faced when developing a web page on the client’s website for downloadable content.

The creative team had already determined the design of the to-be downloads page, so it became a matter of figuring out how to fit the pieces of technologies together. The content would need to be categorized so that the user can easily find what they are looking for and some form of functionality needs to be in place so that only certain users can download certain content. The client was not expected to be computer savvy so while I would setup the initial downloadable content, the client would likely need an easy way to add, remove and update such content in the future.

This being a WordPress project, the [Advance Custom Fields plugin](https://www.advancedcustomfields.com/) would be my favored tool for getting most of the desired functionalities accomplished for the downloads page. Not only would the ACF plugin provide an easy way to get data from the WordPress Dashboard into the front-end of the downloads page, the client would likely find the interface to be familiar and easy to use. Using the ACF plugin, an interface for the client was created with fields for certain pieces of data that would need to appear in the front-end. Some examples of the fields that were used in the interface includes a text field to name the piece of downloadable content, a field to provide the actual file of the content and a field to categorize the content.

The next step was to get the content from those fields to display on the actual downloads page, this was done before prettying it up with CSS and JavaScript. A WordPress theme template file was created specifically for the new downloads page. The theme template file would contain the PHP code that integrates and pulls the data from the WordPress Dashboard and utilized functions that the ACF plugin which acted like a sort of API. Once the data from the ACF interface in the WordPress Dashboard was flowing through and displaying on the page correctly, I switched my concerns to implementing the downloads pages design that the creative team had provided me. The design dictated that the downloadable content would be contained within collapsible sections, each collapsible section was a specific category of content. This design pattern prevents the user from being overwhelmed from seeing a long list of all the downloadable content at once. Having collapsible content also provides an easy way for the user to navigate to the different categories of content to find that content that they are looking for.

The last piece of functionality was to make one section of the collapsible content on the page, which contained technical drawings, to be only be displayed to logged-in users. This happened to be the easiest piece of functionality to implement in the project. In a fashion that WordPress developers commonly enjoy, there already existed a free plugin which would integrate with ACF and also provided the desired hiding functionality. The plugin used for this final piece of functionality, provided me a shortcode to use in the theme’s template files. The shortcode is then wrapped around the content that only logged-in users should be able view and will prevent the wrapped content from being sent to the browser if the user is not logged-in.

After a few rounds of collaboration with the creative team, some CSS styles were tweaked and the collapsible sections were made sure to collapsed smoothly, the downloads page finally received the approval from the creatives. The downloads page was pushed from the local development environment onto the test server and after some additional testing the page went fully live without any downtime to the live site.

The end result was a web page page for downloadable content that covered all the desired functionalities that were sought for. As of March 22nd 2018, despite the client’s website having gone through some minor redesign changes, the downloads page has seemingly not been updated since the time that I worked on it. As outlined earlier, it took multiple technologies, those being HTML5, CSS3, WordPress, PHP, JavaScript and Git. It also took multiple persons, from the client who originated the idea, to the creatives who envisioned the pages design and then to  myself as the developer who turned the static design into a fully functioning live website. 
