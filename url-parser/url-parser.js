export default class UrlParser {

    constructor(urlFormat, paramIdentifier){
      this.urlFormat = urlFormat;
      this.params = this.getParamsNamesFromFormat(urlFormat, paramIdentifier);
      this.SLASH = '/';
    }

    parse(url){
      if(this.isUrlMatchWithFormat(url)){
        var values = this.getValuesFromUrl(url);

        return this.buildMapWithValues(values);
      }else{
        return { message: "the url not match with the format" };
      }
    }

    getParamsNamesFromFormat(url, paramIdentifier){
      let regex = paramIdentifier + "[a-zA-Z]+";
      let originalParams = url.match(regex);
      let finalParams = [];
      
      originalParams.forEach(function(element){
        finalParams.push(element.replace(paramIdentifier, ""));
      });

      return finalParams;
    }

    isUrlMatchWithFormat(url){
      return true;
    }
    
    getValuesFromUrl(url){
      
    }

    buildMapWithValues(values){

    }
};
