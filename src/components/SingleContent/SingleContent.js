import React from 'react';
import { img_300, unavailable } from '../../config/config';
import { Badge } from '@material-ui/core';
import './SingleContent.css';

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
        <div className="media">
            <Badge badgeContent={vote} color={vote > 6 ? 'primary' : 'secondary'}/>
            <img 
                className="poster"
                src=  {poster ? `${img_300}/${poster}` : {unavailable}} 
                alt={title}
                />
            <b className="title">{title}</b>
            <span className='subtitle'>
                {type === 'tv' ? 'TV Series' : 'Movie'}
                <span className='subtitle'>{release}</span>
            </span>
        </div>
    )
}

export default SingleContent
