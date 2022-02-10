import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { alpha, styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import { FC } from 'react';

const StyledGrid = styled(Grid)(({ theme }) => ({
  padding: theme.spacing(2),
  transition: theme.transitions.create('background-color'),
  borderRadius: theme.spacing(1),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.15),
  },
}));

type MenuTileProps = {
  imageUrl: string;
  title: string;
  width: string;
};

const MenuTile: FC<MenuTileProps> = ({ imageUrl, title, width }) => {
  return (
    <StyledGrid container direction='column' alignItems='center' spacing={1}>
      <Grid item>
        <Box sx={{ position: 'relative', width: '100px', height: '100px' }}>
          <Image src={imageUrl} layout='fill' objectFit='cover' />
        </Box>
      </Grid>
      <Grid item>
        <Typography>{title}</Typography>
      </Grid>
    </StyledGrid>
  );
};

export default MenuTile;
