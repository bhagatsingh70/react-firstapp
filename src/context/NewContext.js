import NoteContext from './Context';

const NewContext = (props) =>{
    const state = {
        name:'Save c Button',
        type : 'button'
    };
    return (
        <NoteContext.Provider value={state}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NewContext