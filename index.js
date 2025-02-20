class Car {
    constructor(year) {
        this.year = year;
    }
    calcAge(){
        const currentYear = new Date().getFullYear();
        return currentYear - this.year;
    }
}
document.getElementById("btn").onclick = function(){
    const inputYear = document.getElementById("year").value;
    const myCar = new Car(inputYear);
    const age = myCar.calcAge();
    document.getElementById("result").textContent = `La tua auto ha ${age} anni`;   
}