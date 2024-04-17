
// let x=1;
// setInterval(()=> console.log(++x),1000);

const zeroNumber = (x:number)=>{
    return new Promise( (resolve,reject)=>{
        const cid = setInterval(()=>{
            console.log(++x)
            if(x==1)
                clearInterval(cid);
        },1000);

        if (x==0)
        resolve(0);
        else
        reject(new Error("Slayyy")); 
    } );
}

// zeroNumber(0)
//     .then((x)=>{console.log(x);})
//     .catch((error)=>console.error(error));

// const response = zeroNumber(0);
// console.log("Response: ", response);


//==== aync/await example ====
(async ()=>{
    const response = await zeroNumber(0);
    console.log("Response: ", response);
})();