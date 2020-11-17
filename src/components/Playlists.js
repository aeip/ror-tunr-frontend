import React from 'react';
import {Song} from './Song'
import {New} from './New'
import {NewPlaylist} from './NewPlaylist'

export const Playlists = (props) => {
    let playlists = props.playlists;
    const handleCreatePlaylist = (formData) => {
        props.handleCreatePlaylist(formData);
    }
    const handleDeletePlaylist = (playlist) => {
        props.handleDeletePlaylist(playlist);
    }
    const handleCreate = (formData, playlist) => {
        props.handleCreate(formData, playlist);

    }
	return (
		<div className='playlists'>
			{playlists ? (
				playlists.map(function (playlist, i) {
					return (
						<>
							<div className='playlist-title'>
								<h2>{playlist.title}</h2>
								<p>{playlist.description}</p>
								<button
									class='song-remove'
									onClick={() => handleDeletePlaylist(playlist)}>
									<i className='fa fa-trash'></i>
								</button>
							</div>
							{playlist.songs ? (
								playlist.songs.map(function (song) {
									return (
										<Song
											handleDelete={props.handleDelete}
											song={song}
											handleFavorites={props.handleFavorites}
										/>
									);
								})
							) : (
								<p>No Songs yet</p>
							)}
							<New
								playlist={playlist}
								playlistId={playlist.id}
								emptySong={props.emptySong}
								handleCreate={handleCreate}
							/>
						</>
					);
				})
			) : (
				<p>No Playlists</p>
			)}
            <NewPlaylist handleCreatePlaylist={handleCreatePlaylist} emptyPlaylist={props.emptyPlaylist} />
		</div>
	);
};
