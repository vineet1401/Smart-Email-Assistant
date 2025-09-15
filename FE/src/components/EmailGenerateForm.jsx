import React from 'react'
import { useState } from 'react'
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import EmailResponse from './EmailResponse';
import axios from 'axios';
import Alert from '@mui/material/Alert';

const EmailGenerateForm = () => {
    const [emailContent, setEmailContent] = useState("")
    const [tone, setTone] = useState("")
    const [generatedEmail, setGeneratedEmail] = useState("")
    const [loading, setLoading] = useState(false)

    const [error, setError] = useState({
        severity: "", message: ""
    })
    const theme = useTheme();

    const ITEM_HEIGHT = 48;
    const ITEM_PADDING_TOP = 8;
    const MenuProps = {
        PaperProps: {
            style: {
                maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
                width: 250,
            },
        },
    };

    const emailTones = [
        "Formal",
        "Professional",
        "Polite",
        "Friendly",
        "Casual",
        "Concise",
        "Detailed",
        "Persuasive",
        "Supportive",
        "Neutral",
        "Appreciative",
        "Apologetic",
        "Confident",
        "Urgent",
        "Encouraging"
    ];

    const getStyles = (ton, tone, theme) => {
        return {
            fontWeight: ton == tone
                ? theme.typography.fontWeightMedium
                : theme.typography.fontWeightRegular,
        };
    }

    const handleGenerateEmail = async () => {
        try {
            setLoading(true);
            console.log("Email and tone", emailContent, tone);
            const response = await axios.post(
                "http://localhost:8080/api/email/generate",
                {
                    emailContent: emailContent,
                    tone: tone
                }

            )
            setError({ message: "Email Generated Successfully.", severity: "success" });
            setGeneratedEmail(response.data);
            setLoading(false);
        } catch (e) {
            console.error("Error generating email", e);
            setError({ message: "Failed to generate email. Please try again.", severity: "error" });
            setLoading(false);
        }

    }
    return (
        <>
            {
                error.message && (

                    <Alert variant="outlined" severity={error.severity} style={{ margin: "1rem" , width: "40%", marginLeft: "auto", marginRight: "auto"}}>
                        {error.message}
                    </Alert>
                )
            }

            {
                generatedEmail ? (
                    <EmailResponse
                        text={generatedEmail}
                        onBack={() => {
                            setGeneratedEmail("");
                            setError({ message: "", severity: "" });
                        }}
                    />
                ) : (
                    // your existing input form (emailContent + tone + generate button)
                    <Container maxWidth="lg" style={{ marginTop: '2rem' }}>
                        <Typography variant="h2" align='center' gutterBottom>
                            Smart Email Generator
                        </Typography>
                        {/* Email */}
                        <TextField
                            id="outlined-multiline-static"
                            label="Email Content"
                            multiline
                            rows={18}
                            defaultValue=""
                            value={emailContent}
                            style={{ width: '100%', marginBottom: '1rem' }}
                            onChange={(e) => setEmailContent(e.target.value)}
                        />
                        {/* Tone */}
                        <InputLabel id="demo-multiple-name-label">Tone</InputLabel>
                        <Select
                            labelId="demo-multiple-name-label"
                            id="demo-multiple-name"
                            value={tone}
                            onChange={(e) => setTone(e.target.value)}
                            input={<OutlinedInput label="Tone" />}
                            MenuProps={MenuProps}
                            style={{ width: '100%', marginBottom: '1rem' }}
                        >
                            {emailTones.map((ton) => (
                                <MenuItem
                                    key={ton}
                                    value={ton}
                                    style={getStyles(ton, tone, theme)}
                                >
                                    {ton}
                                </MenuItem>
                            ))}
                        </Select>
                        {/* Post Button */}
                        <Button variant="contained"
                            onClick={handleGenerateEmail}
                            disabled={loading || !emailContent || !tone}
                        >Generate
                        </Button>
                        <Backdrop
                            sx={(theme) => ({ color: '#fff', zIndex: theme.zIndex.drawer + 1 })}
                            open={loading}

                        >
                            <CircularProgress color="inherit" />
                        </Backdrop>
                    </Container>
                )
            }
        </>

    )
}

export default EmailGenerateForm