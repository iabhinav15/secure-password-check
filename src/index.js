export const checkPassword = (str = "", minLength = 8, maxLength = 20, isSpecialCharAllowed = true, isNumberAllowed = true, isAllUpperCaseAllowed = false, isAllLowerCaseAllowed = false, isWhiteSpaceAllowed = false) => {

    const string = str.toString();
    const respObj = {ans : true, description: "Valid Password"};

    if(string.length < minLength){
        respObj.ans = false;
        respObj.description = "Not a valid password, minimum length 8 is required";
        return respObj;
    }
    else if(string.length > maxLength){
        respObj.ans = false;
        respObj.description = "Not a valid password, maximum length allowed is 16";
        return respObj;
    }
    else if(!isWhiteSpaceAllowed && string.includes(" ")){
        respObj.ans = false;
        respObj.description = "Not a valid password, Space is not required";
        return respObj;
    }
    else if(!isAllLowerCaseAllowed && !(/[a-z]/.test(string))){
        respObj.ans = false;
        respObj.description = "Not a valid password, use some lowercase  alphabets";
        return respObj;
    }
    else if(!isAllUpperCaseAllowed && !(/[A-Z]/.test(string))){
        respObj.ans = false;
        respObj.description = "Not a valid password, use some uppercase alphabets";
        return respObj;
    }
    else if(isNumberAllowed && !(/[0-9]/.test(string))){
        respObj.ans = false;
        respObj.description = "Not a valid password, use some numbers";
        return respObj;
    }
    else if(isSpecialCharAllowed && !(/[@#$&%!]/.test(string))){
        respObj.ans = false;
        respObj.description = "Not a valid password, use some valid special charecters";
        return respObj;
    }
    return respObj;
}



