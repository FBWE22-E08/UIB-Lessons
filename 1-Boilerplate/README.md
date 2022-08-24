# Boilerplate 1 Day (24/08/2022)

![enter image description here](https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1200px-HTML5_logo_and_wordmark.svg.png)

**Introduction**

We are going to cover:

- History of HTML
- What Does HTML Stand For?
- Future of HTML
- Visual Studio Code
- VsCode Extensions
- Create HTML file and set up our boilerplate
- Anatomy of an HTML Tag
- HTML Paragraphs
- What are heading tags
- Close First What You Opened Last
- The HTML Comment Tag
- Running our file locally
- Exercises


## History of HTML

HTML is one of the first things that a student learns during a web development course. Hence, it becomes essential to learn about the history of HTML.

## What Does HTML Stand For?

HTML is the short form of HyperText Markup language, and most people assume it as a programming language. But it is a markup language rather than any coding or programming language. It is used for most web pages and applications to define the text and body of the layout.


HTML is the most popular markup language that was developed and written by Sir Tim Berners-Lee. And he created the world wide web too in 1989; however, his HTML version officially launched in 1993. from that time to now, HTML has seen continuous updates to add new features and functionality.


![enter image description here](https://i.computer-bild.de/imgs/1/4/0/0/9/1/8/1/html-32b22f6cf9e892e8.jpg)

## Future of HTML

HTML has covered a long journey from a simple concept of file sharing to defining web elements. Currently, HTML5 is the latest version that is supported by most browsers. And in the future, we can see an updated version of HTML5 again by W3C with additional features. the use of HTML will continue, and developers will use it a lot to define their website and its pages.


## Visual Studio Code

Visual Studio Code, also commonly referred to as VS Code, is a source-code editor made by Microsoft for Windows, Linux and macOS. Features include support for debugging, syntax highlighting, intelligent code completion, snippets, code refactoring, and embedded Git. Users can change the theme, keyboard shortcuts, preferences, and install extensions that add additional functionality.

[Download vs code](https://code.visualstudio.com) 


## VsCode Extensions

In computing, a plug-in is a software component that adds a specific feature to an existing computer program. When a program supports plug-ins, it enables customization.

Extensions:
- live server: Launch a local development server with live reload feature for static & dynamic pages.
- prettier: is an code formatter. It enforces a consistent style by parsing your code and re-printing it with its own rules that take the maximum line length into account, wrapping code when necessary.

![enter image description here](https://www.alphr.com/wp-content/uploads/2022/06/Vs-3.png)

---

Create file called index.html. By entering `!` we can automatically set up our boilerplate.


```HTML
<!-- By entering `!` we can automatically set up our boilerplate -->
<!DOCTYPE html>
<!-- Document type declaration - helps the browser render the page correctly -->
<html lang="en">
  <!-- The HTML <html> element represents the root (top-level element) of an HTML document, 
    so it is also referred to as the root element. All other elements must be descendants of this element. -->
  <head>
    <!-- The <head> element contains machine-readable information (metadata) about the document, 
      like its title, scripts, and style sheets. -->
    <!-- Many <meta> elements include name and content attributes:
    name specifies the type of meta element it is; what type of information it contains.
    content specifies the actual meta content. -->
    <meta name="author" content="trainer" />

    <meta charset="UTF-8" />
    <!-- The <meta> element lives inside the head and contains information about that web page -->
    <!-- To display an HTML page correctly, a web browser must know which character set to use. -->
    <!-- UTF-8 (Unicode) covers almost all of the characters and symbols in the world. -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>HTML Introduction!</title>
  </head>
  <body>
    <!-- The <body> Element represents the content of an HTML document. 
      There can be only one <body> element in a document. -->
    <!-- What follows is a quick intro to Emmet which we will look at further in the following submodule       -->
    <!-- Emmet - `p*4'= -->
    <p></p>
    <p></p>
    <p></p>
    <p></p>
  </body>
</html>

```

## Anatomy of an HTML Tag

Since HTML is a tag-based language, it’s no surprise that at the core of HTML is the HTML tag. Let’s look at the syntax of an HTML tag.

Usually, an HTML tag consists of an opening and a closing tag that surrounds some content, marking up that content as shown below.

![enter image description here](https://clearlydecoded.com/assets/images/posts/2017-09-04-anatomy-of-html-tag/simple-p-tag.png)

In this case, the tag p, which stands for paragraph, is communicating to us that the content in the gray area should be treated as a paragraph.


## HTML Paragraphs

The `<p>` tag in HTML defines a paragraph. These have both opening and closing tags. So anything mentioned within `<p>` and `</p>` is treated as a paragraph. Most browsers read a line as a paragraph even if we don’t use the closing tag i.e, `</p>`, but this may raise unexpected results. So, it is both a good convention, and we must use the closing tag. 

```HTML
<p> Content </p>

```

## What are heading tags


Heading tags define a page’s main header `<h1>` as well as the sub-headers `<h2>-<h6>` of various content sections. 

From the perspective of both people and search engines, these tags are used as summarizing text that gives readers and crawlers.
  
The World Wide Web Consortium defines six levels of section headings in HTML, with `<h1>` being the most important one and `<h6>` being of least importance


  
![enter image description here](https://seranking.com/blog/wp-content/uploads/2019/08/Diagrammatic-Representation-of-Heading-Tag-Hierarchy.png)


## Close First What You Opened Last

Ever double bag something, tying every bag in the process?

Think about how you would go about doing that.

- Place the item into bag 1
- Tie bag 1
- Place bag 1 into bag 2
- Tie bag 2

If, after placing bag 1 into bag 2, you decided to first tie bag 2, you’d never be able to get to tie bag 1 again!

Same goes for tag closing.

The last tag opened is the first tag closed.

![enter image description here](https://clearlydecoded.com/assets/images/posts/2017-09-04-anatomy-of-html-tag/close-opened-tags-first.png)
  
## The HTML Comment Tag

The general syntax for an HTML comment looks like this:

```HTML

<!-- I am a comment! -->

```


The tag surrounds any text or other HTML tag you want to comment out.

HTML comments don't get displayed in the browser. This means that any comments you add to your HTML source code will not be shown when the document gets rendered in a web browser.



## Running our file locally

Go a to folder where you have the html file and open it with the browser OR you can use live server VS Code extension.


---


## Assignments:

**Assignment 1:** [UIB-boilerplate-HTML_doc](https://classroom.github.com/a/Djs-Bn5f)
**Solution:** []()

**Assignment 2:** [UIB-boilerplate-head](https://classroom.github.com/a/k6b3Sdmb)
**Solution:** []()

**Assignment 3:** [UIB-boilerplate-styletag](https://classroom.github.com/a/WehEHhEI)
**Solution:** []()

---

### Resources:

- [Presentation PDF](./Boilerplate.pdf)
 
- [A history of HTML](https://www.w3.org/People/Raggett/book4/ch02.html)
- [The metadata element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta)
- [CSS first steps overview](https://developer.mozilla.org/en-US/docs/Learn/CSS/First_steps)
- [basic web pages](https://www.internetingishard.com/html-and-css/basic-web-pages/)

- [Why does Prettier not format code in VS Code?](https://stackoverflow.com/questions/52586965/why-does-prettier-not-format-code-in-vs-code)
