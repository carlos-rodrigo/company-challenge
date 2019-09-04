const _SLASH = '/';
const _TEXT_REGEX = "[a-zA-Z]+";

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
                mapToReturn[param.replace(this.paramIdentifier, '')] = isNaN(Number(value)) ? value : Number(value);
            }
        }

        return mapToReturn;
    }

    isParam(param){
        let regex = new RegExp(this.regex);
        return regex.test(param);
    }

    
    getPartsOfAnUrl(url){
        return url.split(_SLASH).filter(p => p !== '');
    }
};
