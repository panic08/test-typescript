import axios from "axios";
const URL = "http://localhost/api/v1/sendPost";
const getPosts = () => {
    axios.post('http://localhost/graphql/', {
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
            andrey.forEach(function (data: any){
                    console.log(data)
                }

            )


        })
        .catch((error) => {
            console.error(error)
        })
};
const sendPost = (message: string) => {

    axios.post(URL, {
        message: message
    })
        .catch(function (error) {
            console.log(error);
        });
}

const API = {
    getPosts,
    sendPost,
};
export default API;