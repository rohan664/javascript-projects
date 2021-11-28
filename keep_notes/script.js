const addbutton = document.querySelector("#add");


const updatedata = () =>{
  const textareadata =  document.querySelectorAll('textarea');
  const notes = [];
  console.log(textareadata);
  textareadata.forEach((note) =>{
    return notes.push(note.value);

  })
  console.log(notes);

   localStorage.setItem('notes',JSON.stringify(notes));
}

const addnewnotes = (text = '') =>{

    const note = document.createElement('div');
    note.classList.add('note');

    const htmldata = `<div class="operation">
    <span class='edit'  ><i class="fas fa-edit fa-1x "></i></span>
    <span class='delete'><i class="fas fa-trash-alt fa-1x"></i></span>
   
    </div>
    <div class="main ${text ? "" : "hidden"}"></div>
    <textarea class="${text ? "hidden" : ""}"></textarea> `;

  note.insertAdjacentHTML('afterbegin', htmldata);
  
  const editbutton = note.querySelector('.edit');
  const delbutton = note.querySelector('.delete');
  const maindiv = note.querySelector('.main');
  const textarea = note.querySelector('textarea');

//   deleting node
  delbutton.addEventListener('click',()=>{
      note.remove();
      updatedata();
  })

//   toggle using edit button

textarea.value = text;
maindiv.innerHTML = text;

editbutton.addEventListener('click',()=>{
    maindiv.classList.toggle('hidden');
    textarea.classList.toggle('hidden');
})

textarea.addEventListener('change',(event)=>{ 
    const value = event.target.value;
    maindiv.innerHTML = value;

    updatedata();
})


  document.body.appendChild(note);

}

// getting data back from localStorage
const notes = JSON.parse(localStorage.getItem('notes'));

if(notes){notes.forEach((note) => addnewnotes(note))}

addbutton.addEventListener('click',() =>{
    addnewnotes()
})