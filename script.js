const quotes = [
    {
        name: 'Dipankar Roy',
        quote: 'Front end Development career is good in future'
    },
    {
        name: 'Roy Dipankar',
        quote: 'Nothing to say but difficult to do'
    },
    {
        name: 'ADV Vorik',
        quote: 'Easyly you can understand what i want to sat'
    },
    {
        name: 'ADV Vorik',
        quote: 'Easyly you can understand what i want to sat'
    },
    {
        name: 'I Love You',
        quote: 'Please give your answer & i am waiting for you'
    },
    {
        name: 'Habby Nirs',
        quote: 'Another text will go here.'
    }, 
    {
        name: 'Love EveryOne ',
        quote: 'Every Man should to try to hard and obviously think that also he will will'
    },
    {
        name: 'Welcome 2021',
        quote: 'Welcome Everyone in 2021, you should welcome to 2021'
    }

]

const quoteBtn = document.querySelector('#quoteBtn');
const quoteAuthor = document.querySelector('#quoteAuthor');
const quote = document.querySelector('#quote');

quoteBtn.addEventListener('click', displayQuote);

function displayQuote(){
    let number = Math.floor(Math.random()*quotes.length);
    quoteAuthor.innerHTML = quotes[number].name;
    quote.innerHTML = quotes[number].quote;
}