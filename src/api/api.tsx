import axios from "axios";
const URL = "http://localhost:8080/graphql/";



const getPosts = () => {
    axios.post('http://localhost:8080/graphql/', {
        query: `
  {
    getPosts(option: true) {
      id
      message
    }
  }  
  `
    })
        .then((res) => {

            const andrey = res.data.data.getPosts
            andrey.forEach(function (data: any, index: number){
                    console.log(data)
                }

            )


        })
        .catch((error) => {
            console.error(error)
        })
};
const getLox = () => {

    axios.get('http://localhost:8080/api/v1/')
        .then(function (response) {
            // handle success
            console.log(response);
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        .finally(function () {
            // always executed
        });
}



const API = {
    getPosts,
    getLox,
};
export default API;