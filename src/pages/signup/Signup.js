// styles
import './Signup.css'

// hooks
import { useState } from 'react'
import { useSignup } from '../../hooks/useSignup';

export default function Signup() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [thumbnail, setThumbnail] = useState(null);
  const [thumbnailError, setThumbnailError] = useState(null);

  const { signup, error, isPending } = useSignup();

  const handleFileChange = (e) => {
    setThumbnail(null);

    let selected = e.target.files[0];
    console.log(selected);

    // check upload
    if (!selected) {
      setThumbnailError('Please select a file')
      return;
    }

    if (!selected.type.includes('image')) {
      setThumbnailError('Selected file must be an image')
      return;
    }

    if (selected.size > 100000) {
      setThumbnailError('Image file size must be less than 100kb')
      return;
    }

    setThumbnailError(null)
    setThumbnail(selected);
    console.log('thumbnail updated!')
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    signup(email, password, name, thumbnail);
  }

  return (
    <form className="auth-form" onSubmit={handleSubmit}>
      <h2>Signup</h2>
      <label>
        <span>email:</span>
        <input type="email"
          required
          onChange={(e) => setEmail(e.target.value)}
          value={email} />
      </label>
      <label>
        <span>password:</span>
        <input
          type="password"
          required onChange={(e) => setPassword(e.target.value)}
          value={password} />
      </label>
      <label>
        <span>display name:</span>
        <input
          type="text"
          required
          onChange={(e) => setName(e.target.value)}
          value={name} />
      </label>
      <label>
        <span>profile thumbnail:</span>
        <input
          type="file"
          required
          onChange={handleFileChange} />
        {thumbnailError && <div className='error'>{thumbnailError}</div>}
      </label>
      {!isPending && <button className='btn'>Signup</button>}
      {isPending && <button className='btn' disabled>loading</button>}
      {error && <div className='error'>{error}</div>}
    </form>
  )
}
