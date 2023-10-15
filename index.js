
let calenderDiv = document.getElementById("cal__cont")
let mondayBtn = document.getElementById("monday")
let tuesBtn = document.getElementById("tuesday")
let wedBtn = document.getElementById("wednesday")
let thurBtn = document.getElementById("thursday")
let friBtn = document.getElementById("friday")
let satBtn = document.getElementById("saturday")
let sunBtn = document.getElementById("sunday")

console.log(tuesBtn, wedBtn,thurBtn,friBtn,satBtn,sunBtn)





 const Monday = ` <h1 class="day__header">Monday</h1>

<div class="cal__section__cont">
    <h2 class="time__day">Sang</h2>


    <div class="class__time">
        <p class="class__name__general">08:00  - 09:30</p>
        <p class="AV12A class__name__general">AV12A</p>
    </div>
    <div class="class__time">
    <p CLASS="class__name__general">09:45 - 11:15</p>
    <p class="class__name__general AV8B">AV8B</p>
    </div>
</div>

<div class="cal__section__cont">
    <h2 class="time__day">Chieu</h2>


    <div class="class__time">
        <p class="class__name__general">2:00  - 3:30</p>
        <p class="AV7B class__name__general">AV7B</p>
    </div>
    <div class="class__time">
    <p CLASS="class__name__general">3:30  - 5:00</p>
    <p class="class__name__general nothing">No Schedule</p>
    </div>
</div>

<div class="cal__section__cont">
    <h2 class="time__day">Toi</h2>


    <div class="class__time">
        <p class="class__name__general">5:30 - 7:00</p>
        <p class="AV8A class__name__general">AV8A</p>
    </div>
    <div class="class__time">
    <p CLASS="class__name__general">7:30 - 9:00</p>
    <p class="AV12A-2 class__name__general">AV12A /2</p>
    </div>
</div>
`



const Tuesday =  ` <h1 class="day__header">Tuesday</h1>

<div class="cal__section__cont">
    <h2 class="time__day">Sang</h2>


    <div class="class__time">
        <p class="class__name__general">08:00  - 09:30</p>
        <p class="AV11A1 class__name__general">AV11A1</p>
    </div>
    <div class="class__time">
    <p CLASS="class__name__general">09:45 - 11:15</p>
    <p class="class__name__general KHTN8">KHTN8</p>
    </div>
</div>

<div class="cal__section__cont">
    <h2 class="time__day">Chieu</h2>


    <div class="class__time">
        <p class="class__name__general">2:00  - 3:30</p>
        <p class="AV9B class__name__general">AV9B</p>
    </div>
    <div class="class__time">
    <p CLASS="class__name__general">3:30  - 5:00</p>
    <p class="class__name__general nothing">No Schedule</p>
    </div>
</div>

<div class="cal__section__cont">
    <h2 class="time__day">Toi</h2>


    <div class="class__time">
        <p class="class__name__general">5:30 - 7:00</p>
        <p class="AV9A class__name__general">AV9A</p>
    </div>
    <div class="class__time">
    <p CLASS="class__name__general">7:30 - 9:00</p>
    <p class="AV10B class__name__general">AV10B</p>
    </div>
</div>
`

