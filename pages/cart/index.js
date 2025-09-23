import NavBar from "@/components/NavBar";
import { useCart } from "@/context/cartContext";
function CartPage() {
  const { cartItems, removeFromCart, updateQuantity, total } = useCart();

  return (
    <div className="min-h-screen bg-white text-black">
      <NavBar />
      <div className="max-w-6xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6 text-blue-900">Your Cart</h1>

        {cartItems.length === 0 ? (
          <p className="text-gray-500">Your cart is empty</p>
        ) : (
          <div className="grid md:grid-cols-3 gap-6">
            <div className="md:col-span-2 space-y-4">
              {cartItems.map(item => (
                <div
                  key={item.id}
                  className="flex items-center justify-between border p-4 rounded-lg shadow"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-20 h-20 object-contain"
                  />
                  <div className="flex-1 px-4">
                    <h2 className="font-semibold">{item.title}</h2>
                    <p className="text-sm text-gray-500">${item.price}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <input
                      type="number"
                      min="1"
                      value={item.quantity}
                      onChange={e =>
                        updateQuantity(item.id, parseInt(e.target.value))
                      }
                      className="w-16 border rounded px-2 py-1"
                    />
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-500 hover:underline"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="border p-6 rounded-lg shadow">
              <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
              <p className="flex justify-between">
                <span>Total:</span>
                <span className="font-bold">${total.toFixed(2)}</span>
              </p>
              <button className="mt-4 w-full bg-blue-900 text-white py-2 rounded-lg hover:bg-blue-700">
                Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default CartPage;
