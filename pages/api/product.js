import axios from "axios"
export default async function handler(req, res) {
    try{
        const reponse = await axios.get('https://fakestoreapi.com/products')
        res.status(200).json(reponse.data)
    }catch(error){
        res.status(500).json(error)
    }
}