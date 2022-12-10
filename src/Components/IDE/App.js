import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

import Playground from './components/Playground';
import NavbarComp from './components/Navbar';
import { languages } from './components/Languages';
import useLocalStorage from '../../hooks/useLocalStorage';

export function App() {
    function comp(a, b) {
        if (a.name > b.name) return 1;
        if (a.name < b.name) return -1;
        return 0;
    }
    languages.sort(comp);
    const [fontSize, setFontSize] = useLocalStorage('font-size', '18');
    const [fontSizeName, setFontSizeName] = useLocalStorage('font-size-name', 'Small');

    const [currentLang, setCurrentLang] = useLocalStorage('lang', languages[0]);
    const [value, setValue] = useLocalStorage('code', currentLang.sampleCode);
    const [inputData, setInputData] = useLocalStorage('input', '');
    const [outputData, setOutputData] = useState('');
    const [running, setRunning] = useState(false);

    function handleChange(v, e) {
        setValue(v);
    }

    function handleInput(inp) {
        setInputData(inp);
    }

    function changeFontSize(newFontSize, newFontSizeName) {
        setFontSize(newFontSize);
        setFontSizeName(newFontSizeName);
    }

    function handleClick(newLang, index) {
        setCurrentLang(newLang);
        setValue(newLang.sampleCode);
    }

    const getOutput = async () => {
        const headers = {
            'X-RapidAPI-Key': process.env.REACT_APP_COMPILER_API_KEY,
            'X-RapidAPI-Host': 'judge0-ce.p.rapidapi.com',
        };

        setOutputData('');
        setRunning(true);

        const url = 'https://judge0-ce.p.rapidapi.com/submissions';

        const createSubmission = () => {
            const data = {
                source_code: value,
                language_id: currentLang.id,
                std_in: inputData,
            };

            const options = {
                method: 'POST',
                url: url,
                headers: headers,
                data: data,
            };

            axios
                .request(options)
                .then(function (response) {
                    updateSubmissionDetails(response.data.token);
                })
                .catch(function (error) {
                    setRunning(false);
                    console.log(error);
                });
        };

        const updateSubmissionDetails = (token) => {
            const options = {
                method: 'GET',
                url: `${url}/${token}`,
                headers: headers,
            };

            axios
                .request(options)
                .then(function (response) {
                    setRunning(false);
                    const { stderr } = response.data;
                    setOutputData(stderr || response.data.stdout);
                })
                .catch(function (error) {
                    setRunning(false);
                    console.log(error);
                });
        };

        createSubmission();
    };

    return (
        <div>
            <NavbarComp changeFontSize={changeFontSize} changeLang={handleClick} currentLang={currentLang} key={currentLang.code} execute={getOutput} loading={running} fontSize={fontSize} fontSizeName={fontSizeName} />
            <Playground currentLang={currentLang} key={currentLang.name} handleCode={handleChange} handleInput={handleInput} output={outputData} fontSize={fontSize} code={value} input={inputData} />
        </div>
    );
}
