# Address Validator
 A site and an API that lets users search for address, the site lets you verify whether the address is correct
 
![Screenshot](https://github.com/himanshukumar660/Address-Validation/blob/master/Screenshots/map.png)

## Features
- Autocompete of Address for furhter validation of the address 
- Implemented location of the address on Google Maps
- Rendered formatted JSON.
- Displays common details

![Screenshot](https://github.com/himanshukumar660/Address-Validation/blob/master/Screenshots/vert.png)

## Language
- Javascript, CSS, HTML
- Materaial Design Bootstrap

![Screenshot](https://github.com/himanshukumar660/Address-Validation/blob/master/Screenshots/verf.png)

## APIS
- Google Maps APIs

![Screenshot](https://github.com/himanshukumar660/Address-Validation/blob/master/Screenshots/json.png)

## Approach
- The user enters the Address in the given text area.
- Used two API calls to Google Maps
  - First, for the autocomplete of the address as the user types the address. This is an alternative way of validating the address as the address provided is provided by the Google Database.
  - Second, Getting the GeoCodes of the adress provided. This helps in validation of the addresses, if they are provided in random by the user.
- The Geocodes of the vessels are stored in an array.
- Google Maps APIs are used for plottting the Geocodes.
- Used Google geocoding API for further provind the formatted address in a very explainable form
- Rendered formatted JSON for ease of access by other Developers.

## Drawbacks
- Since, I don't have address database, creation of API doesn't help much.
- The Address Validation is not very accurate, though it provides correct formmatted address. But, it helpsa lot over manual vaidation of the address.

## Getting Started with contribution
if you have liked this project, I immensly welcome you to contribute and make this even more successful. So, the getting started with the projct is quite simple. Since, it is not built on any MVC Framework, anyone can get started with just downloading this repository and running the popup.html file in their browser.

- popup.css : This file could be found in the assests/css folder. This is mainly responsible for all the layouts and designing.
- popup.js : This file is maily reponsible for all the API calls and rendering of the data.

If you want to get started, follow the steps given below :
 1. Clone the repository.
 2. Open the repo in your favourite text editor.
 3. Go through the files that I have mentioned above.
 4. Follow the codes. Now, if you have completed the above steps, you could now start contributing :
 5. if you wish to raise an issue, follow github instructions on how to raise them.
 6. if you wish to work on existing issues, just go to issue section, and check if that has been already assigned to anyone else. If not, just comment that you are interested on working on that particular issue. You would be then assigned that issue, if it has not already been taken by others.
 7. if you have made certain changes, just commit to your local branch and raise a PULL request here. You could follow Github instructions on how to raise a Pull Request. Your code will then be validated and possibly merged.

## BEST SUPPORTED ON CHROME ;)
