$( document ).ready(function() {

    $( "#menu" ).on( "click", function() {

        $( "#menu-item" ).toggleClass("open");
    });
});

var imageContainer = document.querySelector("#about-body");

imageContainer.addEventListener("click", function(event) {
    var element = event.target;
  
    if (element.matches("img")) {
      var state = element.getAttribute("data-state");
  
      if (state === "normal") {
        element.dataset.state = "alt";
        element.setAttribute("data-state", "alt");
        element.setAttribute("src", element.dataset.alt);
      } else {
        element.dataset.state = "normal";
        element.setAttribute("src", element.dataset.normal);
      }
    }
  });

var projects = [
  {
      title: 'ParkSharkNYC',
      thumbnail: './assets/images/parkSharkBanner.png',
      tags: ['Javascript', 'Bulma', 'GoogleMaps'],
      link: 'https://github.com/tomekregulski/ParkSharkNYC'
  },
  {
      title: 'Weather App',
      thumbnail: './assets/images/weatherBanner.png',
      tags: ['Javascript', 'Bootstrap', 'OpenWeather'],
      link: 'https://github.com/tomekregulski/weather-app'
  },
  {
      title: 'Day Planner',
      thumbnail: './assets/images/dayPlannerBanner.png',
      tags: ['Javascript', 'HTML/CSS','Bootstrap'],
      link: 'https://github.com/tomekregulski/day-planner'
  },
  // {
  //     title: 'Deep Roots Ensemble Artist Page',
  //     thumbnail: './assets/images/placeholder.png',
  //     tags: ['HTML','CSS', 'Bootstrap'],
  //     link: '#'
  // }
  ];


function mapProjects() {
var target = document.querySelector('#projects');

for (var i = 0; i < projects.length; i++) {
    var project = projects[i];

    var container = document.createElement('a');
    var header = document.createElement('h3');
    var thumbnail = document.createElement('div');
    var tags = document.createElement('div');

    // add the `project` class for styling purposes (we will reference this in our CSS stylesheet)
    container.setAttribute('class', 'project');
    // set the href of the project container to the project's link property (we are using placeholders for now)
    container.setAttribute('href', project.link);
    // set the header to the project's title property
    header.textContent = project.title;
    // set the background image to the project's thumbnail property
    thumbnail.setAttribute('style', 'background: url(' + project.thumbnail + ') center/cover no-repeat;');
    // add the 'thumbnail' class for styling purposes
    thumbnail.setAttribute('class', 'thumbnail');
    // add the 'tags' class for styling purposes
    tags.setAttribute('class', 'tags');

    // add elements to DOM
    target.appendChild(container);
    container.appendChild(header);
    container.appendChild(thumbnail);
    container.appendChild(tags);

    // loop over the tags array
    for (var j = 0; j < project.tags.length; j ++) {
    // create a new span element for each tag
    var tag = document.createElement('span');

    // set the tag's text to the value found at the current index (j)
    tag.textContent = project.tags[j]
    // add the `tag` class for styling purposes
    tag.setAttribute('class', 'tag');

    // append the tag to the tags div
    tags.appendChild(tag);
    }
}
};

// call our mapping function
// mapProjects();
  