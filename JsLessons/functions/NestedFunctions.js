const func = () => {
    const nested = () => {
        console.log('i`m nested function');
    }
    console.log('i`m main function');
    nested();
}

func();
