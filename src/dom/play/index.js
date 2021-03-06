import { finished, paused } from '../../core/helpers';
import { play as corePlay, tick as coreTick } from '../../core';
import { renderNodes } from '../render';

const tick = playable => {
  const { animation } = playable.state;

  coreTick( playable );
  renderNodes( playable );

  if ( !paused( animation ) && !finished( animation )) {
    window.requestAnimationFrame(() => {
      tick( playable );
    });
  }
};

const play = ( playable, options ) => {
  corePlay( playable, options, tick );
};

export default play;
