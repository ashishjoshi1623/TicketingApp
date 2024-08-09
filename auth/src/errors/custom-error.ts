export abstract class customError extends Error{
    // abstract property
    abstract statusCode : number;

    constructor(message: string){
        super(message);

        Object.setPrototypeOf(this,customError.prototype);
    }

    // abstract method with return type of array of objects having message and field(optional) properties
    abstract serializeErrors() : { message: string, field?: string}[];
}