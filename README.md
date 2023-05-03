# [Oxbury Bank](https://www.oxbury.com) | Technical Test

## Introduction

This is a technical test for Oxbury Bank. It is purposefully incomplete, requires a few basic features added to it and does have scope for architectural improvements.

The implementation for this uses the [Beer API](https://punkapi.com/documentation/v2) to retrieve a list of beers from the API. 

Within this repo you will find several different languages and frameworks as starting points. You are free to use any of these as a starting point for your solution using the boiler plate code provided. The boiler plate code is not intended to be a complete solution and you are free to change any of the code as you see fit. You are also free to use any other frameworks or languages you wish to complete the task, the choice is yours!

With the boiler plate code provided, the data integration layer as well as a very basic project skeleton is provided and the task section below assumes you will be using this as a starting point. If you choose to use a different framework or language you will need to implement the data integration layer yourself (See [`next-tech-test/src/services/beer-api.service.ts`](next-tech-test/src/services/beer-api.service.ts) as a starting point for this).

If you are using a boilerplate, styling maybe already implemented for parts of the application, please note that it is not important to use provided framework. If you add any additional styling, please use whatever styling framework you are familiar with or just plain css classes.

## Task

The task is to implement the following features, do not worry about styling the application, we are more interested in how you implement the features and your approach to the problem!


1. Change API pagination to `15` beers per page
2. Enhance the Single Beer view with more information from the API, for example: `name`, `description`, `image_url`, `abv`, `ibu`, `ebc`, `food_pairing`, `brewers_tips`, `ingredients` - the choice is yours, feel free to implement any other information you think is relevant! _(**styling is not overly important here**)_
3. Implement basic pagination -  a basic `Next`/`Previous` button to load the next page or previous page of beers would be sufficient but feel free to implement in any way you see fit!
4. Allow beers to be clicked and displayed on a separate page/view
5. Add searching ability to the list of beers
6. Think or implement tests for application, think about what type of tests are appropriate
7. Please comment on any architectural or design improvements you would make to the codebase; we're not expecting you to implement these, just to highlight them!

## Documentation

The full API documentation can be found [here](https://punkapi.com/documentation/v2) but the following endpoints are the ones you will need to use:

The base endpoint for the API is [`https://api.punkapi.com/v2`](https://api.punkapi.com/v2) (Notice the `v2` at the end)

* [`GET /beers`](https://api.punkapi.com/v2/beers) - Retrieve a list of beers
* [`GET /beers/{id}`](https://api.punkapi.com/v2/beers/1) - Retrieve a single beer by ID

When using the [`GET /beers`](https://api.punkapi.com/v2/beers) endpoint you can pass the following query parameters to filter the results:

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

## Boilerplate's

Examples of the boilerplate's can be found in the following folders:

`next-tech-test` - `nextjs`/`react` implementation using `typescript` (https://nextjs.org/)
