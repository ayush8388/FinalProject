export default async function handler(req, res) {
  const { id } = req.query;

  if (!id) {
    return res.status(400).json({ message: "No id provided" });
  }

  try {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`);

    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    console.error("Error fetching product:", error);
    res.status(500).json({ message: "Failed to fetch product" });
  }
}
