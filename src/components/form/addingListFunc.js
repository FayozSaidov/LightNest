export const addList = (key, setState) => (selectedOption) => {
    setState((prevState) => ({
        ...prevState,
        [key]: selectedOption.value,
    }));
};