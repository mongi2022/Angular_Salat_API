export class Item {
  id:number;
  date_for: string;
  fajr: string;
  dhuhr:string
  asr: string;
  isha: string;
  maghrib:string
  shurooq:string
  constructor(
    id:number,
    date_for: string,
    fajr: string,
    dhuhr:string,
    asr: string,
    isha: string,
    maghrib:string,
    shurooq:string

  ) {
    this.id = id;
    this.date_for = date_for;
    this.fajr = fajr;
    this.dhuhr=dhuhr
    this.asr = asr;
    this.isha = isha;
    this.maghrib=maghrib
    this.shurooq=shurooq

  }
}
