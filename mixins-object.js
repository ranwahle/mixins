const a = {
    aMethd: () => {}
 }
 
 const b = {
    bMethod: () => {}
 }
 
 const c = Object.entries(a).reduce((acc, entry) => ({...acc, [entry[0]]: entry[1]}), b);
 
 console.log('c', c);
 
 