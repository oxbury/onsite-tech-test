# [Oxbury Bank](https://www.oxbury.com) | Technical Test

## Overview

This technical test for Oxbury Bank uses the [Beer API](https://punkapi.com/documentation/v2) to fetch beer data. Choose any provided boilerplate or use your own. If using a boilerplate, you can modify any code as needed. If using another framework or language, you'll need to implement the data integration layer.

## Tasks

1. **Set API pagination to `15` beers per page.**
2. **Add more details to the Single Beer view** (e.g. `image_url`, `abv`, `ibu`, `ebc`, `food_pairing`, `brewers_tips`, `ingredients`).
3. **Implement basic pagination with `Next/Previous` buttons.**
4. **Make beers clickable, opening a `separate page/view`.**
5. **Add `search` functionality for beer list (Bonus points).**
6. **Consider or implement `tests` for the app.**
7. **Comment on potential architectural or design improvements (Bonus points)** (no need to implement).

## API Documentation

Find full API documentation [here](https://punkapi.com/documentation/v2). Use the following endpoints:

- Base: `https://api.punkapi.com/v2`
- [`GET /beers`](https://api.punkapi.com/v2/beers) - Fetch beer list
- [`GET /beers/{id}`](https://api.punkapi.com/v2/beers/1) - Fetch single beer by ID

Use query parameters to filter results when using `GET /beers`. See [documentation](https://punkapi.com/documentation/v2) for parameter details.

## Boilerplates

Example boilerplates:

- `next-tech-test` - `nextjs`/`react` with `typescript` (https://nextjs.org/)
