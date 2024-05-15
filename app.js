function deleteByEmail() {
let email = document.querySelector(`input[name="email"]`).value;
let lines = [...document.querySelectorAll(`tbody tr`)];
let deleted = false;
for (const row of lines) {
    if(row.children[1].textContent===email){
        row.parentNode.removeChild(row);
        deleted = true;
        document.getElementById(`result`).textContent = `Deleted`;
        document.querySelector(`input[name="email"]`).value=""
    }
}
if(deleted != true){
    document.getElementById(`result`).textContent = `Not Found`;
    document.querySelector(`input[name="email"]`).value=``
}

//console.log(email);
}


    //     let email = document.querySelector(`input[name="email"]`).value;

    
//     let rows = Array.from(document.querySelectorAll(`tbody tr`));
    
//     let deleted = false;
//     for (let row of rows) {
    
//         if (row.children[1].textContent == email) {
    
//             row.parentNode.removeChild(row)
//             deleted = true;
//             document.getElementById(`result`).textContent = `Deleted.`;

//         }
//     }
//     if (deleted != true) {
//         document.getElementById(`result`).textContent = `Not Found.`
//     }
//  }