import { TypeOfAddress } from "../Models/typeOfAddress";
import { TypeOfDegree } from "../Models/typeOfDegree";

export interface Educations 
{

    receivedDegreeName: string;
    receivedCollegeName: string;
    receivedYearOfPassing: string;
    receivedTypeofDegree: TypeOfAddress;
    receivedPrimary: boolean;
    
}