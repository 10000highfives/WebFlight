//lines 2-4 are dummy images being used to test functions
var hello = require('./images/hello.js');
var tea = './images/Hot-Tea.jpg';
var pizza = './images/pizza.png';
var fs = require('fs');
var sha1 = require('sha1');

//🎈Need to refactor to make functions work asynchronously.🎈
// The function is hashing the image files synchronously with readFileSync. This isn't ideal
// because if the array of images that we need to has is long, it will take a long time to SHA1 hash them


//the module.exports object holding the functions
var Sha1ImageHashing = {};
Sha1ImageHashing.arrayOfImages = arrayOfImages;




//Global obj where we're holding image file loc and the SHA1 hash produced by having hashed the file // => { './images/Hot-Tea.jpg': '0dd4f972fba42c8b41cbdf954e49f97b62a368cd',
//'./images/pizza.png': 'eb188acd027b21bc181225408d493c5cc94c3881' }
hashedImgObj = {};


//function that takes in array of images
function arrayOfImages(array){
  //and applies imageHashing function to each
  array.forEach(imageHashing);
  //then show me the populated hashedImgObj
  console.log('is the imageobj populated?', hashedImgObj)
}

arrayOfImages([tea,pizza]);





function imageHashing(image){
  // new Promise(resolve,reject){
    var data = fs.readFileSync(image)
    //console.log(data);
    //applying SHA1 to image file
    var sha1Encoded = sha1(data);
    //populating hashedImgObj with - filepath: SHA1 hash
     hashedImgObj[image] = sha1Encoded;
  //console.log('is the imageobj populated??', hashedImgObj);
}

module.exports = Sha1ImageHashing;
