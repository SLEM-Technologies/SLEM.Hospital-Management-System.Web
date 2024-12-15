declare module '../authentication/PrivateRoute' {
    import { FC } from 'react';
  
    // Define the props type if needed
    interface PrivateRouteProps {
      element: JSX.Element;
    }
  
    const PrivateRoute: FC<PrivateRouteProps>;
    export default PrivateRoute;
  }
  