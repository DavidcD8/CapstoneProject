import React from 'react';

function Highlights() {
  return (
    <section id="highlights">
      {/* Online Menu */}
      <button>View Menu</button>

      {/* This week’s Specials */}
      <button>Specials</button>

      {/* Image and Descriptions */}
      <div>
        <img src="highlights-image.png" alt="Highlights" />
        <p>Description of highlights</p>
      </div>
    </section>
  );
}

export default Highlights;
