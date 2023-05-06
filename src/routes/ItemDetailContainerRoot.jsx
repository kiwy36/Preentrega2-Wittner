import React from 'react';
import CustomNavbar from '../components/Navbar/CustomNavbar';
import ItemDetailContainer from '../components/ItemDetailContainer/ItemDetailContainer';
function ItemDetailContainerRoot() {
    return (
            <>
                <CustomNavbar/>
                <ItemDetailContainer/>
            </>
        )
    }

export default ItemDetailContainerRoot