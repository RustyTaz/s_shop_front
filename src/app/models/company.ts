export class Company {

  id!: number;
  companyname!: string;
  country!: string;
  description!: string;
  products!: string[];

  constructor(companyname: string, country: string, description: string) {
    this.companyname=companyname;
    this.country=country;
    this.description=description;
  }

}
