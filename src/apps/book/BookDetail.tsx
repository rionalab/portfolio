import React from 'react'
import { useParams } from 'react-router-dom'

export default function BookDetail() {

    const {id} = useParams<{id: string}>()

    return (
        <div>
            book detail {id}
        </div>
    )
}
