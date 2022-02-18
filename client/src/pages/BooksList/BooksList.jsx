import React from 'react'
import BookItem from './BookItem/BookItem'
import c from './BooksList.module.css'
const BooksList = (props) => {
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

export default BooksList