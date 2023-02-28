import React from 'react';
import { Grid, Typography } from '@mui/material';
import WishlistCard from './WishlistCard';

const WishlistList = ({ wishlists }) => {
    return (
        <>
            {wishlists.length ?
                <>
                    {wishlists.map((wishlist) => (
                        <Grid item xs={12} sm={6} md={4} lg={3} >
                            <WishlistCard wishlist={wishlist} />
                        </Grid>
                    ))}
                </>
                :
                <Typography variant="h5" >No Wishlist Found!</Typography>}
        </>
    )
}

export default WishlistList;