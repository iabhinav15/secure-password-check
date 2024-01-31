# Secure Password Check

[**A simple npm package to check the validity on the basis of strength of passwords based on various parameters.**](https://www.npmjs.com/package/secure-password-check "visit npmjs.com")


## Installation

Use the following npm command to install the package:

```bash
npm install secure-password-check
```


## Validation

The password validity on the basis of strength is checked based on the following criteria:

- Minimum length
- Maximum length
- Special characters
- Numbers
- Uppercase characters
- Lowercase characters
- White spaces


## Usage

```bash
import { checkPassword } from 'secure-password-check';  
const result = checkPassword('YourPassword123!');
console.log(result);
```


## Parameters

The checkPassword function accepts the following parameters:

- **`string` (default: "") :**  The password to be checked.
- **`minLength` (default: 8) :** Minimum length required for the password.
- **`maxLength` (default: 20) :** Maximum length allowed for the password.
- **`isSpecialCharAllowed` (default: true) :** Whether special characters are allowed.
- **`isNumberAllowed` (default: true) :** Whether numbers are allowed.
- **`isAllUpperCaseAllowed` (default: false) :** Whether all uppercase characters are allowed.
- **`isAllLowerCaseAllowed` (default: false) :** Whether all lowercase characters are allowed.
- **`isWhiteSpaceAllowed` (default: false) :** Whether white spaces are allowed.


# Examples

```
const result1 = checkPassword('StrongP@ss');
console.log(result1);
// Output: { ans: true, description: 'Valid Password' }

const result2 = checkPassword('weak');
console.log(result2);
// Output: { ans: false, description: 'Not a valid password, minimum length 8 is required' }
```

## Contributing
Contributions are welcome! If you find any bugs or have suggestions for new features, feel free to open an issue or submit a pull request.

## License
ISC Licensed. Abhinav Singh, 2024.

