import React from 'react'
import BookItem from '../BooksList/BookItem/BookItem';
import c from "./Library.module.css";

const Library = () => {
  return (
    <section className=''>
    <ul className={`${c.ul} flex flexColumn flexCenter noBulletList`}>
        <BookItem></BookItem>
        <BookItem></BookItem>
        <BookItem></BookItem>
    </ul>
</section>
  )
}

export default Library