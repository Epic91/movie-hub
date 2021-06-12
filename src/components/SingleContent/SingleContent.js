import React from 'react';
import { Badge } from '@material-ui/core';
import { img_300, unavailable } from '../../config/config';
import ContentModal from '../../ContentModal/ContentModal';
import './SingleContent.css';

const SingleContent = ({
    id,
    type,
    title,
    release,
    poster,
    vote
}) => {
    return (
        <ContentModal type={type} id={id}>
            <Badge badgeContent={vote} color={vote > 6 ? 'primary' : 'secondary'}/>
            <img 
                className="poster"
                src=  {poster ? `${img_300}${poster}` : {unavailable}} 
                alt={title}
                />
            <b className="title">{title}</b>
            <span className='subtitle'>
                {type === 'tv' ? 'TV Series' : 'Movie'}
                <span className='subtitle'>{release}</span>
            </span>
        </ContentModal>
    )
}

export default SingleContent
