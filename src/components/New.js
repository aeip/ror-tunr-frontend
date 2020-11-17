import React, { useState } from 'react';

export const New = (props) => {
	const [formData, setFormData] = useState(props.emptySong);
	const handleSubmit = (e) => {
		e.preventDefault();
        props.handleCreate(formData, props.playlistId);
        formData.title = "";
        formData.artist = "";
        formData.time = "";
	};
	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};
	return (
		<div className='new'>
			<h2>ADD A NEW SONG TO</h2>
			<h2>
				<span>{props.playlist.title}</span>
			</h2>
			<form onSubmit={handleSubmit}>
				<div>
					<label>Title</label>
					<br />
					<br />
					<input
						type='text'
						name='title'
						value={formData.title}
						onChange={handleChange}></input>
				</div>
				<br />
				<div>
					<label>Artist</label>
					<br />
					<br />
					<input
						type='text'
						name='artist'
						value={formData.artist}
						onChange={handleChange}></input>
				</div>
				<br />
				<div>
					<label>Time</label>
					<br />
					<br />
					<input
						type='text'
						name='time'
						value={formData.time}
						onChange={handleChange}></input>
				</div>
				<br />
				<input type='submit' value='ADD NEW SONG' />
			</form>
		</div>
	);
};
