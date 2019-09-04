import UrlParser from '../url-parser'


test('given an url format and an url to test then return version and 6', () => {
  let urlFormat = "/:version";
  let paramIdentifier = ':'
  let url = "/6";

  let expectedReturn = {
                          version: 6
                       };

  let urlParser = new UrlParser(urlFormat, paramIdentifier);

  expect(urlParser.parse(url)).toEqual(expectedReturn);
})

test('given an url format and an url to test with 66 as version then return version and 66', () => {
  let urlFormat = "/:version";
  let paramIdentifier = ':'
  let url = "/66";

  let expectedReturn = {
                          version: 66
                       };

  let urlParser = new UrlParser(urlFormat, paramIdentifier);

  expect(urlParser.parse(url)).toEqual(expectedReturn);
})

test('given a complex url format and an url to test show all params and they values', () => {
  let urlFormat = "/:version/api/:collection/:id";
  let paramIdentifier = ':'
  let url = "/6/api/listings/3";

  let expectedReturn = {
      version: 6,
      collection: "listings",
      id: 3
  };

  let urlParser = new UrlParser(urlFormat, paramIdentifier);

  expect(urlParser.parse(url)).toEqual(expectedReturn);
})

test('given a complex url format and an url with querystring params, show all params and they values', () => {
  let urlFormat = "/:version/api/:collection/:id";
  let paramIdentifier = ':';
  let url = "/6/api/listings/3?sort=desc&limit=10";

  let expectedReturn = {
      version: 6,
      collection: "listings",
      id: 3
  };

  let urlParser = new UrlParser(urlFormat, paramIdentifier);

  expect(urlParser.parse(url)).toEqual(expectedReturn);
})
