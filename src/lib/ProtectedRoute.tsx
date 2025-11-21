import { Navigate } from "react-router-dom";
import { useAuth } from "./useAuth";

interface ProtectedRouteProps {
	children: React.ReactNode;
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
	const { user, loading } = useAuth();

	// Biar nggak kedip-kedip waktu cek auth
	if (loading) return <p>Loading...</p>;

	// Kalau belum login → tendang ke /login
	if (!user) return <Navigate to="/login" replace />;

	// Kalau sudah login → silakan masuk
	return children;
};

export default ProtectedRoute;
