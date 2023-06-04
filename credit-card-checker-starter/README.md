**Context**: The company that you work for suspects that credit card distributors have been mailing out cards that have invalid numbers. In this project, you have the role of a clerk who checks if credit cards are valid. Every other clerk currently checks using pencil and paper, but you’ll be optimizing the verification process using your knowledge of functions and loops to handle multiple credit cards at a time. Unlike the other clerks, you can spend the rest of your time relaxing!

To find out if a credit card number is valid or not, the *Luhn algorithm* is used.
The calculations in the Luhn algorithm can be broken down as the following steps:
1. Starting from the farthest digit to the right, AKA the check digit, iterate to the left.
2. As you iterate to the left, every other digit is doubled (the check digit is not doubled). If the number is greater than 9 after doubling, subtract 9 from its value.
3. Sum up all the digits in the credit card number.
4. If the sum modulo 10 is 0 (if the sum divided by 10 has a remainder of 0) then the number is valid, otherwise, it’s invalid.

## Functions

- validateCred(arr) -> Accepts an array of numbers, this function will return `true` if the array correspond to a valid credit card, otherwise it will return `false`.
- findInvalidCards(nArr) -> Accepts a nested array of numbers (representinga group of credit cards) and returns a nested array with the invalid credit cards
- idInvalidCardCompanies(nArr) -> Is expected to accept a nested array with invalid credit cards and provide an array with the bank companies that should be contacted
