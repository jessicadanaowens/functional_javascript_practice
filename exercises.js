//use forEach to print all the names in an array

function forEachPractice (console) {
  var names = ["Ben", "Jafar", "Matt", "Priya", "Brian"];

  names.forEach(function(name) {
    console.log(name);
  });
}

//For each video, add a projected {id, title} pair to the videoAndTitlePairs array.

function forEachPracticeTwo () {
  var newReleases = [
      {
        "id": 70111470,
        "title": "Die Hard",
        "boxart": "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
        "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
        "rating": [4.0],
        "bookmark": []
      },
      {
        "id": 654356453,
        "title": "Bad Boys",
        "boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
        "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
        "rating": [5.0],
        "bookmark": [{ id:432534, time:65876586 }]
      },
      {
        "id": 65432445,
        "title": "The Chamber",
        "boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
        "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
        "rating": [4.0],
        "bookmark": []
      },
      {
        "id": 675465,
        "title": "Fracture",
        "boxart": "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
        "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
        "rating": [5.0],
        "bookmark": [{ id:432534, time:65876586 }]
      }
    ],
    videoAndTitlePairs = [];

  newReleases.forEach(function (release) {
    var newObject = {};
    newObject.id = release.id;
    newObject.title = release.title;
    videoAndTitlePairs.push(newObject)

  })

  return videoAndTitlePairs;
}


// Implement map()

Array.prototype.map = function(projectionFunction) {
  var results = [];
  this.forEach(function(itemInArray) {
    results.push(projectionFunction(itemInArray));

  });

  return results;
};

// Use map() to project an array of videos into an array of {id,title} pairs

function() {
  var newReleases = [
    {
      "id": 70111470,
      "title": "Die Hard",
      "boxart": "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
      "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
      "rating": [4.0],
      "bookmark": []
    },
    {
      "id": 654356453,
      "title": "Bad Boys",
      "boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
      "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
      "rating": [5.0],
      "bookmark": [{ id:432534, time:65876586 }]
    },
    {
      "id": 65432445,
      "title": "The Chamber",
      "boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
      "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
      "rating": [4.0],
      "bookmark": []
    },
    {
      "id": 675465,
      "title": "Fracture",
      "boxart": "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
      "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
      "rating": [5.0],
      "bookmark": [{ id:432534, time:65876586 }]
    }
  ];

  return newReleases.map(function(video) { return {id: video.id, title: video.title}; });
}

//Implement filter()

Array.prototype.filter = function(predicateFunction) {
  var results = [];
  this.forEach(function(itemInArray) {
    if (predicateFunction(itemInArray)) {
      results.push(itemInArray);
    }
  });

  return results;
};

//Query Data by Chaining Method Calls

function() {
  var newReleases = [
    {
      "id": 70111470,
      "title": "Die Hard",
      "boxart": "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
      "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
      "rating": 4.0,
      "bookmark": []
    },
    {
      "id": 654356453,
      "title": "Bad Boys",
      "boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
      "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
      "rating": 5.0,
      "bookmark": [{ id:432534, time:65876586 }]
    },
    {
      "id": 65432445,
      "title": "The Chamber",
      "boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
      "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
      "rating": 4.0,
      "bookmark": []
    },
    {
      "id": 675465,
      "title": "Fracture",
      "boxart": "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
      "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
      "rating": 5.0,
      "bookmark": [{ id:432534, time:65876586 }]
    }
  ];

  // ------------   INSERT CODE HERE!  -----------------------------------
  // Chain the filter and map functions to select the id of all videos
  // with a rating of 5.0.

  return newReleases.
    filter(function(video) {
      return video.rating === 5.0;
    }).
    map(function(video) {
      return video.id;
    });
  // ------------   INSERT CODE HERE!  -----------------------------------
}

//Flatten the movieLists array into an array of video ids

