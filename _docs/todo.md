
# todo list


- embedlly
- seo/meta/open graph tags
- gulp/build tools
- gist supports
- discuss 
- semver
- api's
- favicon
- img generations (see gulp task)
- optimization/performance
- change log (add public page)
- 404 page
- semantic footer notes / sidebar note
- highlighting
- in page linking
- progressive enhancements
- search

### WP Shape Theme goals/outcome

- A well-organized, modular file structure
- All the search-engine optimization you’ll really need
- Google-supported Microformat markup
Valid and logical semantic markup structure than can be used to create ANY - layout
- Smart default CSS layouts
- Localization support: translation-ready mark-up and an RTL stylesheet
- Dynamic body, post, and comment classes
- Separated trackbacks and threaded comments
- Two widget areas: the first one with default widgets, and the second coded to disappear when it’s empty
- Support for the Aside Post Format (after the tutorial, you’ll easily be able to add support for more post formats)
- A Custom Menu, Flexible Custom Header Image, and a Custom Background
- Simple responsive styling, including a lightweight navigation menu for mobile devices
- And all the typical WordPress stuff you expect from a theme

From [Article](https://themeshaper.com/2012/10/22/the-themeshaper-wordpress-theme-tutorial-2nd-edition/)

---

### WP CSS Specs

- A stylesheet that resets default CSS across all web browsers and makes a sane standard we can work from
- A set of 5 fluid stylesheets that will create ALL the common blog and website layouts you expect—and each one ready to adapt into a fixed width layout.
- Fonts with rem units so that they are easy to adapt
- Many global and common markup styles pre-defined.
- Simple responsive navigation menu for small screens.
- Default button styles.
- A blank, commented stylesheet with all major selectors included, ready for your styles.
- An example stylesheet with a sample, CSS-only design so that you can see the selectors in action, and build off of it.
- An introduction to RTL stylesheets, with a working RTL stylesheet for our sample CSS-only design.

### RTL Basics

Adding an RTL stylesheet

If you plan to distribute your theme, it’s highly recommended that you add an RTL stylesheet. RTL stylesheets flip the horizontal direction of your theme to accomodate languages that read from right to left. Therefore, in your RTL stylesheet, you must:

Convert all of your “float: left” rules to “float: right”, and vice versa
Convert “left” margin and padding to “right” margin and padding, and vice versa
If you’ve added any images that depend on direction (such as arrows), you may need to create RTL versions that you can call up in your RTL stylesheet
To get your RTL stylesheet started, open rtl.css (or create this file in your theme’s root directory if you don’t have it). Paste this code at the top.

```css

/*
Theme Name: Shape
 
Adding support for language written in a Right To Left (RTL) direction is easy -
it's just a matter of overwriting all the horizontal positioning attributes
of your CSS stylesheet in a separate stylesheet file named rtl.css.
 
http://codex.wordpress.org/Right_to_Left_Language_Support
*/
 
body {
    direction: rtl;
    unicode-bidi: embed;
}

```

Derived from [here](https://themeshaper.com/2012/11/12/how-to-reset-rebuild-wordpress-theme-css-define-your-layouts/)

--- 


### [Theme Requirements Checklist](https://developer.wordpress.com/themes/#tux)

### Design

Perspective: sense of distance between elements.
Similarity: repeating similar – but not identical – elements with strong visual connections.
Continuation: the sense of having a line or pattern extend throughout a design.
Repetition: elements being copied or mimicked numerous times.
Rhythm: achieved when recurring position, size, color, and use of a graphic element has a focal point interruption.
Altering the basic foundation of the design achieves unity and helps keep interest.

https://make.wordpress.org/core/handbook/best-practices/coding-standards/css/