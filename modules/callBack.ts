

export const callbackFn = (handler: (str: string)=>void)=>{
    const secret = "I love you";
    handler(secret);
}

export default callbackFn;