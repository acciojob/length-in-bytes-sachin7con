const byteSize = (str) => {
  //SGN write your code here
	var byteSize = 0;
	
	if(str.length == 0){
		byteSize =  0;
	}else{
		

    // Iterating through each character in the string
    for (let i = 0; i < str.length; i++) {
        // Getting the Unicode code point of the character
        const codePoint = str.codePointAt(i);

        // Counting bytes based on Unicode code points
        // Characters in the Basic Multilingual Plane (BMP) are 2 bytes, others are 4 bytes
        byteSize += codePoint < 128 ? 1 : (codePoint < 2048 ? 2 : 4);
    }
	}
	

    return byteSize;

	
};

// Do not change the code below
// const str = prompt("Enter some string.");
// alert(byteSize(str));
