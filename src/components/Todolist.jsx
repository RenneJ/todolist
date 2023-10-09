import React, { useRef } from 'react';
import { useState } from 'react'
import { AgGridReact } from 'ag-grid-react'; // the AG Grid React Component
import 'ag-grid-community/styles/ag-grid.css'; // Core grid CSS, always needed
import 'ag-grid-community/styles/ag-theme-material.css'; // Optional theme CSS
import {Button, TextField, Stack, Box, Select, MenuItem, FormControl, InputLabel} from '@mui/material';

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';


export default function Todolist() {

    const [item, setItem] = useState({description: '', date: '', priority: 'Low'})
    const [itemList, setItemList] = useState([]);
    const gridRef = useRef();
    const [selectedDate, setSelectedDate] = useState((new Date()).toString());

    const columns = [
        {
            headerName: 'Description',
            field: 'description',
            sortable: true,
            filter: true,
           // floatingFilter: true,
            resizable: true
        },
        {
            headerName: 'Date',
            field: 'date',
            sortable: true,
            filter: true,
            //floatingFilter: true
        },
        {
            headerName: 'Priority',
            field: 'priority',
            sortable: true,
            filter: true,
          //  floatingFilter: true,
            cellStyle: param => param.value === "High" ? {color: 'red'} : {color : 'black'}
        }
    ];
  
    const changeState = (event) => {
        setItem({...item, [event.target.name]: event.target.value});
    }

    const handleDateChange = (pickedValue)=> { 
        console.log(pickedValue["$d"])
        // DatePicker palauttaa arvona js-olion, jolla on $d attribuutti (valittu pvm-olio)
        var pickedDate = pickedValue["$d"]
        const selectedDate = pickedDate.toLocaleDateString();
        setSelectedDate(selectedDate)
        setItem({...item, date: selectedDate})   
    }

    function addTask() {
        setItemList([...itemList, item]);
        setItem({description:'', date: selectedDate, priority: 'Low'});
    }
    
  function handleDelete() {
        //console.log(gridRef.current.getSelectedNodes()[0].id);
        //console.log(itemList);
        var deleteIndex = gridRef.current.getSelectedNodes()[0].id; // haetaan taulukosta valitun rivin id, tässä tapauksessa sama kuin index (autogenerated)
        setItemList(itemList.filter((_, i) => i != deleteIndex)); // tehdään uusi lista niistä alkioista joiden index on ERI kuin klikatun rivin
  }

    return(
        <div>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <FormControl fullWidth>
                <Stack direction="row" spacing={2} justifyContent="center" alignItems="center">
                    
                    <TextField label="Description" variant="outlined" name="description" value={item.description} onChange={changeState}/>
                    <DatePicker label="Date (DD/MM/YYYY)" format="DD/MM/YYYY" variant="outlined" onChange={handleDateChange} />
                    
                    <Box sx={{ minWidth: 120 }} label="Priority" variant="outlined">
                            <Select
                                name="priority"
                                value={item.priority}
                                //label="Priority"
                                variant="outlined"
                                onChange={changeState}
                            >

                            <MenuItem value="High">High</MenuItem>
                            <MenuItem value="Medium">Medium</MenuItem>
                            <MenuItem value="Low">Low</MenuItem>
                            </Select>
                        </Box>
                    <Button onClick={addTask} variant="contained">Add</Button>
                    <Button onClick={handleDelete} variant="outlined">Delete</Button>
                    
                </Stack>
                </FormControl>
            <div className="ag-theme-material" style={{width: '45em', height: '400px', margin: 'auto', textAlign: 'center'}}>
                <AgGridReact 
                    rowSelection="single"
                    ref={gridRef}
                    onGridReady={ params => gridRef.current = params.api }
                    columnDefs={columns}
                    rowData={itemList}
                    animateRows="true"
                />
            </div>
            </LocalizationProvider>
        </div>
    )
}