const d = document;
const $audio = d.querySelector(".piano__audio");

const tunes = {
    "A": "tunes/a.wav",
    "S": "tunes/s.wav",
    "D": "tunes/d.wav",
    "F": "tunes/f.wav",
    "G": "tunes/g.wav",
    "H": "tunes/h.wav",
    "J": "tunes/j.wav",
    "K": "tunes/k.wav",
    "L": "tunes/l.wav",
    "M": "tunes/m.wav",
    "W": "tunes/w.wav",
    "E": "tunes/e.wav",
    "T": "tunes/t.wav",
    "Y": "tunes/y.wav",
    "U": "tunes/U.wav",
    "O": "tunes/o.wav",
    "P": "tunes/p.wav"
};


d.addEventListener("click", e => {
    if (e.target.matches(".piano div")) {
        let keyPress = e.target.querySelector("h4").textContent;
        $audio.src = tunes[keyPress];
        $audio.play();
        e.target.classList.add("click__key");
        setTimeout(() => {
            e.target.classList.remove("click__key");
            
        }, 200);
    }
});

d.addEventListener("keydown", e => {
    const note= tunes[e.key.toLocaleUpperCase()] || "";
    $audio.src = note;
    if(note!==""){
        const $keys= d.querySelectorAll(".piano div > h4");
        $keys.forEach(key => {
            if(key.textContent==e.key.toLocaleUpperCase()){
                key.parentElement.classList.add("click__key");
                setTimeout(() => {
                    key.parentElement.classList.remove("click__key");
                    
                }, 200);
            }
        });
        $audio.pause();
        $audio.play();
    } 
});
