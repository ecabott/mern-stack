//Counting number of vowels in a string
const a = prompt('Enter a string');
const countVowels = (str) =>
{
    const vowels = 'AaEeIiOoUu';
    let count = 0;
    for(const char of str)
    {
        if(vowels.includes(char))
        {
            count++;
        }
    }
    console.log(count);
}
countVowels(a);