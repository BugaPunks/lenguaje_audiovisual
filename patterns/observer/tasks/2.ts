class Auction {
    item: string;
    currentBid: number = 0;
    highestBidder: string | null = null;

    constructor(item: string) {
        this.item = item;
    }

    makeBid(bidderName: string, amount: number) {
        if (amount > this.currentBid) {
            this.currentBid = amount;
            this.highestBidder = bidderName;
            console.log(`${bidderName} es el máximo postor con una oferta de ${amount}`);
        } else {
            console.log(`${bidderName}, tu oferta es demasiado baja.`);
        }
    }
}

const auctionItem = new Auction("Cuadro famoso");
auctionItem.makeBid("Carlos", 500);
auctionItem.makeBid("Ana", 450);

//==============SOLUCION=============//

// Interfaz Observer
interface BidObserver {
    update(bidder: string, amount: number): void;
}

class Auction {

    observers: BidObserver[] = [];

    item: string;
    currentBid: number = 0;
    highestBidder: string | null = null;

    constructor(item: string) {
        this.item = item;
    }

    register(observer: BidObserver) {
        this.observers.push(observer);
    }

    unregister(observer: BidObserver) {
    }

    notifyObservers(bidder: string, amount: number) {
        for (let observer of this.observers) {
            observer.update(bidder, amount);
        }
    }

    makeBid(bidder: string, amount: number) {

        if (amount > this.currentBid) {
            this.currentBid = amount;
            this.highestBidder = bidder;
            this.notifyObservers(bidder, amount);
        }
    }

}
class AuctionLogger implements BidObserver {

    update(bidder: string, amount: number) {
        console.log(`Nueva oferta de ${bidder} por $${amount}`);
    }

}
