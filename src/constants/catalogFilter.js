const manufacturer = ["Сlear-fit", "Diadora", "Hasttings", "Carbon-fitness", "Nordic Track"];

const power = ["12", "14", "16", "18", "20"];

const size = ["12", "14", "16", "18", "20"];

const weight = ["12", "14", "16", "18", "20"];

const speed = ["12", "14", "16", "18", "20"];

const angle = ["нет регулировки", "механическая", "электронная"];

import { data } from "./";
const compare = [data.productsItems[0], data.productsItems[1], data.productsItems[2]];

export default { manufacturer, power, size, weight, speed, angle, compare };
