import React from 'react'
import { img_300, unavailable } from '../../config/config'

const SingleContent = ({
    id,
    type,
    title,
    overview,
    release,
    poster,
    vote
}) => {
    return (
        <div>
            <img src=  {poster ? `${img_300}/${poster}` : {unavailable}} />
        </div>
    )
}

export default SingleContent
