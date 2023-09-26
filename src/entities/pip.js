// Definerer en klasse for at kunne oprette objekter med
// samme struktur på tværs af objekter.
export class Pip {
    constructor(content, created, priority,) {
        this.isCompleted = false;
        this.content = content;
        this.created = created;
        this.priority = priority;
    }

}