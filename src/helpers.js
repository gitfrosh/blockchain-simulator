function createHash({ timestamp, data, index, previousHash }) {
  var CryptoJS = require("crypto-js");
  var message = CryptoJS.enc.Hex.parse(timestamp + data + index + previousHash);
  var hash = CryptoJS.SHA256(message);
  console.log(hash.toString());
  return hash.toString();
}

function checkNewBlockIsValid(block, previousBlock) {
  console.log(block, previousBlock);
  if (previousBlock.index + 1 !== block.index) {
    //Invalid index
    console.log("invalid index");
    return false;
  } else if (previousBlock.hash !== block.previousHash) {
    //The previous hash is incorrect
    console.log("prev. hash incorrect");

    return false;
  } else if (!hashIsValid(block)) {
    //The hash isn't correct
    console.log("hash incorrect");

    return false;
  }

  return true;
}

function hashIsValid(block) {
  return createHash(block) == block.hash;
}

// function addToChain(user) {
//   alert(`Hello, ${user}!`);
// }

export { createHash, checkNewBlockIsValid };
