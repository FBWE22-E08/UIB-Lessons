# Introducing Style, Lists and Classes and IDs (25/08/2022)

![enter image description here](https://mountaintopwebdesign.com/wp-content/uploads/slider5.jpg)


We are going to cover:

- Adding Styles to HTML Elements(introduction)
- Inline Styles
- Embedded Style Sheets
- External style sheet
- Anatomy of a declaration (selector, declaration, property, value)
- Writing Comments in CSS
- Lists: Indentation and Family
- Unordered Lists
- Ordered Lists
- Class and ID selectors in CSS
- Exercises






## Adding Styles to HTML Elements(introduction)

Style information can either be attached as a separate document or embedded in the HTML document itself. These are the three methods of implementing styling information to an HTML document.

- Inline styles — Using the style attribute in the HTML start tag.
- Embedded style — Using the `<style>` element in the head section of the document.
- External style sheet — Using the `<link>` element, pointing to an external CSS files.
  
  
## Inline Styles

Inline styles are used to apply the unique style rules to an element, by putting the CSS rules directly into the start tag. It can be attached to an element using the style attribute.

```HTML
   <h2 style="color: blue">Here is h2</h2>

```

## Embedded Style Sheets

Embedded style sheets are defined in the <head> section of an HTML document using the `<style>` tag. You can define any number of `<style>` elements inside the `<head>` section.
  
```HTML
  
<head>
    <style>
       h3 {
        color: red;
      }
    </style>
</head>
  
```
  
## External style sheet 
  
An external style sheet is ideal when the style is applied to many pages.

An external style sheet holds all the style rules in a separate document that you can link from any HTML document on your site. External style sheets are the most flexible because with an external style sheet, you can change the look of an entire website by updating just one file.
  
An external style sheet can be linked to an HTML document using the <link> tag.
  
HTML file
  
```HTML
  
<head>
    <link rel="stylesheet" href="css/style.css">
</head>
  
```

CSS file (style.css)
  
```CSS
  
h1 {
  color: green;
}
  
```

## Anatomy of a declaration (selector, declaration, property, value)
	
A CSS stylesheet consists of a set of rules that are interpreted by the web browser and then applied to the corresponding elements such as paragraphs, headings, etc. in the document.
	

A CSS rule have two main parts, a selector and one or more declarations:


![enter image description here](https://www.tutorialrepublic.com/lib/images/css-selector.png)
	
The selector specifies which element or elements in the HTML page the CSS rule applies to.

Whereas, the declarations within the block determines how the elements are formatted on a webpage. Each declaration consists of a property and a value separated by a colon (:) and ending with a semicolon (;), and the declaration groups are surrounded by curly braces {}.
	
The property is the style attribute you want to change; they could be font, color, background, etc. Each property has a value, for example color property can have value either blue or #0000FF etc.

	
## Writing Comments in CSS
	
Comments are usually added with the purpose of making the source code easier to understand. It may help other developer (or you in the future when you edit the source code) to understand what you were trying to do with the CSS. Comments are significant to programmers but ignored by browsers.

A CSS comment begins with /*, and ends with */, as shown in the example below:
	
```CSS
/* This is a CSS comment */
h1 {
  color: green;
}

/* ANATOMY */
/* selector {
  property: value;
} */

/* Lists */

/* CHANGING THE LIST STYLE */

/* ul {
  list-style: square; 
  list-style: none; 
} */

/* NESTING AND LISTS */

li {
  list-style-type: disc;
}
/* This is a multi-line CSS comment 
that spans across more than one line */
/* DESCENDANT COMBINATOR */
li li {
  list-style-type: circle;
}
	
```

## Lists: Indentation and Family

Lists are used all the time on the web. Articles, website navigation menus, and product features on e-commerce websites all make frequent use of lists – even when you can’t tell that a list is being used just by looking at the web page.

There are three types of lists you can use, and this quick guide will show you how to use each.

## Unordered Lists
	
An unordered list is a list in which the order of the list items does not matter. Unordered lists should be used when the order of the list items would not create confusion or change the meaning of the information on the list.

The ul element opens and closes an unordered list. The items on the list are contained between list item, li, tags. A simple unordered list containing three items could be created with the following HTML.

```HTML
<ul>
	<li>Item A</li>
	<li>Item B</li>
	<li>Item C</li>
</ul>

	
```


## Ordered Lists
	
Ordered lists are used for lists of items for which the order of the items does matter. The syntax for an ordered list is exactly the same as for an unordered list. However, to create an ordered list, the ol tag is used rather than the ul tag. By making this one change, we can convert the unordered list in our previous example into an ordered list.


```HTML
<ol>
	<li>Step 1</li> 
	<li>Step 2</li>
	<li>Step 3</li>
</ol>


	
```
## list-style-type
	
The list-style-type property in CSS specifies the appearance of the list item marker (such as a disc, character, or custom counter style)
	
```CSS
list-style-type: disc|circle|square|decimal|lower-roman|upper-roman|
lower-greek|lower-latin|upper-latin|lower-alpha|upper-alpha|none|
inherit;	
```

## Class and ID selectors in CSS

In CSS, class and ID selectors are used to identify various HTML elements. The main benefit of setting class or ID is that you can present the same HTML element differently, depending on its class or ID.
	
**Class selector**

The class selector selects elements with a specific class attribute. It matches all the HTML elements based on the contents of their class attribute. The . symbol, along with the class name, is used to select the desired class.

Classes are not unique:
	
- You can use the same class on multiple elements.
- You can use multiple classes on the same element.

```HTML
<p class="widget">Content</p>	
```
	
**ID selector**
	
The ID selector matches an element based on the value of its id attribute. In order for the element to be selected, its ID attribute must exactly match the value given in the selector. The # symbol and the id of the HTML element name are used to select the desired element.

ID’s are unique:
	
- Each element can have only one ID
- Each page can have only one element with that ID	
	
```HTML
<p id="text-content">Content</p>	
```
	

---


## Assignments:

**Assignment 1:** [UIB-content-text](https://classroom.github.com/a/bmKlNUBN)
**Solution:** []()

**Assignment 2:** [UIB-content-basic_structure](https://classroom.github.com/a/3LmLp8Nl)
**Solution:** []()

**Assignment 3:** [UIB-content-listmania](https://classroom.github.com/a/SPgGP7cb)
**Solution:** []()
	
---

### Resources:


 
- [Lists Bring Order To Web Pages](https://html.com/lists)
- [CSS | list-style-type Property](https://www.geeksforgeeks.org/css-list-style-type-property/)
- [The Difference Between ID and Class](https://css-tricks.com/the-difference-between-id-and-class/)



