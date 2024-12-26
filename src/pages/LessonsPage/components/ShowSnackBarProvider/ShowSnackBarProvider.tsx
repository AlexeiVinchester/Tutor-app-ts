import { createContext } from 'react';
import { TShowSnackBar } from '../../../../share/interfaces/showSnackBar.type';
import { IShowSnackBarProvider } from './interface/ShowSnackBarProvider.interface';

const ShowSnackBarContext = createContext<TShowSnackBar>((mes, sev) =>
  console.log(mes, sev)
);

const ShowSnackBarProvider = ({
  children,
  showSnackBar,
}: IShowSnackBarProvider) => {
  return (
    <ShowSnackBarContext.Provider value={showSnackBar}>
      {children}
    </ShowSnackBarContext.Provider>
  );
};

export { ShowSnackBarContext, ShowSnackBarProvider };
