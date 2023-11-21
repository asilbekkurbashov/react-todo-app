import React ,{ createContext,useState } from "react";

interface Value   {
    isModalOpen: boolean;
    setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
    showModal: () => void;
    editID: string;
    setEditID: React.Dispatch<React.SetStateAction<string>>;
    search: string;
    setSearch: any;
    visibleLeft: boolean;
    setVisibleLeft: any;
    visibleRight: boolean;
    setVisibleRight:any;
}

export const AppContext = createContext<Value>({} as Value)

interface Props{
    children: React.ReactNode;
}

export const AppContextProvider = (props:Props) => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [editID, setEditID] = useState<string>('')
    const [search, setSearch] = useState<string>('')
    const [visibleLeft, setVisibleLeft] = useState(false)
    const [visibleRight, setVisibleRight] = useState(false)
    const {children} = props
    const showModal = () => {
        setIsModalOpen(true);
      };

    const value = {
        isModalOpen,
        setIsModalOpen,
        showModal,
        editID,
        setEditID,
        search,
        setSearch,
        visibleLeft,
        setVisibleLeft,
        visibleRight,
        setVisibleRight
    }

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}