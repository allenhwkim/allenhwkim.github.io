---
title: Complete Angular Autocomplete
---

This is to introduce another autocomplete for INPUT or SELECT element.
We can find many fully-featured autocomplet at github, but I was not fully satisfied with its implementation.
The main reason of dissatisfaction is those does not applies to INPUT or SELECT tag.
<!--more-->

![Imgur](http://i.imgur.com/Fj0avbY.png?1)
![Imgur](http://i.imgur.com/46crVoI.png?1)
![Imgur](http://i.imgur.com/1BhGlVn.png)
![Imgur](http://i.imgur.com/xFxsgUY.png)

Because autocomplete feature is a behaviour of a html element, I was expecting; 

 * `<input auto-complete source="...">`
 * Or, `<select auto-complete source="...">`

I might have been lost in Google, but I could not find any AngularJS autocomplete module like the above.
So, I made my own. I think it will not hurt you to have one more choice.

You can find source code [here](https://github.com/allenhwkim/angular-autocomplete).

The usage is simple; just add `auto-complete` and `source` attribute to you INPUT or SELET tag like the following;

    `<input auto-complete source="listOfChoices">`

    or 

    `<select auto-complete source="listOfChoices"></select>`

The source section could be an array, a url, or a function.
The beauty of this is it does not require any more tags cucs as &lt;ui-select-match>, &lt;ui-select-choices>, or &lt;autocomplete>.
`input` or `select` tag itself is enough for autocomplete feature.

You can find more working examples;

  * [INPUT tag autocomplete](http://rawgit.com/allenhwkim/angular-autocomplete/master/test/autocomplete.single.html)

  * [SELECT tag autocomplete](http://rawgit.com/allenhwkim/angular-autocomplete/master/test/autocomplete.single.html)

  * [SELECT tag multiple autocomplete](http://rawgit.com/allenhwkim/angular-autocomplete/master/test/autocomplete.multi.html)

  * [SELECT tag multiple autocomplete with custom css](http://rawgit.com/allenhwkim/angular-autocomplete/master/test/autocomplete.multi.custom.html)

  * [Google geocode autocomplete - remote source](http://rawgit.com/allenhwkim/angular-autocomplete/master/test/autocomplete.remote.html)

This module, angular-autocompete, requires only one mandatory attribute, `source`, and many optional ones.
To know more about attributes, please visit [github repository](https://github.com/allenhwkim/angular-autocomplete)

I hope this module is helpful for someone.


