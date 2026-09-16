import {
    BrowserRouter,
    Navigate,
    Route,
    Routes,
} from 'react-router-dom';

import Login from './pages/Login';
import Home from './pages/Home';
import StationList from './pages/StationList';
import AddStation from './pages/AddStation';
import StationDetails from './pages/StationDetails';

import Navbar from './components/Navbar';

function ProtectedLayout({ children }) {
    const token = localStorage.getItem('token');

    if (!token) {
        return <Navigate to="/" replace />;
    }

    return (
        <>
            <Navbar />
            {children}
        </>
    );
}

export default function App() {
    return (
        <BrowserRouter>
            <Routes>

                <Route
                    path="/"
                    element={<Login />}
                />

                <Route
                    path="/home"
                    element={
                        <ProtectedLayout>
                            <Home />
                        </ProtectedLayout>
                    }
                />

                <Route
                    path="/stations"
                    element={
                        <ProtectedLayout>
                            <StationList />
                        </ProtectedLayout>
                    }
                />

                <Route
                    path="/add-station"
                    element={
                        <ProtectedLayout>
                            <AddStation />
                        </ProtectedLayout>
                    }
                />

                <Route
                    path="/stations/:id"
                    element={
                        <ProtectedLayout>
                            <StationDetails />
                        </ProtectedLayout>
                    }
                />

                <Route
                    path="*"
                    element={<Navigate to="/" replace />}
                />

            </Routes>
        </BrowserRouter>
    );
}