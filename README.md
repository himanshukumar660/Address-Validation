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

## BEST SUPPORTED ON CHROME ;)
