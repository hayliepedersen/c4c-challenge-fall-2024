import { useState, useEffect } from 'react';
import PartnerTile from './PartnerTile';

/*
  The top-level component containing everything relevant to the dashboard,
  including information on each partner
*/

function Dashboard() {

  const [partners, setPartners] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [id, setId] = useState('');
  const [thumbnailUrl, setThumbnailUrl] = useState('');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [active, setActive] = useState(false);
  
  function handleNewPartnerData(e) {
    setPartners(e.target.value);
  }

  // Load all partners on initial page load 
  useEffect(() => {
    fetch('http://localhost:4000')
    .then(res => {
      return res.json()
    })
    .then(data => {
      setPartners(data)
    });
  }, []);

  const handleDelete = (id) => {
    fetch(`http://localhost:4000/partners/${id}`, {
      method: 'DELETE',
    }).then((res) => {
      if (res.ok) {
        setPartners(partners.filter((partner) => partner.id !== id)); 
      } else {
        console.error('Failed to delete partner');
      }
    }).catch((error) => {
      console.error('Error:', error);
    })
  }

  const handleSubmit = (e) => {
    const partner = { id, thumbnailUrl, name, description, active };

    fetch('http://localhost:4000/add-partner', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(partner)
    })
  }

  return (
    <>
    <div id="form-button">
      <button className="form-button" onClick={() => setShowForm(!showForm)}>
          {showForm ? '- Add Partner' : 'Add Partner'}
      </button>
    </div>

    {showForm && (
    <form onSubmit={handleSubmit}>
      <label>
        Partner Name:{' '}
        <input
          type="text"
          id="name"
          value={name}
          autoComplete="off"
          onChange={(e) => {
            setName(e.target.value);
            setId(e.target.value);
          }}
          required
        />
      </label>
      <br />
      <label>
        Partner Logo Source:{' '}
        <input
          type="text"
          id="thumbnailUrl"
          value={thumbnailUrl}
          autoComplete="off"
          onChange={(e) => setThumbnailUrl(e.target.value)}
          required
        />
      </label>
      <br />
      <label>
        Partner Description:{' '}
        <input
          type="text"
          id="description"
          value={description}
          autoComplete="off"
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </label>
      <br />
      <div className="checkbox">
      <label>
        Active? 
        <input
          type="checkbox"
          id="active"
          value={active}
          onChange={(e) => setActive(!active)}
        />
      </label>
      </div>
      <br />
      <input id="submit" type="submit"></input>
    </form>
    )}
 
    <div id="main-content">
      <div id="main-partners-grid">
      {partners.map(partner => (<PartnerTile key={partner.id} partnerData={partner} onDelete={handleDelete} />))}
      </div>
    </div>
    </>
  )
}

export default Dashboard;