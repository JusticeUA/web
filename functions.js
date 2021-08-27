

function countEvenOdd(n)
{
    let even = 0;
    let odd = 0;
    while (n > 0)
    {
        let rem = n % 10;
        if (rem % 2 == 0)
            even++;
        else
            odd++;
        n = Math.floor(n / 10);
    }
    document.write("Even count : "
        + even);
    document.write("<br>" + "Odd: "
        + odd);
        
        return {odd: 0, even: 0}

    if (even_count % 2 == 0 &&
        odd_count % 2 != 0)
        return 1;
    else
        return 0;
        return {odd: 0, even: 0}
}

let n  = document.querySelector('.oddCount_input').value;
    let t = countEvenOdd(n);

let count = document.querySelector('.oddCount button')

count.addEventListener('click', () => {
    console.log('vvv');
})