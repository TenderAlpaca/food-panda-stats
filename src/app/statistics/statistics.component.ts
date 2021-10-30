import {Component, OnDestroy, OnInit} from '@angular/core';
import {Restaurant} from "../models/panda-data.model";
import {OrderDataExtractorService} from "../services/order-data-extractor.service";
import {Subscription} from "rxjs";

@Component({
    selector: 'app-statistics',
    templateUrl: './statistics.component.html',
    styleUrls: ['./statistics.component.scss']
})
export class StatisticsComponent implements OnInit, OnDestroy {
    public orderValues:  Restaurant[];
    private orderDataSub: Subscription;

    constructor(private dataExtractor: OrderDataExtractorService) {
    }

    ngOnInit(): void {
    this.orderDataSub = this.dataExtractor.orderDataChangeDetector.subscribe(
            (restaurants) => this.orderValues = restaurants
        );
    }

    ngOnDestroy() {
        this.orderDataSub.unsubscribe();
    }

}
