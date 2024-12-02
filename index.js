let guess=Math.floor((Math.random())*100 )+1
    console.log(guess)
    const hint= document.getElementById('hints')
    const Attempts = document.getElementById('Attempt')
    let count=0
    let game = 1
    
     function check() {
       if(game == 1){
            let val=document.forms[0]['val'].value
            console.log(val)
            count++
    
            if( val > guess){
                console.log('Guess is high')
                hints.innerHTML='Guess is high'
                Attempt.innerHTML='Attempts :'+count
                
            }
            else if(val< guess){
                console.log('Guess is low')
                hints.innerHTML='Guess is low'
                Attempt.innerHTML='Attempts :'+count
            }     else{
                console.log('Guess is correct')
                hints.innerHTML='Guess is correct'
                Attempt.innerHTML='Attempts :'+count
                document.getElementById('btn_1').innerHTML="reset"
                game= 0
                
            }
       }
    else{
        reset()
        
    }
}
    
function reset(){
    document.getElementById('btn_1').innerHTML="check"
    let guess=Math.floor((Math.random())*100 )+1
    console.log(guess)
    const Attempts = document.getElementById('Attempt')
    count=0
    Attempt.innerHTML='Attempts :'+count
    game = 1
    
     }