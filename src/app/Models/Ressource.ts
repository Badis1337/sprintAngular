export class Ressource {
  constructor(public  id: number,
              public name: string,
              public lastname: string,
              public password: string,
              public username: string,
              public role: string,
              public rateSelling: number,
              public cost: number,
              public typeContrat: string,
              public seniority: number,
              public note: number,
              public cv?: string,
              public dateDebut?: Date,
              public dateFin?: Date,
              public type?: string,
              public specialty?: string,
              public businessSector?: string,
              public skills?: any[],
              public listemandate?: any[],
              public listeDemandesTimeOff?: any[],
              public picture?: string) {

  }

}
