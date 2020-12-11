import React from 'react'
import image from '../images/tokyo.jpg'

export default function Home() {
    return (
        <main>
            <img src={image} alt="Tokyo" className="absolute object-cover w-full h-full" />
            <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8">
                <h1 className="text-3xl text-green-100 cursive leading-none lg:leading-snug home-name text-shadow">Hey, I'm Geraldy</h1>
            </section>
        </main>
    )
}
