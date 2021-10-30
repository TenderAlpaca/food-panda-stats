import {EventEmitter, Injectable} from '@angular/core';
import {Order, PandaData, Restaurant} from "../models/panda-data.model";

@Injectable({
    providedIn: 'root'
})
export class OrderDataExtractorService {
    public orderDataChangeDetector = new EventEmitter<Restaurant[]>();
    private readonly restaurants: Map<string, Restaurant>;

    constructor() {
        this.restaurants = new Map<string, Restaurant>();
    }

    public logFile(jsonData: PandaData): void {
        jsonData.orders.forEach(order => {
            this.restaurants.has(order.restaurant_name)
                ? this.addOrderToRestaurant(this.restaurants, order)
                : this.addNewRestaurant(this.restaurants, order);
        });
        this.orderDataChangeDetector.next(this.orderValues());
    }

    private orderValues(): Restaurant[] {
        return [...this.restaurants.values()]
            .sort((a, b) => b.orders.length - a.orders.length)
            .map(restaurant => restaurant);
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

}
