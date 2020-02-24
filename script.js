let call = document.querySelector('#call[type=checkbox]');
let agreement =document.querySelector('#agreement[type=checkbox]');
let mark = document.querySelector('#mark[type=checkbox]');
let agree = document.querySelector('#agree[type=checkbox]');
let old = document.querySelector('#old[type=checkbox]');
let correct = document.querySelector('#correct[type=checkbox]');
let submit = document.querySelector('#submit')
let checks = document.querySelectorAll("input[type=checkbox]");

//запрос информации в LocalStorage
if (localStorage.getItem('set') !== null){
for (let i = 0; i < 6; i++){
	let c = localStorage.getItem(i) === 'true';
	 checks[i].checked = c;
	 checks[i].disabled = true;//отключает возможность выбора checkbox
		
	}
	save.style.display = 'none';//уберает кнопку save
}


//функции нажимающая на кнопку
save.onclick = function(){
	massage()
	save()
	};

// //функция проверки, выбрвна хотя бы одна категория?
massage = function(){
  if (call.checked == false && agreement.checked == false && mark.checked == false && agree.checked == false && old.checked == false && correct.checked == false){
  alert('Пожалуйста, выберите категорию');
  
     };
};

// сохраняем значения checkbox in LocalStorage
save = function (){
	localStorage.setItem('set', '1');
	checks.forEach( function(item, index) {
		localStorage.setItem(index.toString(), item.checked.toString())
	});

 };
