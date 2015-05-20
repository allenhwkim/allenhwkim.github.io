---
title: Why AngularJS So Difficult
---

Many people say "AngularJS is Amazing",but they also say "AngularJS is Hard As Hell".  I have been learning and using AngularJS for long time and 
I would say "It’s amazing and also easy".  

Did I say "Easy"? Yes I did. You may say "No, the learning curve of AngularJS is very steep, and it’s hard to learn".  
<!--more-->
  
<div style="float:right;text-align:center;width:50%;">
  <img src="images/3a2fb948605cfce8712bd0bbd85984e5.png" width="100%" /><br/>
  <a href="http://www.bennadel.com/blog/2439-my-experience-with-angularjs-the-super-heroic-javascript-mvw-framework.htm">Image from bennadel.com</a>
</div>

Based on my experience, it’s hard because we still think HTML is not expressive enough for business requirements and all dynamic functionalities. Once we change our mind that HTML has full expression including dynamic features, it gets easier to learn AngularJS.  
  
How come? HTML is static and has limited tags and attributes!!! period!! It’s never been used for behavioural functionalities. Yes, it has been. However, AngularJS changes HTML behavioural as defined, yes, "Behavioural As Defined", and again, "Behavioural As Defined".

## 1. HTML is Behavioural As Defined

Let’s see HTML code some without AngularJS.

    <button onclick="alert(‘clicked’)">Click Here</button>

It is a very simple input field, and it’s also behavioural. Because;
   
   * Button responds to your click
   * When clicked, it show alert window with message.
   * It's not static. It responds to your action.

Many would say that "onclick" part is a behaviour. Thus, we need to put that into Javascript file and collect all behavioural separate from documentation part. Although, the above code is not perfect, it is totally W3C compliant, and it is valid code.  
  
In fact, HTML is already behaviour-oriented. For example;

 * **href** attribute  
   It respond to your click and redirect your page to the link given

 * **select** tag  
   It hides all available options except the selected one, but when it is 
   clicked, it shows all options and hides back when you selected it 
   again , or clicked in other part of document.

 * **radio** button  
   It marks the clicked one as selected, and unmarks when other 
   radio button is clicked.

AngularJS expands this behavioural part of HTML by using its own framework. 
Let's make the above code into AngularJS code.

    <button ng-click="whatever()>Click Here</button>

As we all know, we have been avoiding to code like the above because;

  1. "whatever()" is defined in global scope, and maintaining functions
   in global scope could lead us to an unmanageable code. Bad!  
  
   In fact, "whatever()" is not defined in global scope.
   It’s defined within the given controller or directive scope. 
   So, code will be well organized and easy to maintain.

  2. "whatever()" is a behaviour. We need to code all behavioural 
   part into a separate file.  
   
   As I mentioned above, HTML is already behaviour-oriented. 
   i.e. href, select, radio button, etc. HTML is NOT an XML, nor pdf. 
   HTML is not a document, but a language that respond to users’ actions.
   Coding behaviour into HTML is totally ok.

  3. "ng-click" is NOT a valid attribute.

   Yes it is. "data-ng-click", "data-foo", "data-bar", these are all 
   valid HTML5 attribute.

## 2. AngularJS is a Framework Not a Library

