import { IconDefinition } from "@fortawesome/free-solid-svg-icons";

export default class Data {
  year: string;
  img: string;
  iconName: IconDefinition;
  name: string;
  url: string;
  description: string;
  icon: IconDefinition;
  gitHub: string;
  origin: string;

  constructor(
    year: string,
    img: string,
    iconName: IconDefinition,
    name: string,
    url: string,
    description: string,
    icon: IconDefinition,
    gitHub: string,
    origin: string
  ) {
    this.year = year;
    this.img = img;
    this.iconName = iconName;
    this.name = name;
    this.url = url;
    this.description = description;
    this.icon = icon;
    this.gitHub = gitHub;
    this.origin = origin;
  }
}
