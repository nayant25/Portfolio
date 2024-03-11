a = function (num){
    return num*num;
}

x = a(12)
document.write("Square of 12 is : "+x+"<br>")



//arrow function 
add1 = (a,b) =>
{
    return a+b
}
result= add1(10,20)
document.write(result+"<br>")


//call back function  -> imp property of javascript
// function display(f)
// {
//     x = f(40,50)
//     document.write(x)
// }
// display(add1)

document.write("<br>")

function display(f){
    f(5)
}
display((x)=>
    {
        document.write("Cube is : "+(x*x*x))
    }
)
