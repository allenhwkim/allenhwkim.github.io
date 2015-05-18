---
title: Graceful AngularJS Form Validator
---

How It Works
------------
This module gracefully injects Angular validation rules from a JSON object ONLY if not defined.

For example, there is validation rule given as `{minlength:1}`,  
<!--more-->

![Imgur](http://i.imgur.com/tQS4sQk.png?2)

This input  | Will become
------------- | -------------
`<input name="foo" />` | `<input name="foo" ng-minlength="1"  ng-model="user.foo"  />`    
`<input name="foo" ng-minlength="20" />` | `<input name="foo" ng-minlength="20"  ng-model="user.foo"  />`

<br/>
Why Another Validator?
-----------------------

There are many form validation modules in github, but There is none found which is 100% AngularJS syntax compliant validator. All of them are using its own syntax by ignoring AngularJS syntaxe, `ng-minlength`, `min`, `max`, etc.   

Mosf of develoers do not want to learn another syntax for another validator because AngularJS provides good ones already. This module takes advantage of AngularJS and cleaner HTML with validation rule object.

   * It is 100% AngularJS compliant
   * You can have cleaner html as you wish
   * It allows form validation by an object
   * You can use server-side validation

