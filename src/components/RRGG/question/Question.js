import React from 'react'
import './question.scss'

export default function Question({question}) {
    return (
        <h3 className='question_text'  >
            {question}
        </h3>
    )
}