function() {
  var movieLists = [
      {
        name: "New Releases",
        videos: [
          {
            "id": 70111470,
            "title": "Die Hard",
            "boxart": "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
            "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
            "rating": 4.0,
            "bookmark": []
          },
          {
            "id": 654356453,
            "title": "Bad Boys",
            "boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
            "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
            "rating": 5.0,
            "bookmark": [{ id:432534, time:65876586 }]
          }
        ]
      },
      {
        name: "Dramas",
        videos: [
          {
            "id": 65432445,
            "title": "The Chamber",
            "boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
            "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
            "rating": 4.0,
            "bookmark": []
          },
          {
            "id": 675465,
            "title": "Fracture",
            "boxart": "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
            "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
            "rating": 5.0,
            "bookmark": [{ id:432534, time:65876586 }]
          }
        ]
      }
    ],
    allVideoIdsInMovieLists = [];
  touch
  // ------------   INSERT CODE HERE!  -----------------------------------
  // Use two nested forEach loops to flatten the movieLists into a list of
  // video ids.
  // ------------   INSERT CODE HERE!  -----------------------------------

  movieLists.forEach(function(item) {
    item.videos.forEach(function(video) {
      allVideoIdsInMovieLists.push(video.id);
    });
  });

  return allVideoIdsInMovieLists;

}

//Implement concatAll()
Array.prototype.concatAll = function() {
  var results = [];
  this.forEach(function(subArray) {
    subArray.forEach(function(item) {
      results.push(item);
    });
    // ------------ INSERT CODE HERE! ----------------------------
    // Add all the items in each subArray to the results array.
    // ------------ INSERT CODE HERE! ----------------------------
  });

  return results;
};

// Use map() and concatAll() to project and flatten the movieLists into an array of video ids

function() {
  var movieLists = [
    {
      name: "New Releases",
      videos: [
        {
          "id": 70111470,
          "title": "Die Hard",
          "boxart": "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
          "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
          "rating": 4.0,
          "bookmark": []
        },
        {
          "id": 654356453,
          "title": "Bad Boys",
          "boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
          "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
          "rating": 5.0,
          "bookmark": [{ id:432534, time:65876586 }]
        }
      ]
    },
    {
      name: "Dramas",
      videos: [
        {
          "id": 65432445,
          "title": "The Chamber",
          "boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
          "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
          "rating": 4.0,
          "bookmark": []
        },
        {
          "id": 675465,
          "title": "Fracture",
          "boxart": "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
          "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
          "rating": 5.0,
          "bookmark": [{ id:432534, time:65876586 }]
        }
      ]
    }
  ];

  // ------------   INSERT CODE HERE!  -----------------------------------
  // Use map and concatAll to flatten the movieLists in a list of video ids.
  // ------------   INSERT CODE HERE!  -----------------------------------

  return movieLists.
    map(function(movieList) {
      return movieList.videos.map(function(video) {
        return video.id;
      });
    }).
    concatAll();

}

//Retrieve id, title, and a 150x200 box art url for every video

