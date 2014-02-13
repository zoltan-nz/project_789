/* ========================================================================
 * Bootstrap: tab.js v3.0.3
 * http://getbootstrap.com/javascript/#tabs
 * ========================================================================
 * Copyright 2013 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ======================================================================== */
+function(t){"use strict";var a=function(a){this.element=t(a)};a.prototype.show=function(){var a=this.element,e=a.closest("ul:not(.dropdown-menu)"),n=a.data("target");if(n||(n=a.attr("href"),n=n&&n.replace(/.*(?=#[^\s]*$)/,"")),!a.parent("li").hasClass("active")){var i=e.find(".active:last a")[0],s=t.Event("show.bs.tab",{relatedTarget:i});if(a.trigger(s),!s.isDefaultPrevented()){var o=t(n);this.activate(a.parent("li"),e),this.activate(o,o.parent(),function(){a.trigger({type:"shown.bs.tab",relatedTarget:i})})}}},a.prototype.activate=function(a,e,n){function i(){s.removeClass("active").find("> .dropdown-menu > .active").removeClass("active"),a.addClass("active"),o?(a[0].offsetWidth,a.addClass("in")):a.removeClass("fade"),a.parent(".dropdown-menu")&&a.closest("li.dropdown").addClass("active"),n&&n()}var s=e.find("> .active"),o=n&&t.support.transition&&s.hasClass("fade");o?s.one(t.support.transition.end,i).emulateTransitionEnd(150):i(),s.removeClass("in")};var e=t.fn.tab;t.fn.tab=function(e){return this.each(function(){var n=t(this),i=n.data("bs.tab");i||n.data("bs.tab",i=new a(this)),"string"==typeof e&&i[e]()})},t.fn.tab.Constructor=a,t.fn.tab.noConflict=function(){return t.fn.tab=e,this},t(document).on("click.bs.tab.data-api",'[data-toggle="tab"], [data-toggle="pill"]',function(a){a.preventDefault(),t(this).tab("show")})}(jQuery);