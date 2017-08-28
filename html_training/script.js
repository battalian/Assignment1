var x = document.getElementById('myList')

var go=''
for(var i=1; i<=100; i++)
{
	if(i%3==0 && i%5==0)
		go += ' <li >fizzbuzz </li>'
	else if(i%3==0)
		go +='<li> fizz </li>'
	else if(i%5==0)
		go +='<li> buzz </li>'
	else
	go += '<li>' + i + '</li>'
		 
	
}
x.innerHTML = go;