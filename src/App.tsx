import {SetStateAction, useState} from 'react'
import QRCode from 'react-qr-code';
import Grid from '@mui/material/Grid'
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import {Button, colors} from "@mui/material";

function App() {
    let inputValue = ''
    const [QrValue, setQrValue] = useState('')
    const updateQR = (NewValue:SetStateAction<string>):void => {
    UpdateInputValue('')
    setQrValue(NewValue)
    };
    const UpdateInputValue = (newValue:string):void=>{
        inputValue = newValue
    }

    return (
        <div className="App">
            <Container maxWidth="md">
                <Grid container spacing={2}>
                    <Grid item md={12} xs={12} xl={12}>
                            <Card sx={{p: 5,bgcolor: "#9d9d9d",borderRadius:10}} variant="outlined">
                                    <Grid item md={12} xs={12} xl={12}>
                                        <Box sx={{
                                            display: 'flex',
                                            justifyContent: 'center',
                                            width:'100%'
                                        }}>
                                            <Card sx={{p: 5,borderRadius:10,mb:10,width:'256px',height:'256px'}}>
                                                {QrValue &&
                                                    <QRCode value={QrValue}/>
                                                }
                                            </Card>
                                        </Box>
                                    </Grid>
                                    <Grid item md={12} xs={12} xl={12}>
                                        <Box sx={{
                                            display: 'flex',
                                            justifyContent: 'center',
                                            width:'100%'
                                        }}>
                                            {inputValue}
                                        <TextField
                                            onChange={e => UpdateInputValue(e.target.value)}
                                            label="Text You Want To Make QR"
                                            defaultValue={inputValue}
                                            sx={{width:'100%'}}
                                            color={'primary'}
                                        />
                                        </Box>
                                        <Box sx={{
                                            display: 'flex',
                                            justifyContent: 'center',
                                            width:'100%',
                                            margin:'20px 0'
                                        }}>
                                            <Button sx={{width:'100%'}} onClick={ e => updateQR(inputValue)} color={"warning"} variant="contained">
                                                generate
                                            </Button>
                                        </Box>
                                    </Grid>
                            </Card>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default App
