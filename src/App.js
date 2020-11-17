import React, { useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { Header } from './components/Header';
import { Playlists } from './components/Playlists';
import { Favorites } from './components/Favorites';
 
function App() {
  // Make vars
	const [playlists, setPlaylists] = useState([]);
	const [songs, setSongs] = useState([]);
	const emptySong = {
		title: '',
		artist: '',
		time: '',
		favorite: false,
	};
	const emptyPlaylist = {
		title: '',
		description: '',
  };

  // API calls
	const makeAPICallSongs = async () => {
		try {
			const res = await fetch('https://svm-tunr.herokuapp.com/songs');
			const json = await res.json();
			setSongs(json);
		} catch (err) {
			console.error(err);
		}
	};
	const makeAPICall = async () => {
		try {
			const res = await fetch('https://svm-tunr.herokuapp.com/playlists');
			const json = await res.json();
			setPlaylists(json);
		} catch (err) {
			console.error(err);
		}
	};
	const handleFavorites = (song) => {
		fetch('https://svm-tunr.herokuapp.com/playlists/5/songs/' + song.id, {
			method: 'put',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				favorite: !song.favorite,
			}),
		}).then(() => {
			makeAPICall();
			makeAPICallSongs();
		});
	};
	const handleCreate = (song, id) => {
		fetch('https://svm-tunr.herokuapp.com/playlists/' + id + '/songs', {
			method: 'post',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(song),
		}).then(() => {
			makeAPICall();
		});
	};
	const handleDelete = (song) => {
		fetch('https://svm-tunr.herokuapp.com/playlists/5/songs/' + song.id, {
			method: 'delete',
			headers: {
				'Content-Type': 'application/json',
			},
		}).then(() => {
			makeAPICall();
			makeAPICallSongs();
		});
	};
	const handleCreatePlaylist = (playlist) => {
		fetch('https://svm-tunr.herokuapp.com/playlists', {
			method: 'post',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(playlist),
		}).then(() => {
			makeAPICall();
		});
	};
	const handleDeletePlaylist = (playlist) => {
		fetch('https://svm-tunr.herokuapp.com/playlists/' + playlist.id, {
			method: 'delete',
			headers: {
				'Content-Type': 'application/json',
			},
		}).then(() => {
			makeAPICall();
		});
  };

  // UseEffect
	useEffect(() => {
		makeAPICall();
		makeAPICallSongs();
	}, []);
	return (
		<Router>
			<div className='App'>
				<Header />
				<Playlists
					emptyPlaylist={emptyPlaylist}
					emptySong={emptySong}
					handleCreate={handleCreate}
					handleDeletePlaylist={handleDeletePlaylist}
					handleCreatePlaylist={handleCreatePlaylist}
					playlists={playlists}
					setPlaylists={setPlaylists}
					handleDelete={handleDelete}
					handleFavorites={handleFavorites}
				/>
				<Favorites
					songs={songs}
					handleDelete={handleDelete}
					handleFavorites={handleFavorites}
				/>
			</div>
		</Router>
	);
}

export default App;
