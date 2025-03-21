"use client"
import { TextField, Select, MenuItem } from '@mui/material';
import { DatePicker } from "@mui/x-date-pickers"
import { LocalizationProvider } from "@mui/x-date-pickers"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"

export default function DateReserve() {
    return(
        <div className="bg-slate-100 rounded-lg space-x-5 space-y-2 w-fit px-10 py-5 flex flex-col justify-center">
            
            
            <TextField
                label="Name-Lastname"
                name="Name-Lastname"
                variant="standard"
                fullWidth
            />
            <TextField
                label="Contact-Number"
                name="Contact-Number"
                variant="standard"
                fullWidth
            />

            <Select
                id="venue"
                name="venue"
                variant="standard"
                fullWidth
            >
                <MenuItem value="Room1">Room1</MenuItem>
                <MenuItem value="Room2">Room2</MenuItem>
                <MenuItem value="Room3">Room3</MenuItem>
            </Select>

            {/* DatePicker */}
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                    label="Event Date"
                    name="event-date"
                />
            </LocalizationProvider>

        </div>
    )
}
