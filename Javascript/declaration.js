a = 10 ; 
function addition(){
    for( i = 0;i < 10 ; i++)
    {
         x = i + 10 // let = local only within local { } var = global scope
    }
     
}
addition(a);
document.write(x);
