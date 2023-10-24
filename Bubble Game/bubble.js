function makeBubble(){
    var btn_val = ""; 
    for(var i = 1; i <= 102; i++){
        var rn  = Math.floor(Math.random() *10)
        btn_val += `<div class="bubble_num"> ${rn}</div>`;
    }
    document.querySelector(".pbtm").innerHTML = btn_val;
    }
    var timer =  60;
    function makeTimer(){
        var clrInterval = setInterval(function () {
            if(timer >0){
            timer--;
            document.querySelector("#TimerValue").innerHTML = timer;
            }
            else{
                clearInterval(clrInterval);
            }
            
        },1000)
    }
    function makeHit(){
        let rn = Math.floor(Math.random()*10);
        document.querySelector("#hitVal").textContent = rn;
    }
    var score = 0;
    function score_check(){
        score +=  10;
        document.querySelector('#score').textContent= score;
    }
    score_check();
    makeHit();
    makeTimer();
    makeBubble();
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    