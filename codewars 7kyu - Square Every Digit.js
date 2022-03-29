function squareDigits(dig)
{
    
    dig = dig.toString().split("")

    let arr = []

    for(i=0;i<dig.length;i++)
    {
        arr.push(parseInt(dig[i]*dig[i]))
    }

    arr = arr.toString()

    for(i=0;i<dig.length;i++)
    {
        arr = arr.replace(",","");
    }

    return(parseInt(arr))

}

squareDigits(3212)