const _SLASH = '/';
const _TEXT_REGEX = "[a-zA-Z]+";
const _QUESTION_MARK = '?';
const _QUERY_PARAM_SEPARATOR = '&';
const _EQUALS_SYMBOL = '=';

export default class UrlParser {

    constructor(urlFormat, paramIdentifier){
        this.urlFormat = urlFormat;
        this.paramIdentifier = paramIdentifier;
        this.regex = paramIdentifier + _TEXT_REGEX;
    }

    parse(url){
        if(this.isUrlMatchWithFormat(url)){
            return this.getValuesFromUrl(url);
        }else{
            return { message: "the url not match with the format" };
        }
    }

    isUrlMatchWithFormat(url){
        let parts = this.getPartsOfAnUrl(url);
        let formatParts = this.getPartsOfAnUrl(this.urlFormat);

        return parts.length == formatParts.length
    }

    getValuesFromUrl(url){
        let urlParts = this.getPartsOfAnUrl(url);
        let formatParts = this.getPartsOfAnUrl(this.urlFormat);

        let mapToReturn = new Object();

        for(let i = 0; i < urlParts.length; i++){
            let value = urlParts[i];
            let param = formatParts[i];
            if(this.isParam(param)){
                mapToReturn[param.replace(this.paramIdentifier, '')] = this.castValueToNumber(value);
            }
        }

        return this.extractQueryParamsIfExists(mapToReturn);
    }

    getPartsOfAnUrl(url){
        return url.split(_SLASH).filter(p => p !== '');
    }

    isParam(param){
        let regex = new RegExp(this.regex);
        return regex.test(param);
    }

    extractQueryParamsIfExists(map){

        let keys = Object.keys(map);
        let lastKey = keys[keys.length-1];
        let lastElementValue = map[lastKey];
        if(typeof lastElementValue !== 'string'){
          return map;
        } else{
          let lastElementValues = lastElementValue.split(_QUESTION_MARK);
          let newMap = Object.assign({}, map);
          let paramValue = lastElementValues[0];
          newMap[lastKey] = this.castValueToNumber(paramValue);
          let queryParams = lastElementValue[1].split(_QUERY_PARAM_SEPARATOR);
          for(let i = 0; i < queryParams.length; i++){
              let queryParam = queryParams[i].split(_EQUALS_SYMBOL);
              newMap[queryParam[0]] = this.castValueToNumber(queryParam[1]);
          }
          return newMap;
        }
    }

    castValueToNumber(value){
        return isNaN(Number(value)) ? value : Number(value);
    }
};
