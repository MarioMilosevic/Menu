import React, {useState} from 'react'

interface MealProps {
    category: string;
    desc: string;
    id:number;
    img:string;
    price:number;
    title:string;
  }

const Meal: React.FC<MealProps> = (props) => {
    console.log(props.img)
  return (
    <article>
     <img src={`../../public/img/item-${props.id}.jpeg`} className='h-[240px] w-[368px]'></img>
      <div>
        <h3 className='capitalize'>{props.title}</h3>
        <span>{props.price}</span>
      </div>
      <p>{props.desc}</p>
    </article>
  )
}

export default Meal
