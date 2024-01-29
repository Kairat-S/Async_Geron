type TUser = {
    name: string,
    age: number,
    isActive: boolean,
    sallary: number 
}

const getUser = async() => {
    return fetch("https://run.mocky.io/v3/a27db518-069d-45a3-8fac-938b5c2228d1")
}

const checkResult =async () => {
    const response: TUser[] = await( await getUser()).json();
    response.forEach(element => {
        element.sallary = Number(element.sallary)
        if (element.isActive) {   
            element.sallary +=  (element.sallary) * 0.1;
        }
    });
    response.sort((a,b) => b.sallary - a.sallary);
    return response;
}

checkResult().then((response) => {
    console.log(response);
})