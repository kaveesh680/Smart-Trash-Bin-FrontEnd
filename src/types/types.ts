export interface IUserLogInDetails {
    email: string
    password: string
}

export interface IUSerRegisterDetails {
    firstName: string
    lastName: string
    email: string
    password: string
}

export interface IDisposeDetails {
    id:string
    date:string
    numberOfBottles:number
    energy:string
    points:number
}

export interface ITrashBinDetails {
    id:string
    location:string
    status:boolean
}

export interface IUser {
    id:string
    name:string
    role:string
    area:string | null
}