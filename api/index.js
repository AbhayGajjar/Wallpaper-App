import axios from "axios";

const API_KEY = '43854077-191d7968b09455cf48aa9fb53';
const apiurl = `https://pixabay.com/api/?key=${API_KEY}`;

const formatUrl = (params) => {
    let url = apiurl + "&per_page=25&safesearch=true&editors_choice=true";
    if (!params) return url;
    let paramkeys = Object.keys(params);
    paramkeys.map(key => {
        let value = key == 'q' ? encodeURIComponent(params[key]) : params[key];
        url += `&${key}=${value}`;
    })
    console.log('final url ', url);
    return url;

}


export const apicall = async (params) => {


    try {

        const response = await axios.get(formatUrl(params));
        const { data } = response;
        return { success: true, data }


    } catch (error) {
        console.log(error);
        return { success: false, msg: error.message }

    }
}