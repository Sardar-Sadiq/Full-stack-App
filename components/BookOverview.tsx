import Image from 'next/image'
import React from 'react'
import BookCover from './BookCover'

const BookOverview = ({
  title,
  author,
  genre,
  rating,
  totalCopies,
  availableCopies,
  description,
  coverColor,
  coverImage }: Book) => {
  return   (
    <section className='book-overview'>

    <div className='flex flex-1 flex-col gap-5'>
        <h1>{title}</h1>


        <div className='book-info'>
          <p>
            By <span className='font-semibold text-light-200'>{author}</span>
          </p>

          <p>
            Category{" "}
            By <span className='font-semibold text-light-200'>{genre}</span>
          </p>

          <div className='flex flex-row gap-1'>
            <Image src="/icons/star.svg" alt='star' width={22} height={22}/>
            <p>{rating}</p>
          </div>
        </div>
        <div className= 'book-copies'>
          <p>
            Total Books: <span>{totalCopies}</span>
          </p>
          <p>
            Available Books: <span>{availableCopies}</span>
          </p>
        </div>
        <p className='book-description'>{description}</p>

        <button className='book-overview_btn flex items-center justify-center rounded-sm gap-5 p-2'>
          <Image src="/icons/book.svg" alt="book" width={20} height={20} />
          <p className='font-bebas-neue text-xl text-dark-100 flex'>Borrow</p>
        </button>
    </div>

  </section>
  )
}

export default BookOverview
