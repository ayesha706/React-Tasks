import React from 'react'
import Card from './Card'

export default function Product() {
  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-4 mt-6">
        <Card name={"Chaire"} price={"$100"} rating={5}/>
        <Card  name={"Furniture"} price={"$300"} rating={4}/>
        <Card  name={"Bed"} price={"$350"} rating={4}/>
        <Card  name={"Table"} price={"$440"} rating={3}/>
        <Card  name={"Wallpaper"} price={"$300"} rating={5}/>
    </div>
  )
}
