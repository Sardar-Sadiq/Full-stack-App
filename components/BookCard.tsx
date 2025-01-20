import React from 'react'
import Link from 'next/link'
import BookCover from './BookCover'
import { cn } from '@/lib/utils'
import Image from 'next/image'

const BookCard = ({id, title, genre, coverColor, coverImage, isLoanedBook = false }: Book) => <li className={cn(isLoanedBook && "xs:w-52 w-full")}>
    <Link href={`/books/${id}`} className={cn(isLoanedBook && "w-full flex flex-col items-center")}>
        <BookCover coverColor={coverColor} coverImage={coverImage}/>

        <div className={cn('mt-4', !isLoanedBook && "xs:max-w-40 max-w-28")}>
            <p className='book-title'>{title}</p>
            <p className='book-genre'>{genre}</p>
        </div>

        {isLoanedBook && (
            <div className='mt-3 w-full'>
                <div className='book-loaned'>
                    <Image src="/icons/calendar.svg" alt='' width={18} height={18} className='object-contain'/>
                    <p className='text-light-100'>11 days left to return</p>
                </div>
               <button className='book-btn'> Download receipt</button>
            </div>
        )}
    </Link>
</li>

export default BookCard