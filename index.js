
let calenderDiv = document.getElementById("cal__cont")
let mondayBtn = document.getElementById("monday")
let tuesBtn = document.getElementById("tuesday")
let wedBtn = document.getElementById("wednesday")
let thurBtn = document.getElementById("thursday")
let friBtn = document.getElementById("friday")
let satBtn = document.getElementById("saturday")
let sunBtn = document.getElementById("sunday")
let dayDiv = document.getElementById("day__cont")
let resetDiv = document.getElementById("reset__cont")
let resetBtn = document.getElementById("reset")
let title = document.getElementById("title")

let days = ["Monday", "Tuesday", "Wednesday","Thursday","Friday","Saturday","Sunday"]



 const Monday = ` 

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
const Tuesday =  ` 

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
const wednesday = ` 

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
const thursday = ` 

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
const friday =   ` 

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
const saturday =  ` 

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

const sunday =    `

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
    title.textContent = days[0]
    dayDiv.classList.add("none")
    resetDiv.classList.remove("none")
})

tuesBtn.addEventListener("click", function(e){
  
    calenderDiv.innerHTML = Tuesday
    title.textContent = days[1]
    dayDiv.classList.add("none")
    resetDiv.classList.remove("none")
})

wedBtn.addEventListener("click", function(e){

    calenderDiv.innerHTML = wednesday
    title.textContent = days[2]
    dayDiv.classList.add("none")
    resetDiv.classList.remove("none")
})

thurBtn.addEventListener("click", function(e){

    calenderDiv.innerHTML = thursday
    title.textContent = days[3]
    dayDiv.classList.add("none")
    resetDiv.classList.remove("none")
})
friBtn.addEventListener("click", function(e){

    calenderDiv.innerHTML = friday
    title.textContent = days[4]
    dayDiv.classList.add("none")
    resetDiv.classList.remove("none")
})
satBtn.addEventListener("click", function(e){

    calenderDiv.innerHTML = saturday
    title.textContent = days[5]
    dayDiv.classList.add("none")
    resetDiv.classList.remove("none")
})
sunBtn.addEventListener("click", function(e){

    calenderDiv.innerHTML = sunday
    title.textContent = days[6]
    dayDiv.classList.add("none")
    resetDiv.classList.remove("none")
})

resetBtn.addEventListener("click", function(e) {

    calenderDiv.innerHTML = ""
    title.textContent = "Linh's Class Schedule"
    dayDiv.classList.remove("none")
    resetDiv.classList.add("none")
})