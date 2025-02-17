// async function logout(){..}



// first create and store login session on frontend.. then clear data
const logout=async ()=>{
    try{
        response=fetch("http://localhost:8080/logout",{
            method:"POST",
            credentials:"include"

        });
        if(response.ok){

        }
    }
}