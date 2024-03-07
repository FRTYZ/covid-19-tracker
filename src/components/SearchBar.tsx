import React from 'react'

// Material UI elements
import { 
    Paper, 
    InputBase,
    Button
  } from "@mui/material"

  // Material UI Icons and styles
import { SearchOutlined } from '@mui/icons-material';
import { searchbarStyles } from '../styles';

// Other npm packes
import slugify from 'react-slugify';
import { useFormik } from 'formik';

import { useSearchParams, useNavigate } from 'react-router-dom';

// Interfaces
import { searchProps } from './component';

const SearchBar: React.FC<searchProps>  = ({device}) => {
  
    // React Router
    const navigate = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams();
    const searchQuery = searchParams.get('search');

    // search Formik
    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            search: searchQuery ? searchQuery : ''
        },
        onSubmit: async(values) => {
            const {search} = values;
            const checkSearch = slugify(search)

            if(search !== ''){
                navigate('/?=' + checkSearch)
            }
        }
    })

    return (
        <Paper component="form" sx={device == 'desktop' ? searchbarStyles.inputSearchPaper : searchbarStyles.mobileSearchPaper}>
            <form
                onSubmit={formik.handleSubmit}
            >
                <InputBase
                    sx={searchbarStyles.inputSearchAreaInputBase}
                    placeholder="Arama Yapın"
                    name="search"
                    startAdornment={
                        <Button
                            type="submit"
                            size='small'
                            color="primary"
                            aria-label="directions"
                            sx={searchbarStyles.searchButton}
                        >
                            <SearchOutlined sx={searchbarStyles.searchIcon} />
                        </Button>
                    }
                    onChange={formik.handleChange}
                    value={formik.values.search}
                />
            </form>
        </Paper>
    )
}


export default SearchBar