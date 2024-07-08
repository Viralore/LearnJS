async function fun()
{
    await fetch("http://www.google.com/");
    console.log("one");
    console.log("one");
    await fetch("http://www.google.com/");
    console.log("one");
}
async function fun2()
{
    console.log("two");
    await fetch("http://www.google.com/");
    console.log("two");
    console.log("two");
    await fetch("http://www.google.com/");
    console.log("two");
}
async function fun3()
{
    console.log("three");
    console.log("three");
    console.log("three");
    await fetch("http://www.google.com/");
    console.log("three");
}

function test()
{
    fun();
    fun2();
    fun3();
}
//test();

async function getFromGoogle()
{
    console.log("waiting for data from google");
    var data = await fetch("http://www.google.com/");
    console.log(data);

    var prm = fetch("http://");
    prm.then(function resolve(res)
    {
        console.log(res);},
        function rejected(err)
        {
            console.log("error", err);
    })
    console.log("after promise");
}
// getFromGoogle();

async function sum(a,b)
{
    return a+b;
}

//behind the scene converting a function to async function
function sum1(a,b)
{
    var prm = new Promise(function(resolve,reject)
    {
        try
        {
            //do the processing that takes time 
            //when processing is done, call resolve(result)
            // let c = a+b;
            // resolve(c);

            setTimeout(()=> {
                let c = a+b;
                resolve(c);
            },3000);
        }
        catch(err)
        {
            //call reject(err)
            reject(err);
        }
    });
    return prm;
}

async function testSum()
{
    let x = sum(3,4);
    console.log(x);
    let prm = sum(3,4);
    prm.then(function (result)
    {
        console.log(result);
    });

    let result = await sum(3,4);
    console.log(result);

    let timer = setInterval(()=>{
        console.log(prm.state);
    },500);
    setTimeout(()=> {clearInterval(timer)},5000);
    var prm1 = sum1(3,4);
    prm1.then(obj => console.log(obj));
}
testSum();