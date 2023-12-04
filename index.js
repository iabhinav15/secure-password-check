const checkPassword = (str) => {

    const string = str.toString();
    const resObj = {ans : true, description: "Valid Password"};

    if(string.length < 8){
        resObj.ans = false;
        resObj.description = "Not a valid password, minimum length 8 is required";
        return resObj;
    }
    else if(string.includes(" ")){
        resObj.ans = false;
        resObj.description = "Not a valid password, Space is not required";
        return resObj;
    }
    else if(!(/[a-z]/.test(string))){
        resObj.ans = false;
        resObj.description = "Not a valid password, use some lowercase  alphabets";
        return resObj;
    }
    else if(!(/[0-9]/.test(string))){
        resObj.ans = false;
        resObj.description = "Not a valid password, use some numbers";
        return resObj;
    }
    else if(!(/[A-Z]/.test(string))){
        resObj.ans = false;
        resObj.description = "Not a valid password, use some uppercase alphabets";
        return resObj;
    }
    else if(!(/[@#$&%!]/.test(string))){
        resObj.ans = false;
        resObj.description = "Not a valid password, use some valid special charecters";
        return resObj;
    }
    return resObj;
}


const ans = checkPassword("Abhinav#456");
console.log(ans);
