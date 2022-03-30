
function highAndLow(numbers)
{
    let max = numbers[0]
    let min = numbers[0]
   
    for(i=0;i<numbers.length;i++)
    {
        numbers = numbers.replace(' ','')

        if((numbers[i])< min)
        {
            min = (numbers[i])
            
        }
        if((numbers[i])> max)
        {
            max = (numbers[i])
        }
    }

   console.log((max),(min))
}

highAndLow("1 2 3")