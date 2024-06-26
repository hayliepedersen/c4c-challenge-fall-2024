import React from 'react';

/*
  A block for a single partner, containing information for them
  along with any tools to manage said information
*/

function PartnerTile({ partnerData, onDelete }) {
  const activeStyle = {
    color: partnerData.active ? '#05B34E' : '#E40D33'
  }

  return (
     <div className="partner-tile">
      <img className="partner-thumbnail" src={partnerData.thumbnailUrl} alt={partnerData.name} />
      <hr />
      <div className="partner-info">
        <h2>{partnerData.name}</h2>
        <h3 style={activeStyle}>{partnerData.active ? 'Active' : 'Inactive'}</h3>
        <br />
        <p>{partnerData.description}</p>
        <br />
        <button onClick={() => onDelete(partnerData.id)}>Delete</button>
      </div>
    </div>
  )
}

export default PartnerTile;