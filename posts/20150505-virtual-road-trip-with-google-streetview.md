---
title: Virtual Road Trip With Google Streetview
---

Question: <strong>Is it possible to auto-play streetview following certain route?</strong></p>

<p>Answer: <strong>Yes</strong></p>
<!--more-->

<p>For example, I need to drive from my house to Blue mountain national park on Sunday, and I want to see how driving would be.</p>

<p>TL;DR; <a href="https://rawgit.com/allenhwkim/angularjs-google-maps/master/testapp/street-view_road_trip.html">DEMO</a>.</p>

![Imgur](http://i.imgur.com/5SCGhHj.png)

<p>We know that we can see the road using streetview in Google map, and we can also move around in streetview, but with click, click, and click forever.</p>

<p>With <a href="https://github.com/allenhwkim/angularjs-google-maps">angularjs Google maps</a>, you can easily add lots of google map compents; markers, shapes, layers, and more, on your browser with minimum javascript. <code>ng-map</code> module covers all examples of google map. You can see it in actions by visiting <a href="http://ngmap.github.io">http://ngmap.github.io</a>.</p>

<p>This road trip example shows how far this module can go extending ng-map directives.</p>

<p>Enough talk!! Let&rsquo;s go through step by step.</p>

<h3>First, you need a map</h3>

<p>You need a simple <code>map</code> tag to show a map in your browser.</p>

<pre><code>&lt;map zoom="16" center="1135 Karamea-Kohaihai Rd, Kahurangi National Park, Tasman"&gt;
</code></pre>

![Imgur](http://i.imgur.com/j01Vsey.png)

<p><a href="https://rawgit.com/allenhwkim/angularjs-google-maps/master/testapp/map_with_address.html">https://rawgit.com/allenhwkim/angularjs-google-maps/master/testapp/map_with_address.html</a></p>

<h3>On the map, yoou need to locate exact starting and end point for your road trip.</h3>

<p>The directive <code>places-auto-complete</code> makes it possible for determing the exact Lat/Lng of your staring and end point of your road trip.</p>

<pre><code>&lt;input places-auto-complete ng-model="origin" size=40 /&gt;
</code></pre>

![Imgur](http://i.imgur.com/5F1Htxp.png)

<p><a href="https://rawgit.com/allenhwkim/angularjs-google-maps/master/testapp/places-auto-complete.html">https://rawgit.com/allenhwkim/angularjs-google-maps/master/testapp/places-auto-complete.html</a></p>

<h3>Let me see the driving directions</h3>

<p>The directive <code>directions</code> will show the route of your road trip on map. Only you need to do is to specify origin and destination.</p>

<pre><code>  &lt;map zoom="14" center="1135 Karamea-Kohaihai Rd, Kahurangi National Park, Tasman"&gt;
    &lt;directions 
      draggable="true"
      panel="directions-panel"
      travel-mode="DRIVING"
      origin="1136 Karamea-Kohaihai Rd, Kahurangi National Park, Tasman"
      destination="Pier St, Jackson Bay, West Coast, New Zeland"&gt;
    &lt;/directions&gt;
  &lt;/map&gt;
</code></pre>

![Imgur](http://i.imgur.com/X04D829.png)

<p><a href="https://rawgit.com/allenhwkim/angularjs-google-maps/master/testapp/directions2.html">https://rawgit.com/allenhwkim/angularjs-google-maps/master/testapp/directions2.html</a></p>

<h3>You also want to see the road on streetview.</h3>

<p>The directive <code>street-view-panorama</code> will show the streetview of your map. You can see the streetview in a separate panel or on the same map.</p>

<p>The following code shows the streetview on a separate panel.</p>

<pre><code>&lt;map zoom="18" center="1135 Karamea-Kohaihai Rd, Kahurangi National Park, Tasman" tilt="45"&gt;
  &lt;street-view-panorama container="street view"&gt;
  &lt;/street-view-panorama&gt;
&lt;/map&gt;
&lt;div  id="streetview"&gt;&lt;/div&gt;
</code></pre>

![Imgur](http://i.imgur.com/HMyK8Ki.png)

<p><a href="https://rawgit.com/allenhwkim/angularjs-google-maps/master/testapp/street-view-panorama_container2.html">https://rawgit.com/allenhwkim/angularjs-google-maps/master/testapp/street-view-panorama_container2.html</a></p>

<h3>Now you are ready.</h3>

<p>You have been through several directives to make a virtual road trip possible. Those directives are</p>

<ul><li>map</li>
<li>places-auto-complete</li>
<li>directions</li>
<li>and, street-view-panorama</li>
</ul><p>To make it all togeter, and with some programming, you can auto-play the street view.</p>

<p>It comes out like <a href="https://rawgit.com/allenhwkim/angularjs-google-maps/master/testapp/street-view_road_trip.html">this</a></p>

<p>This road trip page, an AngularJS application, has some options to play with;</p>

  * Driving speed: Indicates how fast your auto-play changes. If you set 100km per hour, it will move around 27 meters ervery second to the destination. If you set 50Km per hour, it moves 13 meters per second.

  * Driver Mode: You are only focused on road while driving.

  * Passenger Mode: You can look around while driving.

Do you know any beautiful place to drive around?
