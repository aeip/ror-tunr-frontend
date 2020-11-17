import React from 'react';
import { Song } from './Song';

export const Favorites = (props) => {
	let songs = props.songs;
	const filteredSongs = songs.filter((song) => song.favorite === false);
	return (
		<div className='favorites'>
			<h2>Favorite Songs List</h2>
			{filteredSongs ? (
				<div className='fave-songs'>
					{filteredSongs.map(function (song) {
						return (
							<div className='favorite-song'>
								<Song
									handleDelete={props.handleDelete}
									song={song}
									handleFavorites={props.handleFavorites}
								/>
							</div>
						);
					})}
				</div>
			) : null}
		</div>
	);
};
