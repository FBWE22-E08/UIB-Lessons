# Introducing Style, Lists and Classes and IDs

![enter image description here](https://mountaintopwebdesign.com/wp-content/uploads/slider5.jpg)


We are going to cover:

- Adding Styles to HTML Elements(introduction)
- Inline Styles
- Embedded Style Sheets
- External style sheet 




## Adding Styles to HTML Elements(introduction)

Style information can either be attached as a separate document or embedded in the HTML document itself. These are the three methods of implementing styling information to an HTML document.

- Inline styles — Using the style attribute in the HTML start tag.
- Embedded style — Using the `<style>` element in the head section of the document.
- External style sheet — Using the `<link>` element, pointing to an external CSS files.
  
  
## Inline Styles

Inline styles are used to apply the unique style rules to an element, by putting the CSS rules directly into the start tag. It can be attached to an element using the style attribute.

```HTML

<h1 style="color:red; font-size:30px;">This is a heading</h1>
<p style="color:green; font-size:18px;">This is a paragraph</p>

```

## Embedded Style Sheets

Embedded style sheets are defined in the <head> section of an HTML document using the `<style>` tag. You can define any number of `<style>` elements inside the `<head>` section.
  
```HTML
  
<head>
    <style>
        body { background-color: YellowGreen; }
		    h1 { color: blue; }
        p { color: red; }
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
  
 body {
    color: blue;
    font-size: 14px;
} 
  
```

---


## Assignments:

**Assignment:** [SPA-router-dog-finder](https://classroom.github.com/a/9It-6VA2)
**Solution:** [SPA-router-dog-finder]()

**Assignment:** [SPA-CreateBlog (homework)](https://classroom.github.com/a/bi7vW7Js)
**Solution:** [SPA-CreateBlog (homework)]()

---

### Resources:

- [Presentation PDF](./Boilerplate.pdf)
 
- [A history of HTML](https://www.w3.org/People/Raggett/book4/ch02.html)
- [The metadata element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta)
- [CSS first steps overview](https://developer.mozilla.org/en-US/docs/Learn/CSS/First_steps)
- [basic web pages](https://www.internetingishard.com/html-and-css/basic-web-pages/)


