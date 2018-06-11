/* 

Big O notation is a way of measuring the efficiency
of an algorithm.

Several examples of big O notation:
O(1), O(N), O(n^2), O(log n), O(N!)

Big O can be used to represent the lower, average, and
upper limit of how long a function can take.


*/

require('./str-prototype')();

// O(1) - Constant time.
function isFirstElementNull(elements) {
    return elements[0] == null;
}

// O(n) - Performance of function is directly proportional to N
function containsValue(elements, value) {
    for (let i = 0; i < elements.length; i++)
    {
        if (element[i] == value) return true;
    }

    return false;
}

// O(n^2) -- Performance of function is directly proportional to Square of N
function containsDuplicates(elements) {
    for (let outer = 0; outer < elements.length; outer++) {
        for (var inner = 0; inner < elements.length; inner++) {
            // Don't compare with self
            if (outer == inner) continue;

            if (elements[outer] == elements[inner]) return true;
        }
    }

    return false;
}

// 0(n!) -- Performance of function is the factorial 
// how many possible combinations / orderings of letters
function returnWhenEqual(str1, str2) {
    while(str1 !== str2) {
        str1 = str1.shuffle();
        console.log(str1);
    }
}

returnWhenEqual("dbca", "abcd");

