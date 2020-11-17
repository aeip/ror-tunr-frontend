import React, {useState} from 'react'

export const NewPlaylist = (props) => {
    	const [formData, setFormData] = useState(props.emptyPlaylist);
			const handleSubmit = (e) => {
				e.preventDefault();
                props.handleCreatePlaylist(formData);
                formData.title = "";
                formData.description = "";
			};
			const handleChange = (e) => {
				setFormData({ ...formData, [e.target.name]: e.target.value });
			};
    return (
			<div className='new-playlist'>
				<h2>ADD A NEW PLAYLIST</h2>
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
						<label>Description</label>
						<br />
						<br />
						<input
							type='text'
							name='description'
							value={formData.description}
							onChange={handleChange}></input>
					</div>
					<br />
					<input type='submit' value='ADD NEW PLAYLIST' />
				</form>
			</div>
		);
}