---
title: Building A Carousel In Angular Way
---

Recently, I wanted to mimic the layout of [Google Drive](http://www.google.ca/drive/). It seems like a trend to build a site like that these days, and I wanted to experience it by building it. The output that I come out is like [this](http://embed.plnkr.co/KKiTycPIx8FXsa16x8Ht/preview).

Then, I wanted to add a carousel on a section of a page, and started looking for carousel coding in Angular way.
<!--more-->

I found [angular-carousel](http://ngmodules.org/modules/angular-carousel) used by many places. Close enough, but I did not feel coding a carousel like the following is the AngualrJS Way. 

    <ul rn-carousel class="image">
      <li>slide #1</li>
      <li>slide #2</li>
      <li>slide #3</li>
    </ul>
    
Where is navigation buttons? What does it do when navagitaion button is clicked? In my opinion, the way to build a directive like the above is JQuery plugin way, not a Angular way.

<a href="http://plnkr.co/edit/NukxpGel8I53ZSCwCWob?p=preview"><img src="http://allenkim.me/static/images/bf345a2d9c14a60af5465fd8f188f30a.png" width="80%" /></a>

What is "Angular Way" anyway? The answer is there is no answer for that. The answer for that is different from each person.

Here is my definition of "Angular Way".

  1. Requirements in HTML
  2. Less Javascript(By building re-usable directives)

Am I saying AngualrJS with "Less Javascript"? Yes, "Less Javascript". In this article, I would like to build carousel from scratch, so the outcome of the HTML is descriptive and reusable.


First thing I need to do is gathering requirements. 

The following is the requirement I gathered to make a carousel.
For TL;DR;, who wants to see the result first, this is [the final result](http://embed.plnkr.co/NukxpGel8I53ZSCwCWob/preview
).

## Requirements

 1. Must be navigable through slides.  
    1) Hide previous button when it is the first slide    
    2) Hide next button when it is the last slide  

 2. Must work with mobile devices  
    1) swipe left goes to the previous slide  
    2) swipe right goes to the next slide 

 3. Must show only a single slide any time

I am going to start the coding the requirements with empty template with my perferred framework and font; AngualrJS and FontAwsome;

If you are updating an existing project, you don't need to this step.

    <link href="http://maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.css" rel="stylesheet">
    <script src="https://code.angularjs.org/1.3.5/angular.js"></script>
    <script src="https://code.angularjs.org/1.3.5/angular-touch.js"</script>
    <link rel="stylesheet" href="style.css">
    <script src="script.js"></script>

I am ready now, let me start the coding.

## First Step. Complete HTML with Requirements

At this time, I do not think of Javascript nor css. Those will be completed by the next steps.

    <section ngd-carousel>
    
      <nav ng-swipe-left="showNext()" ng-swipe-right="showPrev()">
        <div ng-hide="firstSlide" ng-click="showPrev()">
          <i class="fa fa-4x fa-caret-left"></i>
        </div>
        <div ng-hide="lastSlide" ng-click="showNext()">
          <i class="fa fa-4x fa-caret-right"></i>
        </div>
      </nav>
      
      <div>
        <img src="http://lorempixel.com/800/600" />
        <img src="http://lorempixel.com/801/600" />
        <img src="http://lorempixel.com/802/600" />
      </div>
      
    </section>

<img src="http://allenkim.me/static/images/b0c2fc677400dd73f2ea451f6d1549dc.png" align="right" style="margin:1em" width="300" />
  
The html above will look like the picture on the right. The look-and-feel is not even close, but the requirements are all in there. By only reading html, it is a carousel that I want to build.

Let me check it again that the above HTML stastifies all the  requirements.
  
   1. Must be navigatible   
       **ng-click="showPrev"** / **ng-click="showNext"**  
    * Hide previous button when it is the first slide   
       **ng-hide="firstSlide"**    
    * Hide next button when it is the last slide    
       **ng-hide="lastSlide"**  

   2. Must work with mobile devices  
    * slide left goes to the previous slide    
       **ng-swipe-left="showPrev()"**  
    * slide right goes to the next slide   
       **ng-swipe-left="showPrev()"**  

    want to handle this not with javascript nor AngularJS but with css**
    
## Second Step, Complete CSS styling 

