---
title: The Methamorphosis
date: 2026-02-10
tags: [blog, books, comments]
---

Last updated: February 15, 2026
Personal Markdown playground & quick reference

## 1. Headers

# H1 – Main Title
## H2 – Section
### H3 – Subsection
#### H4
##### H5
###### H6 – smallest

Alternative H1 / H2 (setext style)
=================
-----------------

## 2. Emphasis

**bold**  
__bold again__

*italic*  
_italic again_

***bold italic***
~strikethrough~
==highlight== (not supported everywhere)
## 3. Links

[Google](https://google.com)

[Google with title](https://google.com "Go to Google")

Inline link with **formatting**: [**important**](https://example.com)

Reference style:
[Google][1]

[1]: https://google.com "Optional title"

Autolink: https://example.com

## 4. Images

![Alt text](https://example.com/image.jpg)

![With title](https://example.com/image.jpg "Tooltip text")

Reference style:
![Alt][logo]

[logo]: https://example.com/logo.png "Logo title"

## 5. Blockquotes

> Simple quote

> Multi-line quote
> second line
> third line

> Nested quote
>> Inner quote
>>> Even deeper

> **Formatted quote**
> - with list
> - inside

## 6. Lists

### Unordered

- item
- item
  - subitem
    - subitem
    * also works
    + and plus too

### Ordered

1. First
2. Second
    1. sub 2.1
    2. sub 2.2
    3. Third

### Task lists (checkboxes)

- [x] Done task
- [ ] Open task
- [ ] Another open one

## 7. Code

Inline `code` and `more code`

```js
// JavaScript example
function greet(name) {
  return `Hello ${name}!`;
  }

  console.log(greet("Markdown"));
}
```
