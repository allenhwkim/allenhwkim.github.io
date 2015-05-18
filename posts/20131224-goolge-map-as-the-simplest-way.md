---
title: Google Map As The Simplest Way
---

I have been looking for a way to show a map on my site, 
but the even with the simplest solution, I found it requires Javascript coding.  
<br/><br/>
Of course, I can code Javasript as a programmer. However, I don't want to code. The best programming is no programming.  If I can achieve my goal without any coding, that's the best.
<!--more-->
<br/><br/>
That's the reason I created this, ng-map, <a href=" https://github.com/allenhwkim/angularjs-google-maps">AngularJS Google Maps Directive</a>,  I believe this is the simplest, simplest, and the simplest way to show a map on your page.
<br/><br/>
Thanks to AngularJS and its engineering team.
<br/><br/>
<style>
  table {width: 100%;height: 200px}
  tr > td {width:50%; height: 100%; font-family:Courier New;font-size:13px}
  map {display:block; width:100%; height: 100%}
</style>
 
Let's begin with this little tag.  This will show a map with the current location.
<table>
  <tr>
    <td> &lt;map />
    <td><map></map>
  </tr>
</table>
<br/><br/>

The above is fully demonstrated <a href ="https://rawgithub.com/allenhwkim/angularjs-google-maps/master/examples/hello_map.html">here</a>. As you see, there is NO single javascript required.
It just needs AngularJS and ng-map.min.js to be loaded.
<br/><br/>
The above shows my current location, but I want to see "The statue of liberty" instead.
<table>
  <tr>
    <td> &lt;map center="the statue of liberty" />
    <td><map center="the statue of liberty"></map>
  </tr>
</table>
<br/><br/>

It shows little slow, because it needs to get latitude and longitude from your vague input, I want to see it right away with the detailed map.
<table>
  <tr>
    <td> &lt;map center="[40.6892,-74.0444]" zoom="18" />
    <td><map center="[40.6892,-74.0444]" zoom="18" />
  </tr>
</table>
<br/><br/>

How about satellite view? No problem.
<table>
  <tr>
    <td>&lt;map center="[40.6892,-74.0444]" zoom="15" map-type-id="MapTypeId.SATELLITE" />
    <td><map center="[40.6892,-74.0444]" zoom="15" map-type-id="MapTypeId.SATELLITE" />
  </tr>
</table>
<br/><br/>
 
I want the statue of liberty pin-pointed. Then, let's add a marker.
<table>
  <tr>
    <td>  &lt;map center="[38.89,-77.03]" zoom="15" map-type-id="MapTypeId.SATELLITE"><br/>
      &nbsp; &lt;marker position="[40.6892,-74.0444]" /><br/>
    &lt;/map>
    <td>    
      <map center="[40.6892,-74.0444]" zoom="15" map-type-id="MapTypeId.SATELLITE">
        <marker position="[40.6892,-74.0444]" />
      </map>
  </tr>
</table>
<br/><br/>

How about bird eyes view?
<table>
  <tr>
    <td>
      &lt;map center="[40.6892,-74.0444]" zoom="18" map-type-id="MapTypeId.SATELLITE" tilt="45" />
    <td>
          <map center="[40.6892,-74.0444]" zoom="18" map-type-id="MapTypeId.SATELLITE" tilt="45" />
  </tr>
</table>
<br/><br/>

How about? ummm…, street view?
<pre>
&lt;map id="sv" street-view="StreetViewPanorama(document.querySelector('map#sv'), {position:new google.maps.LatLng(40.688738,-74.043871)})" />
</pre>
<table>
  <tr>
    <td>    <map id="sv"  street-view="StreetViewPanorama(document.querySelector('map#sv'), {position:new google.maps.LatLng(40.688738,-74.043871)})" />
  </tr>
</table>
<br/><br/>

Well, that's a bit.
Many would say why didn't I make those javascript simpler like this, &lt;map street-view="selector:40.688738,-74.043871" />.
<br/><br/>
It looks easy for you at the beginning with that way, but it requires you to learn my own style, which I don't want. I want you to learn nothing but Google Maps API only.
<br/><br/>
I would rather leave it as it is because that's how Google Maps API syntax looks like, 
<br/><br/>

Let's go further. How about bird-dyes view and streetview together?
<pre>
&lt;map center="[40.6892,-74.0444]" zoom="18"
  map-type-id="MapTypeId.SATELLITE" tilt="45"
  street-view="StreetViewPanorama(document.querySelector('div#sv'), 
    {position:new google.maps.LatLng(40.688738,-74.043871)})"/>
&lt;div id="sv" />
</pre>

<table>
  <tr>
    <td>    
       <map center="[40.6892,-74.0444]" zoom="18" map-type-id="MapTypeId.SATELLITE" tilt="45"
         street-view="StreetViewPanorama(document.querySelector('div#sv'), {position:new google.maps.LatLng(40.688738,-74.043871)})" />
    <td>
      <div id="sv" style="height:100%" />
  </tr>
</table>
<br/><br/>

So far, you haven't done any scripting, have you?
<br/><br/>

There are a lot more than I just mentioned here. Moreover, you can have full feature of Google Maps with this directive, and you just simply follow Google Maps v3 API documents and tutorials, not my directive documents and tutorials. In fact, there is any documentation or tutorial for this directive except github README file. <b>"It's That Simple"</b>. 

<br/><br/>

For the full code and details, <a href="https://github.com/allenhwkim/angularjs-google-maps">github</a> is there.
