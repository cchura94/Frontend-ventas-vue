
export function authGuard(to, from, next) {
    try{
        // verificar si tiene el token (cliente)
        const authUser = JSON.parse(atob(localStorage.getItem('auth')));
        console.log("GUARDS: ", authUser); 

        if(authUser && authUser.token){
            next()
        }else{
            next({name: 'Login'});
        }

        // verificar si el token es correcto

        
    }catch(error){
        localStorage.clear();
        next({name: "Login"})
    }
}