let msg = new SpeechSynthesisUtterance();
let voices = speechSynthesis.getVoices();
msg.voice = voices[0];
let tags = document.querySelectorAll('nav, card,img,h1,h2,h3,h4,h5,div,input,button,p,ul,section'); // add more tags for you project
tags.forEach((tag) => {
    tag.addEventListener('click', (e) => {
        
        msg.text = e.target.innerText;
        tag.style.backgroundColor = "yellow";
        speechSynthesis.speak(msg);
        
        let interval = setInterval(() => {
            if(!speechSynthesis.speaking){
                tag.style.removeProperty('background-color');
                clearInterval(interval);
            }
        }, 100);
        
    });
});



