class Journalist {
    name: string;
    articles: string[] = [];

    constructor(name: string) {
        this.name = name;
    }

    publishArticle(article: string) {
        this.articles.push(article);
        console.log(`El periodista ${this.name} ha publicado: ${article}`);
    }
}

class Reader {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    checkForNewArticles(journalist: Journalist) {
        const latestArticle = journalist.articles[journalist.articles.length - 1];
        console.log(`${this.name} ha leído el artículo: ${latestArticle}`);
    }
}

const journalistA = new Journalist('Juan');
const readerB = new Reader('Ana');

journalistA.publishArticle("Los beneficios de la programación");
readerB.checkForNewArticles(journalistA);

//=============SOLUCION=============//

class Publisher {
    private journalists: Journalist[] = [];

    // Método para suscribir a un lector (observador) a un periodista (sujeto).
    subscribe(journalist: Journalist, reader: Reader) {
        journalist.addObserver(reader);
        this.journalists.push(journalist);
    }

    // Método para publicar un artículo y notificar a los observadores.
    publishArticle(journalist: Journalist, article: string) {
        journalist.publishArticle(article);
        journalist.notifyObservers(article);
    }
}

class Journalist {
    name: string;
    articles: string[] = [];
    private observers: Reader[] = [];

    constructor(name: string) {
        this.name = name;
    }

    addObserver(observer: Reader) {
        this.observers.push(observer);
    }

    notifyObservers(article: string) {
        for (const observer of this.observers) {
            observer.checkForNewArticle(this, article);
        }
    }

    publishArticle(article: string) {
        this.articles.push(article);
        console.log(`El periodista ${this.name} ha publicado: ${article}`);
    }
}

class Reader {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    checkForNewArticle(journalist: Journalist, article: string) {
        console.log(`${this.name} ha leído el artículo: ${article} del periodista ${journalist.name}`);
    }
}