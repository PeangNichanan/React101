function Message() {
    const name = 'Peang';
    if (name) {
        return <h1 className="mx-9 font-semibold text-xl mt-3">Hello {name}</h1>;
    }
    return <h1 className="mx-9 font-semibold text-xl mt-3">Hello World</h1>;
    
}

export default Message;