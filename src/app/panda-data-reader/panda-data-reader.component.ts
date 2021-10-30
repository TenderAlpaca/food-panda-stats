import {Component, OnInit} from '@angular/core';
import {Order, PandaData, Restaurant} from "../models/panda-data.model";

@Component({
    selector: 'app-panda-data-reader',
    templateUrl: './panda-data-reader.component.html',
    styleUrls: ['./panda-data-reader.component.scss']
})
export class PandaDataReaderComponent implements OnInit {
    restaurants = new Map<string, Restaurant>();
    total = 0;
    constructor() {
    }

    ngOnInit(): void {
    }

    public onFileChanged(event: any) {
        const fileReader = new FileReader();
        fileReader.readAsText(event.target.files[0], "UTF-8");
        fileReader.onload = this.logFile.bind(this);
        fileReader.onerror = (error) => {
            console.log(error);
        };
    }

    private logFile(event: Event): void {
        const str = (<FileReader>event.target).result as string;
        let json = JSON.parse(str) as PandaData;
        json.orders.forEach(order => {
            this.total += order.cart.total;
            this.restaurants.has(order.restaurant_name)
                ? this.addOrderToRestaurant(this.restaurants, order)
                : this.addNewRestaurant(this.restaurants, order);
        });
        console.log(this.restaurants);
    }

    private addOrderToRestaurant(restaurants: Map<string, Restaurant>, order: Order): void {
        const restaurant = restaurants.get(order.restaurant_name);
        restaurant!.orders.push(order);
        restaurant!.total += order.cart.total;
    }

    private addNewRestaurant(restaurants: Map<string, Restaurant>, order: Order): void {
        restaurants.set(order.restaurant_name, {
            name: order.restaurant_name,
            orders: [order],
            total: order.cart.total
        });
    }

    orderValues() {
        return [...this.restaurants.values()]
            .sort((a, b) => b.orders.length - a.orders.length)
            .map(restaurant => restaurant);
    }
}