const wednesday = ` <h1 class="day__header">Wednesday</h1>

<div class="cal__section__cont">
    <h2 class="time__day">Sang</h2>


    <div class="class__time">
        <p class="class__name__general">08:00  - 09:30</p>
        <p class="AV12A class__name__general">AV12A</p>
    </div>
    <div class="class__time">
    <p CLASS="class__name__general">09:45 - 11:15</p>
    <p class="class__name__general AV8B">AV8B</p>
    </div>
</div>

<div class="cal__section__cont">
    <h2 class="time__day">Chieu</h2>


    <div class="class__time">
        <p class="class__name__general">2:00  - 3:30</p>
        <p class="LY9A class__name__general">LY 9A</p>
    </div>
    <div class="class__time">
    <p CLASS="class__name__general">3:30  - 5:00</p>
    <p class="AV11A2 class__name__general ">AV11A2</p>
    </div>
</div>

<div class="cal__section__cont">
    <h2 class="time__day">Toi</h2>


    <div class="class__time">
        <p class="class__name__general">5:30 - 7:00</p>
        <p class="AV10A class__name__general">AV10A</p>
    </div>
    <div class="class__time">
    <p CLASS="class__name__general">7:30 - 9:00</p>
    <p class="AV12A class__name__general">AV12A</p>
    </div>
</div>
`
const thursday = ` <h1 class="day__header">Thursday</h1>

<div class="cal__section__cont">
    <h2 class="time__day">Sang</h2>


    <div class="class__time">
        <p class="class__name__general">08:00  - 09:30</p>
        <p class="AV12A class__name__general nothing">No Schedule</p>
    </div>
    <div class="class__time">
    <p CLASS="class__name__general">09:45 - 11:15</p>
    <p class=" KHTN8 class__name__general ">KHTN8</p>
    </div>
</div>

<div class="cal__section__cont">
    <h2 class="time__day">Chieu</h2>


    <div class="class__time">
        <p class="class__name__general">2:00  - 3:30</p>
        <p class="AV9B class__name__general">AV9B</p>
    </div>
    <div class="class__time">
    <p CLASS="class__name__general">3:30  - 5:00</p>
    <p class="nothing class__name__general ">No Schedule</p>
    </div>
</div>

<div class="cal__section__cont">
    <h2 class="time__day">Toi</h2>


    <div class="class__time">
        <p class="class__name__general">5:30 - 7:00</p>
        <p class="AV9A class__name__general">AV9A</p>
    </div>
    <div class="class__time">
    <p CLASS="class__name__general">7:30 - 9:00</p>
    <p class="AV11B class__name__general">AV11B</p>
    </div>
</div>
`   
const friday =   ` <h1 class="day__header">Friday</h1>

<div class="cal__section__cont">
    <h2 class="time__day">Sang</h2>


    <div class="class__time">
        <p class="class__name__general">08:00  - 09:30</p>
        <p class="AV12A class__name__general">AV12A</p>
    </div>
    <div class="class__time">
    <p CLASS="class__name__general">09:45 - 11:15</p>
    <p class=" nothing class__name__general ">No Schedule</p>
    </div>
</div>

<div class="cal__section__cont">
    <h2 class="time__day">Chieu</h2>


    <div class="class__time">
        <p class="class__name__general">2:00  - 3:30</p>
        <p class="LY9A class__name__general">LY 9A</p>
    </div>
    <div class="class__time">
    <p CLASS="class__name__general">3:30  - 5:00</p>
    <p class="nothing class__name__general ">No Schedule</p>
    </div>
</div>

<div class="cal__section__cont">
    <h2 class="time__day">Toi</h2>


    <div class="class__time">
        <p class="class__name__general">5:30 - 7:00</p>
        <p class="AV10A class__name__general">AV10A</p>
    </div>
    <div class="class__time">
    <p CLASS="class__name__general">7:30 - 9:00</p>
    <p class="AV12A class__name__general">AV12A</p>
    </div>
</div>
`  
const saturday =  ` <h1 class="day__header">Saturday</h1>

<div class="cal__section__cont">
    <h2 class="time__day">Sang</h2>


    <div class="class__time">
        <p class="class__name__general">08:00  - 09:30</p>
        <p class="HOA9A class__name__general">HOA 9A</p>
    </div>
    <div class="class__time">
    <p CLASS="class__name__general">09:45 - 11:15</p>
    <p class=" AV8A class__name__general ">AV8A</p>
    </div>
</div>

<div class="cal__section__cont">
    <h2 class="time__day">Chieu</h2>


    <div class="class__time">
        <p class="class__name__general">2:00  - 3:30</p>
        <p class="AV9B class__name__general">AV9B</p>
    </div>
    <div class="class__time">
    <p CLASS="class__name__general">3:30  - 5:00</p>
    <p class="AV7B class__name__general ">AV7B</p>
    </div>
</div>

<div class="cal__section__cont">
    <h2 class="time__day">Toi</h2>


    <div class="class__time">
        <p class="class__name__general">5:30 - 7:00</p>
        <p class="AV9A class__name__general">AV9A</p>
    </div>
    <div class="class__time">
    <p CLASS="class__name__general">7:30 - 9:00</p>
    <p class="AV6A class__name__general">AV6A</p>
    </div>
</div>
`  

const sunday =    ` <h1 class="day__header">Sunday</h1>

<div class="cal__section__cont">
    <h2 class="time__day">Sang</h2>


    <div class="class__time">
        <p class="class__name__general">08:00  - 09:30</p>
        <p class="HOA9A class__name__general">HOA 9A</p>
    </div>
    <div class="class__time">
    <p CLASS="class__name__general">09:45 - 11:15</p>
    <p class=" AV11A12 class__name__general ">AV11A12</p>
    </div>
</div>

<div class="cal__section__cont">
    <h2 class="time__day">Chieu</h2>


    <div class="class__time">
        <p class="class__name__general">2:00  - 3:30</p>
        <p class="AV10B class__name__general">AV10B</p>
    </div>
    <div class="class__time">
    <p CLASS="class__name__general">3:30  - 5:00</p>
    <p class="AV11B class__name__general ">AV11B</p>
    </div>
</div>

<div class="cal__section__cont">
    <h2 class="time__day">Toi</h2>


    <div class="class__time">
        <p class="class__name__general">5:30 - 7:00</p>
        <p class="AV6A class__name__general">AV6A</p>
    </div>
    <div class="class__time">
    <p CLASS="class__name__general">7:30 - 9:00</p>
    <p class="nothing class__name__general">No Schedule</p>
    </div>
</div>
`  
mondayBtn.addEventListener("click", function(e){

    calenderDiv.innerHTML = Monday
})

tuesBtn.addEventListener("click", function(e){

    calenderDiv.innerHTML = Tuesday
})

wedBtn.addEventListener("click", function(e){

    calenderDiv.innerHTML = wednesday
})

thurBtn.addEventListener("click", function(e){

    calenderDiv.innerHTML = thursday
})
friBtn.addEventListener("click", function(e){

    calenderDiv.innerHTML = friday
})
satBtn.addEventListener("click", function(e){

    calenderDiv.innerHTML = saturday
})
sunBtn.addEventListener("click", function(e){

    calenderDiv.innerHTML = sunday
})