//SPEED CHALLENGE

// "Given x is a number,
// return x cubed."
box.cube = function cube(x) {
// x is a number
// return x cubed
// (ex. x=3, return 27)
    return x**3
};

// "Given x and y are numbers,
// how many times can you multiply y and keep it lower than or equal to x?"
box.multiplierCount = function multiplierCount(x, y) {
// x and y are numbers
// return a number
// (ex. x=10, y=5, you should return 2)
// (ex. x=11, y=2, you should return 5)
    return Math.floor(x/y)
};

// "Given x is a number,
// find the square root of x."
box.squareRoot = function squareRoot (x) {
// x is a number
// return a number
    return x**(1/2)
};

// "Given x is an array,
// return half of the array (if elements count is odd, include the middle one)."
box.getHalfArray = function getHalfArray(x) {
// x is an array
// return an array 
// (ex. [1,2,1,3,4] should return [1,2,1])
    let size = Math.ceil(x.length/2)
    return x.slice(0,size)
}

// "Given x is a string,
// replace all spaces in x with ‘%20’."
box.replaceSpaces = function replaceSpaces(x) {
// x is a string
// return a string
// (ex. x="hello world", you should return "hello%20world")
    return x.replace(/\s/g, '%20')
};

// "Given x is a string,
// return the string after removing all spaces."
box.removeAllSpaces = function removeAllSpaces(x) {
// x is a string
// return a string
// (ex. x="   Test   String! ", you should return "TestString!")
    return x.replace(/\s/g, '')
};

// "Given x is an array where every item has 2 values [key, value],
// convert every array item to an object given the key and value."
box.arrayToObject = function arrayToObject(x) {
// x is an array
// return an object
// (ex. x=[["key", "value"], ["numb", 123], ["bool", true]], you should return {"key": "value", "bool": true, "numb": 123})
    const map = new Map(x)
    const obj = Object.fromEntries(map);
    return obj
};

// "Given x and y are random data types,
// return true if x and y are the same data type."
box.matchingType = function matchingType(x, y) {
// x and y are random types 
// return boolean
// (ex. x = 7 and y = "Toptal", should return false),
// (ex. x = 10 and y = 100, should return true),
    var a = typeof(x);
    var b = typeof(y);
    return a == b;
};

// "Given x is an array of numbers,
// find the average of x and if it is not a whole number, round it up."
box.findAverage = function findAverage(x) {
// x is an array of numbers
// return a number
// (ex. x=[1,2,3,4] then you should return 3 because the average is 2.5)
    var total = 0;
    var count = 0;

    x.forEach(function(item, index) {
        total += item;
        count++;
    });

    return Math.ceil(total / count);
};

// "Given x is a string,
// reverse the string x letter by letter."
box.reverseString = function reverseString(x) {
// x is a string
// return a string
// (ex. x="Hello from Toptal", you should return "latpoT morf olleH")
    var splitString = x.split(""); 
    var reverseArray = splitString.reverse(); 
    var joinArray = reverseArray.join(""); 
    return joinArray; 
};

// "Given x is a number between 1 and 12,
// return the month name (3 letter representation) it represents."
box.monthToString = function monthToString(x) {
// x is a number
// return a string
// (ex. x=1, you should return "Jan")
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    return monthNames[x-1]    
};

// "Given x is a string,
// reverse the case of the letters in the string and return the updated string."
box.reverseCase = function reverseCase(x) {
// x is a string
// return a string
// (ex. str="Toptal" you should return "tOPTAL")
    var splitString = x.split(""); 
    var inverted = ""
    splitString.forEach(function(element) {
        if(element == element.toUpperCase()) {
            inverted += element.toLowerCase()
        } else {
            inverted += element.toUpperCase()
        }
    })
    return inverted
};

// "Given x is an array,
// find the count of unique numbers in x."
box.countUniqueNumbers = function countUniqueNumbers(x) {
// x is an array of numbers
// return a number
// (ex. x=[1,2,2,2,3,4,20,3] you should return 5 as we have 1,2,3,4,20)
    return new Set(x).size;
};

// "Given x is a binary number,
// return the decimal representation of x."
box.binaryToNumber = function binaryToNumber(x) {
// x is a binary number.
// return a number
// (ex. x=1001, you should return 9)
    var a = parseInt(x, 2);
    return a
};

