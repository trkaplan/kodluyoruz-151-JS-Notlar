// https://app.patika.dev/moduller/nodejs/WhatIsPromise

// ES 5
function isGreater(a, b, callback) {
  var greater = false;
  if (a > b) {
    greater = true;
  }
  callback(greater);
}

isGreater(1, 2, function (result) {
  if (result) {
    console.log("greater");
  } else {
    console.log("smaller");
  }
});

// ES 6
const isGreater = (a, b) => {
  return new Promise((resolve, reject) => {
    if (a > b) {
      resolve(true);
    } else {
      reject(false);
    }
  });
};

isGreater(1, 2)
  .then((result) => {
    console.log("greater");
  })
  .catch((result) => {
    console.log("smaller");
  });
