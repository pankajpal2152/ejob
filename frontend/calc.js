
function handleSubmit(event) {
    console.log(event);
    //How to prevent Synchronous Submission of the Page.
    event.preventDefault();
    var x = Number(document.getElementById("t1")?.value);
    var y = Number(document.getElementById("t2")?.value);
    console.log(x, typeof (x));
    console.log(y, typeof (y));
    var z = x + y;
    var z2 = x * y;
    var z3 = z / 2;
    console.log("Sum=" + z);
    console.log("Mult=" + z2);
    console.log("Average =" + z3);
    //Substract , Division, Integer division,average ,max,min
    document.getElementById("d1").innerHTML = `
            <p>Sum=${z.toFixed(2)}</p>
            <p>Multiply=${z2.toFixed(2)}</p>
            <p>Average =${z3.toFixed(2)}</p>
            `;
    //we will add alert alert-success bootstrap-4 class on div#d1 element.
    //document.querySelector("div#d1").className="alert alert-success";
    document.getElementById("d1").className = "alert alert-info";

}
function resetField() {
    //clearing the text
    document.getElementById("d1").innerHTML = '';
    //removing the exisiting class.
    document.getElementById("d1").className = undefined;
    //get focus back on to the t1 id textfield.
    document.getElementById("t1").focus();
    console.log("Reset");
}
