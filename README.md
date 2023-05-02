# Oxbury | Technical Test

## Introduction

This is a technical test for Oxbury Bank. The test is partially complete and requires a few basic features added to it.

The implementation for this uses the Beer API (https://punkapi.com/documentation/v2) to retrieve a list of beers from the API.

Within this repo you will find several different langauges and frameworks as starting points. You are free to use any of these as a starting point for your solution using the boiler plate code provided. The boiler plate code is not intended to be a complete solution and you are free to change any of the code as you see fit. 

## Task

The task is to implement the following features:

* Change API pagination to `15`
* Enhance the Single Beer view with more information from the API, for example: `name`, `description`, `image_url`, `abv`, `ibu`, `ebc`, `food_pairing`, `brewers_tips` (Feel free to implement any other information you think is relevant)
* Implement pagination - do not worry about total number of pages, just implement a `Next`/`Previous` button to load the next page or previous page of beers
* Implement clickable links to the Single Beer view from the Beer List view
* Add support for searching the API by beer name
* Any design improvements you would make


## Documentation

The full API documentation can be found at https://punkapi.com/documentation/v2 but the following endpoints are the ones you will need to use:

The base endpoint for the API is `https://api.punkapi.com/v2` (Notice the `v2` at the end)

* `GET /beers` - Retrieve a list of beers
* `GET /beers/{id}` - Retrieve a single beer by ID

When using the `GET /beers` endpoint you can pass the following query parameters to filter the results:

| PARAM         | TYPE                 | DETAILS                                                                                                                                                                        |
|---------------|----------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| abv_gt        | number               | Returns all beers with ABV greater than the supplied number                                                                                                                    |
| abv_lt        | number               | Returns all beers with ABV less than the supplied number                                                                                                                       |
| ibu_gt        | number               | Returns all beers with IBU greater than the supplied number                                                                                                                    |
| ibu_lt        | number               | Returns all beers with IBU less than the supplied number                                                                                                                       |
| ebc_gt        | number               | Returns all beers with EBC greater than the supplied number                                                                                                                    |
| ebc_lt        | number               | Returns all beers with EBC less than the supplied number                                                                                                                       |
| beer_name     | string               | Returns all beers matching the supplied name (this will match partial strings as well so e.g punk will return Punk IPA), if you need to add spaces just add an underscore (_). |
| yeast         | string               | Returns all beers matching the supplied yeast name, this performs a fuzzy match, if you need to add spaces just add an underscore (_).                                         |
| brewed_before | date                 | Returns all beers brewed before this date, the date format is mm-yyyy e.g 10-2011                                                                                              |
| brewed_after  | date                 | Returns all beers brewed after this date, the date format is mm-yyyy e.g 10-2011                                                                                               |
| hops          | string               | Returns all beers matching the supplied hops name, this performs a fuzzy match, if you need to add spaces just add an underscore (_).                                          |
| malt          | string               | Returns all beers matching the supplied malt name, this performs a fuzzy match, if you need to add spaces just add an underscore (_).                                          |
| food          | string               | Returns all beers matching the supplied food string, this performs a fuzzy match, if you need to add spaces just add an underscore (_).                                        |
| ids           | string (id\|id\|...) | Returns all beers matching the supplied ID's. You can pass in multiple ID's by separating them with a \| symbol.                                                               |


## Boilerplates

Examples of the boilerplates can be found in the following folders:

`next-tech-test` - `nextjs`/`react` implementation using `typescript` (https://nextjs.org/)