function() {
  var movieLists = [
    {
      name: "Instant Queue",
      videos : [
        {
          "id": 70111470,
          "title": "Die Hard",
          "boxarts": [
            { width: 150, height:200, url:"http://cdn-0.nflximg.com/images/2891/DieHard150.jpg" },
            { width: 200, height:200, url:"http://cdn-0.nflximg.com/images/2891/DieHard200.jpg" }
          ],
          "url": "http://api.netflix.com/catalog/titles/movies/70111470",
          "rating": 4.0,
          "bookmark": []
        },
        {
          "id": 654356453,
          "title": "Bad Boys",
          "boxarts": [
            { width: 200, height:200, url:"http://cdn-0.nflximg.com/images/2891/BadBoys200.jpg" },
            { width: 150, height:200, url:"http://cdn-0.nflximg.com/images/2891/BadBoys150.jpg" }

          ],
          "url": "http://api.netflix.com/catalog/titles/movies/70111470",
          "rating": 5.0,
          "bookmark": [{ id:432534, time:65876586 }]
        }
      ]
    },
    {
      name: "New Releases",
      videos: [
        {
          "id": 65432445,
          "title": "The Chamber",
          "boxarts": [
            { width: 150, height:200, url:"http://cdn-0.nflximg.com/images/2891/TheChamber150.jpg" },
            { width: 200, height:200, url:"http://cdn-0.nflximg.com/images/2891/TheChamber200.jpg" }
          ],
          "url": "http://api.netflix.com/catalog/titles/movies/70111470",
          "rating": 4.0,
          "bookmark": []
        },
        {
          "id": 675465,
          "title": "Fracture",
          "boxarts": [
            { width: 200, height:200, url:"http://cdn-0.nflximg.com/images/2891/Fracture200.jpg" },
            { width: 150, height:200, url:"http://cdn-0.nflximg.com/images/2891/Fracture150.jpg" },
            { width: 300, height:200, url:"http://cdn-0.nflximg.com/images/2891/Fracture300.jpg" }
          ],
          "url": "http://api.netflix.com/catalog/titles/movies/70111470",
          "rating": 5.0,
          "bookmark": [{ id:432534, time:65876586 }]
        }
      ]
    }
  ];


  // Use one or more map, concatAll, and filter calls to create an array with the following items
  // [
  //     {"id": 675465,"title": "Fracture","boxart":"http://cdn-0.nflximg.com/images/2891/Fracture150.jpg" },
  //     {"id": 65432445,"title": "The Chamber","boxart":"http://cdn-0.nflximg.com/images/2891/TheChamber150.jpg" },
  //     {"id": 654356453,"title": "Bad Boys","boxart":"http://cdn-0.nflximg.com/images/2891/BadBoys150.jpg" },
  //     {"id": 70111470,"title": "Die Hard","boxart":"http://cdn-0.nflximg.com/images/2891/DieHard150.jpg" }
  // ];

  return movieLists.
    map(function (movieList) {
      return movieList.videos.map( function (video) {
        return video.boxarts.filter( function (boxart) {
          return boxart.width === 150;
        }).map( function (boxart) {
          return {"id": video.id, "title": video.title, "boxart": boxart.url}
        })
      }).concatAll()
    }).concatAll()
}

//Implement concatMap()
Array.prototype.concatMap = function(projectionFunctionThatReturnsArray) {
  return this.
    map(function(item) {
      return projectionFunctionThatReturnsArray(item);
    }).
    // apply the concatAll function to flatten the two-dimensional array
    concatAll();
};

//Use concatMap() to retrieve id, title, and 150x200 box art url for every video

