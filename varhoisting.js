
function testHoisting()
{
    name = "Something"
    console.log(name);
    var name;

    setTimeout(() => {console.log("Timeout");},2000);
    console.log("adter timeout");
    setInterval(()=> {console.log("Interval");},3000);
    console.log("after all operations");
}

testHoisting();