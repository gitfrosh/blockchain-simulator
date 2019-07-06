function createHash({ timestamp, data, index, previousHash }) {
  return Crypto.createHash("SHA256")
    .update(timestamp + data + index + previousHash)
    .digest("hex");
}

function checkNewBlockIsValid(block, previousBlock){
    if(previousBlock.index + 1 !== block.index){
        //Invalid index

        return false;
    }else if (previousBlock.hash !== block.previousHash){
        //The previous hash is incorrect

        return false;
    }else if(!hashIsValid(block)){
        //The hash isn't correct

        return false;
    }
    
    return true;
}	

function hashIsValid(block){
    return (createHash(block) == block.hash);
}

// function addToChain(user) {
//   alert(`Hello, ${user}!`);
// }

export { createHash, checkNewBlockIsValid };
