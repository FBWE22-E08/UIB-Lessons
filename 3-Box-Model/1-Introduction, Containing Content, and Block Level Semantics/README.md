# Introduction, Containing Content, and Block Level Semantics (01/09/2022)


![enter image description here](https://www.lilengine.co/sites/default/files/inline-images/Screen%20Shot%202019-04-14%20at%2023.59.07.png)


We are going to cover:

- Introduction - Everything is a Box
- The `<main>` tag
- How to Center an elements with CSS Margin Auto 
- Full height content
- Control the flow the `overflow` property
- Block Level Semantics
- Exercises

	
## Introduction - Everything is a Box

Everything displayed by CSS is a box. Understanding how the CSS Box Model works is therefore a core foundation of CSS.
The box model is a core foundation of CSS and understanding how it works, how it is affected by other aspects of CSS and importantly, how you can control it will help you to write more predictable CSS.

```HTML
<p>I am a paragraph of text that has a few words in it.</p>

```

```CSS
p {
  width: 100px;
  padding: 20px;
  border: 1px solid;
}

```

![enter image description here](https://web-dev.imgix.net/image/VbAJIREinuYvovrBzzvEyZOpw5w1/ECuEOJEGnudhXW5JEFih.svg)


	
## The `<main>` tag

The `<main>` HTML element represents the dominant content of the `<body>` of a document. The main content area consists of content that is directly related to or expands upon the central topic of a document, or the central functionality of an application.

```HTML
<main>
    <p>Geckos are a group of usually small, usually nocturnal lizards. They are found on every continent except Australia.</p>
 
    <p>Many species of gecko have adhesive toe pads which enable them to climb walls and even windows.</p>
</main>
```


## How to Center an elements with CSS Margin Auto 

Use the shorthand margin property with the value 0 auto to center block-level elements like a main horizontally
**NOTE:** the element should have a width less than the screen view width.

```HTML
<main class="container">
    <p>Geckos are a group of usually small, usually nocturnal lizards. They are found on every continent except Australia.</p>
 
    <p>Many species of gecko have adhesive toe pads which enable them to climb walls and even windows.</p>
</main>
```

```CSS
.container {
  width: 350px;
  border: 1px solid;
  margin: auto;
}
```


## Full height content

Viewport Height (vh). This unit is based on the height of the viewport. A value of 1vh is equal to 1% of the viewport height.

```HTML
<main class="container">
    <p>Geckos are a group of usually small, usually nocturnal lizards. They are found on every continent except Australia.</p>
 
    <p>Many species of gecko have adhesive toe pads which enable them to climb walls and even windows.</p>
</main>
```

```CSS
.container {
  width: 350px;
  border: 1px solid;
  margin: auto;
  height:vh
}
```

## Control the flow the `overflow` property

The CSS overflow property controls what happens to content that is too big to fit into an area.

The overflow property specifies whether to clip the content or to add scrollbars when the content of an element is too big to fit in the specified area.

The overflow property has the following values:

- visible - Default. The overflow is not clipped. The content renders outside the element's box
- hidden - The overflow is clipped, and the rest of the content will be invisible
- scroll - The overflow is clipped, and a scrollbar is added to see the rest of the content
- auto - Similar to scroll, but it adds scrollbars only when necessary

```HTML
<div id="overflowTest">This text is really long and the height of its container is only 100 pixels. Therefore, a scrollbar is added to help the reader to scroll the content. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Typi non habent claritatem insitam; est usus legentis in iis qui facit eorum claritatem.</div>
```

```CSS
  padding: 15px;
  width: 50%;
  height: 100px;
  overflow: scroll;
  border: 1px solid #ccc;

```

## Block Level Semantics

Semantic HTML elements are those that clearly describe their meaning in a human- and machine-readable way.

Elements such as `<header>`, `<footer>` and `<article>` are all considered semantic because they describe the purpose of the element and the type of content that is inside them.

![enter image description here](https://bunchmediacom.files.wordpress.com/2021/06/screen-12.png?w=804)


The semantic elements added in HTML5 are:

- `<article>`
- `<aside>`
- `<details>`
- `<figcaption>`
- `<figure>`
- `<footer>`
- `<header>`
- `<main>`
- `<mark>`
- `<nav>`
- `<section>`
- `<summary>`
- `<time>`
Elements such as `<header>`, `<nav>`, `<section>`, `<article>`, `<aside>`, and `<footer>` act more or less like `<div>` elements. They group other elements together into page sections. However where a `<div>` tag could contain any type of information, it is easy to identify what sort of information would go in a semantic `<header` region.

---


## Assignments:

**Assignment 1:** [UIB-boxmodel-containing](https://classroom.github.com/a/QJb5czlF)
**Solution:** []()

**Assignment 2:** [UIB-boxmodel-flow](https://classroom.github.com/a/faNQBovp)
**Solution:** []()

**Assignment 3:** [UIB-boxmodel-semantics](https://classroom.github.com/a/5fDtdnl6)
**Solution:** []()
	
---

### Resources:


 
- [Box Model](https://web.dev/learn/css/box-model/)
- [How to Center Anything with CSS - Align a Div, Text, and More](https://www.freecodecamp.org/news/how-to-center-anything-with-css-align-a-div-text-and-more/)
- [CSS Viewport Units: A Quick Start](https://www.sitepoint.com/css-viewport-units-quick-start/)
- [CSS Layout - Overflow](https://www.w3schools.com/css/css_overflow.asp)
- [Semantic HTML5 Elements Explained](https://www.freecodecamp.org/news/semantic-html5-elements/)


