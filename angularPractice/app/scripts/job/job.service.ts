import {Injectable} from "@angular/core";
import { Observable } from 'rxjs/Rx'; 

//@Injectable() specifies class is available to an injector for instantiation and an injector will display an error when trying to instantiate a class that is not marked as @Injectable()

@Injectable()

//CountryService exposes the getContacts() method that returns the data
export class JobService {
    getContacts() {
        return Promise.resolve
            (
            [
                { jobId: "1", jobTitle: ".Net Developer" },
                { jobId: "2", jobTitle: "Java Developer" },
                { jobId: "3",  jobTitle: "Oracle DBA"},
                { jobId: "4", jobTitle: "SQL DBA" }
            ]
            ); // takes values from country.contacts typescript file
    }
}