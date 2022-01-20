

function addNewElement (){
let item = document.querySelector('#inputBox').value;
let text = document.createTextNode(item);
let newItem = document.createElement('li');
 newItem.appendChild(text);
if (item === ''){
        alert ("Please add an item")
    }else{
        document.querySelector('#todoList').appendChild(newItem)
    }
}

var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'li') {
    ev.target.classList.toggle('checked');
  }
}, false);