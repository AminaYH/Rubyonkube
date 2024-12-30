import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import FloatingSidebarStyles from './components/FloatingSidebarStyles';
import Loading from "./components/Loading";

function App() {
    return (
        <Router>
            {/* Place FloatingSidebarStyles outside Routes for global style application */}
            <FloatingSidebarStyles />
            <Loading />
        </Router>
    );
}

export default App;