// "Given arr is an array of characters (a-z),
// sort the array alphabetically and return a number representation for every character that occurred."
box.numberRepresentation = function numberRepresentation(arr) {
// arr is an array
// return a number
// (ex. arr=[b,a,a,a,c,b,a] you should return 421 where 4 represents 'a' occurences, 2 for 'b', etc..) 
    const unique = (value, index, self) => {
        return self.indexOf(value) === index
        }
        var values = []
        var arrSorted = arr.sort()
        var uniqueArray = arrSorted.filter(unique)
        uniqueArray.forEach(element => {
            var numOfTrue = 0
            for(var i=0;i<arrSorted.length;i++){
                if(arrSorted[i] === element)
                numOfTrue++;
            }
            values.push(numOfTrue)
        })
        if(values.length === 0) {
            return 0
        } else {
            return parseInt(values.join(""))
        }
};

// "Given x is an array of numbers,
// every number in x is duplicated except for one number.
// Return that unique number"
box.findUniqueNumber = function findUniqueNumber(x) {
// x is a array of numbers
// return a number
// (ex. x=[1,1,2,4,2,4,3] you should return 3)
    let res = x.filter(y => x.indexOf(y) === x.lastIndexOf(y));
    res.forEach(function(el) {
        z = el
    })
    return z
};

// "Given x is a number,
// some digits have circles in their design (ex. 6, 9, 0 has one circle and 8 has two circles).
// Count all circles of a given number."
box.numberOfCircles = function numberOfCircles(x) {
// x is a number
// return a number
// (ex. x=1908, you should return 4)
// (ex. x=9 you should return 1)
    var NoOfCircles = 0;
        var dividio = String(x).split("")
        dividio.forEach(x => {
            if (x==="6" || x=== "9" || x==="10" || x==="0") {
                NoOfCircles +=1
            } if(x==="8") {
                NoOfCircles +=2
            }
        })
        return NoOfCircles
};

// "Given x is a string of one character and y is a string,
// find how many instances of string x are contained in y."
box.charCountInString = function charCountInString(x, y) {
// x is a string of 1 character
// y is a string
// return a number
// (ex. x='$', y="$he$llo$$$wo$rld", should return 6),
    return y.split(x).length - 1;
}

// "Given x and y are arrays of numbers,
// find the average of the arrays’ averages."
box.twoArrayAvg = function twoArrayAvg(x, y) {
// x and y are arrays of numbers
// return a number
// (ex. x=[1,2,3],  y=[4,5,6], you should return 3.5)
    var totalx = 0
    var countx = 0
    var avgx = 0
    var totaly = 0
    var county = 0
    var avgy = 0
    x.forEach(function(item, index) {
        totalx += item;
        countx++
    })
    avgx = (totalx / countx)
    y.forEach(function(item, index) {
        totaly += item
        county++
    })
    avgy = (totaly / county)
    return avgtotal = ((avgx + avgy) / 2)
};

// "Given x is a string,
// remove duplicate characters from x."
box.removeDuplicates = function removeDuplicates(x) {
// x is a string
// return a string
// (ex. x="hello world", you should return "helo wrd")
    return x
        .split('')
        .filter(function(item, pos, self) {
            return self.indexOf(item) == pos;
        })
        .join('')
}

// "Given x is a string,
// reverse all words in the string x letter by letter while keeping the word order the same."
box.reverseAllWords = function reverseAllWords(x) {
    // x is a string
    // return a string
    // (ex. x="Hello from Toptal", you should return "olleH morf latpoT")
    var words = []
    words = x.match(/\S+/g)
    var result = ""
    for (var i = 0; i < words.length; i++) {
        result += words[i].split('').reverse().join('') + " "
    }
    result = result.substring(0, result.length-1)
    return result
};

// "Given x is a string,
// find the first unique character in x.
// Return false if there isn't a unique character in x."
box.firstUniqueChar = function firstUniqueChar(x) {
// x is a string
// return a string
// (ex. x="toptal", you should return "o" because "t" appeared twice)
    for (var i = 0; i < x.length; i++) {
        var c = x.charAt(i)
        if (x.indexOf(c) == i && x.indexOf(c, i + 1) == -1) {
            return c
        }
    }
    return false
};

// "Given n is an integer and x is a single-digit number,
// find out how many times the digit x is contained in the sequence between 0 and n (including 0 and n)."
box.digitOccurrence = function digitOccurrence(n, x) {
// n is an integer, x is a single-digit number
// return a number
// (ex. n=11, x=1, it should return 4 because ‘1’ appears up 4 times between 0 and 11)
    let result = 0
    for (var i = 0; i <= n; i++) {
        var dividido = String(i).split("")
        dividido.forEach(function(element) {
            
            if(element === String(x))
            result++
        })
    }    
    return result       
};