Martin Folwer discusses the difference between a library and a framework in his article, [Inversion of Control](http://martinfowler.com/bliki/InversionOfControl.html)

A library is essentially a set of functions that **you call to execute**, and each call does some work and returns control to you.

A framework embodies some abstract design, with more behaviour built in. In order to use a framework, you need to insert your behaviour into various places. The **framework calls your code** at these points.

In summary, your code calls a library but a framework calls your code.

With AngularJS, you write HTML code, and let AngularJS pick up your code and run it. Again, you are just declaring what needs to be done, and does not care about how it is done.

Of course, if you are a directive builder, you need to get into the details of how it is done, but as an AngularJS user, you really don't care how default directives are executed.

What other libraries do you know?

  * jQuery
  * BackboneJS
  * MooTools
  * Kinetic.js
  * Three.js

Yes, jQuery is a library, and BackboneJS is a library.

## 3. AngularJS is Declarative Not Imperative

**Imperative Programming Example**

<img src="images/350e018c74a5fdd756324342029244e2.png" align="right" width="25%" />

Let's look at the bady on the right side. To make him eat and grow well, we need to tell every single instruction to get the job done. Open mouth, watch this, swallow it, don't spit, don't drop.. etc.

According to [Wikipedia Definition](http://en.wikipedia.org/wiki/Imperative_programming
), imperative programming is focused on describing how a program operates. Imperative programming is telling it how to do something, and as a result,  what you want to happen will happen.

The following HTML is to show a Google map in imperative programming. It's not only showing a map, but it does more;

  1. Add a marker
  2. When marker is clicked, it zooms in
  3. When map center is changed, it center back to the marker. 

This is the html.

    <div id="map-canvas"></div>

To make this happen, you need to tell the HTML what to do in every single step, and the following is the Javascript required to make it happen.

    function initialize() {
      var mapOptions = { ... OMITTED .. }
 
      var map = new google.maps.Map(document.querySelector('map-canvas'),
          mapOptions);
    
      var marker = new google.maps.Marker({ ... OMITTED .. });

      google.maps.event.addListener(map, 'center_changed', function() {
         ... OMITTED ..
      });

      google.maps.event.addListener(marker, 'click', function() {
         ... OMITTED ..
      });
    }

You can see the complete code [here](https://developers.google.com/maps/documentation/javascript/examples/event-simple). With imperative programming, you need to tell every single step what needs to be done and how it has to be done.


**Decrative Programming Example**

<img src="images/2251c18455731211e2bef5519999eab7.png" align="left" width="25%" />

The boy on the left side can eat by himself. We don't need to tell him how to eat food. The only thing we need to do is give him food, of course, good healthy food.

The following code is AngularJS way of how we define a map in html. Unlike a simple `div` tag, it has all required behaviour in HTML, and HTML is declarative enough to show what needs to be done.

    <google-map zoom="4" center="-25.363882, 131.044922" 
       on-center-changed="recenterToMarker()">
      <marker position="-25.363882, 131.044922" 
         on-click="zoomCloser()" 
         title="Click to zoom">
      </marker> 
    </google-map>

These are what needs to be done described on the above html;

  1. Level of zoom
  2. Centre of map
  3. What needs to be done when map centre is changed
  4. Marker and its title
  5. Position of the marker
  6. What needs to be done when the marker is clicked.

To see the fully working example of that code, please visit [here](http://ngmap.github.io/events.html#/event-simple#event-simple)


## AngularJS is HTML-centric

**Not MVC-patterned**

So many years, we are so accustomed to MVC pattern, even in HTML/Javascript front-end development. It worked for many years with BackboneJS and jQuery MVC implementations. However, unless you are very good at designing and maintaining your code cleanly, it is hard to organize and make it easy to maintain in MVC-patterned way. 

The reason is simple, the interactions between user and web page does not start from controller, the starting point of MVC-pattern. As you see in the diagram below, in MVC-pattern, user interaction are starting from controller, not view(HTML). However, in reality, user talks to HTML, and everything starts from HTML, not a controller that overlooks HTML.

<img src="images/334e8fbcd4eff86053c04d4ca82a760f.png" width="50%" />

In AngularJS, this changes. Everything is HTML-centric;

  1. User interactions starts from HTML
  2. Scope is within HTML
  3. Functionality is exposed out to HTML
  4. Coding starts from HTML

<img src="images/16c609af3525cb06006190aea43acfbc.png" width="50%" />

## Conclusion

I have started this article with the title of "Why AngularJS So Difficult", and my answer to it is, because **"We are still thinking HTML/Javascript-Together"**, and we are not really thinking "HTML-first". All three sections mentioned in this article are all about HTML.

1. HTML is Dynamic As Defined
2. AngularJS is Declarative Not Imperative
3. AngularJS is HTML-centric

Do you really think "HTML can express everything"? If you can answer it as yes, AngularJS gets easier. 

Then, what is Javascript for AngularJS? It is only, only to make HTML work. So, define HTML declarative enough, then make that HTML work with Javascript.

AngularJS 2.0 is on its way, and it is not a refactored version of 1.3, but a rewritten from the scratch with ES6. Everything will change; controller, scope, direct injection, and even coding style. However, one thing does not change in 2.0 is "HTML-centric Principle".

Next, I will write about AngularJS coding style, which is somewhat difficult for jQuery or vanilla Javascript developers.


Allen Kim
