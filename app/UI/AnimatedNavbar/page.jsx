import React from 'react'
import './styletwo.css'

const AnimatedNavPage = () => {
  return (
    <div className="h-screen w-full bg-[#d3d3d3] relative">
    <div className="onHover h-32 bg-[#d3d3d3]">
        <div className="h-32 p-6 absolute z-50 flex items-center">
            <p className="text-6xl text-red-800 imp h-full py-16 px-4">IMPACT</p>
        </div>
        <div className="h-72 bg-[#d3d3d3] -z-10 DivToMotion">
            <div className="flex justify-start gap-4 pt-32 px-8">
                <div className="flex flex-col gap-3 w-1/3">
                    <p className="i1">HOME</p>
                    <p className="i2">ABOUT</p>
                    <p className="i3">SIGN_UP</p>
                </div>
                <div className="flex flex-col gap-3 w-1/3">
                    <p className="i1">HOME</p>
                    <p className="i2">ABOUT</p>
                    <p className="i3">SIGN_UP</p>
                </div>
            </div>
        </div>
    </div>
    <div className="flex justify-center gap-12 items-center pt-40 pb-12 bg-black text-white bgmcp">
        <div className="card relative bg-[#101010] border-[#ffffff05] rounded-[21px] p-4 border-[1px]">
            <div className="card-content h-60 w-80 ">
                <p className="text-xl font-bold">Expresso</p>
                <p className="text-xs my-4 text-justify text-[rgba(250,250,250,0.6)]">Espresso is a coffee-brewing
                    method of Italian origin, in
                    which a small amount of nearly boiling water is forced under 9–10 bars of pressure through
                    finely-ground
                    coffee beans. Espresso can be made with a wide variety of coffee beans and roast degrees.</p>
                <p className="text-xs my-4 text-justify text-[rgba(250,250,250,0.6)]">Espresso is a coffee-brewing
                    method of Italian origin, in
                    which a small amount of nearly boiling water is forced under 9–10 bars of pressure through
                    finely-ground
                    coffee beans. Espresso can be made with a wide variety of coffee beans and roast degrees.</p>
            </div>
        </div>
        <div className="card relative bg-[#101010] border-[#ffffff05] rounded-[21px] p-4 border-[1px]">
            <div className="card-content h-60 w-80 ">
                <p className="text-xl font-bold">Expresso</p>
                <p className="text-xs my-4 text-justify text-[rgba(250,250,250,0.6)] ">Espresso is a coffee-brewing
                    method of Italian origin, in
                    which a small amount of nearly boiling water is forced under 9–10 bars of pressure through
                    finely-ground
                    coffee beans.</p>
                <p className="text-xs my-4 text-justify text-[rgba(250,250,250,0.6)]">Espresso is a coffee-brewing
                    method of Italian origin, in
                    which a small amount of nearly boiling water is forced under 9–10 bars of pressure through
                    finely-ground
                    coffee beans. Espresso can be made with a wide variety of coffee beans and roast degrees.</p>
            </div>
        </div>
        <div className="card relative bg-[#101010] border-[#ffffff05] rounded-[21px] p-4 border-[1px]">
            <div className="card-content h-60 w-80 ">
                <p className="text-xl font-bold">Expresso</p>
                <p className="text-xs my-4 text-justify text-[rgba(250,250,250,0.6)]">Espresso is a coffee-brewing
                    method of Italian origin, in
                    which a small amount of nearly boiling water is forced under 9–10 bars of pressure through
                    finely-ground
                    coffee beans. Espresso can be made with a wide variety of coffee beans and roast degrees.</p>
                <p className="text-xs my-4 text-justify text-[rgba(250,250,250,0.6)]">Espresso is a coffee-brewing
                    method of Italian origin, in
                    which a small amount of nearly boiling water is forced under 9–10 bars of pressure through
                    finely-ground
                    coffee beans. Espresso can be made with a wide variety of coffee beans and roast degrees.</p>
            </div>
        </div>
    </div>
</div>  )
}

export default AnimatedNavPage