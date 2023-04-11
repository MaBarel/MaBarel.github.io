console.log('file loaded');




   

 


    // Variabelen gedeelte
    let pcRdmNumber = Math.ceil(Math.random() *10)
    let playerRdm = Math.ceil(Math.random() *10)
    console.log(pcRdmNumber)
    console.log(playerRdm)
    let userCash = 0;
    console.log(userCash)

    // Higher gedeelte
    function higher() {

        //higher won
        if(pcRdmNumber < playerRdm){
            document.getElementById ('winorlose').innerHTML = "je hebt gewonen uw getal was " + playerRdm
            userCash = userCash + 10
            document.getElementById('usercash').innerHTML = "Uw Score is " + userCash;
            console.log("user has won")
            

            pcRdmNumber = Math.ceil(Math.random() *10)
            playerRdm = Math.ceil(Math.random() *10)

            console.log(playerRdm)

            document.getElementById ('pcnumber').innerHTML = pcRdmNumber;
        }

        //higher lost
        else if(pcRdmNumber > playerRdm){
            document.getElementById ('winorlose').innerHTML = "je hebt veloren uw getal was " + playerRdm
            userCash = userCash - 10
            document.getElementById('usercash').innerHTML = "Uw Score is " + userCash;
            console.log("user has lost")
            


            pcRdmNumber = Math.ceil(Math.random() *10)
            playerRdm = Math.ceil(Math.random() *10)

            console.log(playerRdm)

            document.getElementById ('pcnumber').innerHTML = pcRdmNumber;
        }

        //higher equal
        else if (pcRdmNumber === playerRdm){
            document.getElementById ('winorlose').innerHTML = "je hebt Gelijk gespeeldt"
            userCash = userCash + 0
            document.getElementById('usercash').innerHTML = "Uw Score is " + userCash;
            console.log("user has thrown equal")
            

            pcRdmNumber = Math.ceil(Math.random() *10)
            playerRdm = Math.ceil(Math.random() *10)

            console.log(playerRdm)

            document.getElementById ('pcnumber').innerHTML = pcRdmNumber;
            
        }

        //game lost
        if(userCash < 0){
            const lbutton = document.querySelector('#lowerbutton');

            lbutton.disabled = true

            const hbutton = document.querySelector('#higherbutton');

            hbutton.disabled = true
        }
        
    
    }
    

    // Lower gedeelte
    function lower() {

        //lower win
        if(pcRdmNumber > playerRdm){
            document.getElementById ('winorlose').innerHTML = "je hebt gewonen uw getal was " + playerRdm
            userCash = userCash + 10
            document.getElementById('usercash').innerHTML = "Uw Score is " + userCash;
            console.log("user has won")
            

            pcRdmNumber = Math.ceil(Math.random() *10)
            playerRdm = Math.ceil(Math.random() *10)

            console.log(playerRdm)

            document.getElementById ('pcnumber').innerHTML = pcRdmNumber;
        }

        //lower lose
        else if(pcRdmNumber < playerRdm){
            document.getElementById ('winorlose').innerHTML = "je hebt veloren uw getal was " + playerRdm
            userCash = userCash - 10
            document.getElementById('usercash').innerHTML = "Uw Score is " +  userCash;
            console.log("user has lost")
            

            pcRdmNumber = Math.ceil(Math.random() *10)
            playerRdm = Math.ceil(Math.random() *10)

            console.log(playerRdm)

            document.getElementById ('pcnumber').innerHTML = pcRdmNumber;
        }

        //lower equal
        else if (pcRdmNumber === playerRdm){
            document.getElementById ('winorlose').innerHTML = "je hebt Gelijk gespeeldt"
            userCash = userCash + 0
            document.getElementById('usercash').innerHTML = "Uw Score is " + userCash;
            console.log("user has thrown equal")
            

            pcRdmNumber = Math.ceil(Math.random() *10)
            playerRdm = Math.ceil(Math.random() *10)

            console.log(playerRdm)

            document.getElementById ('pcnumber').innerHTML = pcRdmNumber;
        }

        //game Lost
        if(userCash < 0){
            const lbutton = document.querySelector('#lowerbutton');

            lbutton.disabled = true

            const hbutton = document.querySelector('#higherbutton');

            hbutton.disabled = true
        }
    }

    function refresh() {
        location.reload();
    }



    document.getElementById('usercash').innerHTML = "Uw Score is " + userCash;
    document.getElementById ('pcnumber').innerHTML =  pcRdmNumber;
   















