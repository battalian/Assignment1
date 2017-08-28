/*function student_creator(f, l)
{
	var x = {fn:f, ln:l};
	return x;
} */

var go1 =  student_creator("harish", "chava");
cosole.log(go1);

function student_creator(f, l)
{
	this.fn = f;
	this.ln = l;
	return this;
}

var go1 = student_creator.call({}, "harish" , "chava" );