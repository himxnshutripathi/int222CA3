function blah(k, s)
{
    const days = k;
    var text = s;
    var result = 0;
    const list = text.split("");
    for(let i=1; i<=k; i++){
        for(let j=0; j<list.length; j++){
            if(list[j]== "R"){
                list[j+1] = list[j-1] = "R"
            }
        }
    }
    for(let i=0; i<list.length; i++){
        if(list[i]== "F"){
            result++;
        }
        return resut 
    }
    return result;

}