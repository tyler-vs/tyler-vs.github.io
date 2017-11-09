
# jekyll-navigation.md

Add a yaml front-matter to each page that is desired to be apart of the nav,
a property of `nav_weight`, then assign a numeric value.

Wherever the nav is outputted, use `assign` with `site.html_pages` to 
cache all the site's pages. 

```
{% assign navigation_pages = site.html_pages | sort: 'navigation_weight' %}
... nav html here...

```
