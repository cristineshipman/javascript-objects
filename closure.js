// closure exercises

/* below is a counter function that returns a function that returns
a successive number each time it is called. */

function counter () {
  var count = 0;
  var realCount = function () {
    count ++;
    return count;
  }
  return realCount;
}

var c = counter();
c();

/* allowing the caller of counter to initialize the count to the
first argument that is passed in. */
