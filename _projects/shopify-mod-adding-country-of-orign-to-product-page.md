---
title: Adding Country of origin Flag to Shopify Product Page
layout: page
image_paths:
  default: https://user-images.githubusercontent.com/9139991/98843247-b1754600-2418-11eb-89d7-3ab6f08b1573.jpg
  large: https://user-images.githubusercontent.com/9139991/98843247-b1754600-2418-11eb-89d7-3ab6f08b1573.jpg
image_alt: Screenshot of the Google audit results page.
tags: [html, css, shopify, javascript, theme mod]
published: true
---


Adding a flag to the product page by using liquid, Shopify product tags and JavaScript.

<!--more-->


### Project's Biggest Challenge

The major challenge for this project was figuring out a way to show a flag based on product tags. Creating flags on my own was out of the question, so I also needed to find an existing library in order to make this work.

### Finding a tool for country flags

I found a number of tools that display country flags, I ended up finding this [country-flags](https://github.com/luciopaiva/country-flags) repo on GitHub which had great documentation and included an example page which made it a clear winner. I added the repo files to the themes' Assets folder using the online Code Editor.

### Using product tags

For this customization, I determined that using product tags would be the easiest way to determine the country of origin for each product, the merchant would need to use the "alpha-2 country code" as a tag to determine the country, they can find the alpha-2 code using this resource: https://www.iban.com/country-codes. To make sure it didn't conflict with other tags, I prefixed the alpha-2 code with `country_` so if they wanted the Great Britain country flag to appear they would use `country_gb` as a product tag.

### Updating the product-template.liquid file

I needed to display the country flag on the product page. First I found the alpha-2 country code in the tags by looping through the tags, then used the liquid `contains` to see if there is a tag that contained the `country_` prefix that I need to extract the alpha-2 code from. 

```
{% comment %}Assign an empty variable to hold the country flags{% endcomment %}
{% assign country_code = '' %}
{% comment %}Loop through product tags{% endcomment %}
{% for tag in product.tags %}
  {% comment %}Check to see if tag contains the prefix{% endcomment %}
  {% if tag contains 'country_' %}
    {% comment %}Extract the alpha-2 country code from the tag{% endcomment %}
    {% assign country_code = tag | split: 'country_' | last %}
  {% endif %}
{% endfor %}
```

Once I grabbed the country code in liquid, I added the value to a `<div>` with a data attribute for the country code (as required by the library I was using), it looked like this, the location of this `<div>` is where the country flag would display, per the merchant's request it was displayed near the product vendor's name on the product page.

```
<div class="flag-icon" data-country-code="{{country_code}}" id="country-flag"></div>
```

Finally I added a `<script>` near the end of the file, this script is required by the country flag library I was using in order to display the correct flag, here is the script.

```
<script>

  // Get the element that will display the country flag
  const parentElement = document.getElementById("country-flag");
  const flag = new CountryFlag(parentElement);
  const countryCode = parentElement.getAttribute('data-country-code');

  console.log(`countryCode: ${countryCode}`);
  if (countryCode != "" || countryCode != undefined ) {
    flag.selectByAlpha2(countryCode);
  }

</script>
```

Finally I added some CSS styles to make it look correct.

### What I took away

I learned to utilize elements that Shopify already provides, it may have been preferable for the merchant to have a custom meta field on the product page to specify the country, perhaps even using the country's name instead of figuring our the alpha-2 code, however, in this instance, using the product tags worked fine.

I also learned to learn on existing tools rather than come up with a my own from scratch, I was considering using a large image with all the country flags and then make some CSS background-position to narrow to a certain flag, finding an already existing repo which accomplished this saved a lot of development time.