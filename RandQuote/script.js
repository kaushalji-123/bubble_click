// let button = document.getElementById('#button');
// let output = document.getElementById('#output');
//     let Quote =  
//     [
        
// `"The best and most beautiful things in the world cannot be seen or even touched. They must be felt with the heart." HELEN KELLER` ,
// `"Life is a series of baby steps along the way and if you add up these tiny little steps you take toward your goal, 
// whatever it is, whether its giving up something, a terrible addiction or trying to work your way through an illness."HODA KOTB`,
// `"Be thankful for what you have; youll end up having more." OPRAH WINFR`,
// `"To succeed in life, you need three things: a wishbone, a backbone, and a funny bone."REBA MCENTIRE`,
// `"Successful people are always looking for opportunities to help others. Unsuccessful people are always asking: “What in it for me?”
// BRIAN TRACY`,
// `"The biggest adventure you can take is to live the life of your dreams."OPRAH WINFREY`,
// `"As soon as something stops being fun, I think it time to move on. Life is too short to be unhappy."RICHARD BRANSON`,
//     ];
//     button.addEventListener('click' , function(){
//         var randQ = Quote[Math.floor(Math.random()*Quote.length)]
//         output.innerHTML = randQ;
// })
let button = document.getElementById('button'); // Removed the '#' before 'button'
let output = document.getElementById('output'); // Removed the '#' before 'output'

let Quote = [
    `"The best and most beautiful things in the world cannot be seen or even touched. They must be felt with the heart." - HELEN KELLER`,
    `"Life is a series of small steps towards your goals, be it overcoming addiction or navigating illness.." HODA KOTB`,
    `"Be thankful for what you have; you'll end up having more." - OPRAH WINFREY`,
    `"To succeed in life, you need three things: a wishbone, a backbone, and a funny bone." - REBA MCENTIRE`,
    `"Successful people are always looking for opportunities to help others. Unsuccessful people are always asking: 'What's in it for me?'" - BRIAN TRACY`,
    `"The biggest adventure you can take is to live the life of your dreams." - OPRAH WINFREY`,
    `"As soon as something stops being fun, I think it's time to move on. Life is too short to be unhappy." - RICHARD BRANSON`,
];

button.addEventListener('click', function () {
    var randQ = Quote[Math.floor(Math.random() * Quote.length)];
    output.innerHTML = randQ;
});
