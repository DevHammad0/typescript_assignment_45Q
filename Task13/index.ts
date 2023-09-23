//13
/*Your Own Array: Think of your favorite mode of transportation, 
such as a motorcycle or a car, and make a list that stores 
several examples. Use your list to print a series of 
statements about these items, such as “I would like
 to own a Honda motorcycle.”*/

 let favTransport:string[] = ["Lamborghini Urus","Harley Davidson","Mercedes Benz"];
 let statements:string[] = ["I would like to test drive","I really like the ride of","I would love to buy"];

 for(let i=0;i<favTransport.length;i++){
    console.log(statements[i]+" "+favTransport[i]);
 }