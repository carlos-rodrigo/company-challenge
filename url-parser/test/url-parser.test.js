import UrlParser from '../url-parser'


test('given an url format string then return a his key', () => {
  let urlFormat = "/:version";
  let paramIdentifier = ':'
  let url = "/6";

  let expectedReturn = {
                          version: 6
                       };

  let urlParser = new UrlParser(urlFormat, paramIdentifier);

  expect(urlParser.parse(url)).toEqual(expectedReturn);
})
