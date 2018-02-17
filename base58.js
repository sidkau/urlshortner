var random_string = "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ";
var base = random_string.length;

function encodeBase58(input){
  var encodedString = '';
  while (input){
    var remainder = input % base;
    input = Math.floor(input / base);
    encodedString = random_string[remainder].toString() + encodedString;
  }
  return encodedString;
}



module.exports.encode = encodeBase58;
