const userArr = []; 

const getUser = async () => {
    const user = await fetch('https://randomuser.me/api/');
    const data = await user.json(); 
    
    return data.results;
}

export async function run () {
    for(let i= 0; i< 10; i++){
        const userData = await getUser(); 
        userArr.push(userData); 
    }
    
    return userArr;
}
await run(); 
export default userArr; 
