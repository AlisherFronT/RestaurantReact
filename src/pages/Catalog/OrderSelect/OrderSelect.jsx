import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


 function OrderSelect({order, setOrder}) {

    const handleChange = (e) => {
        setOrder(e.target.value)
    };

    return (
        <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Пордок</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={order}
                    className='catalog__aside-select'
                    label="Категория"
                    onChange={handleChange}
                >
                    <MenuItem className='catalog__aside-item'  value={'default'}>По умолчанию</MenuItem>
                    <MenuItem className='catalog__aside-item'  value={'desc'}>По убыванию</MenuItem>
                    <MenuItem className='catalog__aside-item'  value={'asc'}>По возрастанию</MenuItem>
                    <MenuItem className='catalog__aside-item'  value={'abc'}>По алфавиту</MenuItem>
                    <MenuItem className='catalog__aside-item'  value={'weight'}>По весу</MenuItem>
                    <MenuItem className='catalog__aside-item'  value={'calories'}>По калорийности</MenuItem>

                </Select>
            </FormControl>
        </Box>
    );
}

export default OrderSelect