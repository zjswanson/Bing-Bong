# _BingBong_

#### _an application to create "ping-pong" substitutions in a numeric list_

#### By _**Zach Swanson.  January 2017**_

## Description

_This application is meant as a demonstration of techniques for looping with Javascript and jQuery (as well as some traversal and DOM manipulation.  Created as a weekly code review for the Epicodus code school in Portland, OR._

## Application Behaviors

_Overview: This application is designed to generate an ordered list of numbers with certain entries replaced with text based on user input.  The user inputs the length of the list (N), two numeric values, and a text string associated with each numeric value.  The application then generates a list of the numbers 1 through N, replacing all multiples of each numeric input with its associated text string, and replacing all multiples of the product of the two numeric inputs with the concatenation of the two strings (with a dash between the two words).

**Example:
**Input: length 60, 3 - bing, 5 - bong.
Output: list of 1 to 60, multiples of 3 replaced with "bing", multiples of 5 replaced with "bong", multiples of 15 replaced with "bing-bong"

specific behaviors:

Behavior: Identify the larger of the two numeric inputs
*input: 3,5
*output: 5

Behavior: Multiply the two numeric inputs
*input: 3,5
*output: 15

Behavior: Concatenate the two string inputs
*input: bing,bong
*output: bing-bong

Behavior: Generate an array of numbers from 1 to N
*input: 5
*output: [1,2,3,4,5]

Behavior: When generating the list, replace multiples of a numeric input with it's associated string
*input: N=6, 3, bing
*output: [1,2,"bing",4,5,"bing"]

Behavior: As above, but conduct the replacement for multiples of both inputs and their product.
*input: N=12, 3,"bing", 4,"bong"
*output: [1,2,"bing","bong",5,"bing",7,"bong","bing",10,11,"bing-bong"]

Behavior: Add fun "easter egg" behavior if user inputted strings are "bing" and "bong"
*input: "bing","bong"
*output: You'll have to run the application to see :)

## Setup/Installation Requirements

* _To run, clone this repository and index.html in the browser of your choice.  Alternately, the application is currently hosted by github at the address below:_


## Known Bugs

_ _

## Support and contact details

_No ongoing support planned.  Please direct any questions or comments to the author at zach.j.swanson@gmail.com.

## Technologies Used:

_Written in html5 with CSS styling and Javascript scripting.  Uses the Bootstrap and jQuery libraries._

### License

*Licensed under the MIT license.*

Copyright (c) 2016 **_Zach Swanson_**