// "Given x is a string,
// find the average of ASCII codes of all characters and round to the closest integer, then return the character representing that ASCII code."
box.averageAsciiChar = function averageAsciiChar(x) {
    var codes = []
    var splitString = x.split(""); 
    splitString.forEach(function(element){
        codes.push(element.charCodeAt(0))
    })
    var average = Math.round(codes.reduce((a, b) => a + b) / codes.length);
    var char = String.fromCharCode(average);
    return char
};

// "Given x is a HEX color code (ex. #FFFFFF),
// convert that HEX color code to RGB and return it as an array [R, G, B]."
box.hexToRGB = function hexToRGB(x) {
// x is a string
// return an array
// (ex. x="#FFFFFF", you should return [255, 255, 255])
    z = x.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i
    ,(m, r, g, b) => '#' + r + r + g + g + b + b)
    .substring(1).match(/.{2}/g)
    .map(x => parseInt(x, 16))
    return z
};

// "Given x and y are strings,
// a shift is taking the leftmost character in x and moving to the rightmost position.
// Identify if x can become y after several shifts."
box.isRotatedStr = function isRotatedStr(x, y) {
    // x and y are strings;
    // return boolean
    // (ex. x="vwxyz", y="xyzvw", you should return true because we when shifting v and w to the rightmost
    // it will match y)
    return x.length === y.length && y.repeat(2).includes(x);
};

// "Given word and sentence as two strings,
// return the start and end indices of the word in the sentence as an array. If the word is not found, return an empty array."
box.findWord = function findWord(word, sentence) {
    // Given word and sentence as two strings, 
    // Return the start and end indices of the word in the sentence as an array
    // (ex. word="morning" sentence="Good morning coders!" should return [5,11])
    let indexes = []
    let empty = []
    if(sentence.toLowerCase().includes(word.toLowerCase())){
        indexes.push(sentence.toLowerCase().indexOf(word.toLowerCase()))
        indexes.push(sentence.toLowerCase().indexOf(word.toLowerCase()) + word.length-1)
        return indexes
    } else {
        return empty
    }
}

// "Given password is a string, which consists of mixed characters (a-z, A-Z, 0-9), and x is an integer,
// hash the password by shifting every character by given x positions and reverse to lowercase/uppercase."
box.hashPassword = function hashPassword(password, x) {
// password is a string, x is a number
// return a string
// (ex. password = 'ab1By', x = 3 so you should return "DE4eB")
    // password is a string, x is a number
    // return a string
    // (ex. password = 'ab1By', x = 3 so you should return "DE4eB")
    var newString = ""
    for (var i = 0; i < password.length; i++) {
        //if its a number
        if(password.charCodeAt(i)>= 48 && password.charCodeAt(i)<=57) {
            var a = password.charCodeAt(i)+x
            while(a>57) {
                a -= 10 
            }
            if(password.charCodeAt(i)+x>= 48 && password.charCodeAt(i)+x<=57) {
                newString += String.fromCharCode(password.charCodeAt(i)+x);
            } else {
                newString += String.fromCharCode(password.charCodeAt(i)+(a-password.charCodeAt(i)));
            }
        }
        // if its upper
        else if(password.charCodeAt(i)>= 65 && password.charCodeAt(i)<=90) {
            var a = password.charCodeAt(i)+x
            while(a>90) {
                a -= 26 
            }
            if(password.charCodeAt(i)+x>= 65 && password.charCodeAt(i)+x<=90) {
                newString += String.fromCharCode(password.charCodeAt(i)+x);
            } else {
                newString += String.fromCharCode(password.charCodeAt(i)+(a-password.charCodeAt(i)));
            }
        }
         // if its lower
        else if(password.charCodeAt(i)>= 96 && password.charCodeAt(i)<=122) {
            var a = password.charCodeAt(i)+x
            while(a>122) {
                a -= 26 
            }
            if(password.charCodeAt(i)+x>= 96 && password.charCodeAt(i)+x<=122) {
                newString += String.fromCharCode(password.charCodeAt(i)+x);
            } else {
                newString += String.fromCharCode(password.charCodeAt(i)+(a-password.charCodeAt(i)));
            }
        }
    }
    var newString = newString.split(""); 
    var inverted = ""
    newString.forEach(function(element) {
        if(element == element.toUpperCase()) {
            inverted += element.toLowerCase()
        } else {
            inverted += element.toUpperCase()
        }
    })
    return inverted
};

// "Given x is a string in the format of “X.X.X.X”,
// check if x is a valid IP address in which a valid IP address matches ""X.X.X.X"" format and every ""X"" represents a number between 0 to 255."
box.validateIP = function validateIP(x) {
// x is a string in the format of "X.X.X.X"
// return boolean
// (ex. x="127.0.0.1", you should return true)
// (ex. x="555.123.123.1". you should return false because first part is greater than 255)
    if (/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(x)) {  
        return (true)  
    }  
    return (false)  
};

