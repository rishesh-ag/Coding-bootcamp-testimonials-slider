let prev = document.querySelector('#prev');
let next = document.querySelector('#next');
let p = document.querySelector('p');
let h1 = document.querySelector('h1')
let photo = document.querySelector('#photo')
var counter = 0

function Slide(){
    if(counter == 0) {
        counter = 1;
        p.innerText = "“ If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ”";
        h1.innerHTML = "John Tarkpor <br> <span>Junior Front-end Developer</span>";
        photo.src = "./images/image-john.jpg";
    }
    else {
        counter = 0
        p.innerText = "“ I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. ”";
        h1.innerHTML = "Tanya Sinclair <br><span>UX Engineer</span>";
        photo.src = "./images/image-tanya.jpg";
    }
}

prev.addEventListener('click', Slide);
next.addEventListener('click', Slide)