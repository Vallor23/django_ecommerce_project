import { ShoppingCart, User, Search, Menu, X } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useState } from "react";


import {Link} from "react-router-dom"

export default function Home() {
    const [isOpen, setIsOpen] = useState(false)

    return(
        <div className="min-h-screen bg-white flex flex-col sticky top-0 z-50 text-gray-900">
            <header className="w-full">
                {/* Top bar */}
                <div className="  bg-gray-900">
                    <div className="max-w-7xl mx-auto flex items-center justify-between text-gray-300 h-6 md:h-8 text-sm px-4">
                        <div className="">CAD</div>
                        <div className="space-x-4">
                            <Link to="/login" className="hover:text-white">Sign in</Link>
                            <Link to="/register" className="hover:text-white">Create an account</Link>
                        </div>
                    </div>
                </div>

                {/* navbar */}
                <nav className="w-full bg-white shadow-md border-gray-200">
                    <div className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                        <div className="flex justify-between items-center h-16">
                            {/* Logo */}
                            <div className="flex items-center">
                                <img 
                                    src="https://cdn.dribbble.com/userupload/17039932/file/original-983633d1f6de58f5d871f174ff34f057.jpg?format=webp&resize=640x480&vertical=center"
                                    alt="logo" 
                                    className="h-10 w-10 rounded-full object-cover"
                                />
                                <p className="flex-shrink-none font-bold text-2xl">Shopsy</p>
                            </div>

                            {/* Desktop menu */}
                            <div className="hidden md:flex space-x-6 font-medium">
                                <a href="#" className="hover:text-gray-600">Women</a>
                                <a href="#" className="hover:text-gray-600" >Men</a>
                                <a href="#" className="hover:text-gray-600">New</a>
                                <a href="#" className="hover:text-gray-600">Sale</a>
                            </div>

                            {/* Search + Icons */}
                            <div className="hidden md:flex items-center space-x-4">
                                <div className="relative">
                                    <input type="text" placeholder="search" className="pr-3 pl-8 py-2 border rounded-lg focus:outline-none focus:ring-1 focus:ring-black" />
                                    <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-400"/>
                                </div>
                                <a href="#" className="relative">
                                        <ShoppingCart />
                                        <span className="absolute w-5 h-5 bg-black text-white -top-2 -right-2 rounded-full flex items-center justify-center">2</span>
                                </a>
                                <a href="#" className="hover:text-gray-800"><User/></a>
                            </div>

                            {/* Mobile menu button */}
                            <div className="md:hidden">
                                <button onClick={()=>setIsOpen(!isOpen)}>
                                    {isOpen? <X className="h-6 w-6"/> : <Menu className="h-6 w-6"/>}
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Mobile Menu */}
                    {isOpen && (
                        <div className="md:hidden px-4 pb-4 space-y-2 bg-white border-t">
                            <a href="#" className="block py-2 border-b">Women</a>
                            <a href="#" className="block py-2 border-b" >Men</a>
                            <a href="#" className="block py-2 border-b">New</a>
                            <a href="#" className="block py-2 border-b">Sale</a>
                        </div>
                    )}
                </nav>
            </header>
            
            {/* Hero section */}
            <section
                className="relative text-white bg-cover bg-center h-[80vh] flex items-center justify-center md:justify-start w-full"
                style={{backgroundImage:"url('https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=1600&q=80')"}}
            >
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent"/>
                <div className="mx-auto z-10 px-4 text-center">
                    {/* <p className="uppercase text-sm tracking-wide ">New Arrivals</p> */}
                    <h1 className="text-4xl font-bold md:text-6xl">Discover the New Season</h1>
                    <p className="mt-4 text-lg md:text-xl text-gray-200 mb-6 max-w-2xl mx-auto"> Modern essentials, crafted for timeless style. Shop the latest arrivals and redefine your wardrobe.</p>
                    <button className="mt-6 py-3 px-6 rounded-2xl bg-white text-gray-900 hover:bg-gray-100 font-semibold transition shadow">Shop Now</button>
                </div>
            </section>

            {/* featured section */}
            <section className="py-16 px-6 max-w-6xl mx-auto">
                <h2 className="font-bold text-2xl tracking-tight mb-3">Featured Collections</h2>
                <p className="text-gray-600 mb-10">Curated picks to match your style</p>
                <div className="grid  grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        {
                            title: "Women",
                            img: "https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDJ8fGNsb3RoaW5nfGVufDB8fDB8fHww"
                            // img: "https://plus.unsplash.com/premium_photo-1664392147011-2a720f214e01?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D"
                        },
                        {
                            title: "Men",
                            img: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=800&q=80"
                            
                        },
                        {
                            title: "Accessories",
                            img: "https://images.unsplash.com/photo-1559563458-527698bf5295?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGFjY2Vzc29yaWVzfGVufDB8fDB8fHww"
                            // img: "https://plus.unsplash.com/premium_photo-1679913792906-13ccc5c84d44?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D"
                        },

                    ].map((collection, index) => (
                        <Card
                            key={index}
                            className="relative overflow-hidden rounded-xl p-0 border-0 shadow-md transition-transform duration-300 hover:scale-105 hover:shadow-xl"
                        >
                           <img 
                                src={collection.img} 
                                alt={collection.title}
                                className="h-72 w-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-center justify-center">
                                <span className="text-white font-semibold text-xl">{collection.title}</span>
                            </div>

                        </Card>
                    ))}
                </div>
            </section>

            {/* Best Sellers */}
            <section className="py-16 px-6">
                <h2 className="text-2xl font-bold mb-4">Best Sellers</h2>
                <p className="text-gray-600 mb-10">Our community's favourite picks.</p>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 ">
                    {[
                        {
                            product:"Shoe",
                            img:"https://images.unsplash.com/photo-1560343090-f0409e92791a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D"
                        },
                        {
                            product:"T-shirts",
                            img:"https://images.unsplash.com/photo-1618354691551-44de113f0164?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODJ8fGNsb3RoaW5nfGVufDB8fDB8fHww"
                        },
                        {
                            product:"Sunglasses",
                            img:"https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTB8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D"
                        },
                        {
                            product:"Sneakers",
                            img:"https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D"
                        },
                        
                    ].map((prod, ind) => (
                        <Card key={ind} className="p-0 border-none shadow:md hover:shadow-xl transition">
                            <CardContent className="p-0 ">
                                <img 
                                    src={prod.img} 
                                    alt={prod.product}
                                    className="object-cover w-full h-64"
                                 />
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </section>

            {/* Promo banner */}
            <section className="relative py-20 px-6 bg-gradient-to-r  from-gray-900 via-black to-gray-800 text-center text-white">
                <h2 className="text-4xl font-bold mb-4">Limited Time Offer</h2>
                <p className="text-lg mb-6">Get upto 50% off select styles - don't miss out.</p>
                <button className="px-8 py-4 text-lg rounded-2xl shadow-xl">Shop Sale</button>
            </section>

            {/* Testimonials */}
            <section className="px-6 py-16">
                <h2 className="font-bold text-2xl mb-10">What are people saying?</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {[
                        {
                            name: "Jane Doe",
                            text: "My order arrived super quickly. The product is even better than I hoped it would be. Very happy customer over here!"
                        },
                        {
                            name: "Michael Smith",
                            text: "I had to return a purchase that didn’t fit. The whole process was so simple that I ended up ordering two new items!"
                        },
                        {
                            name: "Emily Johnson",
                            text: "Now that I’m on holiday for the summer, I’ll probably order a few more shirts. It’s just so convenient, and I know the quality will always be there."
                        },

                    ].map((t,i) => (
                        <div key={i} className="bg-gray-50 p-6 rounded-2xl shadow">
                            <p className="text-gray-700">{t.text}</p>
                            <span className="font-semibold">{t.name}</span>
                        </div>
                    ))}
                </div>
            </section>

            {/* Footer */}
            <footer className="py-20 px-6 bg-gray-900 text-gray-300">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    <div className="">
                        <h3 className="font-semibold mb-4">Shop</h3>
                        <ul className="text-sm space-y-2">
                            <li><a href="#" className="hover:underline">Women</a></li>
                            <li><a href="#" className="hover:underline">Men</a></li>
                            <li><a href="#" className="hover:underline">Accessories</a></li>
                            <li><a href="#" className="hover:underline">Sale</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-semibold mb-4">Customer Service</h3>
                        <ul className="text-sm space-y-2">
                            <li><a href="#" className="hover:underline">Contact Us</a></li>
                            <li><a href="#" className="hover:underline">FAQS</a></li>
                            <li><a href="#" className="hover:underline">Shipping</a></li>
                            <li><a href="#" className="hover:underline">Returns</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-semibold mb-4">Legal</h3>
                        <ul className="text-sm space-y-2">
                            <li><a href="#" className="hover:underline">Privacy Policy</a></li>
                            <li><a href="#" className="hover:underline">Terms of Service</a></li>
                            <li><a href="#" className="hover:underline">Cookie Policy</a></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-semibold mb-4">Connect</h3>
                        <ul className="text-sm space-y-2">
                            <li><a href="#" className="hover:underline">Facebook</a></li>
                            <li><a href="#" className="hover:underline">Instagram</a></li>
                            <li><a href="#" className="hover:underline">Pintrest</a></li>
                        </ul>
                    </div>
                </div>

                {/* Newsletter */}
                <div className="max-w-md pt-10">
                    <h3 className="font-semibold mb-3">Sign up for our newsletter</h3>
                    <p className="text-gray-500 mb-4">The latest deals and savings, sent to your inbox weekly.</p>
                    <div className="flex gap-3" >
                        <input type="text" placeholder="Enter your Email" className="w-full py-2 px-4 border rounded-lg focus:outline-none focus:ring-1 focus:ring-black"/>
                        <Button>Sign Up</Button>
                    </div>
                </div>
                <div className="border-t border-gray-200 mt-10 pt-6 text-gray-500 text-center text-sm">
                    © {new Date().getFullYear()} Shopsy, Inc. All rights reserved.
                </div>
            </footer>
        </div>
    )
}