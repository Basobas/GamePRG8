interface Observable {
    subscribe(o: Observer): void;
    unsubscribe(): void;
}