// "Given x is a number,
// return true if x is a prime number."
box.isPrime = function isPrime(x) {
// x is a number
// return boolean
// (ex. x=11, you should return true because 11 is a prime number)
    for(var i = 2; i < x; i++)
        if(x % i === 0) return false
    return x > 1
};

// "Given x is a string,
// check if x is a palindrome, consider A-Z, a-z, and 0-9 only.
// A palindrome is a string that reads the same backward as forward (such as madam or racecar)."
box.isPalindrome = function isPalindrome(x) {
/// x is a string
// return boolean
// (ex. x="Pull up!", you should return true)
    y = x.split('').reverse().join('');
    y = y.replace(/[^a-zA-Z ]/g, "")
    y = y.replace(/\s/g, '');
    y = y.replace('_',"")
    y = y.replace('_',"")
    y= y.toLowerCase()

    x = x.replace(/[^a-zA-Z ]/g, "")
    x = x.replace(/\s/g, '');
    x = x.replace('_',"")
    x = x.replace('_',"")
    x= x.toLowerCase()

    return y == x
};

// "Given x is a string representing a Roman numeral,
// convert Roman numerals to numbers.
// Roman numerals are represented by seven different symbols: I, V, X, L, C, D, and M."
box.romanToInt = function romanToInt(x) {
    // x is a string; roman numeral
    // return a number
    // (ex. x="IV", you should return 4)
    const values = new Map([
        ['I', 1],
        ['V', 5],
        ['X', 10],
        ['L', 50],
        ['C', 100],
        ['D', 500],
        ['M', 1000]
    ]);
    
    let result = 0
    let current = 0
    let previous = 0
    for (const char of x.split("").reverse()) {
    current = values.get(char)
    if (current >= previous) {
        result += current
    } else {
        result -= current
    }
    previous = current
}
    return result
};

// "Given x is an array of numbers,
// find the missing integer."
box.missingInteger = function missingInteger(x) {
    x = x.sort()
    if(x.length===0) {
        return 1
    }
    for (var i = 0; i < x.length; i++) {
        if(x[i] !== x[i+1]-1) {
            return x[i]+1
        }
    } 
    return x[x.length-1]+1
};

// "Given x is an array that includes 3 child arrays, every child represents a row of a tic tac toe matrix,
// find the winner of the game and return 'x', 'o' or 'draw', and 'error' if there are two winners."
box.ticTacToeWinner = function ticTacToeWinner(x) {
    let stiring = ""
    let winner = ""
    x.forEach(function(array) {
        for (var i = 0; i<array.length; i++) {
            stiring += array[i]
        }
    })
    if(stiring[0]===stiring[1] && stiring[0]===stiring[2]) {
        winner += stiring[0]    
    }
    if (stiring[3]===stiring[4] && stiring[4]===stiring[5]) {
        winner += stiring[3]  
    }
    if (stiring[6]===stiring[7] && stiring[7]===stiring[8]) {
        winner += stiring[6]  
    }
    if (stiring[0]===stiring[3] && stiring[3]===stiring[6]) {
        winner += stiring[0]  
    }
    if (stiring[1]===stiring[4] && stiring[4]===stiring[7]) {
        winner += stiring[1]  
    }
    if (stiring[2]===stiring[5] && stiring[5]===stiring[8]) {
        winner += stiring[2]  
    }
    if (stiring[0]===stiring[4] && stiring[4]===stiring[8]) {
        winner += stiring[0]  
    }
    if (stiring[2]===stiring[4] && stiring[4]===stiring[6]) {
        winner += stiring[2]  
    }
    // Get unique winneers (remove duplicates)
    winner = winner.split('').filter(function(item, pos, self) {
        return self.indexOf(item) == pos;
    })
    .join('')
    if(winner=="x" || winner=="o") {
        return winner
    } else if(winner=="xo" || winner=="ox") {
        return "error"
    } else "draw"
};

// "Given x and y are strings,
// return true if x is an anagram of the string y.
// An anagram is a string formed by rearranging the letters of a different string using all the original letters exactly once."
box.isAnagram = function isAnagram(x, y) {
    // x and y are strings.
    // return boolean
    // (ex. x=""heart"", y=""earth"", you should return true)
    return x.split("").sort().join() === y.split("").sort().join()
};

// "Given x is an array of strings,
// sort x in descending order (alphabetically from Z to A)."
box.sortArrayDesc = function sortArrayDesc(x) {
    // x is an array of strings
    // return sorted array of strings in descending order
    // (ex. x=["b", "a", "z"], you should return ["z", "b", "a"])
    x.sort().reverse();
    return x
};