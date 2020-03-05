/* Using the kind examples here
   https://codepen.io/ezos86/pen/NqxKzy
   https://codepen.io/slatiner/pen/Gmxle
*/
var app = angular.module('timeline', []);

app.controller('MainController', function($scope) { 
    $scope.activities = 
      [{id:0,   text: "life",   class: "icon-address",        active: "active"},
       {id:1,   text: "study",  class: "icon-graduation-cap", active: "active"},
       {id:2,   text: "work",   class: "icon-briefcase",      active: "active"},
       {id:3,   text: "extra",  class: "icon-user",      active: "active"}
      ];
  
    $scope.toggleAllActivities = function () {
      $scope.activities.map(function (activity) {
        activity.active = "active";
      });
      $scope.refreshEvents();
    }
     
    $scope.selectActivity = function (selected) {
      $scope.activities.map (function (activity) {
         if(activity.id === selected.id) {
           activity.active = "active";
         } else {
           activity.active = null;
         }
      });
      $scope.refreshEvents();
    }
  
    $scope.refreshEvents = function () {
      $scope.active_events = [];
      $scope.events.map(function (event) {
        $scope.activities.map(function (activity) {
          if(activity.text == event.type && activity.active == "active") {
            $scope.active_events.push(event);
          }
        });
      });
    };
    
    $scope.events = 
      [{event_id:1,
        type: "life",
        glyphicon: "glyphicon-grain",
        title: "Your journey begins here",
        text: "Born on the late 80's to the sound of 'Amanda', by Boston, in the always sunny city of Huelva, in Andalusia"},
      {event_id:2,
        type: "extra",
        title: "A home computer",
        glyphicon: "glyphicon-print",
        text: "On the first unboxing of my life, a Packard Bell showed up with an amazing gigabyte of storage to fill with abstract Paint art. Trying to print one of this masterpieces on a rainy day, resulted on a voice warning: 'Your printer needs paper, please put paper on the tray'. It frightened me so much that the monster remained off for a few days. I was incapable of turning it on."},
      {event_id:3,
        type: "extra",
        glyphicon: "glyphicon-record",
        title: "No pain no gain",
        text: "Joined a local football team, based on my town. Played for them for almost 10 years. Learned a few things about companionship, sacrifice, and athlete's foot",
        fact: "Amazon was a book selling company. Really. Just books"},
      {event_id:4,
        type: "study",
        glyphicon: "glyphicon-flag",
        title: "How you doin'?",
        text: "Some time before starting the university, I went to an academy to improve my english. 5 years dedicating one, two or even three evenings a week to master the language of Shakespeare have sure paid off.",
        link: "http://www.juntadeandalucia.es/averroes/centros-tic/21800791/helvia/sitio/"},
      {event_id:5,
        type: "study",
        glyphicon: "glyphicon-screenshot",
        title: "<div>Hello world</div>",
        text: "Got the first notions of HTML at high school, playing around with tags and styles. Most of the time, we just wanted to finish our exercises quickly to play GTA on the school LAN. You could say that videogames are likely my first source of inspiration for code optimization (?)",
        fact: "Millenium saga was already written, but not yet published"},
      {event_id:6,
        type: "study",
        glyphicon: "glyphicon-level-up",
        title: "stack overflow",
        text: "Finally, started Computer Science studies at university. I discovered what a DB smelled like, and I started dealing with null pointers, at the same time learning about software design and architecture",
        link: "http://www.uhu.es/etsi/"},
      {event_id:7,
        type: "work",
        glyphicon: "glyphicon-phone-alt",
        title: "Coffee kid",
        text: "On my first job experience, I was hired as a web developer for a small company. With the guidance of a senior developer, I learned my first programming tricks. Funniest part of the job was answering the phone to customers from all Andalucia (and parts of northern Spain). The accent varies town to town, from barely understandable to gibberish. And in that way you had to decrypt the requirements for the websites."},
      {event_id:8,
        type: "study",
        glyphicon: "glyphicon-education",
        title: "A local hero",
        text: "Studied a Master on Local Development. Deep respect for the teachers, that adjusted the theme and subjects to pupils coming from different careers like architecture, finances, computer sciences, social work or philosophy.",
        link: "http://uhu.es/idl/masteroficial/"},
      {event_id:9,
        type: "life",
        glyphicon: "glyphicon-picture",
        title: "The times they are a'changing",
        text: "Moved to Granada, still in Andalusia."},
      {event_id:9,
        type: "work",
        glyphicon: "glyphicon-briefcase",
        title: "She works hard for the money",
        text: "Got a job in Unit4, a leading provider of enterprise applications empowering people in service organizations (?). I touched C# code when they let me. Good working environment, full of motivated youngsters.",
        link: "http://www.unit4.com/"},
      {event_id:10,
        type: "life",
        glyphicon: "glyphicon-plane",
        title: "I come from a land down under",
        text: "Moved to not so sunny Brussels, the country with good chocolate, beer and mussels"},
      {event_id:11,
        type: "work",
        glyphicon: "glyphicon-bed",
        title: "Less is more",
        text: "Hired as a web developer at Institut Jules Bordet, on the Breast team, which is focused on breast cancer research. Some PHP over here, some Python over there, first steps also using Gulp, Less, Bower and Node",
        link: "https://www.br-e-a-s-t.org/"},
      {event_id:12,
        type: "study",
        glyphicon: "glyphicon-flag",
        title: "Le mec travaille comme un acharné",
        text: "J'ai suivi des cours de français deux soirs par semaine, à l'Institut Fernand Cocq. Après deux ans, mon niveau de français, sans être magnifique, a vraiment amélioré. Commander du 'vin rouge' sans accent espagnol n'est plus un secret pour moi.",
        link: "http://www.ifcxl.be/"},
      {event_id:13,
        type: "extra",
        glyphicon: "glyphicon-baby-formula",
        title: "Liquid gold",
        text: "Tried Wardaamse Triple for the first time. Best beer this side of the Pyrenees.",
        link: "http://www.brouwerijstokhove.be/"},
      {event_id:14,
        type: "extra",
        glyphicon: "glyphicon-globe",
        title: "Man of the match!",
        text: "Joined Royal Brussels British FC, an amateur football club. We welcome people of all ages and nationalities.",
        link: "http://rbbfc.org/"},
      {event_id:15,
        type: "work",
        glyphicon: "glyphicon-tint",
        title: "Let's do some science",
        text: "Scientist on WIV-ISP, in the Platform Biotechnology and molecular biology. Assisting the masters of next generation DNA sequencing. Cheers Python! Welcome Ruby!",
        link: "https://www.wiv-isp.be"}];
  
      $scope.refreshEvents();
});
