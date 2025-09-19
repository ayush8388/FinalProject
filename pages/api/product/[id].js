import axios from "axios"
export default async function handler(req, res) {
    const { id } = req.query
    if(!id) return res.status(400).json({ message: 'No id provided' })
    try{
        const response = await axios.get(`https://fakestoreapi.com/products/${id}`)
        res.status(200).json(response.data)
    }catch(error){
        console.log(error)
        res.status(500).json(error.message)
    }
}