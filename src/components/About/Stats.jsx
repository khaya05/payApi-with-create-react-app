import React from 'react';
import { teamDesktop, teamMobile } from '../../assets';

import '../../styles/Stats.css';

function Stats() {
  return (
    <div className={'about__stats-container'}>
      <picture>
        <source media="(min-width: 35em)" srcSet={teamDesktop} />
        <img src={teamMobile} alt="team working" />
      </picture>

      <div className="stats__container">
        <div>
          <p className="stats__label">team members</p>
          <p>300+</p>
        </div>

        <div>
          <p className="stats__label">office in the us</p>
          <p>3</p>
        </div>

        <div>
          <p className="stats__label">transactions analyzed</p>
          <p>10M+</p>
        </div>
      </div>
    </div>
  );
}

export default Stats;
