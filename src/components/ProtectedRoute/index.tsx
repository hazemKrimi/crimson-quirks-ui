import { useReactiveVar } from '@apollo/client';
import { Navigate, Route, RouteProps } from 'react-router-dom';
import { tokenVar } from '../../graphql/state';

const ProtectedRoute: React.FC<RouteProps> = ({ children, ...rest }) => {
  const token = useReactiveVar(tokenVar);

  return (
    <Route {...rest} element={token ? children : <Navigate to='/login' />} />
  );
};

export default ProtectedRoute;
