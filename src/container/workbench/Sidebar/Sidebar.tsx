import React from 'react';
import { Divider, Fab, Grid } from '@mui/material';
import SaveIcon from '@mui/icons-material/Save';
import ShareIcon from '@mui/icons-material/Share';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import NodeCard from '../../../presentation/NodeCard/NodeCard';

const Sidebar: React.FC<{}> = () => {

  return (
    <Grid item container direction="column" style={{
      backgroundColor: 'white',
      margin: '20px 20px 20px 0',
      height: 'calc(100% - 40px)',
      width: 280,
      borderRadius: 10,
      padding: 20,
      gap: 20 }}>
      <Grid item container style={{ justifyContent: 'space-between' }}>
        <Fab color="primary" size="medium" aria-label="undo">
          <KeyboardArrowLeftIcon />
        </Fab>
        <Fab color="primary" size="medium" aria-label="redo">
          <KeyboardArrowRightIcon />
        </Fab>
        <Fab color="primary" size="medium" aria-label="save">
          <SaveIcon />
        </Fab>
        <Fab color="primary" size="medium" aria-label="share">
          <ShareIcon />
        </Fab>
      </Grid>

      <Divider />

      <Grid item container style={{ overflowY: 'scroll', height: '80%', gap: 10 }}>
        {Array(1).fill('').map(() => <NodeCard />)}
      </Grid>
    </Grid>
  );
};

export default Sidebar;
