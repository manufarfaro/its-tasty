export class Recipe {
  public id: number;
  public title: string;
  public imageUrl: string;
  public difficulty: number;
  public description: string;

  constructor(
    id: number,
    title: string,
    imageUrl: string,
    difficulty: number,
    description: string
  ) {
    this.id = id;
    this.title = title;
    this.imageUrl = imageUrl;
    this.difficulty = difficulty;
    this.description = description;
  }
}
