"use client";

import { useEffect, useState } from "react";
import {
  ShoppingCart,
  ChevronDown,
  ChevronUp,
  Plus,
  Minus,
  Trash2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import axios from "axios";
import { toast } from "@/hooks/use-toast";

interface CartItem {
  id: string;
  quantity: number;
  name?: string;
  sku?: string;
}

export default function Cart() {
  const [isOpen, setIsOpen] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    company: "",
  });
  const [savedFormData, setSavedFormData] = useState({
    name: "",
    email: "",
    number: "",
    company: "",
  });

  const [loading, setLoading] = useState({
    type: "",
    status: false,
  });

  useEffect(() => {
    const fetchCartDetails = async (ids: string[]) => {
      try {
        const fetchedItems = await Promise.all(
          ids.map(async (id) => {
            const response = await axios.get(
              `${process.env.NEXT_PUBLIC_BACKEND_URL}/getCart/${id}`
            );
            const item = response.data.item[0];
            return {
              id: item.order_id,
              quantity: item.quantity,
              name: item.name,
              sku: item.sku,
            };
          })
        );
        setCartItems(fetchedItems);
      } catch (error) {
        console.error("Error fetching cart details:", error);
        toast({
          description: "⚠️❌ Failed to fetch cart details. Please try again.",
        });
      }
    };

    const key = "3mItems";
    const storedItems = localStorage.getItem(key);
    const itemsArray = storedItems ? JSON.parse(storedItems) : [];
    fetchCartDetails(itemsArray);

    const storedFormData = localStorage.getItem("contactInfo");
    if (storedFormData) {
      const parsedFormData = JSON.parse(storedFormData);
      setSavedFormData(parsedFormData);
      setFormData(parsedFormData);
    } else {
      setIsFormOpen(true);
    }
  }, []);

  const handleGetQuote = async () => {
    setLoading({ type: "quote", status: true });
    const { email, company, number } = formData;
    const orderIds = JSON.parse(localStorage.getItem("3mItems") || "[]");

    // ✅ Validation check
    if (!email || !company || !number) {
      toast({
        description:
          " ⚠️ Please fill in all the details (email, company, and number).",
      });
      return;
    }

    if (!orderIds || orderIds.length === 0) {
      toast({
        description:
          " ⚠️ Please add at least one item to your cart before getting a quote.",
      });
      return;
    }

    try {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/create`,
        { email: email, orderIds }
      );
      console.log("Response:", res.data);
      const res1 = await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/enquiryMail`,
        { email: email, cart_id: res.data.cart_id }
      );
      localStorage.removeItem("3mItems");
      toast({ description: "✅ Quote request sent successfully!" });
      setIsOpen(false);
    } catch (error) {
      console.error("Error occurred:", error);
      toast({ description: "⚠️❌ Failed to get a quote. Please try again." });
    } finally {
      setLoading({ type: "", status: false });
      
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = async () => {
    const { name, email, number, company } = formData;

    // ✅ Validation check
    if (!email || !company || !number) {
      toast({
        description:
          "⚠️ Please fill in all the details (email, company, and number).",
      });
      return;
    }

    try {
      setLoading({ type: "account", status: true });
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/user`,
        {
          name: formData.name,
          email: formData.email,
          phone: formData.number,
          company_name: formData.company
        }
      );

      const updatedFormData = {
        ...formData,
        userid: res.data.userid, // Assuming userid is in res.data
      };

      setFormData(updatedFormData);
      setSavedFormData(updatedFormData);
      localStorage.setItem("contactInfo", JSON.stringify(updatedFormData));
      toast({ description: "✅ User saved successfully" });
      setIsFormOpen(false);
    } catch (error) {
      console.error(error);
      toast({ description: "⚠️❌ Failed to save user data" });
    } finally {
      setLoading({ type: "", status: false });
    }
  };

  const handleCancel = () => {
    setFormData(savedFormData);
    setIsFormOpen(false);
  };

  const updateQuantity = async (id: string, newQuantity: number) => {
    if (newQuantity < 0) return;

    try {
      await axios.put(`${process.env.NEXT_PUBLIC_BACKEND_URL}/cartUpdate`, {
        quantity: newQuantity.toString(),
        orderId: id,
      });

      setCartItems((prevItems) =>
        prevItems.map((item) =>
          item.id === id ? { ...item, quantity: newQuantity } : item
        )
      );
      toast({ description: "✅ Item updated successfully." });
    } catch (error) {
      console.error("Error updating quantity:", error);
      toast({ description: " ⚠️❌ Failed to update quantity. Please try again." });
    }
  };

  const deleteItem = async (id: string) => {
    try {
      await axios.delete(`${process.env.NEXT_PUBLIC_BACKEND_URL}/itemDelete`, {
        data: { orderId: id },
      });

      setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));

      const storedItems = JSON.parse(localStorage.getItem("3mItems") || "[]");
      const updatedItems = storedItems.filter(
        (itemId: string) => itemId !== id
      );
      localStorage.setItem("3mItems", JSON.stringify(updatedItems));
      setCartItems([]);
      toast({ description: "✅ Item removed from cart successfully." });
    } catch (error) {
      console.error("Error deleting item:", error);
      toast({ description: "⚠️❌ Failed to remove item. Please try again." });
    }
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="relative flex items-center text-black min-w-[4rem] pr-[0.25rem]"
        >
          <ShoppingCart className="h-4 w-4 text-black " /> Cart
          <Badge
            variant="destructive"
            className="absolute -top-2 -right-3 px-[0.35rem] py-[0.1rem] text-[0.8rem]"
          >
            {cartItems.length}
          </Badge>
          <span className="sr-only">Open cart</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="min-w-[300px] sm:min-w-[540px]">
        <div className="flex flex-col h-full">
          <div className="flex-grow overflow-auto">
            <h2 className="py-[1rem] font-semibold text-[1.2rem]">Cart</h2>
            <div className="mb-4 bg-muted rounded-md">
              <Button
                variant="ghost"
                className="w-full justify-between py-[2rem]"
                onClick={() => setIsFormOpen(!isFormOpen)}
              >
                {savedFormData.name ? (
                  <div className="text-left">
                    <div>{savedFormData.name}</div>
                    <div className="text-sm text-muted-foreground">
                      {savedFormData.email} • {savedFormData.number}
                    </div>
                  </div>
                ) : (
                  "Contact Information"
                )}
                {isFormOpen ? (
                  <ChevronUp className="h-4 w-4" />
                ) : (
                  <ChevronDown className="h-4 w-4" />
                )}
              </Button>
              {isFormOpen && (
                <div className="space-y-4 mt-4 px-2">
                  <div>
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Enter your name"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Enter your work email"
                    />
                  </div>
                  <div>
                    <Label htmlFor="number">Number</Label>
                    <Input
                      id="number"
                      name="number"
                      type="tel"
                      value={formData.number}
                      onChange={handleInputChange}
                      placeholder="Enter your phone number"
                    />
                  </div>
                  <div>
                    <Label htmlFor="company">Company Name</Label>
                    <Input
                      id="company"
                      name="company"
                      type="text"
                      value={formData.company}
                      onChange={handleInputChange}
                      placeholder="Enter your Company Name"
                    />
                  </div>
                  <div className="flex justify-end space-x-2 pb-[0.5rem]">
                    <Button variant="outline" onClick={handleCancel}>
                      Cancel
                    </Button>
                    <Button onClick={handleSave}>
                      {loading.type === "account" && loading.status
                        ? "Loading..."
                        : "Save"}
                    </Button>
                  </div>
                </div>
              )}
            </div>
            {cartItems.length > 0 ? (
              <ul className="space-y-2">
                {cartItems.map((item, index) => (
                  <li
                    key={index}
                    className="p-2 rounded-md flex justify-between items-center"
                  >
                    <div className="w-[50%]">
                      <p className="text-sm">{item.name || "Unnamed Item"}</p>
                      <p className="text-xs text-muted-foreground">
                        {item.sku}
                      </p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() =>
                          updateQuantity(item.id, item.quantity - 1)
                        }
                      >
                        <Minus className="h-4 w-4" />
                      </Button>
                      <div className=" text-center">{item.quantity}</div>
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() =>
                          updateQuantity(item.id, item.quantity + 1)
                        }
                      >
                        <Plus className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="destructive"
                        size="icon"
                        onClick={() => deleteItem(item.id)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-muted-foreground text-center">
                No items in cart
              </p>
            )}
          </div>
          {cartItems.length > 0 && (
            <Button
              onClick={handleGetQuote}
              className="mt-4 w-full"
              disabled={loading.status}
            >
              {loading.type === "quote" && loading.status
                ? "Loading..."
                : "Get a Quote"}
            </Button>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
}
