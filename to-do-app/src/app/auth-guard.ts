import { CanActivateFn } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const chance = Math.random();
  if(chance<0.5){
    console.log("success");
    return true;
  }
  else{
    console.log("fail");
    return false;
  }
};
