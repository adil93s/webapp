import { AbstractModel } from "./AbstractModel";

export class Annonce extends AbstractModel {
    /**
     * Attributes
     */
    title?: string;
    description?: string;
    address?: string;
    mail?: string;
    date?: Date;

    constructor(annonce?: Partial<Annonce>) {
        super(annonce?.id);
        Object.assign(this, annonce);
    }

    static fromJSON(data: any) {
        const annonce = new Annonce({
            id: data?.id,
            title: data?.title,
            description: data?.description,
            address: data?.address,
            mail: data?.mail,
            date: new Date(data?.date),
        });

        return JSON.parse(JSON.stringify(annonce));
    }
}
