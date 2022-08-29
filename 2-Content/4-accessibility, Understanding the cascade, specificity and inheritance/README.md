# Accessibility, Understanding the cascade, specificity and inheritance (31/08/2022)


![enter image description here](https://multichannelmerchant.com/wp-content/uploads/2021/06/dreamhost-accessibility-tips-750x498-1.jpg)


We are going to cover:

- What is Web Accessibility?
- HTML <title> Tag
- HTML <img> alt Attribute
- Google Lighthouse
- Conflicting rules
- Cascade
- Specificity
- Inheritance
- Controlling inheritance
- Non-inheriting properties
- Inline always wins
- Using dev tools to inspect the cascade
- Exercises




## What is Web Accessibility?
[slide presentation](https://docs.google.com/presentation/d/1kKBO1QAbNu0J-uAuvu9c5dCZijVhjTcnt0DGdvrKUq8/edit#slide=id.g9d48cbabc8_0_38)
 

## HTML <title> Tag

The <title> tag defines the title of the document. The title must be text-only, and it is shown in the browser's title bar or in the page's tab.

The <title> tag is required in HTML documents!

The contents of a page title is very important for search engine optimization (SEO)! The page title is used by search engine algorithms to decide the order when listing pages in search results.
	
```HTML
  <title>UIB - Content - Live Coding</title>	
	
```
The <title> element:

- defines a title in the browser toolbar
- provides a title for the page when it is added to favorites
- displays a title for the page in search-engine results
	
Here are some tips for creating good titles:

- Go for a longer, descriptive title (avoid one- or two-word titles)
- Search engines will display about 50-60 characters of the title, so try not to have titles longer than that
- Do not use just a list of words as the title (this may reduce the page's position in search results)

So, try to make the title as meaningful as possible!
	
**Note:** You can NOT have more than one <title> element in an HTML document.


	
## HTML <img> alt Attribute

The required alt attribute specifies an alternate text for an image, if the image cannot be displayed.

The alt attribute provides alternative information for an image if a user for some reason cannot view it (because of slow connection, an error in the src attribute, or if the user uses a screen reader).

**Tip:** To create a tooltip for an image, use the title attribute!
	
```HTML
 <a href="https://unsplash.com/">
      <img src="images/neon-garage.jpg" alt="Parking garage" title="Parking garage (tooltip)"/>
 </a>	
	
```

## Google Lighthouse

![enter image description here](https://onward.justia.com/wp-content/uploads/2021/08/Website-Metrics-With-Google-Lighthouse-1024x538.png)

Lighthouse is an open source tool for running technical website audits. The tool was developed by Google, and it analyzes the following aspects of a URL: Performance, Progressive Web App, Accessibility, Best Practices and SEO.
	
The Lighthouse framework has already been integrated into Google’s other performance analysis tools, such as the analysis for PageSpeed Insights and the browser-based audits via the Chrome browser’s developer tools.
	
The audits offered by Lighthouse are grouped into five optimization categories: Performance, Best Practices, Accessibility, SEO and Progressive Web Apps.
  
## Conflicting rules

CSS stands for Cascading Style Sheets, and that first word cascading is incredibly important to understand — the way that the cascade behaves is key to understanding CSS.

![enter image description here](https://scontent.ftxl2-1.fna.fbcdn.net/v/t39.30808-6/273717865_130238746176572_4783919957995906888_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=VGjAY5C0XdEAX-Ye-tv&_nc_oc=AQmS70M66Km076aZmG2hD42ACb7oRhyoz7u7HgGV3rqpIcIBDfoJAg8B51Ng8Wi7O27C3aYCP_uR63SqYEVjqNWR&_nc_ht=scontent.ftxl2-1.fna&oh=00_AT-JESx5s0JN-IOB5tFBWCVHjNWz_7MtlIkU2su7gW8XPA&oe=631164B6)
	

At some point, you will be working on a project and you will find that the CSS you thought should be applied to an element is not working. Often, the problem is that you create two rules that apply different values of the same property to the same element. Cascade and the closely-related concept of specificity are mechanisms that control which rule applies when there is such a conflict. The rule that's styling your element may not be the one you expect, so you need to understand how these mechanisms work.

Also significant here is the concept of inheritance, which means that some CSS properties by default inherit values set on the current element's parent element and some don't. This can also cause some behavior that you might not expect.
	
## Cascade
	
Stylesheets cascade — at a very simple level, this means that the origin, the cascade layer, and the order of CSS rules matter. When two rules from the same cascade layer apply and both have equal specificity, the one that is defined last in the stylesheet is the one that will be used.


```HTML
	
<h1>This is my heading.</h1>
	
```
	
```CSS
h1 { 
    color: red; 
}
h1 { 
    color: blue; 
}	
	
```

	
## Specificity

Specificity is the algorithm that the browser uses to decide which property value is applied to an element. If multiple style blocks have different selectors that configure the same property with different values and target the same element, specificity decides the property value that gets applied to the element. Specificity is basically a measure of how specific a selector's selection will be:

- An element selector is less specific; it will select all elements of that type that appear on a page, so it has less weight.
- A class selector is more specific; it will select only the elements on a page that have a specific class attribute value, so it has more weight.

```HTML
	
<h1 class="main-heading">This is my heading.</h1>
	
```
	
```CSS
.main-heading { 
    color: red; 
}
        
h1 { 
    color: blue; 
}	
	
```

## Inheritance
	
Inheritance also needs to be understood in this context — some CSS property values set on parent elements are inherited by their child elements, and some aren't.

For example, if you set a color and font-family on an element, every element inside it will also be styled with that color and font, unless you've applied different color and font values directly to them.
	
```HTML
	
<p>As the body has been set to have a color of blue this is inherited through the descendants.</p>
<p>We can change the color by targeting the element with a selector, such as this <span>span</span>.</p>
	
```
	
```CSS
body {
    color: green;
}

span {
    color: black;
}	
	
```	

## Controlling inheritance
	
## Non-inheriting properties
	
## Inline always wins

## Using dev tools to inspect the cascade
	
---


## Assignments:

**Assignment 1:** []()
**Solution:** []()

**Assignment 2:** []()
**Solution:** []()

**Assignment 3:** []()
**Solution:** []()
	
---

### Resources:


 
- [Cascade and inheritance](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Cascade_and_inheritance)
- [Google Lighthouse](https://www.searchmetrics.com/glossary/google-lighthouse)
- [HTML <img> alt Attribute](https://www.w3schools.com/tags/att_img_alt.asp)


