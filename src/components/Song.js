import React from 'react';

export const Song = (props) => {
    let song = props.song;
    const handleFavorites = () => {
        props.handleFavorites(song);
    }
    const handleDelete = () => {
        props.handleDelete(song);
    }
	return (
		<div className='songs'>
			<div className='songs-top'>
				<p class='song-title'>{song.title}</p>
				<p class='song-artist'>{song.artist}</p>
			</div>
			<div className='songs-bottom'>
				<p>{song.time}</p>
				<div>
					{song.favorite === false ? (
						<button class='song-favorite fave-button' onClick={handleFavorites}>
							<i className='fa fa-heart fave-icon'></i>
						</button>
					) : (
						<button class='song-favorite not-fave-button' onClick={handleFavorites}>
							<i className='fa fa-heart not-fave-icon'></i>
						</button>
					)}
					<button class='song-remove' onClick={handleDelete}>
						<i className='fa fa-trash'></i>
					</button>
				</div>
			</div>
		</div>
	);
};