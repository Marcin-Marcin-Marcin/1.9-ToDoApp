function newItem() {

// 1.Add new item to the list

let li = $('<li></li>');
let inputValue = $('#input').val();
li.append(inputValue);

if (inputValue === '') {
  alert("You have to write something!");
  } else {
    $('#list').append(li);
    }

// 2.Cross out an item

function crossOut() {
    li.toggleClass("strike");;
    }

    li.on("dblclick", function crossOut() {
        li.toggleClass("strike");
    });

// 3.Add delete button

let crossOutButton = $('<crossOutButton></crossOutButton>');
crossOutButton.append(document.createTextNode('X'));
li.append(crossOutButton);

crossOutButton.on("click", deleteListItem);
function deleteListItem(){
    li.addClass("delete")
}

// 4.Reorder the items

$('#list').sortable();
}