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
