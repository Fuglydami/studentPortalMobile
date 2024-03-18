import React, {createContext, useContext, useState, ReactNode} from 'react';

interface AppContextProps {
  userData: any;
  setUserData: React.Dispatch<React.SetStateAction<any>>;
  isModalVisible: boolean;
  toggleModal: () => void;
  setIsModalVisible: React.Dispatch<React.SetStateAction<any>>;
}

const AppContext = createContext<AppContextProps | undefined>(undefined);

interface AppProviderProps {
  children: ReactNode;
}

const AppProvider: React.FC<AppProviderProps> = ({children}) => {
  const [userData, setUserData] = useState<any>(null);
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  const contextValue: AppContextProps = {
    userData,
    setUserData,
    isModalVisible,
    toggleModal,
    setIsModalVisible,
  };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};

export const useGlobalContext = (): AppContextProps => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useGlobalContext must be used within an AppProvider');
  }
  return context;
};

export {AppContext, AppProvider};
