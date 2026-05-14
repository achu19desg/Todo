const input = document.querySelector("#input")
const btn = document.querySelector("#btn")
const ul = document.querySelector("#ul")

btn.addEventListener("click",(e)=>{
    e.preventDefault()
    let task = input.value
    if(task === ""){
        alert("pls enter the task")
        return;
    }

   
//   create a list item

const li = document.createElement("li")
li.classList.add("bg-stone-700","py-2","px-6","text-white","rounded-md","mt-4","flex","justify-between")
 // todo create a span
    const span = document.createElement("span")
    span.textContent = task
    li.appendChild(span)

// append li to ul
ul.appendChild(li)

// create deleteButton
const deleteButton = document.createElement("button")
deleteButton.textContent = "Delete"
deleteButton.classList.add("bg-red-500","px-2","rounded-md")

// append deleteButton to li
li.appendChild(deleteButton);

// clear input field
input.value=""

// delete functionality
deleteButton.addEventListener("click",()=>{
    li.remove()
})

// todo create edit button

const editButton = document.createElement("button")
editButton.textContent ="Edit"
editButton.classList.add("bg-yellow-500","px-2","rounded-md")

// append editButton to li
li.appendChild(editButton)


// todo edit fuctionality

editButton.addEventListener("click",()=>{
    const newTask = prompt("Edit task:",span.textContent)
    if(newTask !== null){
        span.textContent = newTask
    }
   
})

// create div 

const div = document.createElement("div")
div.classList.add("flex","gap-3")

li.appendChild(div)
 
div.appendChild(editButton)
div.appendChild(deleteButton)

});

