


document.getElementById("submitbtn").onclick=function(){
    if(document.getElementById("addition").checked){
        let num1=document.getElementById("firstno").value
        let num2=document.getElementById("secondno").value
        num1=Number(num1)
        num2=Number(num2)
        let sum=num1+num2

        document.getElementById("result").innerHTML=sum+" is the sum"
    }
    else if(document.getElementById("Subtraction").checked){
        let num1=document.getElementById("firstno").value
        let num2=document.getElementById("secondno").value
        num1=Number(num1)
        num2=Number(num2)
        let sub=num1-num2

        document.getElementById("result").innerHTML=sub+" is the answer"
    }
    else if(document.getElementById("Multiply").checked){
        let num1=document.getElementById("firstno").value
        let num2=document.getElementById("secondno").value
        num1=Number(num1)
        num2=Number(num2)
        let sub=num1*num2

        document.getElementById("result").innerHTML=sub+" is the answer"

    }
    else if(document.getElementById("Divide").checked){
        let num1=document.getElementById("firstno").value
        let num2=document.getElementById("secondno").value
        num1=Number(num1)
        num2=Number(num2)
        let sub=num1/num2

        document.getElementById("result").innerHTML=sub+" is the answer"
    }
}