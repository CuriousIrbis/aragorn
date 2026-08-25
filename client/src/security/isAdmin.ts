import type IAdminAccounts from '../types/admin'
import users from '../assets/json/adminData.json';

export default function checkAdmin(inputData: IAdminAccounts): boolean{
    const {password, admin: UAdmin} = inputData;

    const adminAccount: IAdminAccounts | undefined = users.find(({admin}: IAdminAccounts) => {
        return UAdmin.toLowerCase() === admin || undefined
    })
    
    if(!adminAccount) return false;
    else{
        if(adminAccount.password !== password) return false;
        return true;
    }
}