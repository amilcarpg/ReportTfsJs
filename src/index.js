let XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;



const fetchData = (url_api) => {
    return new Promise((resolve, reject) => {
        const xhttp = new XMLHttpRequest();
        xhttp.open('GET',url_api,true);
        xhttp.setRequestHeader('Authorization', 'lvsa2f7l2d3vjetdaesnzl55ftcdbqe7d3dhrc6sxswduugvpe6a' )
        xhttp.onreadystatechange=(() => {
            if (xhttp.readyState===4){
                (xhttp.status===200)
                    ?resolve(JSON.parse(xhttp.responseText))
                    :reject(new Error('Error',url_api))
        }
        });
        xhttp.send();
        });
}

//const fetchData = require('utils/fetchData');

const API ='http://aasrvdmz043/DefaultCollection/Passport%20V.4/_apis/wit/wiql/be485c79-9f1e-41ae-9192-85dce7ec1e6f/';

function AlertVariable(){
    var message="Alert Message!";
 alert(message); 
 
}


const ListarQuery = async(url_api)=>{
    try {
        const data = await fetchData(url_api);
        console.log(data);

    }
    catch(error){
        console.error(error);
    }

}

ListarQuery(API);