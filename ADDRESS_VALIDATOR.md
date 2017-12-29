# Address Validator
 A site and an API that lets users search for address, the site lets you verify whether the address is correct
 
![Screenshot](https://lh3.googleusercontent.com/guR2_5hRkIAhjf0oFLM3d9HAaifNiNHOFFPzpO3YZCECMHKg9GBH1zPTiBgfjEkUGNL9MWNZcaDT6lYcSGOJ=w1438-h751-rw)

## Features
- Autocompete of Address for furhter validation of the address 
- Implemented location of the address on Google Maps
- Rendered formatted JSON.
- Displays common details

![Screenshot](https://lh5.googleusercontent.com/Rn0hbqg_k3kw3jpR9sHscs50o1cBZatfRPz_R6a8tvTuLwMwhU0A7wPUkN3z4Y0mEoTOD2XOxPJAcfIMtlOZ=w1438-h751-rw)

## Language
- Javascript, CSS, HTML
- Materaial Design Bootstrap

![Screenshot](https://lh5.googleusercontent.com/7PKkVrejX63RIkCiqi6aMpoAdE-Pi_tN1Z4OfJvldGm5HfAcl-ZzeQNoV6eWpAkmMk81O62mMgnpK7becVYe=w1438-h751-rw)

## APIS
- Google Maps APIs

![Screenshot](https://lh6.googleusercontent.com/ZdqDhE0NccluM_Dxksl60hVtMgWEkFobgHwwTotIUHZj9iLXu0rxPsOEwp-wxElfmmq2EtY4hplP3ugEBQ1U=w1438-h751-rw)

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