function() {
  var movieLists = [
    {
      name: "Instant Queue",
      videos : [
        {
          "id": 70111470,
          "title": "Die Hard",
          "boxarts": [
            { width: 150, height:200, url:"http://cdn-0.nflximg.com/images/2891/DieHard150.jpg" },
            { width: 200, height:200, url:"http://cdn-0.nflximg.com/images/2891/DieHard200.jpg" }
          ],
          "url": "http://api.netflix.com/catalog/titles/movies/70111470",
          "rating": 4.0,
          "bookmark": []
        },
        {
          "id": 654356453,
          "title": "Bad Boys",
          "boxarts": [
            { width: 200, height:200, url:"http://cdn-0.nflximg.com/images/2891/BadBoys200.jpg" },
            { width: 150, height:200, url:"http://cdn-0.nflximg.com/images/2891/BadBoys150.jpg" }

          ],
          "url": "http://api.netflix.com/catalog/titles/movies/70111470",
          "rating": 5.0,
          "bookmark": [{ id:432534, time:65876586 }]
        }
      ]
    },
    {
      name: "New Releases",
      videos: [
        {
          "id": 65432445,
          "title": "The Chamber",
          "boxarts": [
            { width: 150, height:200, url:"http://cdn-0.nflximg.com/images/2891/TheChamber150.jpg" },
            { width: 200, height:200, url:"http://cdn-0.nflximg.com/images/2891/TheChamber200.jpg" }
          ],
          "url": "http://api.netflix.com/catalog/titles/movies/70111470",
          "rating": 4.0,
          "bookmark": []
        },
        {
          "id": 675465,
          "title": "Fracture",
          "boxarts": [
            { width: 200, height:200, url:"http://cdn-0.nflximg.com/images/2891/Fracture200.jpg" },
            { width: 150, height:200, url:"http://cdn-0.nflximg.com/images/2891/Fracture150.jpg" },
            { width: 300, height:200, url:"http://cdn-0.nflximg.com/images/2891/Fracture300.jpg" }
          ],
          "url": "http://api.netflix.com/catalog/titles/movies/70111470",
          "rating": 5.0,
          "bookmark": [{ id:432534, time:65876586 }]
        }
      ]
    }
  ];


// Use one or more concatMap, map, and filter calls to create an array with the following items
   [
       {"id": 675465,"title": "Fracture","boxart":"http://cdn-0.nflximg.com/images/2891/Fracture150.jpg" },
       {"id": 65432445,"title": "The Chamber","boxart":"http://cdn-0.nflximg.com/images/2891/TheChamber150.jpg" },
       {"id": 654356453,"title": "Bad Boys","boxart":"http://cdn-0.nflximg.com/images/2891/BadBoys150.jpg" },
       {"id": 70111470,"title": "Die Hard","boxart":"http://cdn-0.nflximg.com/images/2891/DieHard150.jpg" }
   ];

  return movieLists.concatMap(function(movieList) {
    return movieList.videos.concatMap(function(video) {
      return video.boxarts.
        filter(function(boxart) {
          return boxart.width === 150;
        }).
        map(function(boxart) {
          return {id: video.id, title: video.title, boxart: boxart.url};
        });
    });
  });
}

//Implement reduce()

Array.prototype.reduce = function(combiner, initialValue) {
  var counter,
    accumulatedValue;

  // If the array is empty, do nothing
  if (this.length === 0) {
    return this;
  }
  else {
    // If the user didn't pass an initial value, use the first item.
    if (arguments.length === 1) {
      counter = 1;
      accumulatedValue = this[0];
    }
    else if (arguments.length >= 2) {
      counter = 0;
      accumulatedValue = initialValue;
    }
    else {
      throw "Invalid arguments.";
    }

    // Loop through the array, feeding the current value and the result of
    // the previous computation back into the combiner function until
    // we've exhausted the entire array and are left with only one function.
    while(counter < this.length) {
      accumulatedValue = combiner(accumulatedValue, this[counter])
      counter++;
    }

    return [accumulatedValue];
  }
};

//Retrieve the largest rating.
function() {
  var ratings = [2,3,1,4,5];

  // You should return an array containing only the largest rating. Remember that reduce always
  // returns an array with one item.
  return ratings.
    reduce(function(acc, curr) {
      if(acc > curr) {
        return acc;
      }
      else {
        return curr;
      }
    });
}

//Retrieve url of the largest boxart
function() {
  var boxarts = [
    { width: 200, height:200, url:"http://cdn-0.nflximg.com/images/2891/Fracture200.jpg" },
    { width: 150, height:200, url:"http://cdn-0.nflximg.com/images/2891/Fracture150.jpg" },
    { width: 300, height:200, url:"http://cdn-0.nflximg.com/images/2891/Fracture300.jpg" },
    { width: 425, height:150, url:"http://cdn-0.nflximg.com/images/2891/Fracture425.jpg" }
  ];

  // You should return an array containing only the largest box art. Remember that reduce always
  // returns an array with one item.
  return boxarts.
    reduce(function(acc,curr) {
      if (acc.width * acc.height > curr.width * curr.height) {
        return acc;
      }
      else {
        return curr;
      }
    }).
    map(function(boxart) {
      return boxart.url;
    });
}


//




