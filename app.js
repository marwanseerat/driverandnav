
// task1
console.log("task1:");
let x=[1,2,3,4,5,6]
function reverse(x){
    for(let i= x.length-1; i>=0; i--)
        console.log(x[i]);
    }
    reverse(x)
    
    console.log(reverse(x));
  
    document.getElementById("task1").innerHTML=` the right answer is in the console  ${reverse(x)};`

/////////////////////////////////////////////////////////////////
// task2



    let y= 'the car drove fast';


    function string(y) {
     let  z=y.split(" ");
     for(let i=0;i<z.length ;i++){
         z[i]=z[i][0].toUpperCase()+z[i].slice(1)
         console.log(z[i]);
     }
    }
    console.log("task2:");
    string(y)
    
    

    document.getElementById("task2").innerHTML= ` the right answer is in the console  ${string(y)};`
    /////////////////////////////////////////////////////////////////


// task3

function palindrome (str){
    let d = str.length-1;
    for(let i =0 ; i<d/2 ;i++){
        let z=str[i]
        let a=str[d-i]
        if(z!=a){
            return false
        }
        return true
    }
    
   
} 
console.log("task3:");
function palindrome_( str )
  {
    let ans =  palindrome(str);
    if( ans == true )
    {
      console.log(" true" );
    }
    else
    {
      console.log("false");
    }
  }
  // test variable
  let m = 'ABCDCBA';
  palindrome_(m);

  document.getElementById("task3").innerHTML=`True. the right answer is in the console `



//////////////////////////////////////////////////////

console.log("task4");

function decendingarray(arr){
    for (let i=0 ; i<arr.length;i++)
    for (let a=i+1; a<arr.length ; a++){
        let b=0
        if(arr[i]<arr[a]){
          b=arr[i] ;
          arr[i]=arr[a]
          arr[a]=b

        }
    }

    return arr
}

console.log( decendingarray([2,9,0,4]));


document.write( decendingarray( [2,9,0,4]));

