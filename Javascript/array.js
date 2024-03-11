arr = [12,14,24,54,45]
arr[5] = 90
arr[6] = 80
document.write(arr+"<br>")
document.write("Before delete: "+arr+"<br>")
arr.pop()
document.write("After delete: "+arr+"<br>")
arr.sort()
document.write("After Sort: "+arr+"<br>")
arr1 = [10,20,30,"Javascript","Pune"]
arr2 = [37,58,28,46,]

sum = 0
for(i = 0 ; i < arr.length;i++ ){
    sum = sum+arr[i]
}

document.write("Length of arr: "+arr.length+"<br>")
document.write("Sum: "+sum+"<br>");