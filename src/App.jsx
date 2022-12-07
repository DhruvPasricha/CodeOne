import React from 'react';
import { App as Ide } from './Components/IDE/App';
import { App as WebEditor } from './Components/Web Editor/App';
import useLocalStorage from './hooks/useLocalStorage';

export const ToggleContext = React.createContext();

export default function App() {
    const [ShowIde, toggle] = useLocalStorage('ShowIde', true);
    return (
        <div>
            <ToggleContext.Provider
                value={() => {
                    toggle(!ShowIde);
                }}
            >
                {ShowIde ? <Ide /> : <WebEditor />}
            </ToggleContext.Provider>
        </div>
    );
}
