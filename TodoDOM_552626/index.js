let myform = document.querySelector('form');
let inp1 = document.getElementById('task');
let inp2 = document.getElementById('priority');
let tbody = document.querySelector('tbody');
let alldata = [];

myform.addEventListener('submit', function(e){
    e.preventDefault();

    let data = {};
    data.input1 = inp1.value;
    data.input2 = inp2.value;
    alldata.push(data);
    // console.log(alldata)

    tbody.innerHTML = null;
    alldata.map((ele)=>{
        let row = document.createElement('tr');
        let td1 = document.createElement('td');
        let td2 = document.createElement('td');

        // console.log(ele.input1);
        td1.innerText = ele.input1;
        td2.innerText = ele.input2;
        row.append(td1,td2);
        // console.log(row);
        tbody.append(row);
        // console.log(tbody)
    })
})