export class Pokemon {
    constructor(data) {
        this.id = data.id || ''
        this.name = data.name
        this.img = data.img
        this.creatorId = data.creatorId
    }
}