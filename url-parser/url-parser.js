export default class UrlParser {

    constructor(urlFormat, paramIdentifier){
      this.urlFormat = urlFormat;
      this.paramIdentifier = paramIdentifier;
    }

    parse(url){
        if(this.isUrlMatchWithFormat(url)){
            var values = this.getValuesFromUrl(url);
            return this.buildMapWithValues(values);
        }else{
            return { message: "the url not match with the format" };
        }
    }

    isUrlMatchWithFormat(url){
        let parts = url.split('/');
        let formatParts = this.urlFormat.split('/');

        return parts.length == formatParts.length
    }

    getValuesFromUrl(url){
        let urlParts = url.split('/').filter(p => p !== '');
        let formatParts = this.urlFormat.split('/').filter(p => p !== '');

        let values = [];

        for(let i = 0; i < urlParts; i++){
            let value = urlParts[i];
            let param = formatParts[i];
            if(this.isParam(param))
                values.push(value);
        }

        return values;
    }

    isParam(param){
        let regex = new RegExp(this.paramIdentifier + "[a-zA-Z]+");
        return regex.test(param);
    }

    buildMapWithValues(values){
        let map = new Object();
        let params = this.getParamsNamesFromFormatUrl();
        for(let i = 0; i < params.length; i++){
            map[params[i]] = Number(values[i]) != NaN ? Number(values[i]): values[i];
        }

        return map;
    }

    getParamsNamesFromFormatUrl(){
        let regex = this.paramIdentifier + "[a-zA-Z]+";
        let originalParams = this.urlFormat.match(regex);
        let finalParams = [];

        originalParams.forEach(function(element){
            finalParams.push(element.replace(':', ''));
        });

        return finalParams;
    }
};
