export default function formatNum(number) {
    number.replace(/(\d{1,3})(?=((\d{3})*([^\d]|$)))/g, " $1 ");
}
