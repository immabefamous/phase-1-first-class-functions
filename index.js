const receivesAFunction = (cb) => {
    return cb()   
}

const returnsANamedFunction = () => {
    let fn;
    fn =  function () {
        return 
    }
    return fn
}

const returnsAnAnonymousFunction = () => {
    return function() {}
}