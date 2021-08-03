import React from 'react';
import { useFectGifs } from '../hooks/useFetchGifs';
import GifGridItem from './GifGridItem';

const GifGrid = ({ category }) => {

    const { data: images, loading } = useFectGifs( category );

    return (
        <div className="card-grid animate__animated animate__fadeIn">
            <h3>{ category }</h3>
            { loading && <h3 className="animate__animated animate__flash">Loading...</h3> }
            {
                images.map(( img ) => (
                    <GifGridItem key={ img.id } { ...img } />
                ))
            }
        </div>
    )
}

export default GifGrid;