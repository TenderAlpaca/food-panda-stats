import {Component, OnInit} from '@angular/core';
import {OrderDataExtractorService} from "../services/order-data-extractor.service";
import {PandaData} from "../models/panda-data.model";

@Component({
    selector: 'app-panda-data-reader',
    templateUrl: './panda-data-reader.component.html',
    styleUrls: ['./panda-data-reader.component.scss']
})
export class PandaDataReaderComponent implements OnInit {
    fileName: any;
    constructor(private dataExtractor: OrderDataExtractorService) {
    }

    ngOnInit(): void {
    }

    public onFileChanged(event: any) {
        const fileReader = new FileReader();
        fileReader.readAsText(event.target.files[0], "UTF-8");
        this.fileName = event.target.files[0].name;
        fileReader.onload = (readerEvt) => {
            const str = readerEvt.target.result as string;

            let json = JSON.parse(str) as PandaData;
            this.dataExtractor.logFile(json);
        };
        fileReader.onerror = (error) => {
            console.log(error);
        };
    }
}
