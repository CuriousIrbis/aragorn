export default interface IAdminStore{
    isLogged: boolean
    setIsLogged: (status: boolean) => void
}