I prefer using class names and inline style attribute for css styling. You may say inline style attributes are not recommended. However, at this step, I want to see how it looks like. Later, inline style attribute will be removed and converted into AngularJS directives.

    <section ngd-carousel class="pos-relative auto-overflow">
    
      <3. Must show only a single slide av class="top-stacked full-width full-height text-white"
        ng-swipe-left="showNext()" ng-swipe-right="showPrev()">
        <div class="pull-left ngd-v-center margin-1em" 
          ng-hide="firstSlide()" ng-click="showPrev()">
          <i class="fa fa-4x fa-caret-left"></i>
        </div>
        <div class="pull-right ngd-v-center margin-1em" 
          ng-hide="lastSlide()" ng-click="showNext()">
          <i class="fa fa-4x fa-caret-right"></i>
        </div>
      </nav>
      
      <div ngd-carousel-slides slide="2" style="width:300%" class="bottom-stacked">
        <img style="width:33.333333333%" class="pull-left full-width" src="http://lorempixel.com/800/600" />
        <img style="width:33.333333333%" class="pull-left full-width" src="http://lorempixel.com/801/600" />
        <img style="width:33.333333333%" class="pull-left full-width" src="http://lorempixel.com/802/600" />
      </div>
      
    </section>
    

<img src="http://allenkim.me/static/images/6019a38fede86f042bbdb950fe1d4224.png" width="300" align="left" style="margin:1em" />

With the code above, it looks like the picture on the left side. I have used several class names, which are general and also not to DOM-specific. The reason I prefer to use general class name is that I can reuse it any time when I want. I also found that using common class name also saves me from coding the same css attributes again and again.

This is the [`styles.css` file](http://embed.plnkr.co/NukxpGel8I53ZSCwCWob/style.css) that I end up with.

It's ready. HTML is fully descriptive, and look-and-feel is the same as required.

However, it is not fully functional. We need to nail the requirements with Javascript.

## The final step, Javascript

The above html is somewhat invasive because of the inline styles. We can remove all inline css and build into AngularJS directives.

The following is the list that Javascript coding is necessary.

* `ngd-carousel` directive  
  This will be the center of all carousel features and scoping.

* `showNext()` function for;
  1. ng-swipe-left 
  2. ng-click

* `showPrev()` function for;
  1. ng-swipe-right 
  2. ng-click

* `ngd-v-center` directive to align vertically
 
* `firstSlide()`  and `lastSlide()` function

* inline style attribute of container of slides, `style="width:300%"`

* inline style attribute of slide, `style="width:33.333333333%"`

The javascript coding did not take long, and I was able to finish all JS coding in less than 70 lines.

This is the final [HTML](http://embed.plnkr.co/NukxpGel8I53ZSCwCWob/index.html)

    <section ngd-carousel class="pos-relative no-overflow">
    
      <nav class="top-stacked full-width full-height text-white"
        ng-swipe-right="showPrev()" ng-swipe-left="showNext()">
        <div class="pull-left ngd-v-center margin-1em" 
          ng-hide="is1stSlide()"
          ng-click="showPrev()">
          <i class="fa fa-4x fa-caret-left"></i>
        </div>
        <div class="pull-right ngd-v-center margin-1em" 
          ng-hide="isLastSlide()"
          ng-click="showNext()">
          <i class="fa fa-4x fa-caret-right"></i>
        </div>
      </nav>
      
      <div ngd-carousel-slides slide="2" class="clearfix bottom-stacked">
        <img class="pull-left full-width" src="http://lorempixel.com/800/600" />
        <img class="pull-left full-width" src="http://lorempixel.com/801/600" />
        <img class="pull-left full-width" src="http://lorempixel.com/802/600" />
      </div>
      
    </section>

You can check the final Javascript [here](http://embed.plnkr.co/NukxpGel8I53ZSCwCWob/script.js).

  
## Conslusion

Someone may say HTML is too long and has too many classes, and someone may say HTML has too many details for functionalities.

However, in my opinion, I would like to have longer HTML than longer Javascript. The reason is simple. HTML is visible, readable, and fault-tolerant, but Javascript is not visible nor readable, and not fault-tolerant. 

CSS is not visible and readable, but it is very fault-talerant.
By making common classes and putting those into HTML, we can make it is as visible and readable.

**HTML First**, That's my Angular way.

Allen Kim
