import React, { useState } from 'react';
import axios from 'axios';



function App() {
    const [file, setFile] = useState(null);
    const [anonymous, setAnonymous] = useState(true);
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [result, setResult] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
        setResult(null); // Clear previous result on new file selection
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!file) {
            setError('Please upload a file.');
            return;
        }

        const formData = new FormData();
        formData.append('file', file);
        formData.append('anonymous', anonymous ? "true" : "false");

        if (!anonymous) {
            if (!name || !age) {
                setError("Please provide name and age for non-anonymous submission.");
                return;
            }
            formData.append('name', name);
            formData.append('age', age);
        }

        setIsLoading(true);
        setError(null);

        try {
            const response = await axios.post('http://127.0.0.1:5000/predict', formData);
            setResult(response.data.prediction);
        } catch (error) {
            console.error(error);
            setError('Error in prediction');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div style={styles.container}>
            <h1 style={styles.heading}>Brain Tumor Detection</h1>
            <form onSubmit={handleSubmit} style={styles.form}>
                <input type="file" onChange={handleFileChange} required style={styles.fileInput} />
                {file && <p style={styles.fileName}>File selected: {file.name}</p>}
                <label style={styles.checkboxLabel}>
                    <input
                        type="checkbox"
                        checked={anonymous}
                        onChange={() => setAnonymous(!anonymous)}
                        style={styles.checkbox}
                    />
                    Submit Anonymously
                </label>

                {!anonymous && (
                    <div style={styles.personalInfoSection}>
                        <input
                            type="text"
                            placeholder="Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                            style={styles.input}
                        />
                        <input
                            type="number"
                            placeholder="Age"
                            value={age}
                            onChange={(e) => setAge(e.target.value)}
                            required
                            style={styles.input}
                        />
                    </div>
                )}

                <button type="submit" style={styles.button} disabled={isLoading}>
                    {isLoading ? 'Uploading...' : 'Upload & Predict'}
                </button>
            </form>

            {result && <h2 style={styles.result}>Prediction: {result}</h2>}
            {error && <p style={styles.error}>{error}</p>}
        </div>
    );
}

const styles = {
    container: {
        textAlign: 'center',
        padding: '50px',
        maxWidth: '400px',
        margin: '0 auto',
        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
        borderRadius: '10px',
    },
    heading: {
        fontSize: '24px',
        fontWeight: 'bold',
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        gap: '15px',
    },
    fileInput: {
        padding: '10px',
    },
    fileName: {
        fontSize: '14px',
        color: 'grey',
    },
    checkboxLabel: {
        display: 'flex',
        alignItems: 'center',
        fontSize: '14px',
    },
    checkbox: {
        marginRight: '8px',
    },
    personalInfoSection: {
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
    },
    input: {
        padding: '10px',
        fontSize: '14px',
        borderRadius: '5px',
        border: '1px solid #ccc',
    },
    button: {
        padding: '12px',
        fontSize: '16px',
        fontWeight: 'bold',
        backgroundColor: '#4CAF50',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
    },
    result: {
        marginTop: '20px',
        fontSize: '18px',
        color: '#4CAF50',
    },
    error: {
        marginTop: '10px',
        fontSize: '16px',
        color: 'red',
    },
};

export default App;
