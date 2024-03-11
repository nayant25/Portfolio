
specs = {point: 0.5,brand:"lenskart",price: 4675}
specs["color"] = "Black"
//checking type of specs
document.write(typeof(specs)+"<br>")
//accessing attributes
document.write(specs.price+"<br>") 
document.write(specs.color+"<br>") 

function Book(id,name,price)
{
    this.id = id
    this.name = name
    this.price = price
}
b1= new Book(10,"Nayan",3933)
document.write(b1)


class Car
{               
    constructor(brand,color,seating)
    {
        this.brand = brand
        this.color = color
        this.seating = seating
    }
}
c1 = Car("Tata","White",4)
