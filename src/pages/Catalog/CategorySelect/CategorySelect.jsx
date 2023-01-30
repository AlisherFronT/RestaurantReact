import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import {menuData} from "../../../utils/menuData";
import {useNavigate, useParams} from "react-router-dom";

 function CategorySelect() {
     const navigate = useNavigate()

     const {category} = useParams()

    const handleChange = (e) => {
        navigate(`/catalog/${e.target.value}`)
    };

    return (
        <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Категория</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={category}
                    className='catalog__aside-select'
                    label="Категория"
                    onChange={handleChange}
                >
                    <MenuItem className='catalog__aside-item'  value={'all'}>Все категории</MenuItem>
                    {
                        menuData.map((item) => (
                        <MenuItem className='catalog__aside-item' key={item.en} value={item.en}>{item.ru}</MenuItem>
                        ))
                    }
                </Select>
            </FormControl>
        </Box>
    );
}

export default CategorySelect