export class Recipices{
  name: string;
  completeName: string;
  src: string;
  description:string;

  constructor(name: string, completeName: string, description: string, src: string) {
    this.name = name;
    this.completeName = completeName;
    this.description = description;
    this.src = src;
  }
}
