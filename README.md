# angular-titip
Angular directive for pure CSS tooltips using [titip](https://github.com/quantumui/titip).

## Installation

Install package and dependencies with [Bower](https://bower.io).

```shell
bower install --save angular-titip
```

Include stylesheet and script

```html
<!-- Light package of effect.css It is optional if you want to use css3 animation effects -->
<link rel="stylesheet" href="bower_components/titip/dist/css/addon/effect-light.min.css">
<link rel="stylesheet" type="text/css" href="bower_components/titip/dist/css/titip.min.css" />

<script src="bower_components/angular/angular.min.js"></script>
<script src="bower_components/angular-titip/dist/angular-titip.min.js"></script>
```

## Usage

Require the angular module `angularTitip`.

```javascript
var app = angular.module('app', ['angularTitip'])
```

Now you can create (dynamic) tooltips with by using the directive `tooltip`

```html
<a href="#" tooltip title="My fancy tooltip"></a>
<a href="#" tooltip tooltip-title="{{ dynamicTooltip }}"></a>
```

### Options

Currently not all options that titip offers are implemented. Go to [http://quantumui.org/appdoc/documents/home/titip](http://quantumui.org/appdoc/documents/home/titip) to see all possible values for the available options.

#### Position

```html
<a href="#" tooltip title="Tooltip left" tooltip-position="left"></a>
<a href="#" tooltip title="Tooltip bottom right" tooltip-position="bottom-right"></a>
```

### Themes

You can select one of the default themes (`primary`, `warning`, `danger`, `success`, `info`) by adding the attribute `tooltip-theme`.

```html
<a href="#" tooltip title="Warning tooltip" tooltip-theme="warning"></a>
```

### Animation

You can add animations by adding `tooltip-animation`.

*(Note: you'll have to include the `css/addon/effect-light.min.css` styesheet for animations to work)*

```html
<a href="#" tooltip title="Fading tooltip" tooltip-animation="fade"></a>
```

## FAQ


### What are you talking about? "Angular directive" and "Pure CSS" don't fit together ...

Yeah, you're right. There is of course some javascript involved. But the javascript doesn't actually create and position the tooltips – it just adds the appropriate CSS classes to the element.

### So why then even bother with creating a directive, if all you need are CSS classes?

Of course you don't need this directive. It just offers you an "angular way" of (dynamically) creating the tooltips and imho makes using them a little more clear.