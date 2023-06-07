export default function convertDate(inputFormat) {
  let splitDate = inputFormat.split('-');
  return splitDate[2] + '/' + splitDate[1] + '/' + splitDate[0];
}