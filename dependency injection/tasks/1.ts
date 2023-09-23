class EmailNotifier {
    sendEmail(receiver: string, subject: string, content: string) {
        console.log(`Email sent to ${receiver} with subject "${subject}": ${content}`);
    }
}

class MusicStore {
    notifier: EmailNotifier;

    constructor() {
        this.notifier = new EmailNotifier();
    }

    newAlbumRelease(email: string, artist: string, album: string) {
        this.notifier.sendEmail(email, "New Album Release", `The new album ${album} by ${artist} is now available!`);
    }
}

//============SOLUCION=================//
class MusicStore {
    notifier: EmailNotifier;

    constructor() {
        this.notifier = new EmailNotifier(); // Elimina esta línea
    }

    newAlbumRelease(email: string, artist: string, album: string) {
        this.notifier.sendEmail(email, "New Album Release", `The new album ${album} by ${artist} is now available!`);
    }
}
