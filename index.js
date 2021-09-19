function login() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    console.log(email, password);



    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log(user);
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage);
            // ..
        });
}

function logout() {
    firebase.auth().signOut().then(() => {
        // Sign-out successful.
    }).catch((error) => {
        // An error happened.
    });
}

function signup() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    console.log(email, password);
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed in 
            var user = userCredential.user;
            // ...
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            // ..
        });
}


let popup = 0;
let fail  = 4;

document.addEventListener('mouseover', function(e){
    
    if (e.target.className === "blast"){
        
                e.target.style.backgroundColor = "#ededed";
                e.target.textContent = "BOM!";
                popup++;
                removeEvent(e);
                checkAllPopped();
    } else if(e.target.className === "balloon"){
        e.target.style.backgroundColor = "#ededed";
        e.target.textContent = "FAIL!";
        fail--;
        removeEvent(e);
        checkAllPopped();
    }  

});

function removeEvent(e){
    e.target.removeEventListener('mouseover', function(){
        
    })
};

function checkAllPopped(){
    if (popup ===4){
        console.log('you clear this level!');
        let gallery = document.querySelector('#balloon-gallery');
        let message = document.querySelector('#yay-no-balloons');
        gallery.innerHTML = '';
        message.style.display = 'block';
        let btn = document.createElement("button");
        btn.style.height= "100px"
        btn.style.backgroundColor="red"
        btn.style.color="white"

        btn.innerHTML = "Next Level";
        document.body.appendChild(btn);
        btn.addEventListener('click',()=>{
        location.href="./other page/level2.html "
        })
        
    }else if(fail==0){
       alert("plese try again")
       location.reload();
    }
};

















































